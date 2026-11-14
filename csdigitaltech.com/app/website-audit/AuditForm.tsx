'use client'

import { useState } from 'react'
import { Loader2, Lock } from 'lucide-react'
import { AUDIT_PRODUCT } from '@/lib/audit'

const inputClass =
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600/20'

export default function AuditForm() {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting) return
    setError(null)
    setSubmitting(true)

    const data = new FormData(event.currentTarget)
    const field = (name: string) => String(data.get(name) ?? '')

    try {
      const response = await fetch('/api/audit/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: field('name'),
          email: field('email'),
          websiteUrl: field('websiteUrl'),
          notes: field('notes'),
          company: field('company'),
        }),
      })
      const result = (await response.json().catch(() => ({}))) as { url?: string; error?: string }

      if (!response.ok || !result.url) {
        setError(result.error ?? 'Something went wrong. Please try again.')
        setSubmitting(false)
        return
      }
      // Hand off to Stripe's hosted checkout page.
      window.location.assign(result.url)
    } catch {
      setError('We could not reach the server. Please check your connection and try again.')
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="websiteUrl" className="mb-1.5 block text-sm font-semibold text-gray-800">
          Website to audit
        </label>
        <input
          id="websiteUrl"
          name="websiteUrl"
          type="text"
          inputMode="url"
          autoComplete="url"
          required
          placeholder="https://yourwebsite.com"
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-gray-800">
            Your name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-gray-800">
            Email for the report
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="mb-1.5 block text-sm font-semibold text-gray-800">
          Anything we should focus on? <span className="font-normal text-gray-500">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          maxLength={450}
          placeholder="e.g. slow on mobile, low Google rankings, not getting leads"
          className={inputClass}
        />
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {error ? (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Redirecting to secure checkout…
          </>
        ) : (
          <>Get my audit for {AUDIT_PRODUCT.priceLabel}</>
        )}
      </button>

      <p className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
        <Lock className="h-3.5 w-3.5" aria-hidden="true" />
        Secure payment by Stripe. We never see your card details.
      </p>
    </form>
  )
}
