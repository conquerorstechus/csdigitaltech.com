/**
 * The only optional tracking tag in this project is the existing GA4 property.
 * No Google Tag Manager container, Meta Pixel, or other advertising script is installed.
 * Marketing consent is stored and, when analytics is also allowed, applied to
 * Google consent signals. It does not load an additional marketing tag.
 */
export const GA_MEASUREMENT_ID = 'G-S0TVKR1DTW'

const SCRIPT_ID = 'csdt-ga4'

type ConsentValue = 'granted' | 'denied'

type GoogleConsentSettings = {
  analytics_storage: ConsentValue
  ad_storage: ConsentValue
  ad_user_data: ConsentValue
  ad_personalization: ConsentValue
  functionality_storage: 'granted'
  security_storage: 'granted'
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

let gaConfigured = false
let analyticsGranted = false
let clearCookiesTimer: number | undefined

function consentSettings(analytics: boolean, marketing: boolean): GoogleConsentSettings {
  const advertising: ConsentValue = analytics && marketing ? 'granted' : 'denied'
  return {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: advertising,
    ad_user_data: advertising,
    ad_personalization: advertising,
    functionality_storage: 'granted',
    security_storage: 'granted',
  }
}

function setGaDisabled(disabled: boolean) {
  const windowState = window as unknown as Record<string, boolean>
  windowState[`ga-disable-${GA_MEASUREMENT_ID}`] = disabled
}

function installGtag() {
  window.dataLayer = window.dataLayer || []
  if (typeof window.gtag === 'function') return

  window.gtag = function gtag() {
    // Google reads the Arguments object from the dataLayer queue.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments)
  }
}

function markScript(active: boolean) {
  const script = document.getElementById(SCRIPT_ID)
  if (script) {
    script.dataset.analyticsActive = active ? 'true' : 'false'
  }
}

export function clearGoogleAnalyticsCookies() {
  if (typeof document === 'undefined') return

  const names = document.cookie
    .split(';')
    .map((part) => part.split('=')[0]?.trim() ?? '')
    .filter((name) => name.startsWith('_ga') || name.startsWith('_gid') || name.startsWith('_gat'))

  if (names.length === 0) return

  const hostname = window.location.hostname
  const domains = new Set<string>(['', hostname, `.${hostname}`])
  const segments = hostname.split('.')
  if (segments.length >= 2) {
    const root = segments.slice(-2).join('.')
    domains.add(root)
    domains.add(`.${root}`)
  }

  const expires = 'Thu, 01 Jan 1970 00:00:00 GMT'
  for (const name of names) {
    for (const domain of domains) {
      const domainAttribute = domain ? `; domain=${domain}` : ''
      document.cookie = `${name}=; expires=${expires}; max-age=0; path=/${domainAttribute}`
    }
  }
}

function injectGoogleAnalytics() {
  if (document.getElementById(SCRIPT_ID)) return

  const script = document.createElement('script')
  script.id = SCRIPT_ID
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  script.dataset.consentCategory = 'analytics'
  document.head.appendChild(script)
}

export function syncGoogleAnalytics(preferences: { analytics: boolean; marketing: boolean }) {
  if (typeof window === 'undefined') return

  if (!preferences.analytics) {
    analyticsGranted = false
    setGaDisabled(true)
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', consentSettings(false, false))
    }
    markScript(false)
    clearGoogleAnalyticsCookies()
    window.clearTimeout(clearCookiesTimer)
    clearCookiesTimer = window.setTimeout(clearGoogleAnalyticsCookies, 1000)
    return
  }

  window.clearTimeout(clearCookiesTimer)
  const sendPageView = gaConfigured && !analyticsGranted
  analyticsGranted = true
  setGaDisabled(false)
  installGtag()

  const settings = consentSettings(true, preferences.marketing)
  const gtag = window.gtag
  if (!gtag) return

  if (!gaConfigured) {
    gtag('consent', 'default', settings)
    gtag('js', new Date())
    gtag('config', GA_MEASUREMENT_ID)
    injectGoogleAnalytics()
    gaConfigured = true
    markScript(true)
    return
  }

  gtag('consent', 'update', settings)
  if (sendPageView) {
    gtag('event', 'page_view', {
      page_location: window.location.href,
      page_path: `${window.location.pathname}${window.location.search}`,
      page_title: document.title,
    })
  }
  markScript(true)
}
