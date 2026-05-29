import { getComprehensiveMetadata, getDataScienceServicesSchema, getDataScienceServicesFAQSchema } from '@/lib/seo-metadata'
import DataScienceClient from './DataScienceClient'
import StructuredData from '@/components/ui/StructuredData'

export const metadata = getComprehensiveMetadata(
  'AI-Driven Data Analytics Solutions',
  'Leverage ConvenantSoft Technologies’ AI-driven data analytics to build robust predictive models, real-time dashboards, and actionable BI solutions that drive business value.',
  '/services/data-science',
  '/Digitalcloud/business-brainstorming-graph-chart-report-data-concept_53876-31213.webp',
  [
    'data science services',
    'ai data science',
    'predictive analytics',
    'machine learning models',
    'data analytics services',
    'business intelligence solutions',
    'ai-driven analytics',
    'data engineering',
    'risk detection',
    'fraud detection',
    'customer analytics',
    'market insights',
    'data science company Florida',
    'ai analytics services',
    'data science consulting',
    'data science services in Florida',
    'data science services in USA',
    'predictive modeling',
    'statistical analysis',
    'big data analytics',
    'data mining services',
    'advanced analytics',
    'prescriptive analytics',
    'data visualization',
    'data science solutions',
    'enterprise data science',
    'ai forecasting',
    'intelligent automation',
    'data-driven insights',
    'analytics consulting'
  ],
  'Service'
)

export default function DataScience () {
  const structuredData = getDataScienceServicesSchema()
  const faqSchema = getDataScienceServicesFAQSchema()

  return (
    <div>
      <StructuredData data={structuredData} />
      <StructuredData data={faqSchema} />
      <DataScienceClient />
    </div>
  )
}

