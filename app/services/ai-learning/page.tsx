import { getComprehensiveMetadata, getAILearningSolutionsFloridaSchema, getAILearningSolutionsFloridaFAQSchema } from '@/lib/seo-metadata'
import AILearningClient from './AILearningClient'
import StructuredData from '@/components/ui/StructuredData'

export const metadata = getComprehensiveMetadata(
  'Top AI Learning Solutions in Florida',
  'Transform education with AI-Powered Learning Solutions in Florida by ConvenantSoft Technologies, offering personalized, smart, and scalable learning experiences for institutions.',
  '/services/ai-learning-in-Florida',
  '/Digitalcloud/business-brainstorming-graph-chart-report-data-concept_53876-31213.webp',
  [
    'ai-powered learning',
    'ai education platform',
    'adaptive learning systems',
    'intelligent tutoring',
    'ai quiz generation',
    'personalized learning',
    'edtech ai solutions',
    'ai for education',
    'machine learning education',
    'educational ai platform',
    'ai learning management',
    'smart assessment tools',
    'ai tutoring platform',
    'educational technology Florida',
    'ai elearning solutions',
    'personalized education',
    'adaptive assessment',
    'ai content generation',
    'llm for education',
    'ai training platform',
    'corporate ai training',
    'k-12 ai solutions',
    'university ai platform',
    'edtech startup solutions',
    'ai learning Florida',
    'florida edtech company',
    'ai curriculum tools',
    'student engagement ai',
    'ai knowledge tracing'
  ],
  'Service'
)

export default function AILearning () {
  const structuredData = getAILearningSolutionsFloridaSchema()
  const faqSchema = getAILearningSolutionsFloridaFAQSchema()

  return (
    <div>
      <StructuredData data={structuredData} />
      <StructuredData data={faqSchema} />
      <AILearningClient />
    </div>
  )
}

