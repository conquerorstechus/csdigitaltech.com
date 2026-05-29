import { getComprehensiveMetadata, getSoftwareDevelopmentServicesFloridaSchema, getSoftwareDevelopmentServicesFloridaFAQSchema } from '@/lib/seo-metadata'
import SoftwareDevelopmentClient from './SoftwareDevelopmentClient'
import StructuredData from '@/components/ui/StructuredData'

export const metadata = getComprehensiveMetadata(
  'Leading Software Services in Florida',
  'Get reliable Software Development Services in Florida with ConvenantSoft Technologies, offering tailored, scalable, and high-performance solutions to drive your business growth.',
  '/services/software-development-in-florida',
  '/softwaredevelopment1.jpg',
  [
    'software development services',
    'custom software development services',
    'software development company near me',
    'software development company usa',
    'software development company in us',
    'custom software development agency',
    'it software development company',
    'software development company',
    'custom software development company',
    'mobile software development company',
    'bespoke software development company',
    'top software development company in usa',
    'custom software development company in usa',
    'software company florida',
    'software development usa',
    'software development services usa',
    'custom software development usa',
    'custom software development services usa',
    'php software development company',
    'software development it company',
    'top software development companies in usa',
    'software design company',
    'python software development company',
    'enterprise application development company',
    'custom mobile application development company',
    'agile software company',
    'agile development company',
    'mobile application software development company',
    'software development services usa',
    'enterprise software development services',
    'software development services company',
    'custom software development services company',
    'software development agency in usa',
    'custom software development companies in usa',
    'software development firms in usa',
    'custom software development services in usa',
    'top 10 software development companies in usa',
    'software engineering companies in usa',
    'software product development companies in usa',
    'custom software development in usa',
    'software development agency usa',
    'software development agency in usa'
  ],
  'Service'
)

export default function SoftwareDevelopment () {
  const structuredData = getSoftwareDevelopmentServicesFloridaSchema()
  const faqSchema = getSoftwareDevelopmentServicesFloridaFAQSchema()

  return (
    <div>
      <StructuredData data={structuredData} />
      <StructuredData data={faqSchema} />
      <SoftwareDevelopmentClient />
    </div>
  )
}
