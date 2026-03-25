import { getComprehensiveMetadata, getDataAnalyticsBIFloridaSchema, getDataAnalyticsBIFloridaFAQSchema } from '@/lib/seo-metadata'
import DataAnalyticsBIClient from './DataAnalyticsBIClient'
import StructuredData from '@/components/ui/StructuredData'

export const metadata = getComprehensiveMetadata(
  'AI Data & BI Solutions in Florida',
  'Unlock valuable insights with AI Data Analytics & BI experts in Florida. Conquerors Technologies delivers smart, scalable, data-driven solutions to power your business growth.',
  '/services/data-analytics-bi-in-Florida',
  '/Digitalcloud/business-brainstorming-graph-chart-report-data-concept_53876-31213.webp',
  [
    'data analytics services',
    'business intelligence solutions',
    'power bi consulting',
    'tableau consulting',
    'data visualization services',
    'predictive analytics',
    'real-time dashboards',
    'big data analytics',
    'data warehousing',
    'ETL services',
    'data analytics company Florida',
    'BI consulting services',
    'data science services',
    'analytics consulting',
    'business intelligence consulting',
    'data analytics services in Florida',
    'data analytics services in USA',
    'business intelligence company Florida',
    'data visualization experts',
    'advanced analytics services',
    'enterprise analytics solutions',
    'self-service analytics',
    'embedded analytics',
    'cloud analytics services',
    'data-driven insights',
    'reporting and analytics',
    'KPI dashboards',
    'executive dashboards',
    'operational analytics',
    'customer analytics'
  ],
  'Service'
)

export default function DataAnalyticsBI () {
  const structuredData = getDataAnalyticsBIFloridaSchema()
  const faqSchema = getDataAnalyticsBIFloridaFAQSchema()

  return (
    <div>
      <StructuredData data={structuredData} />
      <StructuredData data={faqSchema} />
      <DataAnalyticsBIClient />
    </div>
  )
}

