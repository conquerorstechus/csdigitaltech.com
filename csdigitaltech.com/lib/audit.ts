import { z } from 'zod'

/** Product details for the self-serve website audit. Edit here to change the offer. */
export const AUDIT_PRODUCT = {
  /** Stored on the Checkout Session so the webhook only handles audit orders. */
  key: 'website-audit',
  name: 'Website Audit',
  description:
    'A written audit of your website covering SEO, speed, mobile, security and conversion, with prioritised fixes.',
  priceCents: 1000,
  currency: 'usd',
  priceLabel: '$10',
  turnaround: '2 business days',
} as const

const MAX_URL_LENGTH = 300
const MAX_NOTES_LENGTH = 450 // Stripe metadata values are capped at 500 characters.

/**
 * Normalises user input into an http(s) URL for a public website, or returns null.
 * Rejects localhost, IP literals and credentials so the value is safe to pass on to
 * whoever (or whatever) later fetches the site.
 */
export function normalizeWebsiteUrl(input: string): string | null {
  const raw = input.trim()
  if (!raw || raw.length > MAX_URL_LENGTH) return null

  let url: URL
  try {
    url = new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(raw) ? raw : `https://${raw}`)
  } catch {
    return null
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') return null
  if (url.username || url.password) return null

  const host = url.hostname.toLowerCase()
  const isIpLiteral = /^\d{1,3}(\.\d{1,3}){3}$/.test(host) || host.includes(':')
  const isInternalName = host === 'localhost' || /\.(local|localhost|internal|lan)$/.test(host)
  if (isIpLiteral || isInternalName || !host.includes('.')) return null

  url.hash = ''
  return url.toString()
}

export const auditRequestSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.').max(100),
  email: z.string().trim().email('Please enter a valid email address.').max(200),
  websiteUrl: z.string().trim().min(1, 'Please enter your website address.').max(MAX_URL_LENGTH),
  notes: z.string().trim().max(MAX_NOTES_LENGTH, 'Please keep notes under 450 characters.').optional(),
  /** Honeypot: real users never fill this in. */
  company: z.string().optional(),
})

export type AuditRequest = z.infer<typeof auditRequestSchema>

/** Public origin used for Stripe redirect URLs. */
export function getSiteOrigin(request: Request): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL
  if (process.env.VERCEL && configured) return configured.replace(/\/$/, '')

  const host = (request.headers.get('x-forwarded-host') || request.headers.get('host') || '')
    .split(',')[0]
    .trim()
  if (host) {
    const proto =
      request.headers.get('x-forwarded-proto') ||
      (/^(localhost|127\.0\.0\.1)/i.test(host) ? 'http' : 'https')
    return `${proto}://${host}`
  }
  return (configured || new URL(request.url).origin).replace(/\/$/, '')
}
