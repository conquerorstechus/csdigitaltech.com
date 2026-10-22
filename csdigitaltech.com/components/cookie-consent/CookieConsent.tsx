'use client'

import type { ReactNode } from 'react'
import ConsentAwareAnalytics from './ConsentAwareAnalytics'
import CookieConsentBanner from './CookieConsentBanner'
import { CookieConsentProvider } from './CookieConsentProvider'
import CookieSettingsModal from './CookieSettingsModal'

export default function CookieConsent({ children }: { children: ReactNode }) {
  return (
    <CookieConsentProvider>
      {children}
      <CookieConsentBanner />
      <CookieSettingsModal />
      <ConsentAwareAnalytics />
    </CookieConsentProvider>
  )
}
