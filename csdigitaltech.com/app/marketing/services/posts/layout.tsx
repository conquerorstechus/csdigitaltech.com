import type { ReactNode } from 'react'
import { marketingMeta } from '@/lib/marketing-metadata'

export const metadata = marketingMeta('/marketing/services/posts', {
  title: 'Social Media Post Services | Cornerstone Digital Technologies',
  description:
    'Social media posts and carousel content created and published for your brand each month.',
})

export default function PostServicesLayout({ children }: { children: ReactNode }) {
  return children
}
