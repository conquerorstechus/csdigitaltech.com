/**
 * One-time export of every published Opinly post into Markdown.
 *
 * Usage (from csdigitaltech.com):
 *   npx tsx scripts/export-opinly.ts
 *
 * Writes content/blog/<slug>.md and downloads images into public/blog/.
 * Opinly stays in the app until the markdown blog is confirmed.
 */
import { createOpinlyClient, type ContentNode, type FullPost, type Post } from '@opinly/backend'
import { renderToHtml } from '@opinly/shared'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const contentDir = path.join(root, 'content', 'blog')
const publicDir = path.join(root, 'public', 'blog')
const CDN_FALLBACK = 'qjV-Vnn6mIXlr2x3a1dgQ'

type Faq = { question: string; answer: string }

type PostFailure = { slug: string; error: string }
type MissingFields = { slug: string; fields: string[] }
type ImageFailure = { slug: string; url: string; error: string }

function loadEnvFile(filename: string) {
  const filePath = path.join(root, filename)
  if (!fs.existsSync(filePath)) return

  const text = fs.readFileSync(filePath, 'utf8')
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    let value = trimmed.slice(eq + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    if (process.env[key] === undefined) process.env[key] = value
  }
}

function safeSlug(slug: string): string {
  const trimmed = slug.trim()
  if (!trimmed || trimmed === '.' || trimmed === '..' || /[\\/]/.test(trimmed)) {
    throw new Error(`Refusing unsafe slug "${slug}"`)
  }
  return trimmed
}

function cdnPrefix(): string {
  const namespace = process.env.OPINLY_CDN_NAMESPACE?.trim() || CDN_FALLBACK
  const domain = (process.env.OPINLY_CDN_DOMAIN || 'https://cdn.opinly.ai').replace(/\/$/, '')
  return `${domain}/${namespace}`
}

function imageCdnUrl(fileKey: string): string {
  const prefix = cdnPrefix().replace(/\/$/, '')
  const key = fileKey.replace(/^\//, '')
  return `${prefix}/${key}`
}

function createTurndown(): TurndownService {
  const turndown = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
    emDelimiter: '*',
  })
  turndown.use(gfm)
  turndown.remove(['script', 'style'])
  return turndown
}

function walkImages(node: ContentNode | undefined, fileKeys: Set<string>, absoluteSrcs: Set<string>) {
  if (!node) return
  if (node.type === 'image') {
    const fileKey = node.attrs?.fileKey
    const src = node.attrs?.src
    if (typeof fileKey === 'string' && fileKey.trim()) fileKeys.add(fileKey.trim())
    if (typeof src === 'string' && /^https?:\/\//i.test(src)) absoluteSrcs.add(src)
  }
  for (const child of node.content ?? []) walkImages(child, fileKeys, absoluteSrcs)
}

function extensionFromType(contentType: string | null): string | null {
  const type = contentType?.split(';')[0].trim().toLowerCase() ?? ''
  const map: Record<string, string> = {
    'image/jpeg': '.jpg',
    'image/jpg': '.jpg',
    'image/png': '.png',
    'image/webp': '.webp',
    'image/gif': '.gif',
    'image/svg+xml': '.svg',
    'image/avif': '.avif',
    'image/x-icon': '.ico',
  }
  return map[type] ?? null
}

function extensionFromUrl(url: string): string | null {
  try {
    const ext = path.extname(new URL(url).pathname).toLowerCase()
    if (/^\.(jpe?g|png|webp|gif|svg|avif|ico)$/.test(ext)) return ext === '.jpeg' ? '.jpg' : ext
  } catch {
    return null
  }
  return null
}

function sniffExtension(buffer: Buffer): string | null {
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) return '.jpg'
  if (buffer.length >= 8 && buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47) {
    return '.png'
  }
  if (buffer.length >= 6) {
    const gif = buffer.toString('ascii', 0, 6)
    if (gif === 'GIF87a' || gif === 'GIF89a') return '.gif'
  }
  if (buffer.length >= 12 && buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP') {
    return '.webp'
  }
  const head = buffer.toString('utf8', 0, 200).trimStart().toLowerCase()
  if (head.startsWith('<svg') || head.startsWith('<?xml')) return '.svg'
  return null
}

function urlVariants(url: string): string[] {
  const variants = new Set<string>([url, url.replace(/&/g, '&amp;')])
  try {
    variants.add(encodeURI(url))
    variants.add(decodeURI(url))
  } catch {
    // keep the raw url
  }
  return [...variants]
}

function rewriteUrls(markdown: string, urlToLocal: Map<string, string>): string {
  let output = markdown
  for (const [remote, local] of urlToLocal) {
    for (const variant of urlVariants(remote)) {
      output = output.split(variant).join(local)
    }
  }
  return output
}

function markdownImageUrls(markdown: string): string[] {
  const urls = new Set<string>()
  const markdownImages = /!\[[^\]]*]\((https?:\/\/[^)\s]+)/g
  const htmlImages = /<img\b[^>]*\bsrc=["'](https?:\/\/[^"']+)["']/gi
  for (const match of markdown.matchAll(markdownImages)) urls.add(match[1])
  for (const match of markdown.matchAll(htmlImages)) urls.add(match[1])
  return [...urls]
}

async function downloadImage(url: string, filenameBase: string): Promise<string> {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  const contentType = response.headers.get('content-type')
  const type = contentType?.split(';')[0].trim().toLowerCase() ?? ''
  if (type.startsWith('text/')) throw new Error(`unexpected content-type ${type}`)

  const buffer = Buffer.from(await response.arrayBuffer())
  if (buffer.length === 0) throw new Error('empty response')

  const ext = extensionFromType(contentType) || sniffExtension(buffer) || extensionFromUrl(url) || '.img'
  const filename = `${filenameBase}${ext}`
  fs.mkdirSync(publicDir, { recursive: true })
  fs.writeFileSync(path.join(publicDir, filename), buffer)
  return `/blog/${filename}`
}

function asFaqs(value: unknown): Faq[] {
  if (!Array.isArray(value)) return []
  const faqs: Faq[] = []
  for (const item of value) {
    if (!item || typeof item !== 'object') continue
    const question = 'question' in item && typeof item.question === 'string' ? item.question.trim() : ''
    const answer = 'answer' in item && typeof item.answer === 'string' ? item.answer.trim() : ''
    if (question && answer) faqs.push({ question, answer })
  }
  return faqs
}

async function listAllPosts(client: ReturnType<typeof createOpinlyClient>): Promise<Post[]> {
  const posts: Post[] = []
  const seenCursors = new Set<string>()
  let cursor: string | undefined

  for (let page = 0; page < 100; page += 1) {
    const result = await client.posts({ limit: 100, sort: 'newest', cursor })
    posts.push(...result.data)
    if (!result.has_more || !result.next_cursor || seenCursors.has(result.next_cursor)) break
    seenCursors.add(result.next_cursor)
    cursor = result.next_cursor
  }

  return posts
}

async function main() {
  loadEnvFile('.env.local')
  loadEnvFile('.env')

  const apiKey = process.env.OPINLY_API_KEY?.trim()
  if (!apiKey) {
    console.error('OPINLY_API_KEY is not set. Add it to .env.local and run this script again.')
    process.exit(1)
  }

  const url = process.env.OPINLY_API_URL?.trim() || undefined
  const client = createOpinlyClient({ apiKey, ...(url ? { url } : {}) })
  const turndown = createTurndown()

  const listed = await listAllPosts(client)
  const bySlug = new Map<string, Post>()
  for (const post of listed) {
    if (post.slug) bySlug.set(post.slug, post)
  }

  const routes = await client.routes()
  for (const route of routes) {
    if (route.type === 'post' && route.slug && !bySlug.has(route.slug)) {
      bySlug.set(route.slug, {
        slug: route.slug,
        title: '',
        description: '',
        firstPublishedAt: '',
        lastPublishedAt: route.lastModified,
        image: null,
        category: null,
        author: null,
        tags: [],
      })
    }
  }

  const slugs = [...bySlug.keys()]
  const failures: PostFailure[] = []
  const missing: MissingFields[] = []
  const imageFailures: ImageFailure[] = []
  const exported: string[] = []
  const urlToLocal = new Map<string, string>()

  fs.mkdirSync(contentDir, { recursive: true })
  fs.mkdirSync(publicDir, { recursive: true })

  for (const slug of slugs) {
    const card = bySlug.get(slug)
    try {
      const post = await client.post(slug)
      if (!post) {
        failures.push({ slug, error: 'Opinly returned no post' })
        continue
      }
      const written = await writePost(post, card, turndown, urlToLocal, imageFailures)
      exported.push(written.slug)
      if (written.missing.length) missing.push({ slug: written.slug, fields: written.missing })
      console.log(`exported ${written.slug}`)
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      failures.push({ slug, error: message })
      console.error(`failed ${slug}: ${message}`)
    }
  }

  console.log('')
  console.log('Export summary')
  console.log(`Posts found: ${slugs.length}`)
  console.log(`Posts exported: ${exported.length}`)
  console.log(`Failures: ${failures.length}`)
  for (const failure of failures) {
    console.log(`  - ${failure.slug}: ${failure.error}`)
  }
  console.log(`Posts with missing fields: ${missing.length}`)
  for (const item of missing) {
    console.log(`  - ${item.slug}: ${item.fields.join(', ')}`)
  }
  console.log(`Image download failures: ${imageFailures.length}`)
  for (const failure of imageFailures) {
    console.log(`  - ${failure.slug}: ${failure.url} (${failure.error})`)
  }

  if (failures.length) process.exit(1)
}

async function writePost(
  post: FullPost,
  card: Post | undefined,
  turndown: TurndownService,
  urlToLocal: Map<string, string>,
  imageFailures: ImageFailure[],
): Promise<{ slug: string; missing: string[] }> {
  const slug = safeSlug(post.slug || card?.slug || '')
  const missing: string[] = []

  const title = post.title?.trim() || card?.title?.trim() || ''
  const description = post.description?.trim() || post.metaDescription?.trim() || card?.description?.trim() || ''
  const date = post.firstPublishedAt?.trim() || card?.firstPublishedAt?.trim() || ''
  const updated = post.modifiedAt?.trim() || card?.lastPublishedAt?.trim() || ''
  const category = post.category?.name?.trim() || card?.category?.name?.trim() || ''
  const author = post.author?.name?.trim() || card?.author?.name?.trim() || ''
  const tags = (post.tags?.length ? post.tags : card?.tags ?? []).map((tag) => tag.name).filter(Boolean)
  const faqs = asFaqs(post.faqs)

  if (!title) missing.push('title')
  if (!description) missing.push('description')
  if (!date) missing.push('date')
  if (!updated) missing.push('updated')
  if (!category) missing.push('category')
  if (!author) missing.push('author')

  const fileKeys = new Set<string>()
  const absoluteSrcs = new Set<string>()
  const heroKey = post.titleFile?.fileKey?.trim() || card?.image?.fileKey?.trim() || ''
  if (heroKey) fileKeys.add(heroKey)
  for (const image of post.images ?? []) {
    if (image.fileKey?.trim()) fileKeys.add(image.fileKey.trim())
  }
  walkImages(post.content, fileKeys, absoluteSrcs)

  const heroUrl = heroKey ? imageCdnUrl(heroKey) : ''
  let image = ''
  if (heroUrl) {
    image = await localizeImage(slug, heroUrl, `${slug}-cover`, urlToLocal, imageFailures)
  } else {
    missing.push('image')
  }

  const html = post.content
    ? renderToHtml(post.content, { config: { imagesPrefix: cdnPrefix() } })
    : ''
  if (!html.trim()) missing.push('content')

  let markdown = html.trim() ? turndown.turndown(html).trim() : ''

  let imageIndex = 1
  for (const fileKey of fileKeys) {
    const remote = imageCdnUrl(fileKey)
    if (urlToLocal.has(remote)) continue
    await localizeImage(slug, remote, `${slug}-img-${imageIndex}`, urlToLocal, imageFailures)
    imageIndex += 1
  }
  for (const remote of absoluteSrcs) {
    if (urlToLocal.has(remote)) continue
    await localizeImage(slug, remote, `${slug}-img-${imageIndex}`, urlToLocal, imageFailures)
    imageIndex += 1
  }

  markdown = rewriteUrls(markdown, urlToLocal)
  for (const remote of markdownImageUrls(markdown)) {
    if (urlToLocal.has(remote)) continue
    await localizeImage(slug, remote, `${slug}-img-${imageIndex}`, urlToLocal, imageFailures)
    imageIndex += 1
  }
  markdown = rewriteUrls(markdown, urlToLocal)

  const data: Record<string, unknown> = {
    title,
    description,
    slug,
    date,
    updated,
    image,
    category,
    author,
  }
  if (tags.length) data.tags = tags
  if (faqs.length) data.faqs = faqs

  const file = matter.stringify(markdown ? `${markdown}\n` : '', data)
  fs.writeFileSync(path.join(contentDir, `${slug}.md`), file)
  return { slug, missing }
}

async function localizeImage(
  slug: string,
  remote: string,
  filenameBase: string,
  urlToLocal: Map<string, string>,
  imageFailures: ImageFailure[],
): Promise<string> {
  const cached = urlToLocal.get(remote)
  if (cached) return cached
  try {
    const local = await downloadImage(remote, filenameBase)
    urlToLocal.set(remote, local)
    return local
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    imageFailures.push({ slug, url: remote, error: message })
    return remote
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})

declare module 'turndown-plugin-gfm' {
  import type TurndownService from 'turndown'
  export const gfm: TurndownService.Plugin
}
