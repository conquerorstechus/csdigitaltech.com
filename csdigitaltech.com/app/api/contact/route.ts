import { NextResponse } from 'next/server'
import { getCareersResumeViewPath, storeCareersResume } from '@/lib/careers-resume-store'
import { buildCareersWebhookPayload, wrapCareersWebhookPayload } from '@/lib/careers-webhook-payload'
import { validateCareersApplication } from '@/lib/careers-verification'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Webhook endpoints are secrets: configure them in the environment, never in source.
const WEBHOOK_URL = process.env.CONTACT_FORM_WEBHOOK_URL
const CAREERS_WEBHOOK_URL = process.env.CAREERS_FORM_WEBHOOK_URL

function getPublicSiteOrigin() {
  const configured =
    process.env.CAREERS_SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    'https://csdigitaltech.com'

  return configured.replace(/\/$/, '')
}

function getSiteOrigin(request: Request) {
  if (process.env.VERCEL) {
    return getPublicSiteOrigin()
  }

  const hostHeader = request.headers.get('x-forwarded-host') || request.headers.get('host') || ''
  const host = hostHeader.split(',')[0].trim()
  const protocol =
    request.headers.get('x-forwarded-proto') ||
    (/^localhost|127\.0\.0\.1/i.test(host) ? 'http' : 'https')

  if (host) {
    return `${protocol}://${host}`
  }

  return new URL(request.url).origin
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      projectType,
      message,
      whyCornerstone,
      linkedin,
      source,
      formType,
      formId,
      resumeLink,
      portfolio,
      resumeFileName,
      resumeFileMime,
      resumeFileBase64,
      captchaToken,
      captchaAnswer
    } = body

    const isCareers = source === 'careers'

    if (isCareers) {
      const validation = validateCareersApplication({
        name,
        email,
        phone,
        projectType,
        whyCornerstone,
        message,
        linkedin,
        resumeLink: resumeLink || portfolio,
        resumeFileName,
        captchaToken,
        captchaAnswer
      })

      if (!validation.valid) {
        return NextResponse.json(
          { error: validation.error, field: validation.field },
          { status: 400 }
        )
      }
    } else if (!name || !email || !phone || !projectType || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const webhookTarget = isCareers ? CAREERS_WEBHOOK_URL : WEBHOOK_URL
    if (!webhookTarget) {
      console.error(
        `[contact] ${isCareers ? 'CAREERS_FORM_WEBHOOK_URL' : 'CONTACT_FORM_WEBHOOK_URL'} is not configured`
      )
      return NextResponse.json(
        { error: 'This form is temporarily unavailable. Please try again later.' },
        { status: 503 }
      )
    }
    const trimmedWhyCornerstone = String(whyCornerstone || message || '').trim()
    const trimmedResumeLink = String(resumeLink || portfolio || '').trim()
    const trimmedResumeFileName = String(resumeFileName || '').trim()
    const trimmedResumeBase64 = String(resumeFileBase64 || '').trim()

    let resumeDownloadUrl = trimmedResumeLink || undefined

    if (isCareers && trimmedResumeFileName && trimmedResumeBase64) {
      try {
        const storedResume = await storeCareersResume(
          trimmedResumeBase64,
          trimmedResumeFileName,
          String(resumeFileMime || 'application/pdf')
        )
        const origin = getSiteOrigin(request)
        const accessUrl = `${origin}${getCareersResumeViewPath(storedResume.token)}`
        const isLocalUrl = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\//i.test(accessUrl)

        if (process.env.VERCEL && isLocalUrl) {
          console.error('Refusing to email a localhost resume URL from the live site.')
        } else if (/^https?:\/\//i.test(accessUrl)) {
          resumeDownloadUrl = accessUrl
        }
      } catch (storageError) {
        console.error(
          'Careers resume storage failed. On Vercel, connect a Blob store so BLOB_READ_WRITE_TOKEN is set. The file is still sent for the email attachment.',
          storageError
        )
      }
    }

    const careersPayload = isCareers
      ? buildCareersWebhookPayload({
          name,
          email,
          phone,
          projectType,
          whyCornerstone: trimmedWhyCornerstone,
          linkedin,
          formType,
          formId,
          resumeLink: trimmedResumeLink,
          resumeFileName: trimmedResumeFileName,
          resumeFileMime,
          resumeFileBase64: trimmedResumeBase64 || undefined,
          resumeDownloadUrl
        })
      : null

    const webhookBody = careersPayload
      ? wrapCareersWebhookPayload(careersPayload)
      : {
          formType: formType || 'csdigitaltech-contact',
          source: source || 'contact-us',
          ...(formId ? { formId } : {}),
          submittedAt: new Date().toISOString(),
          name,
          email,
          phone,
          projectType,
          message
        }

    const webhookJson = JSON.stringify(webhookBody)

    if (isCareers) {
      console.info('Careers webhook dispatch:', {
        formId: careersPayload?.formId,
        resumeFileName: trimmedResumeFileName || null,
        resumeDownloadUrl: resumeDownloadUrl || null,
        payloadBytes: webhookJson.length
      })
    }

    const res = await fetch(webhookTarget, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: webhookJson
    })

    if (!res.ok) {
      const text = await res.text().catch(() => '')
      console.error('n8n webhook failed:', res.status, text)
      return NextResponse.json(
        { error: 'Application could not be delivered. Please try again or email info@csdigitaltech.com.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json(
      {
        error:
          'Something went wrong while sending your application. Please try again or email info@csdigitaltech.com.'
      },
      { status: 500 }
    )
  }
}
