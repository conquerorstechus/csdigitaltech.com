import { NextResponse } from 'next/server'

const WEBHOOK_URL =
  process.env.CONTACT_FORM_WEBHOOK_URL ??
  'https://n8n.srv1393511.hstgr.cloud/webhook/284ee9f5-ab3b-4d07-a915-d29e4d1414aa'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, projectType, message } = body

    if (!name || !email || !phone || !projectType || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        formType: 'csdigitaltech-contact',
        source: 'contact-us',
        submittedAt: new Date().toISOString(),
        name,
        email,
        phone,
        projectType,
        message
      })
    })

    if (!res.ok) {
      const text = await res.text().catch(() => '')
      console.error('n8n webhook failed:', res.status, text)
      return NextResponse.json({ error: 'Webhook unavailable' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
