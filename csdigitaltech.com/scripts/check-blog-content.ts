/**
 * Ask Gemini to review every post that appears on the blog content page.
 *
 * Usage (from csdigitaltech.com):
 *   npx tsx scripts/check-blog-content.ts
 *
 * Requires GEMINI_API_KEY. Optional GEMINI_MODEL is tried first, then
 * gemini-3.8-flash and gemini-3.5-flash-lite.
 */
import { ApiError, GoogleGenAI } from '@google/genai'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const blogDir = path.join(root, 'content', 'blog')
const publicBlogDir = path.join(root, 'public', 'blog')
const fallbackModels = ['gemini-3.8-flash', 'gemini-3.5-flash-lite']
const retryDelaysMs = [5_000, 10_000, 20_000]

type PostDigest = {
  slug: string
  title: string
  description: string
  date: string
  category: string
  image: string
  imageExists: boolean
  h1: string[]
  h2: string[]
  wordCount: number
  opening: string
}

type PostCheck = {
  slug: string
  ok: boolean
  issues: string[]
}

function fail(message: string): never {
  console.error(message)
  process.exit(1)
}

function loadEnvFile(filename: string) {
  const filePath = path.join(root, filename)
  if (!fs.existsSync(filePath)) return

  for (const line of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
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

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

function headings(markdown: string, level: 1 | 2): string[] {
  const pattern = level === 1 ? /^# [^\s#].*$/gm : /^## .+$/gm
  return markdown.match(pattern) ?? []
}

function wordCount(markdown: string): number {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`~-]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

function readPosts(): PostDigest[] {
  if (!fs.existsSync(blogDir)) fail(`Blog folder not found: ${blogDir}`)

  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith('.md'))
    .sort()
    .map((file) => {
      const raw = fs.readFileSync(path.join(blogDir, file), 'utf8')
      const { data, content } = matter(raw)
      const body = content.trim()
      const slug = asString(data.slug) || file.replace(/\.md$/, '')
      const image = asString(data.image)
      const imageFile = image.replace(/^\/blog\//, '')
      return {
        slug,
        title: asString(data.title),
        description: asString(data.description),
        date: asString(data.date),
        category: asString(data.category),
        image,
        imageExists: Boolean(imageFile) && fs.existsSync(path.join(publicBlogDir, imageFile)),
        h1: headings(body, 1),
        h2: headings(body, 2).slice(0, 8),
        wordCount: wordCount(body),
        opening: body.replace(/\s+/g, ' ').slice(0, 500),
      }
    })
}

function errorText(error: unknown): string {
  if (error instanceof ApiError) return `${error.status ?? ''} ${error.message}`.trim()
  return error instanceof Error ? error.message : String(error)
}

function shouldRetry(error: unknown): boolean {
  const status = error instanceof ApiError ? error.status : undefined
  const text = errorText(error).toLowerCase()
  return (
    status === 408 ||
    status === 429 ||
    status === 500 ||
    status === 502 ||
    status === 503 ||
    status === 504 ||
    /unavailable|deadline|timeout|quota|rate/.test(text)
  )
}

function modelCandidates(): string[] {
  const preferred = process.env.GEMINI_MODEL?.trim()
  const models = preferred ? [preferred, ...fallbackModels] : [...fallbackModels]
  return [...new Set(models)]
}

async function generateText(client: GoogleGenAI, model: string, prompt: string): Promise<string> {
  const maxAttempts = retryDelaysMs.length + 1
  let lastError: unknown

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const response = await client.models.generateContent({
        model,
        contents: prompt,
        config: {
          systemInstruction:
            'You review blog content pages. You return only a JSON object. You do not rewrite articles.',
          maxOutputTokens: 8192,
        },
      })
      return (response.text ?? '').trim()
    } catch (error) {
      lastError = error
      const delay = retryDelaysMs[attempt - 1]
      if (shouldRetry(error) && delay !== undefined) {
        console.error(`Gemini ${model} failed (${attempt} of ${maxAttempts}): ${errorText(error)}. Retrying in ${delay / 1000}s.`)
        await new Promise((resolve) => setTimeout(resolve, delay))
        continue
      }
      throw error
    }
  }

  throw lastError instanceof Error ? lastError : new Error('Gemini request failed.')
}

function extractJson(raw: string): { posts?: PostCheck[] } {
  const text = raw
    .trim()
    .replace(/^```(?:json)?[ \t]*\r?\n?/i, '')
    .replace(/\r?\n?```[ \t]*$/i, '')
    .trim()
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')
  if (start === -1 || end <= start) fail('Gemini did not return JSON.')
  try {
    return JSON.parse(text.slice(start, end + 1)) as { posts?: PostCheck[] }
  } catch {
    fail('Gemini did not return valid JSON.')
  }
}

function buildPrompt(posts: PostDigest[]): string {
  return `Review the blog content page at /blog. It lists every post below. Check each post as a reader would see it on that page and on its article page.

For each post, set ok to false when any of these fail:
- title, description, date, or category is missing
- the card description is empty or too vague to describe the article
- image is missing or imageExists is false
- there is not exactly one H1, or the H1 is not the title
- there are no H2 sections
- the opening reads like a placeholder, outline, or unfinished draft
- wordCount is under 400

Return only this JSON shape:
{"posts":[{"slug":"","ok":true,"issues":[]}]}
Include every slug exactly once. issues is an empty array when ok is true. Do not add other keys.

Posts:
${JSON.stringify(posts, null, 2)}`
}

async function main() {
  loadEnvFile('.env.local')
  loadEnvFile('.env')

  const apiKey = process.env.GEMINI_API_KEY?.trim()
  if (!apiKey) fail('GEMINI_API_KEY is not set. Add it to .env.local or the environment.')

  const posts = readPosts()
  if (!posts.length) fail('No blog posts found to check.')
  console.log(`Checking ${posts.length} blog posts with Gemini.`)

  const client = new GoogleGenAI({ apiKey })
  const models = modelCandidates()
  let raw = ''
  let lastError: unknown

  for (const model of models) {
    try {
      raw = await generateText(client, model, buildPrompt(posts))
      console.log(`Gemini model ${model} reviewed the content page.`)
      break
    } catch (error) {
      lastError = error
      console.error(`Gemini model ${model} failed: ${errorText(error)}`)
    }
  }

  if (!raw) fail(`Gemini could not review the blog content. Last error: ${errorText(lastError)}`)

  const parsed = extractJson(raw)
  if (!Array.isArray(parsed.posts)) fail('Gemini JSON did not include a posts array.')

  const bySlug = new Map(parsed.posts.map((post) => [post.slug, post]))
  let failed = 0

  for (const post of posts) {
    const result = bySlug.get(post.slug)
    const issues = result && Array.isArray(result.issues) ? result.issues.filter((issue) => typeof issue === 'string') : ['Gemini omitted this post.']
    const ok = Boolean(result?.ok) && issues.length === 0
    if (!ok) failed += 1
    console.log(`${ok ? 'ok' : 'issue'}  ${post.slug}`)
    for (const issue of ok ? [] : issues) console.log(`  - ${issue}`)
  }

  console.log(`${posts.length - failed} of ${posts.length} posts passed.`)
}

main().catch((error) => {
  fail(error instanceof Error ? error.message : String(error))
})
