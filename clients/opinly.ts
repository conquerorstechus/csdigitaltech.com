import { createOpinlyClient } from '@opinly/backend'

/**
 * Server-only Opinly client. Reads OPINLY_API_KEY from the environment.
 * Do not import this module from Client Components.
 *
 * A placeholder key is used only so Next.js can evaluate the module during
 * builds when the secret is not present; real requests still require a valid key.
 */
export const opinly = createOpinlyClient({
  apiKey: process.env.OPINLY_API_KEY || 'missing-opinly-api-key',
  fetch: (url, init) =>
    fetch(url, { ...init, cache: 'force-cache', next: { tags: ['opinly'] } }),
})
