import type { ReactNode } from 'react'
import { marketingMeta } from '@/lib/marketing-metadata'

// The help page is a client component, so its metadata lives in this layout.
export const metadata = marketingMeta('/marketing/help', {
  title: 'Help Center & FAQs: Digital Marketing Services | Cornerstone',
  description:
    'Answers to common questions about our digital marketing services: pricing from $99/mo, timelines, cancellation, refunds, billing and how to get started.',
})

export default function HelpLayout({ children }: { children: ReactNode }) {
  return children
}
