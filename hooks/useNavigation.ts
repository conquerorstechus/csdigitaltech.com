'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'

export const useNavigation = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const navigate = useCallback((href: string) => {
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