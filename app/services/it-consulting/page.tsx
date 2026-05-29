import { getComprehensiveMetadata, getAITConsultingServicesFloridaSchema, getAITConsultingServicesFloridaFAQSchema } from '@/lib/seo-metadata'
import ITConsultingClient from './ITConsultingClient'
import StructuredData from '@/components/ui/StructuredData'

export const metadata = getComprehensiveMetadata(
  'IT Consulting Services in Florida',
  'Unlock AI-powered IT consulting in Florida with ConvenantSoft Technologies. Custom solutions from automation to ERP. Boost efficiency today with a free consult!',
  '/services/it-consulting-in-Florida',
  '/Digitalcloud/business-brainstorming-graph-chart-report-data-concept_53876-31213.webp',
  [
    'it consulting services',
    'technology consulting',
    'salesforce consulting',
    'netsuite consulting',
    'sap consulting',
    'data science consulting',
    'machine learning consulting',
    'marketing automation',
    'qa testing services',
    'digital transformation consulting',
    'it strategy consulting',
    'technology advisory',
    'software consulting',
    'enterprise consulting',
    'business intelligence consulting',
    'performance engineering',
    'ai consulting services',
    'analytics consulting',
    'crm consulting',
    'offshore it consulting',
    'it consulting services in Florida',
    'it consulting services',
    'it consulting companies in Florida',
    'software companies in Florida',
    'software company in Florida',
    'bespoke software development company in Florida',
    'flutter app development company in Florida',
    'flutter app development services in Florida',
    'flutter development company in Florida',
    'IT Consulting Companies in USA',
    'Mobile App Development Companies in USA',
    'App Development Company in USA',
    'Top Mobile App Development Companies in USA',
    'US IT Consulting Companies',
    'Top Mobile App Development Company USA',
    'IT Consulting Firms In USA',
    'Top IT Consulting Firms In USA',
    'Mobile App Development Companies in US',
    'Best Mobile App Development Services in USA',
    'Enterprise CRM Implementation Services',
    'IT Consulting Services In USA'
  ],
  'Service'
)

export default function ITConsulting () {
  const structuredData = getAITConsultingServicesFloridaSchema()
  const faqSchema = getAITConsultingServicesFloridaFAQSchema()

  return (
    <div>
      <StructuredData data={structuredData} />
      <StructuredData data={faqSchema} />
      <ITConsultingClient />
    </div>
  )
}
