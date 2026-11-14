import Link from 'next/link'
import { SCHEDULE_APPOINTMENT_URL } from "@/lib/marketing/utils"

export function VideoAdsCta() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#DC2626] to-[#B91C1C]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Create Video Ads That Sell?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Start creating high-performing video ads today. Let our team handle the production while you focus on growing your business.
        </p>

        <Link href={SCHEDULE_APPOINTMENT_URL} target="_blank" rel="noopener noreferrer">
          <button className="bg-white hover:bg-gray-100 text-[#DC2626] px-8 py-3 text-lg rounded-lg font-semibold flex items-center gap-2 mx-auto transition-colors">
            Schedule Your Free Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </Link>

        <p className="text-sm text-gray-300 mt-6">
          No credit card required • 30-minute consultation • Custom proposal included
        </p>
      </div>
    </section>
  )
}
