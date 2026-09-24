import { NextResponse } from 'next/server'
import { getCareersResumeApiPath, storeCareersResume } from '@/lib/careers-resume-store'
import { buildCareersWebhookPayload, wrapCareersWebhookPayload } from '@/lib/careers-webhook-payload'
import { validateCareersApplication } from '@/lib/careers-verification'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const WEBHOOK_URL =
  process.env.CONTACT_FORM_WEBHOOK_URL ??
  'https://n8n.srv1393511.hstgr.cloud/webhook/284ee9f5-ab3b-4d07-a915-d29e4d1414aa'

const CAREERS_WEBHOOK_URL =
  process.env.CAREERS_FORM_WEBHOOK_URL ??
  'https://n8n.srv1393511.hstgr.cloud/webhook/27a463a5-c55f-48aa-a0c4-8c3b4cec8cba'

function getSiteOrigin(request: Request) {
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host')
  const protocol = request.headers.get('x-forwarded-proto') || 'https'

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
        resumeLink,
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
    const trimmedWhyCornerstone = String(whyCornerstone || message || '').trim()
    const trimmedResumeLink = String(resumeLink || '').trim()
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
        resumeDownloadUrl = `${getSiteOrigin(request)}${getCareersResumeApiPath(storedResume.token)}`
      } catch (storageError) {
        console.error('Careers resume storage failed:', storageError)
        if (!resumeDownloadUrl) {
          return NextResponse.json(
            {
              error:
                'Your resume could not be saved. Please use a Google Drive / Dropbox / OneDrive link instead.',
              field: 'resume'
            },
            { status: 500 }
          )
        }
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
