/**
 * Write the next unused topic in content/topics.json as a Markdown blog post.
 *
 * Usage (from csdigitaltech.com):
 *   npx tsx scripts/generate-post.ts
 *
 * Requires GEMINI_API_KEY. Optional GEMINI_MODEL is tried first. On 503 or 429,
 * each model is retried up to 6 times (5s, 10s, 20s, 40s, 60s, 60s). Each model
 * may write up to 5 drafts. A draft that fails validation is retried with those
 * exact errors. If it still fails, or the request fails with 503, 429, 404, or
 * quota, the script tries the next model: gemini-3.8-flash, then
 * gemini-3.5-flash-lite. The process exits non-zero only when every model fails.
 */
import { ApiError, GoogleGenAI } from '@google/genai'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const topicsPath = path.join(root, 'content', 'topics.json')
const blogDir = path.join(root, 'content', 'blog')
const publicBlogDir = path.join(root, 'public', 'blog')
const siteUrl = 'https://csdigitaltech.com'
const author = 'Cornerstone Digital Technologies'
const fallbackModels = ['gemini-3.8-flash', 'gemini-3.5-flash-lite']
/** Waits before each of up to six retries after the first request. */
const retryDelaysMs = [5_000, 10_000, 20_000, 40_000, 60_000, 60_000]
const draftAttemptsPerModel = 5
const descriptionMin = 150
const descriptionMax = 160
/** Lengths in this wider band are repaired instead of rejected. */
const descriptionSoftMin = 140
const descriptionSoftMax = 170

type TopicStatus = 'unused' | 'used'

type Topic = {
  keyword: string
  title: string
  category: string
  status: TopicStatus
}

type ExistingPost = {
  title: string
  description: string
  slug: string
  category: string
}

type ArticleDraft = {
  description: string
  body: string
}

const STOP_WORDS = new Set([
  'about',
  'after',
  'and',
  'are',
  'for',
  'from',
  'how',
  'into',
  'that',
  'the',
  'this',
  'what',
  'with',
  'your',
])

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

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function today(): string {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function readTopics(): Topic[] {
  if (!fs.existsSync(topicsPath)) fail(`Topic file not found: ${topicsPath}`)

  let parsed: unknown
  try {
    parsed = JSON.parse(fs.readFileSync(topicsPath, 'utf8'))
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    fail(`Could not parse ${topicsPath}: ${message}`)
  }

  if (!Array.isArray(parsed)) fail('content/topics.json must be an array.')

  return parsed.map((item, index) => {
    if (!item || typeof item !== 'object') fail(`Topic ${index + 1} is not an object.`)
    const topic = item as Partial<Topic>
    if (!topic.keyword?.trim() || !topic.title?.trim() || !topic.category?.trim()) {
      fail(`Topic ${index + 1} is missing keyword, title, or category.`)
    }
    if (topic.status !== 'unused' && topic.status !== 'used') {
      fail(`Topic ${index + 1} has an invalid status.`)
    }
    return {
      keyword: topic.keyword.trim(),
      title: topic.title.trim(),
      category: topic.category.trim(),
      status: topic.status,
    }
  })
}

function writeTopics(topics: Topic[]) {
  fs.writeFileSync(topicsPath, `${JSON.stringify(topics, null, 2)}\n`)
}

function readExistingPosts(): ExistingPost[] {
  if (!fs.existsSync(blogDir)) return []

  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(blogDir, file), 'utf8')
      const { data } = matter(raw)
      const slug = typeof data.slug === 'string' && data.slug.trim() ? data.slug.trim() : file.replace(/\.md$/, '')
      return {
        title: typeof data.title === 'string' ? data.title : slug,
        description: typeof data.description === 'string' ? data.description : '',
        slug,
        category: typeof data.category === 'string' ? data.category : '',
      }
    })
}

function tokens(value: string): string[] {
  return value
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 3 && !STOP_WORDS.has(word))
}

function pickRelated(topic: Topic, posts: ExistingPost[], count: number): ExistingPost[] {
  const wanted = new Set(tokens(`${topic.keyword} ${topic.title} ${topic.category}`))
  const ranked = posts
    .map((post) => {
      const haystack = tokens(`${post.title} ${post.description} ${post.slug} ${post.category}`)
      const score = haystack.reduce((total, word) => total + (wanted.has(word) ? 1 : 0), 0)
      return { post, score }
    })
    .sort((a, b) => b.score - a.score || a.post.title.localeCompare(b.post.title))

  const picked = ranked.filter((item) => item.score > 0).slice(0, count).map((item) => item.post)
  if (picked.length >= 2) return picked.slice(0, Math.min(count, 3))
  return ranked.slice(0, Math.min(count, ranked.length)).map((item) => item.post)
}

function imageFor(topic: Topic): string {
  const text = `${topic.category} ${topic.keyword}`.toLowerCase()
  const choices: Array<[RegExp, string]> = [
    [/saas/, 'software-as-a-service-cover.webp'],
    [/cloud|security/, 'cloud-services-cover.webp'],
    [/mobile|app/, 'enterprise-mobility-cover.webp'],
    [/market/, 'digital-transformation-cover.webp'],
    [/ai|architecture/, 'software-architecture-cover.webp'],
    [/consult|it /, 'it-services-cover.webp'],
    [/ecommerce|commerce/, 'digital-solutions-cover.webp'],
    [/web|cms|website/, 'digital-solutions-cover.webp'],
  ]

  for (const [pattern, filename] of choices) {
    if (pattern.test(text) && fs.existsSync(path.join(publicBlogDir, filename))) {
      return `/blog/${filename}`
    }
  }

  const fallback = fs.existsSync(publicBlogDir)
    ? fs
        .readdirSync(publicBlogDir)
        .filter((file) => /\.(webp|png|jpe?g|gif|avif)$/i.test(file))
        .sort()[0]
    : undefined

  if (!fallback) fail('No image found in public/blog, so a new post would have a broken cover.')
  return `/blog/${fallback}`
}

function postUrl(slug: string): string {
  return `${siteUrl}/blog/${slug}`
}

function wordCount(markdown: string): number {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~-]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

function extractJsonText(raw: string): string {
  const text = raw
    .trim()
    .replace(/^```(?:json)?[ \t]*\r?\n?/i, '')
    .replace(/\r?\n?```[ \t]*$/i, '')
    .trim()
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')
  if (start === -1 || end <= start) {
    throw new Error('The model did not return valid JSON.')
  }
  return text.slice(start, end + 1)
}

function parseDraft(raw: string): ArticleDraft {
  const jsonText = extractJsonText(raw)
  let parsed: unknown
  try {
    parsed = JSON.parse(jsonText)
  } catch {
    throw new Error('The model did not return valid JSON.')
  }

  if (!parsed || typeof parsed !== 'object') throw new Error('The model response was not a JSON object.')
  const draft = parsed as Partial<ArticleDraft>
  if (typeof draft.description !== 'string' || typeof draft.body !== 'string') {
    throw new Error('The model JSON must include string fields "description" and "body".')
  }
  return {
    description: draft.description.replace(/\s+/g, ' ').trim(),
    body: draft.body.trim(),
  }
}

function descriptionLengthError(length: number): string {
  return `description was ${length} characters, rewrite it to 150-160`
}

function trimDescriptionAtWordBoundary(description: string, max = descriptionMax): string | undefined {
  if (description.length <= max) return description.trim()
  const boundary = description.lastIndexOf(' ', max)
  if (boundary < descriptionSoftMin) return undefined
  const trimmed = description.slice(0, boundary).replace(/[\s,;:]+$/u, '').trim()
  if (trimmed.length < descriptionSoftMin || trimmed.length > max) return undefined
  return trimmed
}

type DescriptionAdjustment = {
  description: string
  error?: string
  note?: string
  needsExtension: boolean
}

function adjustDescription(description: string): DescriptionAdjustment {
  const length = description.length
  if (length >= descriptionMin && length <= descriptionMax) {
    return { description, needsExtension: false }
  }

  if (length > descriptionMax && length <= descriptionSoftMax) {
    const trimmed = trimDescriptionAtWordBoundary(description)
    if (trimmed) {
      return {
        description: trimmed,
        needsExtension: trimmed.length < descriptionMin,
        note: `description was ${length} characters; trimmed at a word boundary to ${trimmed.length}`,
      }
    }
    return {
      description,
      needsExtension: false,
      note: `description was ${length} characters; kept it because trimming at a word boundary would drop below ${descriptionSoftMin}`,
    }
  }

  if (length >= descriptionSoftMin && length < descriptionMin) {
    return { description, needsExtension: true }
  }

  return { description, needsExtension: false, error: descriptionLengthError(length) }
}

function cleanSentence(raw: string): string {
  let text = raw.trim().replace(/^```(?:json|text)?[ \t]*\r?\n?/i, '').replace(/\r?\n?```[ \t]*$/i, '').trim()
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')
  if (start !== -1 && end > start) {
    try {
      const parsed = JSON.parse(text.slice(start, end + 1)) as { description?: unknown }
      if (parsed && typeof parsed === 'object' && typeof parsed.description === 'string') {
        text = parsed.description
      }
    } catch {
      // A plain sentence is the expected reply.
    }
  }
  return text.replace(/^["']+|["']+$/g, '').replace(/\s+/g, ' ').trim()
}

function validateDraft(draft: ArticleDraft, topic: Topic, related: ExistingPost[]): string[] {
  const errors: string[] = []

  const h1s = draft.body.match(/^# [^\s#].*$/gm) ?? []
  if (h1s.length !== 1) errors.push(`body has ${h1s.length} H1 headings; it must have exactly one`)
  if (h1s[0] && h1s[0] !== `# ${topic.title}`) {
    errors.push(`H1 must be exactly: # ${topic.title}`)
  }

  const h2s = draft.body.match(/^## .+$/gm) ?? []
  const h3s = draft.body.match(/^### .+$/gm) ?? []
  if (h2s.length < 3) errors.push('body needs at least three H2 sections')
  if (h3s.length < 2) errors.push('body needs H3 subsections')
  if (!/^## FAQ\s*$/m.test(draft.body)) errors.push('body needs a "## FAQ" section')

  const words = wordCount(draft.body)
  if (words < 1100 || words > 1650) {
    errors.push(`body is ${words} words; it must be 1200-1500`)
  } else if (words < 1200 || words > 1500) {
    console.log(`body is ${words} words; accepting it near the 1200-1500 target`)
  }

  for (const post of related) {
    const url = postUrl(post.slug)
    if (!draft.body.includes(url) && !draft.body.includes(`/blog/${post.slug}`)) {
      errors.push(`body is missing an internal link to ${url}`)
    }
  }

  return errors
}

function buildPrompt(topic: Topic, related: ExistingPost[], errors: string[]): string {
  const links = related
    .map((post) => `- [${post.title}](${postUrl(post.slug)})`)
    .join('\n')
  const correction = errors.length
    ? `\nYour previous draft failed these checks. Fix every one of them:\n${errors.map((error) => `- ${error}`).join('\n')}\n`
    : ''

  return `Write an SEO article for Cornerstone Digital Technologies (csdigitaltech.com).

Topic keyword: ${topic.keyword}
Title: ${topic.title}
Category: ${topic.category}
${correction}
Return only JSON with this shape:
{"description":"...","body":"..."}

description: one plain sentence, 150-160 characters including spaces. No line breaks.

body: Markdown, 1200-1500 words, and nothing else.
- Start with exactly this H1 and no other H1: # ${topic.title}
- Then a short intro of two or three paragraphs.
- Use H2 and H3 sections that teach the topic in practical language.
- End with a section whose heading is exactly "## FAQ", with at least three "### " questions and answers.
- Link naturally, inside the prose, to each of these existing posts. Use the URL exactly as written:
${links}

Rules:
- Do not invent statistics, percentages, dates, study names, quotes, client names, or case studies.
- Do not claim results for Cornerstone Digital Technologies or any customer.
- If a number would normally appear, explain the idea without a figure.
- No frontmatter in the body.
- No HTML.`
}

function modelCandidates(): string[] {
  const preferred = process.env.GEMINI_MODEL?.trim()
  const models = preferred ? [preferred, ...fallbackModels] : [...fallbackModels]
  return [...new Set(models)]
}

function errorText(error: unknown): string {
  if (error instanceof Error) return error.message
  return String(error)
}

function errorStatus(error: unknown): number | undefined {
  if (error instanceof ApiError) return error.status
  if (error && typeof error === 'object' && 'status' in error && typeof error.status === 'number') {
    return error.status
  }
  return undefined
}

function isModelNotFound(error: unknown): boolean {
  const status = errorStatus(error)
  const text = errorText(error).toLowerCase()
  return status === 404 || /not found|not_found|unknown model|invalid model|is not supported|does not exist/.test(text)
}

function isQuotaError(error: unknown): boolean {
  const text = errorText(error).toLowerCase()
  return /quota|billing|exceeded your current quota|resource_exhausted/.test(text) && !isRateLimit(error)
}

function isRateLimit(error: unknown): boolean {
  const text = errorText(error).toLowerCase()
  if (errorStatus(error) === 429 || /\b429\b/.test(text)) return true
  if (/quota|billing|exceeded your current quota/.test(text)) return false
  return /rate limit|too many requests|resource exhausted/.test(text)
}

function isServiceUnavailable(error: unknown): boolean {
  if (errorStatus(error) === 503) return true
  return /\b503\b|unavailable|overloaded/.test(errorText(error).toLowerCase())
}

function shouldTryNextModel(error: unknown): boolean {
  return isModelNotFound(error) || isQuotaError(error) || isRateLimit(error) || isServiceUnavailable(error)
}

function isTemporaryError(error: unknown): boolean {
  const status = errorStatus(error)
  const text = errorText(error).toLowerCase()
  return (
    status === 408 ||
    status === 500 ||
    status === 502 ||
    status === 503 ||
    status === 504 ||
    /unavailable|deadline|timeout|econnreset|fetch failed|temporarily|internal error|socket/.test(text)
  )
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function generateText(
  client: GoogleGenAI,
  model: string,
  prompt: string,
  systemInstruction = 'You write accurate, useful business-technology articles. You never invent facts, numbers, quotations, customers, or case studies. You return only the JSON object requested.',
): Promise<string> {
  const maxAttempts = retryDelaysMs.length + 1
  let lastError: unknown

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const response = await client.models.generateContent({
        model,
        contents: prompt,
        config: {
          systemInstruction,
          maxOutputTokens: 8192,
        },
      })
      console.log(`Gemini model ${model} responded on request ${attempt}.`)
      return (response.text ?? '').trim()
    } catch (error) {
      lastError = error
      if (isModelNotFound(error) || (isQuotaError(error) && !isRateLimit(error) && !isServiceUnavailable(error))) {
        throw error
      }
      const delay = retryDelaysMs[attempt - 1]
      if ((isRateLimit(error) || isServiceUnavailable(error) || isTemporaryError(error)) && delay !== undefined) {
        console.error(
          `Gemini model ${model} request failed (${attempt} of ${maxAttempts}): ${errorText(error)}. Retrying in ${delay / 1000}s.`
        )
        await sleep(delay)
        continue
      }
      throw error
    }
  }

  throw lastError instanceof Error ? lastError : new Error('Gemini request failed.')
}

function logDraftFailure(label: string, attemptErrors: string[], willRetry: boolean) {
  const followUp = willRetry ? '\nThese errors will be sent on the next attempt.' : ''
  console.error(`${label}: failed\n${attemptErrors.map((error) => `- ${error}`).join('\n')}${followUp}`)
}

async function extendShortDescription(
  client: GoogleGenAI,
  model: string,
  description: string,
  label: string,
): Promise<string> {
  const length = description.length
  console.log(`${label}: ${descriptionLengthError(length)}; asking the model to extend it once`)
  let next = ''
  try {
    const raw = await generateText(
      client,
      model,
      `${descriptionLengthError(length)}

Current description:
${description}

Return only one plain sentence of 150-160 characters including spaces. Keep the same meaning. No JSON, no quotes, and no line breaks.`,
      'You rewrite meta descriptions to a precise length. You return only the rewritten sentence.',
    )
    next = cleanSentence(raw)
  } catch (error) {
    console.error(`${label}: could not extend the description (${errorText(error)}); keeping ${length} characters`)
    return description
  }

  if (next.length > descriptionMax && next.length <= descriptionSoftMax) {
    const trimmed = trimDescriptionAtWordBoundary(next)
    if (trimmed) {
      console.log(
        `${label}: description extended to ${next.length} characters and trimmed at a word boundary to ${trimmed.length}`,
      )
      return trimmed
    }
  }

  if (next.length >= descriptionMin && next.length <= descriptionMax) {
    console.log(`${label}: description extended from ${length} to ${next.length} characters`)
    return next
  }

  if (next.length >= descriptionSoftMin && next.length <= descriptionSoftMax) {
    const chosen = next.length >= length ? next : description
    console.log(`${label}: extension was ${next.length} characters; accepting ${chosen.length} characters after one rewrite`)
    return chosen
  }

  console.log(`${label}: extension was ${next.length} characters; keeping the original ${length}-character description`)
  return description
}

async function writeArticle(topic: Topic, related: ExistingPost[], client: GoogleGenAI): Promise<ArticleDraft> {
  const models = modelCandidates()
  let errors: string[] = []
  let sawDraft = false
  let lastApiError: unknown

  for (let index = 0; index < models.length; index += 1) {
    const model = models[index]
    let stoppedForApiError = false

    for (let attempt = 1; attempt <= draftAttemptsPerModel; attempt += 1) {
      const label = `Draft attempt ${attempt}/${draftAttemptsPerModel} (${model})`
      const willRetry = attempt < draftAttemptsPerModel || index < models.length - 1
      let text: string
      try {
        text = await generateText(client, model, buildPrompt(topic, related, errors))
      } catch (error) {
        lastApiError = error
        const message = errorText(error)
        console.error(`${label}: request failed — ${message}`)
        const next = models[index + 1]
        if (shouldTryNextModel(error) && next) {
          console.error(`Gemini model ${model} failed (${message}). Trying ${next}.`)
        } else if (!shouldTryNextModel(error)) {
          fail(`Gemini request to ${model} failed: ${message}`)
        }
        stoppedForApiError = true
        break
      }

      if (!text) {
        errors = ['The model returned an empty response.']
        sawDraft = true
        logDraftFailure(label, errors, willRetry)
        continue
      }

      let draft: ArticleDraft
      try {
        draft = parseDraft(text)
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error)
        errors = [message]
        sawDraft = true
        logDraftFailure(label, errors, willRetry)
        continue
      }

      const adjusted = adjustDescription(draft.description)
      if (adjusted.note) console.log(`${label}: ${adjusted.note}`)
      draft = { ...draft, description: adjusted.description }

      const attemptErrors = [...(adjusted.error ? [adjusted.error] : []), ...validateDraft(draft, topic, related)]
      if (adjusted.needsExtension && attemptErrors.length > 0) {
        attemptErrors.unshift(descriptionLengthError(draft.description.length))
      }

      if (!attemptErrors.length && adjusted.needsExtension) {
        draft = {
          ...draft,
          description: await extendShortDescription(client, model, draft.description, label),
        }
      }

      if (!attemptErrors.length) {
        console.log(
          `${label}: passed (description ${draft.description.length} characters, body ${wordCount(draft.body)} words)`,
        )
        return draft
      }

      errors = attemptErrors
      sawDraft = true
      logDraftFailure(label, errors, willRetry)
    }

    const next = models[index + 1]
    if (!stoppedForApiError && next) {
      console.error(`${model} did not produce a valid draft in ${draftAttemptsPerModel} attempts. Trying ${next}.`)
    }
  }

  if (!sawDraft) {
    fail(`Gemini could not generate the article. Tried ${models.join(', ')}. Last error: ${errorText(lastApiError)}`)
  }

  const details = errors.length ? `\n${errors.map((error) => `- ${error}`).join('\n')}` : ''
  fail(`Could not produce a valid article for "${topic.title}".${details}`)
}

async function main() {
  loadEnvFile('.env.local')
  loadEnvFile('.env')

  const apiKey = process.env.GEMINI_API_KEY?.trim()
  if (!apiKey) fail('GEMINI_API_KEY is not set. Add it to .env.local or the environment.')

  const topics = readTopics()
  const posts = readExistingPosts()
  const client = new GoogleGenAI({ apiKey })

  for (let index = 0; index < topics.length; index += 1) {
    if (topics[index].status !== 'unused') continue

    const topic = topics[index]
    const slug = slugify(topic.title)
    const target = path.join(blogDir, `${slug}.md`)
    if (!slug || fs.existsSync(target) || posts.some((post) => post.slug === slug)) {
      console.error(`Skipping topic "${topic.keyword}" because slug "${slug || '(empty)'}" already exists.`)
      topics[index] = { ...topic, status: 'used' }
      writeTopics(topics)
      continue
    }

    const related = pickRelated(topic, posts, 3).slice(0, 3)
    if (related.length < 2) fail('At least two existing posts are required for internal links.')

    const draft = await writeArticle(topic, related, client)
    const date = today()
    const file = matter.stringify(`${draft.body}\n`, {
      title: topic.title,
      description: draft.description,
      slug,
      date,
      updated: date,
      image: imageFor(topic),
      category: topic.category,
      author,
    })

    fs.mkdirSync(blogDir, { recursive: true })
    fs.writeFileSync(target, file)
    topics[index] = { ...topic, status: 'used' }
    writeTopics(topics)
    console.log(path.relative(root, target).split(path.sep).join('/'))
    return
  }

  fail('No unused topics left.')
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error)
  fail(message)
})
