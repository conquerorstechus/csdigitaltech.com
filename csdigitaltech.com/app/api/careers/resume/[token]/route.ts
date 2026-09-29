import { NextResponse } from 'next/server'
import { createCareersResumeDownload, getCareersResume } from '@/lib/careers-resume-store'

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

    const download = createCareersResumeDownload(resume)
    return new NextResponse(download.body, { headers: download.headers })
  } catch (err) {
    console.error('Careers resume download error:', err)
    return new NextResponse('Unable to download resume', { status: 500 })
  }
}
