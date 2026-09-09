'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const PageTransition = () => {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => {
      setTimeout(() => setIsLoading(false), 400)
    }

    handleStart()
    handleComplete()
  }, [pathname])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-[70] flex items-center justify-center">
      <div className="relative w-24 h-24">
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin-slow"
          style={{ borderTopColor: '#e53935', borderRightColor: '#fdd835', borderBottomColor: '#43a047', borderLeftColor: '#1e88e5' }}
        ></div>

        {/* Middle ring */}
        <div className="absolute inset-3 border-4 border-transparent rounded-full animate-spin"
          style={{ borderTopColor: '#fdd835', borderRightColor: '#43a047', borderBottomColor: '#1e88e5', borderLeftColor: '#e53935' }}
        ></div>

        {/* Inner ring */}
        <div className="absolute inset-6 border-4 border-transparent rounded-full animate-spin-fast"
          style={{ borderTopColor: '#43a047', borderRightColor: '#1e88e5', borderBottomColor: '#e53935', borderLeftColor: '#fdd835' }}
        ></div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        .animate-spin-fast {
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default PageTransition
