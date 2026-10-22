'use client'

import { useEffect } from 'react'
import { syncGoogleAnalytics } from '@/lib/google-analytics'
import { useCookieConsent } from './CookieConsentProvider'

export default function ConsentAwareAnalytics() {
  const { ready, consent } = useCookieConsent()

  useEffect(() => {
    if (!ready) return

    syncGoogleAnalytics({
      analytics: consent?.analytics ?? false,
      marketing: consent?.marketing ?? false,
    })
  }, [consent, ready])

  return null
}
