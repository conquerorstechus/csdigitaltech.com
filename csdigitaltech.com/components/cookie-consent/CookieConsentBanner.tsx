'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Cookie } from 'lucide-react'
import { useCookieConsent } from './CookieConsentProvider'

const MESSAGE =
  'We use cookies to improve your browsing experience, analyze website traffic, and support our marketing activities. You can accept or reject optional cookies at any time.'

const buttonClass =
  'inline-flex min-h-11 w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#262051] sm:w-auto'

export default function CookieConsentBanner() {
  const { showBanner, acceptAll, rejectAll, openSettings } = useCookieConsent()
  const bannerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const banner = bannerRef.current
    if (!showBanner || !banner) return

    const previousPadding = document.body.style.paddingBottom
    const applyOffset = () => {
      const height = `${banner.offsetHeight}px`
      document.documentElement.style.setProperty('--cookie-banner-height', height)
      document.body.style.paddingBottom = height
    }

    applyOffset()
    const observer = new ResizeObserver(applyOffset)
    observer.observe(banner)

    return () => {
      observer.disconnect()
      document.documentElement.style.removeProperty('--cookie-banner-height')
      document.body.style.paddingBottom = previousPadding
    }
  }, [showBanner])

  if (!showBanner) return null

  return (
    <section
      ref={bannerRef}
      id='cookie-consent-banner'
      aria-labelledby='cookie-consent-title'
      className='fixed inset-x-0 bottom-0 z-[2147483000] border-t border-white/10 bg-[#262051] text-white shadow-[0_-12px_40px_rgba(38,32,81,0.28)] motion-reduce:transition-none'
    >
      <div className='mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:gap-8 lg:px-8 lg:py-5'>
        <div className='min-w-0 flex-1'>
          <div className='mb-2 flex items-center gap-2'>
            <Cookie className='h-5 w-5 shrink-0' aria-hidden='true' />
            <h2 id='cookie-consent-title' className='text-base font-semibold text-white sm:text-lg'>
              Cookie consent
            </h2>
          </div>
          <p className='text-sm leading-6 text-white/90 sm:text-[15px]'>{MESSAGE}</p>
          <Link
            href='/privacy-policy'
            className='mt-2 inline-flex rounded-sm text-sm font-semibold text-white underline underline-offset-4 decoration-white/70 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white'
          >
            Privacy Policy
          </Link>
        </div>

        <div className='grid grid-cols-1 gap-2 sm:flex sm:flex-wrap lg:shrink-0 lg:justify-end'>
          <button type='button' id='cookie-consent-accept' className={`${buttonClass} bg-[#FF1212] text-white hover:bg-[#cc0e0e]`} onClick={acceptAll}>
            Accept Cookies
          </button>
          <button
            type='button'
            id='cookie-consent-reject'
            className={`${buttonClass} border border-white/50 bg-transparent text-white hover:bg-white/10`}
            onClick={rejectAll}
          >
            Reject Cookies
          </button>
          <button
            type='button'
            id='cookie-consent-settings'
            className={`${buttonClass} bg-white text-[#262051] hover:bg-white/90`}
            onClick={openSettings}
          >
            Cookie Settings
          </button>
        </div>
      </div>
    </section>
  )
}
