import { getComprehensiveMetadata, getStructuredData } from '@/lib/seo-metadata'
import StructuredData from '@/components/ui/StructuredData'
import OurTeamClient from './OurTeamClient'

export const metadata = getComprehensiveMetadata(
  'Our Team - Conquerors Technologies',
  'Meet the talented team behind Conquerors Technologies. Our experienced professionals and leadership team driving innovation in software development, digital solutions, and technology consulting.',
  '/our-team',
  '/About/Artboard-–-21.webp',
  [
    'conquerors technologies team',
    'software development team',
    'technology team Florida',
    'IT professionals',
    'software engineers',
    'development team',
    'technology experts',
    'conquerors team members',
    'leadership team',
    'CTO team',
    'CEO team',
    'software development professionals'
  ],
  'Organization'
)

export default function OurTeam() {
  const structuredData = getStructuredData(
    'Our Team - Conquerors Technologies',
    'Meet the talented team behind Conquerors Technologies. Our experienced professionals and leadership team driving innovation in software development, digital solutions, and technology consulting.',
    '/our-team',
    'Organization'
  )

  return (
    <div>
      <StructuredData data={structuredData} />
      <OurTeamClient />
    </div>
  )
}

