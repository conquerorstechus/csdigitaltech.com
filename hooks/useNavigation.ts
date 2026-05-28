'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'

export const useNavigation = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const navigate = useCallback((href: string) => {
    if (/^https?:\/\//.test(href)) {
      window.location.assign(href)
      return
    }

    setIsLoading(true)

    // Simulate loading time for better UX
    setTimeout(() => {
      router.push(href)
      setIsLoading(false)
    }, 300)
  }, [router])

  return {
    isLoading,
    navigate,
    setIsLoading
  }
} 