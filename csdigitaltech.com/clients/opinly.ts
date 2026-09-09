import { createOpinlyClient } from '@opinly/backend'

/**
 * Server-only Opinly client. Reads OPINLY_API_KEY from the environment.
 * Do not import this module from Client Components.
 *
 * Client is created lazily so `next build` can evaluate this module when the
 * secret is absent (e.g. CI without env). Real requests still require a valid
 * OPINLY_API_KEY at runtime / during static generation.
 */
type OpinlyClient = ReturnType<typeof createOpinlyClient>

let client: OpinlyClient | null = null

function getOpinlyApiClient(): OpinlyClient {
  const apiKey = process.env.OPINLY_API_KEY?.trim()

  if (!apiKey) {
    throw new Error(
      '[opinly] OPINLY_API_KEY is not set. Add it under Vercel → Project Settings → Environment Variables (Production), then redeploy.'
    )
  }

  if (!client) {
    // Default Opinly SDK host is https://sdk.opinly.ai — only override when
    // OPINLY_API_URL is explicitly set (do not use https://api.opinly.ai).
    const url = process.env.OPINLY_API_URL?.trim() || undefined

    client = createOpinlyClient({
      apiKey,
      ...(url ? { url } : {}),
      fetch: (requestUrl, init) =>
        fetch(requestUrl, {
          ...init,
          cache: 'force-cache',
          next: { tags: ['opinly'] },
        }),
    })
  }

  return client
}

export const opinly = {
  posts: (...args: Parameters<OpinlyClient['posts']>) =>
    getOpinlyApiClient().posts(...args),
  post: (...args: Parameters<OpinlyClient['post']>) =>
    getOpinlyApiClient().post(...args),
  routes: (...args: Parameters<OpinlyClient['routes']>) =>
    getOpinlyApiClient().routes(...args),
  authors: (...args: Parameters<OpinlyClient['authors']>) =>
    getOpinlyApiClient().authors(...args),
  author: (...args: Parameters<OpinlyClient['author']>) =>
    getOpinlyApiClient().author(...args),
  categories: (...args: Parameters<OpinlyClient['categories']>) =>
    getOpinlyApiClient().categories(...args),
  tags: (...args: Parameters<OpinlyClient['tags']>) =>
    getOpinlyApiClient().tags(...args),
  rss: (...args: Parameters<OpinlyClient['rss']>) =>
    getOpinlyApiClient().rss(...args),
}
