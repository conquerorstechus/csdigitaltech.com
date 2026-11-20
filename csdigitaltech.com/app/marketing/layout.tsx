import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { MarketingSubNav } from '@/components/marketing/marketing-sub-nav'
import { ogImage } from '@/lib/og'
import { SITE_NAME } from '@/lib/site'
import './marketing.css'

const TITLE = 'Digital Marketing Services from $99/mo | Cornerstone Digital'
const DESCRIPTION =
  'Social media management, content creation, SEO and paid ads for growing brands. Transparent pricing starting at $99/month.'
const card = ogImage('Digital Marketing from $99/mo', DESCRIPTION)

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Title, description, and URL stay off this layout so each page can set its own.
  // Otherwise every marketing URL inherits this homepage title and og:url.
  openGraph: { type: 'website', siteName: SITE_NAME, images: [card] },
  twitter: { card: 'summary_large_image', images: [card.url] },
}

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="marketing-theme min-h-screen">
      <MarketingSubNav />
      {children}
    </div>
  )
}
