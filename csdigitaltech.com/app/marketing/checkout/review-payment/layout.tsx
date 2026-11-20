import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Review Payment | Cornerstone Digital Technologies',
  robots: { index: false, follow: false },
}

export default function ReviewPaymentLayout({ children }: { children: ReactNode }) {
  return children
}
