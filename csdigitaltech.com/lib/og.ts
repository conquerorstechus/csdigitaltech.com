import { SITE_NAME } from '@/lib/site'

export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const

/** Strip the shared brand suffix so the card headline stays short. */
function cleanTitle(title: string) {
  return title.replace(new RegExp(`\\s*\\|\\s*${SITE_NAME}\\s*$`, 'i'), '').trim()
}

/**
 * Builds a link-preview image descriptor for Open Graph / Twitter metadata.
 * The image is rendered on demand by app/og/route.tsx (1200x630, branded).
 */
export function ogImage(title: string, description?: string) {
  const params = new URLSearchParams({ title: cleanTitle(title) })
  if (description) params.set('desc', description)
  return {
    url: `/og?${params.toString()}`,
    ...OG_IMAGE_SIZE,
    alt: cleanTitle(title),
    type: 'image/png',
  }
}
