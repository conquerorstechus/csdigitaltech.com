import { getComprehensiveMetadata, getCustomLLMsFloridaSchema, getCustomLLMsFloridaFAQSchema } from '@/lib/seo-metadata'
import CustomLLMsClient from './CustomLLMsClient'
import StructuredData from '@/components/ui/StructuredData'

export const metadata = getComprehensiveMetadata(
  'AI Custom LLMs for Enterprises Florida ',
  'AI-driven custom LLM integration boosts Florida enterprises efficiency and customer engagement, powered by ConvenantSoft expertise in intelligent automation and real-time insights',
  '/services/custom-llms-in-Florida',
  '/Digitalcloud/business-brainstorming-graph-chart-report-data-concept_53876-31213.webp',
  [
    'custom llm services',
    'enterprise llm integration',
    'ai chatbot development',
    'large language models',
    'llm customization',
    'openai integration',
    'llm fine-tuning',
    'enterprise ai solutions',
    'custom ai models',
    'llm deployment',
    'conversational ai',
    'intelligent chatbots',
    'document ai',
    'ai automation',
    'llm services Florida',
    'custom llm company',
    'enterprise ai integration',
    'gpt integration',
    'llama integration',
    'hugging face models',
    'ai-powered assistants',
    'knowledge base ai',
    'multilingual ai',
    'secure ai deployment',
    'llm consulting',
    'ai process automation',
    'enterprise chatbots',
    'custom ai integration',
    'llm implementation'
  ],
  'Service'
)

export default function CustomLLMs () {
  const structuredData = getCustomLLMsFloridaSchema()
  const faqSchema = getCustomLLMsFloridaFAQSchema()

  return (
    <div>
      <StructuredData data={structuredData} />
      <StructuredData data={faqSchema} />
      <CustomLLMsClient />
    </div>
  )
}

