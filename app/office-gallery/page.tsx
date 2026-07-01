import { getComprehensiveMetadata, getStructuredData } from '@/lib/seo-metadata'
import StructuredData from '@/components/ui/StructuredData'
import OfficeGalleryClient from './OfficeGalleryClient'

export const metadata = getComprehensiveMetadata(
  'Office Gallery - Cornerstone Digital Technologies',
  'Explore our modern office space, workspace, and company culture at Cornerstone Digital Technologies. See where innovation happens and meet our vibrant team environment.',
  '/office-gallery',
  '/About/image-box1.jpg',
  [
    'Cornerstone Digital Technologies technologies office',
    'office gallery',
    'company workspace',
    'office environment',
    'workplace photos',
    'company culture',
    'office space Florida',
    'tech company office',
    'modern workspace',
    'office tour'
  ],
  'Organization'
)

export default function OfficeGallery() {
  const structuredData = getStructuredData(
    'Office Gallery - Cornerstone Digital Technologies',
    'Explore our modern office space, workspace, and company culture at Cornerstone Digital Technologies. See where innovation happens and meet our vibrant team environment.',
    '/office-gallery',
    'Organization'
  )

  return (
    <div>
      <StructuredData data={structuredData} />
      <OfficeGalleryClient />
    </div>
  )
}

