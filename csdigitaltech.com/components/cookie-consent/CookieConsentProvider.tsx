'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { COOKIE_CONSENT_STORAGE_KEY, readConsent, writeConsent, type StoredConsent } from '@/lib/cookie-consent'

type PreferenceUpdate = {
  analytics: boolean
  marketing: boolean
}

type CookieConsentContextValue = {
  ready: boolean
  consent: StoredConsent | null
  showBanner: boolean
  settingsOpen: boolean
  acceptAll: () => void
  rejectAll: () => void
  savePreferences: (preferences: PreferenceUpdate) => void
  openSettings: () => void
  closeSettings: () => void
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null)

export function useCookieConsent() {
  const value = useContext(CookieConsentContext)
  if (!value) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider')
  }
  return value
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false)
  const [consent, setConsent] = useState<StoredConsent | null>(null)
  const [settingsOpen, setSettingsOpen] = useState(false)

  useEffect(() => {
    setConsent(readConsent())
    setReady(true)
  }, [])

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== COOKIE_CONSENT_STORAGE_KEY) return
      setConsent(readConsent())
    }

    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const persist = useCallback((preferences: PreferenceUpdate) => {
    setConsent(writeConsent(preferences))
    setSettingsOpen(false)
  }, [])

  const acceptAll = useCallback(() => {
    persist({ analytics: true, marketing: true })
  }, [persist])

  const rejectAll = useCallback(() => {
    persist({ analytics: false, marketing: false })
  }, [persist])

  const savePreferences = useCallback(
    (preferences: PreferenceUpdate) => {
      persist(preferences)
    },
    [persist]
  )

  const openSettings = useCallback(() => setSettingsOpen(true), [])
  const closeSettings = useCallback(() => setSettingsOpen(false), [])

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      ready,
      consent,
      showBanner: ready && consent === null,
      settingsOpen,
      acceptAll,
      rejectAll,
      savePreferences,
      openSettings,
      closeSettings,
    }),
    [acceptAll, closeSettings, consent, openSettings, ready, rejectAll, savePreferences, settingsOpen]
  )

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>
}
