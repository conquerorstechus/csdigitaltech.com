import { getComprehensiveMetadata, getAIMLServicesFloridaSchema, getAIMLServicesFloridaFAQSchema } from '@/lib/seo-metadata'
import AIMLServicesClient from './AIMLServicesClient'
import StructuredData from '@/components/ui/StructuredData'

export const metadata = getComprehensiveMetadata(
  'AI & ML Services in Florida ',
  'Drive business growth in Florida with Cornerstone Digital Technologies’ AI & ML expertise, providing smart automation, cost reduction, and improved customer interactions. Explore tailored solutions today.',
  '/services/ai-ml-services-in-Florida',
  '/Digitalcloud/business-brainstorming-graph-chart-report-data-concept_53876-31213.webp',
  [
    'ai services',
    'machine learning services',
    'artificial intelligence consulting',
    'deep learning solutions',
    'natural language processing',
    'computer vision services',
    'predictive analytics',
    'ai model development',
    'machine learning consulting',
    'ai integration services',
    'neural networks',
    'ai automation',
    'ml model training',
    'ai development company',
    'custom ai solutions',
    'enterprise ai services',
    'ai ml services in Florida',
    'ai services in USA',
    'machine learning company Florida',
    'ai consulting firms USA',
    'artificial intelligence development',
    'ml consulting services',
    'ai for business',
    'machine learning solutions',
    'ai transformation services',
    'ai software development',
    'intelligent automation services',
    'cognitive computing services',
    'ai cloud services',
    'generative ai services'
  ],
  'Service'
)

export default function AIMLServices () {
  const structuredData = getAIMLServicesFloridaSchema()
  const faqSchema = getAIMLServicesFloridaFAQSchema()

  return (
    <div>
      <StructuredData data={structuredData} />
      <StructuredData data={faqSchema} />
      <AIMLServicesClient />
    </div>
  )
}

