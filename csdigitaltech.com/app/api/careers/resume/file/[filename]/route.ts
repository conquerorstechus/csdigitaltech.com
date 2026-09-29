import { NextResponse } from 'next/server'
import { createCareersResumeDownload, getCareersResumeByStoredFileName } from '@/lib/careers-resume-store'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params
    const resume = await getCareersResumeByStoredFileName(filename)

    if (!resume) {
      return new NextResponse('Resume not found or expired', { status: 404 })
    }

    const download = createCareersResumeDownload(resume)
    return new NextResponse(download.body, { headers: download.headers })
  } catch (err) {
    console.error('Careers resume file download error:', err)
    return new NextResponse('Unable to download resume', { status: 500 })
  }
}
