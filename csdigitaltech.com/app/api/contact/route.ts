import { NextResponse } from 'next/server'

const WEBHOOK_URL =
  process.env.CONTACT_FORM_WEBHOOK_URL ??
  'https://n8n.srv1393511.hstgr.cloud/webhook/284ee9f5-ab3b-4d07-a915-d29e4d1414aa'

const CAREERS_WEBHOOK_URL =
  process.env.CAREERS_FORM_WEBHOOK_URL ??
  'https://n8n.srv1393511.hstgr.cloud/webhook/27a463a5-c55f-48aa-a0c4-8c3b4cec8cba'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      projectType,
      message,
      source,
      formType,
      formId,
      resumeLink,
      resumeFileName,
      resumeFileMime,
      resumeFileBase64
    } = body

    if (!name || !email || !phone || !projectType || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const isCareers = source === 'careers'
    const webhookTarget = isCareers ? CAREERS_WEBHOOK_URL : WEBHOOK_URL

    const res = await fetch(webhookTarget, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        formType: formType || 'csdigitaltech-contact',
        source: source || 'contact-us',
        ...(formId ? { formId } : {}),
        submittedAt: new Date().toISOString(),
        name,
        email,
        phone,
        projectType,
        message,
        ...(resumeLink ? { resumeLink } : {}),
        ...(resumeFileName ? { resumeFileName } : {}),
        ...(resumeFileMime ? { resumeFileMime } : {}),
        ...(resumeFileBase64 ? { resumeFileBase64 } : {})
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
