import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params

    if (!/^[a-f0-9]{48}\.(pdf|doc|docx)$/i.test(filename)) {
      return new NextResponse('Resume not found or expired', { status: 404 })
    }

    const token = filename.split('.')[0]
    return NextResponse.redirect(new URL(`/careers/resume/view/${token}`, request.url), 307)
  } catch (err) {
    console.error('Careers legacy resume redirect error:', err)
    return new NextResponse('Unable to open resume', { status: 500 })
  }
}
