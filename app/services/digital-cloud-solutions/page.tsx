import { getComprehensiveMetadata, getDigitalCloudSolutionsFloridaSchema, getDigitalCloudSolutionsFloridaFAQSchema } from '@/lib/seo-metadata'
import DigitalCloudSolutionsClient from './DigitalCloudSolutionsClient'
import StructuredData from '@/components/ui/StructuredData'

export const metadata = getComprehensiveMetadata(
  'Digital & Cloud Solutions in Florida',
  'Power your business with ConvenantSoft Technologies—Florida’s top choice for secure, scalable, and high-performance digital and cloud solutions that drive real transformation.',
  '/services/digital-cloud-solutions-in-Florida',
  '/Digitalcloud/cloud-computing-banner-background-smart-city_53876-108504.webp',
  [
    'digital cloud solutions',
    'aws cloud services',
    'azure cloud services',
    'google cloud services',
    'cloud transformation',
    'microservices development',
    'iot middleware',
    'cloud migration services',
    'digital transformation',
    'cloud infrastructure',
    'api integrations',
    'cloud consulting',
    'aws migration',
    'azure migration',
    'google cloud migration',
    'cloud security',
    'iot applications',
    'blockchain solutions',
    'ai driven solutions',
    'big data management',
    'digital engineering services',
    'cloud transformation services',
    'cloud-based application development',
    'cloud computing application development',
    'business applications of cloud computing',
    'cloud application development',
    'cloud-based software development',
    'best cloud development platforms',
    'cloud-based saas application',
    'cloud application development services',
    'saas development platforms',
    'cloud computing for businesses',
    'cloud-based web application development',
    'cloud application development & consulting services',
    'custom cloud application development services',
    'best cloud-based application development in Florida',
    'top cloud application development in Florida',
    'cloud application development company',
    'best cloud application development services in Florida',
    'cloud development services',
    'best cloud app development platforms in Florida'
  ],
  'Service'
)

export default function DigitalCloudSolutions () {
  const structuredData = getDigitalCloudSolutionsFloridaSchema()
  const faqSchema = getDigitalCloudSolutionsFloridaFAQSchema()

  return (
    <div>
      <StructuredData data={structuredData} />
      <StructuredData data={faqSchema} />
      <DigitalCloudSolutionsClient />
    </div>
  )
}
