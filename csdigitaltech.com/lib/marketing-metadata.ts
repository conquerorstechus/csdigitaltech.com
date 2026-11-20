import type { Metadata } from 'next'
import { ogImage } from '@/lib/og'
import { SITE_NAME } from '@/lib/site'

const CARD_TITLE = 'Digital Marketing from $99/mo'
const CARD_DESCRIPTION =
  'Social media management, content creation, SEO and paid ads for growing brands. Transparent pricing starting at $99/month.'

/**
 * Page metadata for /marketing/*.
 * Passing openGraph from a child replaces the layout's Open Graph object,
 * so the shared preview image has to be set again here.
 */
export function marketingMeta(
  path: string,
  meta: Pick<Metadata, 'title' | 'description'> = {},
): Metadata {
  return {
    ...meta,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      url: path,
      images: [ogImage(CARD_TITLE, CARD_DESCRIPTION)],
    },
  }
}
