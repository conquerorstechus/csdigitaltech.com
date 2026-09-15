import crypto from 'crypto'
import fs from 'fs/promises'
import path from 'path'

const STORE_DIR = path.join(process.cwd(), 'public', 'uploads', 'careers')
const TTL_MS = 7 * 24 * 60 * 60 * 1000

type ResumeMeta = {
  fileName: string
  mime: string
  storedFileName: string
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

export type StoredCareersResume = {
  token: string
  publicUrl: string
}

export async function storeCareersResume(
  base64: string,
  fileName: string,
  mime = 'application/pdf'
): Promise<StoredCareersResume> {
  const token = crypto.randomBytes(24).toString('hex')
  const safeName = path.basename(fileName) || 'resume.pdf'
  const storedFileName = `${token}${getExtension(safeName)}`
  const filePath = path.join(STORE_DIR, storedFileName)

  await fs.mkdir(STORE_DIR, { recursive: true })
  await fs.writeFile(filePath, Buffer.from(base64, 'base64'))

  const meta: ResumeMeta = {
    fileName: safeName,
    mime: getMimeType(safeName, mime),
    storedFileName,
    expires: Date.now() + TTL_MS
  }

  await fs.writeFile(path.join(STORE_DIR, `${token}.meta.json`), JSON.stringify(meta))

  return {
    token,
    publicUrl: `/uploads/careers/${storedFileName}`
  }
}

export async function getCareersResume(token: string) {
  if (!/^[a-f0-9]{48}$/.test(token)) {
    return null
  }

  const metaPath = path.join(STORE_DIR, `${token}.meta.json`)

  try {
    const meta = JSON.parse(await fs.readFile(metaPath, 'utf8')) as ResumeMeta

    if (!meta.expires || Date.now() > meta.expires) {
      await fs.rm(path.join(STORE_DIR, meta.storedFileName), { force: true }).catch(() => undefined)
      await fs.rm(metaPath, { force: true }).catch(() => undefined)
      return null
    }

    const data = await fs.readFile(path.join(STORE_DIR, meta.storedFileName))

    return {
      data,
      fileName: meta.fileName,
      mime: meta.mime || 'application/pdf',
      publicUrl: `/uploads/careers/${meta.storedFileName}`
    }
  } catch {
    return null
  }
}
