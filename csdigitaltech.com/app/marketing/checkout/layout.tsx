import type { Metadata } from 'next'
import type { ReactNode } from 'react'

// Cart and confirmation pages have no search value.
export const metadata: Metadata = {
  title: 'Checkout | Cornerstone Digital Technologies',
  robots: { index: false, follow: false },
}

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return children
}
