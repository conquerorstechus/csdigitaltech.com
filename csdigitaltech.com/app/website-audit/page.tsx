import Link from 'next/link'
import { CheckCircle2, ClipboardCheck, CreditCard, Mail } from 'lucide-react'
import { getComprehensiveMetadata } from '@/lib/seo-metadata'
import { AUDIT_PRODUCT } from '@/lib/audit'
import AuditForm from './AuditForm'

export const metadata = getComprehensiveMetadata(
  `${AUDIT_PRODUCT.priceLabel} Website Audit`,
  `Get an expert audit of your website for just ${AUDIT_PRODUCT.priceLabel}: SEO, speed, mobile, security and conversion issues with prioritised fixes, delivered by email in ${AUDIT_PRODUCT.turnaround}.`,
  '/website-audit',
  '/bg-pheader.jpg',
  ['website audit', 'cheap website audit', 'SEO audit', 'website performance audit', 'website review'],
  'Service',
)

const covers = [
  { title: 'SEO basics', body: 'Titles, meta descriptions, headings, indexing, sitemap and broken links.' },
  { title: 'Speed & Core Web Vitals', body: 'What is slowing your pages down and what to fix first.' },
  { title: 'Mobile experience', body: 'Layout, tap targets and usability on phones and tablets.' },
  { title: 'Security & trust', body: 'HTTPS, security headers and visible trust signals.' },
  { title: 'Conversion & UX', body: 'Calls to action, forms and friction that cost you enquiries.' },
  { title: 'Prioritised action list', body: 'A clear, ranked list of fixes so you know where to start.' },
]

const steps = [
  { icon: ClipboardCheck, title: 'Tell us your site', body: 'Enter your website address and where to send the report.' },
  { icon: CreditCard, title: `Pay ${AUDIT_PRODUCT.priceLabel}`, body: 'Checkout is handled securely by Stripe.' },
  { icon: Mail, title: 'Get your report', body: `We email your audit within ${AUDIT_PRODUCT.turnaround}.` },
]

export default async function WebsiteAuditPage({
  searchParams,
}: {
  searchParams: Promise<{ canceled?: string }>
}) {
  const { canceled } = await searchParams

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8 lg:py-20">
          <div>
            <p className="mb-3 inline-block rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-600">
              {AUDIT_PRODUCT.priceLabel} · one-time · no subscription
            </p>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Find out what&apos;s holding your website back
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              For {AUDIT_PRODUCT.priceLabel}, our team reviews your website and sends you a written audit with the
              issues that matter most and exactly what to fix first. Delivered by email within{' '}
              {AUDIT_PRODUCT.turnaround}.
            </p>

            <ul className="space-y-3">
              {['Plain-English findings, not jargon', 'Prioritised by impact', 'No sales call required'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-800">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div id="order" className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
            <div className="mb-6 flex items-baseline justify-between">
              <h2 className="text-xl font-bold text-gray-900">Order your audit</h2>
              <span className="text-3xl font-bold text-gray-900">{AUDIT_PRODUCT.priceLabel}</span>
            </div>
            {canceled ? (
              <p className="mb-5 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-800">
                Your payment was cancelled and you have not been charged. You can try again below.
              </p>
            ) : null}
            <AuditForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">What your audit covers</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {covers.map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">How it works</h2>
          <ol className="grid gap-8 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, body }, index) => (
              <li key={title} className="text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">
                  {index + 1}. {title}
                </h3>
                <p className="text-gray-600">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">Want us to fix what we find?</h2>
        <p className="mb-6 text-gray-600">
          The audit is yours to keep and use however you like. If you would like help implementing it, we build and
          market websites too.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact-us"
            className="rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Talk to our team
          </Link>
          <Link
            href="/marketing"
            className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition-colors hover:bg-gray-50"
          >
            See marketing services
          </Link>
        </div>
      </section>
    </main>
  )
}
