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

export async function storeCareersResume(
  base64: string,
  fileName: string,
  mime = 'application/pdf'
): Promise<StoredCareersResume> {
  const token = crypto.randomBytes(24).toString('hex')
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
    expires: Date.now() + TTL_MS
  }

  await fs.writeFile(path.join(storeDir, `${token}.meta.json`), JSON.stringify(meta))

  return {
    token,
    publicUrl: getPublicUrl(storeDir, storedFileName)
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

  const located = await readResumeMeta(token)
  if (!located) return null

  const { meta, metaPath, storeDir } = located

  try {
    if (!meta.expires || Date.now() > meta.expires) {
      await fs.rm(path.join(storeDir, meta.storedFileName), { force: true }).catch(() => undefined)
      await fs.rm(metaPath, { force: true }).catch(() => undefined)
      return null
    }

    const data = await fs.readFile(path.join(storeDir, meta.storedFileName))

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
