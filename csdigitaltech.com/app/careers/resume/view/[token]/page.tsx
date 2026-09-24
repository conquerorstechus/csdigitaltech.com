import { headers } from 'next/headers'
import { getCareersResume, getCareersResumeApiPath } from '@/lib/careers-resume-store'

export const dynamic = 'force-dynamic'

function getSiteOrigin(headerList: Headers) {
  const host = headerList.get('x-forwarded-host') || headerList.get('host')
  const protocol = headerList.get('x-forwarded-proto') || 'https'

  if (host) {
    return `${protocol}://${host}`
  }

  return ''
}

function getViewerSrc(fileUrl: string, fileName: string) {
  const extension = fileName.split('.').pop()?.toLowerCase()

  if (extension === 'doc' || extension === 'docx') {
    return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`
  }

  return fileUrl
}

export default async function CareersResumeViewPage({
  params
}: {
  params: Promise<{ token: string }>
}) {
  const { token } = await params
  const resume = await getCareersResume(token)

  if (!resume) {
    return (
      <main className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
        <p className='text-gray-700 text-center'>Resume not found or expired.</p>
      </main>
    )
  }

  const origin = getSiteOrigin(await headers())
  const fileUrl = origin
    ? `${origin}${getCareersResumeApiPath(token)}`
    : getCareersResumeApiPath(token)
  const viewerSrc = getViewerSrc(fileUrl, resume.fileName)

  return (
    <main className='min-h-screen bg-gray-100'>
      <iframe
        src={viewerSrc}
        title={`Resume: ${resume.fileName}`}
        className='w-full min-h-screen border-0'
      />
    </main>
  )
}
