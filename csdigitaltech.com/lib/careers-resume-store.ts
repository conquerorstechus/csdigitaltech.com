import { get, head, put } from '@vercel/blob'
import crypto from 'crypto'
import fs from 'fs/promises'
import path from 'path'

const TTL_MS = 7 * 24 * 60 * 60 * 1000

const STORE_DIR_CANDIDATES = [
  path.join(process.cwd(), 'public', 'uploads', 'careers'),
  path.join(process.cwd(), '.careers-resumes'),
  path.join(process.env.TMPDIR || process.env.TEMP || '/tmp', 'careers-resumes')
]

type ResumeMeta = {
  fileName: string
  mime: string
  storedFileName: string
  storeDir: string
  expires: number
  dataBase64?: string
  blobUrl?: string
  blobPathname?: string
}

type BlobResumeMeta = {
  fileName: string
  mime: string
  expires: number
  blobUrl: string
  blobPathname: string
}

function isBlobStorageEnabled() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN)
}

export function canPersistCareersResume() {
  return !process.env.VERCEL || isBlobStorageEnabled()
}

export function getStoredResumeAccessUrl(stored: StoredCareersResume, origin: string) {
  const reference =
    stored.publicUrl.startsWith('http://') || stored.publicUrl.startsWith('https://')
      ? stored.publicUrl
      : stored.downloadUrl

  if (reference.startsWith('http://') || reference.startsWith('https://')) {
    return reference
  }

  const resumePath = reference.startsWith('/') ? reference : `/${reference}`
  return `${origin.replace(/\/$/, '')}${resumePath}`
}

function getExtension(fileName: string) {
  const ext = path.extname(path.basename(fileName)).toLowerCase()
  if (ext === '.pdf' || ext === '.doc' || ext === '.docx') {
    return ext
  }
  return '.pdf'
}

function getMimeType(fileName: string, mime?: string) {
  if (mime) return mime

  const ext = getExtension(fileName)
  if (ext === '.pdf') return 'application/pdf'
  if (ext === '.doc') return 'application/msword'
  if (ext === '.docx') {
    return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  }

  return 'application/octet-stream'
}

function getPublicUrl(storeDir: string, storedFileName: string) {
  const publicRoot = path.join(process.cwd(), 'public')
  const absoluteFilePath = path.join(storeDir, storedFileName)

  if (absoluteFilePath.startsWith(publicRoot)) {
    const relative = path.relative(publicRoot, absoluteFilePath).replace(/\\/g, '/')
    return `/${relative}`
  }

  return `/api/careers/resume/file/${storedFileName}`
}

export type StoredCareersResume = {
  token: string
  publicUrl: string
  downloadUrl: string
}

export function getCareersResumeViewPath(token: string) {
  return `/careers/resume/view/${token}`
}

export function getCareersResumeApiPath(token: string) {
  return `/api/careers/resume/${token}`
}

function latin1HeaderValue(value: string) {
  return /^[\x20-\x7E]+$/.test(value)
}

export function createCareersResumeDownload(resume: { data: Buffer; fileName: string; mime: string }) {
  const bytes = new Uint8Array(resume.data.byteLength)
  bytes.set(resume.data)

  const fileName = String(resume.fileName || 'resume.pdf').replace(/[\r\n]/g, ' ').trim() || 'resume.pdf'
  const asciiName = fileName.replace(/[^\x20-\x7E]/g, '_').replace(/["\\]/g, '_') || 'resume.pdf'
  const encodedName = encodeURIComponent(fileName).replace(/['()*]/g, (char) => {
    return `%${char.charCodeAt(0).toString(16).toUpperCase()}`
  })
  const mime = latin1HeaderValue(String(resume.mime || '')) ? resume.mime : 'application/octet-stream'

  return {
    body: bytes,
    headers: {
      'Content-Type': mime,
      'Content-Length': String(bytes.byteLength),
      'Content-Disposition': `inline; filename="${asciiName}"; filename*=UTF-8''${encodedName}`,
      'Cache-Control': 'private, no-store',
      'X-Content-Type-Options': 'nosniff'
    }
  }
}

async function readBlobStream(stream: ReadableStream<Uint8Array> | AsyncIterable<Uint8Array>) {
  if (typeof (stream as ReadableStream<Uint8Array>).getReader === 'function') {
    return Buffer.from(await new Response(stream as ReadableStream<Uint8Array>).arrayBuffer())
  }

  const chunks: Buffer[] = []
  for await (const chunk of stream as AsyncIterable<Uint8Array>) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  }

  return Buffer.concat(chunks)
}

async function getWritableStoreDir() {
  for (const dir of STORE_DIR_CANDIDATES) {
    try {
      await fs.mkdir(dir, { recursive: true })
      const testFile = path.join(dir, '.write-test')
      await fs.writeFile(testFile, 'ok')
      await fs.rm(testFile, { force: true })
      return dir
    } catch {
      continue
    }
  }

  throw new Error('No writable resume storage directory available')
}

async function storeCareersResumeInBlob(
  token: string,
  base64: string,
  fileName: string,
  mime: string
): Promise<StoredCareersResume> {
  const safeName = path.basename(fileName) || 'resume.pdf'
  const extension = getExtension(safeName)
  const contentType = getMimeType(safeName, mime)
  const buffer = Buffer.from(base64, 'base64')
  const blobPathname = `careers/${token}${extension}`
  const metaPathname = `careers/meta/${token}.json`

  const fileBlob = await put(blobPathname, buffer, {
    access: 'public',
    contentType,
    addRandomSuffix: false,
    allowOverwrite: true
  })

  const blobMeta: BlobResumeMeta = {
    fileName: safeName,
    mime: contentType,
    expires: Date.now() + TTL_MS,
    blobUrl: fileBlob.url,
    blobPathname
  }

  await put(metaPathname, JSON.stringify(blobMeta), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true
  })

  return {
    token,
    publicUrl: fileBlob.url,
    downloadUrl: getCareersResumeApiPath(token)
  }
}

async function getCareersResumeFromBlob(token: string) {
  try {
    const metaResult = await get(`careers/meta/${token}.json`, { access: 'public' })

    if (!metaResult || metaResult.statusCode !== 200 || !metaResult.stream) {
      return null
    }

    const meta = JSON.parse((await readBlobStream(metaResult.stream)).toString('utf8')) as BlobResumeMeta

    if (!meta.expires || Date.now() > meta.expires || !meta.blobPathname) {
      return null
    }

    const fileResult = await get(meta.blobPathname, { access: 'public' })
    if (!fileResult || fileResult.statusCode !== 200 || !fileResult.stream) {
      return null
    }

    return {
      data: await readBlobStream(fileResult.stream),
      fileName: meta.fileName,
      mime: meta.mime || 'application/pdf',
      publicUrl: meta.blobUrl
    }
  } catch (error) {
    console.error('Careers resume blob lookup failed:', error)
    return null
  }
}

export async function storeCareersResume(
  base64: string,
  fileName: string,
  mime = 'application/pdf'
): Promise<StoredCareersResume> {
  const token = crypto.randomBytes(24).toString('hex')

  if (isBlobStorageEnabled()) {
    try {
      return await storeCareersResumeInBlob(token, base64, fileName, mime)
    } catch (error) {
      console.error('Careers resume blob storage failed, falling back to local storage:', error)
      if (process.env.VERCEL) {
        throw error
      }
    }
  }

  const safeName = path.basename(fileName) || 'resume.pdf'
  const storedFileName = `${token}${getExtension(safeName)}`
  const storeDir = await getWritableStoreDir()
  const filePath = path.join(storeDir, storedFileName)

  await fs.writeFile(filePath, Buffer.from(base64, 'base64'))

  const meta: ResumeMeta = {
    fileName: safeName,
    mime: getMimeType(safeName, mime),
    storedFileName,
    storeDir,
    expires: Date.now() + TTL_MS,
    dataBase64: base64
  }

  await fs.writeFile(path.join(storeDir, `${token}.meta.json`), JSON.stringify(meta))

  const apiPath = getCareersResumeApiPath(token)

  return {
    token,
    publicUrl: getPublicUrl(storeDir, storedFileName),
    downloadUrl: apiPath
  }
}

async function readResumeMeta(token: string) {
  for (const storeDir of STORE_DIR_CANDIDATES) {
    const metaPath = path.join(storeDir, `${token}.meta.json`)
    try {
      const meta = JSON.parse(await fs.readFile(metaPath, 'utf8')) as ResumeMeta
      return { meta, metaPath, storeDir }
    } catch {
      continue
    }
  }

  return null
}

export async function getCareersResume(token: string) {
  if (!/^[a-f0-9]{48}$/.test(token)) {
    return null
  }

  if (isBlobStorageEnabled()) {
    const blobResume = await getCareersResumeFromBlob(token)
    if (blobResume) {
      return blobResume
    }
  }

  const located = await readResumeMeta(token)
  if (!located) return null

  const { meta, metaPath, storeDir } = located

  try {
    if (!meta.expires || Date.now() > meta.expires) {
      await fs.rm(path.join(storeDir, meta.storedFileName), { force: true }).catch(() => undefined)
      await fs.rm(metaPath, { force: true }).catch(() => undefined)
      return null
    }

    if (meta.blobUrl) {
      try {
        const blobInfo = await head(meta.blobUrl)
        if (blobInfo) {
          const fileResponse = await fetch(meta.blobUrl)
          if (fileResponse.ok) {
            const data = Buffer.from(await fileResponse.arrayBuffer())
            return {
              data,
              fileName: meta.fileName,
              mime: meta.mime || 'application/pdf',
              publicUrl: meta.blobUrl
            }
          }
        }
      } catch {
        // Fall through to local file lookup.
      }
    }

    let data: Buffer

    try {
      data = await fs.readFile(path.join(storeDir, meta.storedFileName))
    } catch {
      if (!meta.dataBase64) {
        return null
      }

      data = Buffer.from(meta.dataBase64, 'base64')
    }

    return {
      data,
      fileName: meta.fileName,
      mime: meta.mime || 'application/pdf',
      publicUrl: getPublicUrl(storeDir, meta.storedFileName)
    }
  } catch {
    return null
  }
}

export async function getCareersResumeByStoredFileName(storedFileName: string) {
  if (!/^[a-f0-9]{48}\.(pdf|doc|docx)$/i.test(storedFileName)) {
    return null
  }

  const token = storedFileName.split('.')[0]
  return getCareersResume(token)
}
