import Link from 'next/link'
import { SCHEDULE_APPOINTMENT_URL } from "@/lib/marketing/utils"

export function GoogleAdsHero() {
  return (
    <section className="pt-14 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F9FAFB] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[#DC2626] bg-gray-50 px-3 py-1 rounded-full flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                #1 MARKETING PLATFORM
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              Google Ads Management only <span className="text-[#DC2626]">$499/mo</span>
            </h1>

            <p className="text-xl text-[#6B7280] leading-relaxed">
              Get more leads and sales with smarter ads. We optimize every campaign for maximum ROI while reducing wasted spend through data-driven strategies.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-900">
                <div className="w-5 h-5 rounded-full bg-[#DC2626] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Get more leads and sales with smarter ads</span>
              </li>
              <li className="flex items-center gap-3 text-gray-900">
                <div className="w-5 h-5 rounded-full bg-[#DC2626] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Improve results while reducing wasted spend</span>
              </li>
              <li className="flex items-center gap-3 text-gray-900">
                <div className="w-5 h-5 rounded-full bg-[#DC2626] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Scale your business with data-driven advertising</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href={SCHEDULE_APPOINTMENT_URL} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-3 text-lg rounded-lg font-semibold flex items-center gap-2 transition-colors">
                  Schedule a free demo call
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>

           
          </div>

          {/* Right - Dashboard Mockup */}
          <div className="hidden lg:block">
            
          </div>
        </div>
      </div>
    </section>
  )
}
