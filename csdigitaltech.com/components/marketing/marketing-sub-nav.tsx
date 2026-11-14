'use client'

import Link from 'next/link'
import { ServicesDropdown } from '@/components/marketing/services-dropdown'

/**
 * Secondary navigation for the /marketing section. The main site header and footer
 * come from the root layout, so this only carries the marketing-specific links
 * that the standalone quotegen header used to provide.
 */
export function MarketingSubNav() {
  return (
    <div className="border-b border-blue-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/marketing" className="text-sm font-bold text-[#0B2A4A]">
          Digital Marketing
        </Link>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Link href="/marketing#examples" className="text-[#6B7280] transition-colors hover:text-[#0B2A4A]">
            Our Work
          </Link>
          <Link href="/marketing/pricing" className="text-[#6B7280] transition-colors hover:text-[#0B2A4A]">
            Pricing
          </Link>
          <ServicesDropdown />
          <Link
            href="/website-audit"
            className="rounded-full bg-[#0B2A4A] px-3 py-1 font-semibold text-white transition-colors hover:bg-[#1E5AA8]"
          >
            $10 Website Audit
          </Link>
          <Link
            href="/marketing/pricing"
            className="rounded-lg bg-[#1E5AA8] px-4 py-1.5 font-semibold text-white transition-colors hover:bg-[#154080]"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </div>
  )
}
