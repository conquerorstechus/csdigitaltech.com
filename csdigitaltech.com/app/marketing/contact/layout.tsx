import type { ReactNode } from 'react'
import { marketingMeta } from '@/lib/marketing-metadata'

// The contact page is a client component, so its metadata lives in this layout.
export const metadata = marketingMeta('/marketing/contact', {
  title: 'Contact Us | Cornerstone Digital Technologies Marketing',
  description:
    'Get in touch with Cornerstone Digital Technologies about social media management, ads and SEO. Send a message and our team will reply.',
})

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
