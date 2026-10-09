import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export type BlogFaq = {
  question: string
  answer: string
}

export type BlogPost = {
  title: string
  description: string
  slug: string
  date: string
  updated: string
  image: string
  category: string
  author: string
  tags: string[]
  faqs: BlogFaq[]
  content: string
}

const contentDir = path.join(process.cwd(), 'content', 'blog')

let cachedPosts: BlogPost[] | null = null

export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.OPINLY_SITE_URL ||
    'https://csdigitaltech.com'
  return raw.replace(/\/$/, '')
}

export function absoluteUrl(pathnameOrUrl: string): string {
  if (!pathnameOrUrl) return ''
  if (/^https?:\/\//i.test(pathnameOrUrl)) return pathnameOrUrl
  const pathname = pathnameOrUrl.startsWith('/') ? pathnameOrUrl : `/${pathnameOrUrl}`
  return `${getSiteUrl()}${pathname}`
}

export function postCanonical(slug: string): string {
  return `${getSiteUrl()}/blog/${slug}`
}

export function formatBlogDate(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
}

export function readingTimeMinutes(markdown: string): number {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

function asString(value: unknown): string {
  if (typeof value === 'string') return value.trim()
  if (typeof value === 'number') return String(value)
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString()
  return ''
}

function asTags(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  return value
    .map((item) => (typeof item === 'string' ? item.trim() : ''))
    .filter(Boolean)
}

function asFaqs(value: unknown): BlogFaq[] {
  if (!Array.isArray(value)) return []
  const faqs: BlogFaq[] = []
  for (const item of value) {
    if (!item || typeof item !== 'object') continue
    const question = 'question' in item ? asString(item.question) : ''
    const answer = 'answer' in item ? asString(item.answer) : ''
    if (question && answer) faqs.push({ question, answer })
  }
  return faqs
}

function readPostFile(filePath: string): BlogPost | null {
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const filenameSlug = path.basename(filePath, path.extname(filePath))
  const slug = asString(data.slug) || filenameSlug
  if (!slug) return null

  return {
    title: asString(data.title),
    description: asString(data.description),
    slug,
    date: asString(data.date),
    updated: asString(data.updated) || asString(data.date),
    image: asString(data.image),
    category: asString(data.category),
    author: asString(data.author),
    tags: asTags(data.tags),
    faqs: asFaqs(data.faqs),
    content: content.trim(),
  }
}

function readPosts(): BlogPost[] {
  if (!fs.existsSync(contentDir)) return []

  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => path.join(contentDir, file))

  const posts = files
    .map((file) => readPostFile(file))
    .filter((post): post is BlogPost => post !== null)

  posts.sort((a, b) => {
    const aTime = Date.parse(a.date) || 0
    const bTime = Date.parse(b.date) || 0
    if (aTime !== bTime) return bTime - aTime
    return a.title.localeCompare(b.title)
  })

  return posts
}

export function getAllPosts(): BlogPost[] {
  if (process.env.NODE_ENV === 'production' && cachedPosts) return cachedPosts
  const posts = readPosts()
  if (process.env.NODE_ENV === 'production') cachedPosts = posts
  return posts
}

export function getPost(slug: string): BlogPost | null {
  return getAllPosts().find((post) => post.slug === slug) ?? null
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug)
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  return getAllPosts()
    .filter((post) => post.slug !== slug)
    .slice(0, limit)
}
