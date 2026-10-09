import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { getCareersResume, getCareersResumeApiPath } from '@/lib/careers-resume-store'

export const dynamic = 'force-dynamic'

function getSiteOrigin(headerList: Headers) {
  const hostHeader = headerList.get('x-forwarded-host') || headerList.get('host') || ''
  const host = hostHeader.split(',')[0].trim()
  const protocol = headerList.get('x-forwarded-proto') || (/^localhost|127\.0\.0\.1/i.test(host) ? 'http' : 'https')

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

export async function generateMetadata({
  params
}: {
  params: Promise<{ token: string }>
}): Promise<Metadata> {
  const { token } = await params
  const resume = await getCareersResume(token)

  return {
    title: resume?.fileName || 'Resume'
  }
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
      <main className='fixed inset-0 z-[10000] flex items-center justify-center bg-neutral-950 px-6 text-white'>
        <p className='text-center text-lg'>This resume is not available.</p>
      </main>
    )
  }

  const origin = getSiteOrigin(await headers())
  const sameOriginFile = origin ? `${origin}${getCareersResumeApiPath(token)}` : getCareersResumeApiPath(token)
  const directFile = resume.publicUrl?.startsWith('http') ? resume.publicUrl : sameOriginFile
  const viewerSrc = getViewerSrc(directFile, resume.fileName)

  return (
    <main className='fixed inset-0 z-[10000] flex flex-col bg-neutral-900'>
      <header className='flex items-center justify-between gap-4 border-b border-white/10 bg-neutral-950 px-4 py-3 text-white'>
        <p className='min-w-0 truncate text-sm font-semibold'>{resume.fileName}</p>
        <a
          href={sameOriginFile}
          target='_blank'
          rel='noopener noreferrer'
          className='shrink-0 text-sm font-medium text-red-300 hover:text-white'
        >
          Open file
        </a>
      </header>
      <iframe src={viewerSrc} title={resume.fileName} className='min-h-0 w-full flex-1 border-0 bg-white' />
    </main>
  )
}
