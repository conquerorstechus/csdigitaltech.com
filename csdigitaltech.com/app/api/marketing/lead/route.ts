import { NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const MAX_BODY_CHARS = 50_000

const leadSchema = z
  .object({
    formType: z.enum(['qoutegen-backend-pricing', 'qoutegen-backend-contact']),
  })
  .passthrough()

/**
 * Server-side relay for the /marketing forms. The webhook URLs stay in server
 * environment variables instead of being bundled into browser JavaScript.
 * The legacy NEXT_PUBLIC_* names are still read so existing deployments keep working.
 */
function webhookFor(formType: z.infer<typeof leadSchema>['formType']): string | undefined {
  return formType === 'qoutegen-backend-contact'
    ? process.env.MARKETING_CONTACT_WEBHOOK_URL || process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL
    : process.env.MARKETING_LEAD_WEBHOOK_URL ||
        process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL ||
        process.env.NEXT_PUBLIC_WEBHOOK_URL
}

export async function POST(request: Request) {
  const raw = await request.text()
  if (raw.length > MAX_BODY_CHARS) {
    return NextResponse.json({ error: 'Request too large.' }, { status: 413 })
  }

  let body: unknown
  try {
    body = JSON.parse(raw)
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const parsed = leadSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const target = webhookFor(parsed.data.formType)
  if (!target) {
    console.error(`[marketing-lead] No webhook configured for ${parsed.data.formType}`)
    return NextResponse.json({ error: 'This form is temporarily unavailable.' }, { status: 503 })
  }

  try {
    const response = await fetch(target, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data),
    })
    if (!response.ok) throw new Error(`Webhook responded with ${response.status}`)
  } catch (error) {
    console.error('[marketing-lead] Forwarding failed', error)
    return NextResponse.json({ error: 'Could not send your request.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
