/**
 * Canonical public origin of the site (no trailing slash).
 * NEXT_PUBLIC_SITE_URL wins when set, except for the retired conquerorstech.com
 * host, which previously leaked into canonicals and link previews.
 */
const DEFAULT_SITE_URL = 'https://csdigitaltech.com'

function resolveSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, '')
  if (!configured || /conquerorstech\.com/i.test(configured)) return DEFAULT_SITE_URL
  return configured
}

export const SITE_URL = resolveSiteUrl()
export const SITE_NAME = 'Cornerstone Digital Technologies'
