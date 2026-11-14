import { NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { AUDIT_PRODUCT } from '@/lib/audit'
import { getStripe } from '@/lib/stripe'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Stripe webhook. When a website-audit payment is confirmed, forward the order to
 * AUDIT_ORDER_WEBHOOK_URL (n8n, Zapier, GHL, ...) so the team can fulfil it.
 * Stripe retries on non-2xx responses, so a failed forward returns 500 on purpose.
 * Receivers should de-duplicate on `sessionId`.
 */
export async function POST(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  const signature = request.headers.get('stripe-signature')
  if (!secret || !signature) {
    return NextResponse.json({ error: 'Webhook not configured.' }, { status: 400 })
  }

  // Signature verification needs the exact raw body.
  const payload = await request.text()
  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(payload, signature, secret)
  } catch (error) {
    console.error('[stripe-webhook] Signature verification failed', error)
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 400 })
  }

  if (
    event.type !== 'checkout.session.completed' &&
    event.type !== 'checkout.session.async_payment_succeeded'
  ) {
    return NextResponse.json({ received: true })
  }

  const session = event.data.object as Stripe.Checkout.Session
  if (session.metadata?.product !== AUDIT_PRODUCT.key) {
    return NextResponse.json({ received: true })
  }
  // checkout.session.completed can fire before delayed payment methods settle.
  if (session.payment_status !== 'paid') {
    return NextResponse.json({ received: true })
  }

  const order = {
    formType: 'website-audit-order',
    sessionId: session.id,
    paymentIntentId: typeof session.payment_intent === 'string' ? session.payment_intent : null,
    amountPaid: (session.amount_total ?? 0) / 100,
    currency: session.currency,
    websiteUrl: session.metadata?.website_url ?? '',
    name: session.metadata?.customer_name ?? session.customer_details?.name ?? '',
    email: session.customer_details?.email ?? session.customer_email ?? '',
    notes: session.metadata?.notes ?? '',
    paidAt: new Date(event.created * 1000).toISOString(),
  }

  console.info('[stripe-webhook] Website audit paid', order.sessionId, order.websiteUrl)

  const forwardUrl = process.env.AUDIT_ORDER_WEBHOOK_URL
  if (!forwardUrl) {
    console.warn('[stripe-webhook] AUDIT_ORDER_WEBHOOK_URL is not set; order was not forwarded')
    return NextResponse.json({ received: true })
  }

  try {
    const response = await fetch(forwardUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    })
    if (!response.ok) throw new Error(`Order webhook responded with ${response.status}`)
  } catch (error) {
    console.error('[stripe-webhook] Failed to forward audit order', error)
    return NextResponse.json({ error: 'Failed to forward order.' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
