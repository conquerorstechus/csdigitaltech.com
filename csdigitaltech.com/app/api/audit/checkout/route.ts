import { NextResponse } from 'next/server'
import {
  AUDIT_PRODUCT,
  auditRequestSchema,
  getSiteOrigin,
  normalizeWebsiteUrl,
} from '@/lib/audit'
import { getStripe, isStripeConfigured } from '@/lib/stripe'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Creates a Stripe Checkout Session for the $10 website audit and returns its URL. */
export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const parsed = auditRequestSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Please check your details.' },
      { status: 400 },
    )
  }

  const { name, email, websiteUrl, notes, company } = parsed.data
  // Honeypot field filled in: almost certainly a bot. Give it no useful feedback.
  if (company) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }
  const normalizedUrl = normalizeWebsiteUrl(websiteUrl)
  if (!normalizedUrl) {
    return NextResponse.json(
      { error: 'Please enter a valid public website address, e.g. https://example.com.' },
      { status: 400 },
    )
  }

  if (!isStripeConfigured()) {
    console.error('[audit] STRIPE_SECRET_KEY is not configured')
    return NextResponse.json(
      { error: 'Online payments are temporarily unavailable. Please contact us.' },
      { status: 503 },
    )
  }

  const origin = getSiteOrigin(request)

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      customer_email: email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: AUDIT_PRODUCT.currency,
            unit_amount: AUDIT_PRODUCT.priceCents,
            product_data: {
              name: AUDIT_PRODUCT.name,
              description: `Audit of ${normalizedUrl}`.slice(0, 300),
            },
          },
        },
      ],
      metadata: {
        product: AUDIT_PRODUCT.key,
        website_url: normalizedUrl,
        customer_name: name,
        notes: notes ?? '',
      },
      payment_intent_data: {
        description: `${AUDIT_PRODUCT.name}: ${normalizedUrl}`.slice(0, 300),
        receipt_email: email,
        metadata: { product: AUDIT_PRODUCT.key, website_url: normalizedUrl },
      },
      success_url: `${origin}/website-audit/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/website-audit?canceled=1`,
    })

    if (!session.url) throw new Error('Stripe did not return a checkout URL')
    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('[audit] Failed to create checkout session', error)
    return NextResponse.json(
      { error: 'We could not start checkout. Please try again in a moment.' },
      { status: 500 },
    )
  }
}
