import { NextResponse } from 'next/server'
import { getCareersResume } from '@/lib/careers-resume-store'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params
    const resume = await getCareersResume(token)

    if (!resume) {
      return new NextResponse('Resume not found or expired', { status: 404 })
    }

    return new NextResponse(resume.data, {
      headers: {
        'Content-Type': resume.mime,
        'Content-Disposition': `inline; filename="${resume.fileName}"`,
        'Cache-Control': 'private, max-age=3600'
      }
    })
  } catch (err) {
    console.error('Careers resume download error:', err)
    return new NextResponse('Unable to download resume', { status: 500 })
  }
}
