import type { Metadata } from 'next'
import type { ReactNode } from 'react'

// The help page is a client component, so its metadata lives in this layout.
export const metadata: Metadata = {
  title: 'Help Center & FAQs: Digital Marketing Services | Cornerstone',
  description:
    'Answers to common questions about our digital marketing services: pricing from $99/mo, timelines, cancellation, refunds, billing and how to get started.',
  alternates: { canonical: '/marketing/help' },
}

export default function HelpLayout({ children }: { children: ReactNode }) {
  return children
}
