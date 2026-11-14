import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { MarketingSubNav } from '@/components/marketing/marketing-sub-nav'
import './marketing.css'

export const metadata: Metadata = {
  title: 'Digital Marketing Services from $99/mo | Cornerstone Digital Technologies',
  description:
    'Social media management, content creation, SEO and paid ads for growing brands. Transparent pricing starting at $99/month.',
}

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="marketing-theme min-h-screen">
      <MarketingSubNav />
      {children}
    </div>
  )
}
