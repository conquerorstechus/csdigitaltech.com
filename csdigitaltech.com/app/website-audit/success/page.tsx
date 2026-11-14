import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle, CheckCircle2 } from 'lucide-react'
import { AUDIT_PRODUCT } from '@/lib/audit'
import { getStripe, isStripeConfigured } from '@/lib/stripe'

export const metadata: Metadata = {
  title: 'Order confirmed | Cornerstone Digital Technologies',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

async function loadPaidOrder(sessionId: string | undefined) {
  if (!sessionId || !/^cs_[A-Za-z0-9_]+$/.test(sessionId) || !isStripeConfigured()) return null
  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId)
    if (session.metadata?.product !== AUDIT_PRODUCT.key || session.payment_status !== 'paid') return null
    return {
      websiteUrl: session.metadata?.website_url ?? '',
      email: session.customer_details?.email ?? session.customer_email ?? '',
    }
  } catch {
    return null
  }
}

export default async function AuditSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { session_id } = await searchParams
  const order = await loadPaidOrder(session_id)

  return (
    <main className="bg-gray-50">
      <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
        {order ? (
          <>
            <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
            </span>
            <h1 className="mb-3 text-3xl font-bold text-gray-900">Thank you, your audit is ordered!</h1>
            <p className="mb-8 text-gray-600">
              We&apos;ll email your report to <strong>{order.email}</strong> within {AUDIT_PRODUCT.turnaround}.
            </p>
            <div className="mb-8 rounded-xl border border-gray-200 bg-white p-5 text-left text-sm">
              <dl className="space-y-2">
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Website</dt>
                  <dd className="break-all text-right font-medium text-gray-900">{order.websiteUrl}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500">Paid</dt>
                  <dd className="font-medium text-gray-900">{AUDIT_PRODUCT.priceLabel} USD</dd>
                </div>
              </dl>
            </div>
          </>
        ) : (
          <>
            <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <AlertTriangle className="h-9 w-9" aria-hidden="true" />
            </span>
            <h1 className="mb-3 text-3xl font-bold text-gray-900">We couldn&apos;t confirm your payment</h1>
            <p className="mb-8 text-gray-600">
              If you were charged, don&apos;t worry: your order is safe and we&apos;ll be in touch. Otherwise you can
              try again, or contact us and we&apos;ll help.
            </p>
          </>
        )}

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700"
          >
            Back to home
          </Link>
          {!order ? (
            <Link
              href="/website-audit"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition-colors hover:bg-white"
            >
              Try again
            </Link>
          ) : null}
        </div>
      </div>
    </main>
  )
}
