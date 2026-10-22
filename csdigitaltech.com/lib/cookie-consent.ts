export const COOKIE_CONSENT_STORAGE_KEY = 'csdt-cookie-consent'

/** Bump when the preference categories change so older choices are renewed. */
export const CONSENT_VERSION = 1

/** Visitors are asked again after six months. */
export const CONSENT_MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000

const FUTURE_SKEW_MS = 5 * 60 * 1000

export type CookiePreferences = {
  necessary: true
  analytics: boolean
  marketing: boolean
}

export type StoredConsent = CookiePreferences & {
  version: number
  timestamp: string
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function parseStoredConsent(raw: string | null, now = Date.now()): StoredConsent | null {
  if (!raw) return null

  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    return null
  }

  if (!isRecord(parsed)) return null
  if (parsed.version !== CONSENT_VERSION) return null
  if (parsed.necessary !== true) return null
  if (typeof parsed.analytics !== 'boolean' || typeof parsed.marketing !== 'boolean') return null
  if (typeof parsed.timestamp !== 'string') return null

  const savedAt = Date.parse(parsed.timestamp)
  if (Number.isNaN(savedAt)) return null
  if (savedAt > now + FUTURE_SKEW_MS) return null
  if (now - savedAt >= CONSENT_MAX_AGE_MS) return null

  return {
    necessary: true,
    analytics: parsed.analytics,
    marketing: parsed.marketing,
    version: CONSENT_VERSION,
    timestamp: new Date(savedAt).toISOString(),
  }
}

export function readConsent(now = Date.now()): StoredConsent | null {
  if (typeof window === 'undefined') return null

  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
    const consent = parseStoredConsent(raw, now)
    if (raw && !consent) {
      window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY)
    }
    return consent
  } catch {
    return null
  }
}

export function writeConsent(
  preferences: Pick<CookiePreferences, 'analytics' | 'marketing'>,
  now = Date.now()
): StoredConsent {
  const record: StoredConsent = {
    necessary: true,
    analytics: preferences.analytics,
    marketing: preferences.marketing,
    version: CONSENT_VERSION,
    timestamp: new Date(now).toISOString(),
  }

  if (typeof window === 'undefined') return record

  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(record))
  } catch {
    // Keep the in-memory choice for this page view when storage is unavailable.
  }

  return record
}
