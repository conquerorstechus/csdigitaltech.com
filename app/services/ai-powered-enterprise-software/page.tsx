import { getComprehensiveMetadata, getStructuredData } from '@/lib/seo-metadata'
import AIEnterpriseSoftwareClient from './AIEnterpriseSoftwareClient'
import StructuredData from '@/components/ui/StructuredData'

export const metadata = getComprehensiveMetadata(
  'AI Enterprise & Custom Software Florida',
  'Build intelligent AI-powered enterprise software in Florida with scalable, adaptive solutions by ConvenantSoft Technologies. Automate workflows, personalize experiences, and drive smart decisions.',
  '/services/ai-powered-enterprise-software-in-Florida',
  '/Digitalcloud/business-brainstorming-graph-chart-report-data-concept_53876-31213.webp',
  [
    'ai-powered enterprise software',
    'custom enterprise software development',
    'ai enterprise applications',
    'machine learning enterprise',
    'predictive analytics software',
    'enterprise automation',
    'ai custom software',
    'intelligent enterprise apps',
    'ai-driven crm',
    'ai-powered erp',
    'business process automation',
    'ai legacy integration',
    'enterprise ai solutions',
    'ai software development florida',
    'custom ai applications',
    'ai decision support systems',
    'enterprise mobile apps',
    'flutter enterprise apps',
    'react native enterprise',
    'progressive web apps pwa',
    'ai workflow automation',
    'predictive maintenance ai',
    'ai fraud detection',
    'healthcare ai software',
    'banking ai solutions',
    'retail ai platform',
    'manufacturing ai systems',
    'ai nlp solutions',
    'tensorflow enterprise',
    'pytorch applications',
    'cloud-native ai software',
    'devops ai integration',
    'hipaa compliant ai',
    'gdpr ai solutions',
    'enterprise ai florida',
    'ai consulting services',
    'ai transformation',
    'intelligent automation',
    'ai recommendation engine',
    'chatbot enterprise'
  ],
  'Service'
)

export default function AIEnterpriseSoftware() {
  const structuredData = getStructuredData(
    'AI Enterprise & Custom Software Florida',
    'Build intelligent AI-powered enterprise software in Florida with scalable, adaptive solutions by ConvenantSoft Technologies. Automate workflows, personalize experiences, and drive smart decisions.',
    '/services/ai-powered-enterprise-software-in-Florida',
    'Service'
  )

  return (
    <div>
      <StructuredData data={structuredData} />
      <AIEnterpriseSoftwareClient />
    </div>
  )
}

