import type { ReactNode } from 'react'
import { marketingMeta } from '@/lib/marketing-metadata'

// The services index is a client component, so its metadata lives in this layout.
export const metadata = marketingMeta('/marketing/services', {
  title: 'Digital Marketing Services | Cornerstone Digital Technologies',
  description:
    'Browse Meta Ads, Google Ads, SEO, Instagram growth, short-form video, and email design from Cornerstone Digital Technologies.',
})

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children
}
