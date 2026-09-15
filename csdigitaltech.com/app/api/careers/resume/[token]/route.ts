import { NextResponse } from 'next/server'
import { getCareersResume } from '@/lib/careers-resume-store'

export const dynamic = 'force-dynamic'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params
    const resume = await getCareersResume(token)

    if (!resume) {
      return new NextResponse('Resume not found or expired', { status: 404 })
    }

    // Redirect old /api/careers/resume links to the direct PDF file URL.
    return NextResponse.redirect(new URL(resume.publicUrl, request.url), 307)
  } catch (err) {
    console.error('Careers resume download error:', err)
    return new NextResponse('Unable to download resume', { status: 500 })
  }
}
