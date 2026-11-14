import Link from 'next/link'
import { SCHEDULE_APPOINTMENT_URL } from "@/lib/marketing/utils"

export function AboutCta() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#DC2626] to-[#B91C1C]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Ready to grow your business?</h2>
       

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={SCHEDULE_APPOINTMENT_URL} target="_blank" rel="noopener noreferrer">
            <button className="bg-white hover:bg-gray-100 text-[#DC2626] px-8 py-3 text-lg rounded-lg font-semibold flex items-center gap-2 mx-auto transition-colors">
              Schedule a Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </Link>
          <Link href="/marketing/pricing">
            <button className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 text-lg rounded-lg font-semibold transition-colors">
              View Pricing
            </button>
          </Link>
        </div>

        <p className="text-gray-200 text-sm mt-6">No credit card required • Cancel anytime</p>
      </div>
    </section>
  )
}
