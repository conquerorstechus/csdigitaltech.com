'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import { useCookieConsent } from '@/components/cookie-consent/CookieConsentProvider'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { showBanner } = useCookieConsent()

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed right-4 md:right-8 w-12 h-12 bg-[#1a1a2e] text-white rounded-lg shadow-lg hover:bg-[#16213e] transition-all duration-300 z-50 flex items-center justify-center ${showBanner ? '' : 'bottom-8'}`}
          style={showBanner ? { bottom: 'calc(var(--cookie-banner-height, 8rem) + 1rem)' } : undefined}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  )
}

export default ScrollToTop 