import type { ReactNode } from 'react'
import { marketingMeta } from '@/lib/marketing-metadata'

export const metadata = marketingMeta('/marketing/services/videos', {
  title: 'Video Services | Cornerstone Digital Technologies',
  description:
    'Short-form and UGC video services for TikTok, Instagram Reels, and YouTube Shorts.',
})

export default function VideoServicesLayout({ children }: { children: ReactNode }) {
  return children
}
