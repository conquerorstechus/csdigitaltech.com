import { getComprehensiveMetadata, getWebDevelopmentServicesSchema, getWebDevelopmentServicesFAQSchema } from '@/lib/seo-metadata'
import StructuredData from '@/components/ui/StructuredData'
import WebDevelopmentClient from './WebDevelopmentClient'

export const metadata = getComprehensiveMetadata(
  'Web App Development Company Florida',
  'Partner with Cornerstone Digital Technologies to get high-quality custom web applications that drive growth, increase user engagement, and support your long-term digital strategy.',
  '/web-development',
  '/WebDevlopment/2020-08-05-3.jpg',
  [
    'web development company',
    'web development company near me',
    'web development company in america',
    'custom website design company',
    'website development company in usa',
    'web development company in usa',
    'website development company',
    'custom web development company in usa',
    'website development company in florida',
    'website programming company',
    'e commerce development company',
    'website design development company',
    'website app development company',
    'custom web development company usa',
    'custom web development company usa',
    'web development company in florida',
    'web app development services',
    'website development services in usa',
    'custom web app development services',
    'custom web development services',
    'custom web development services in usa',
    'custom web development services usa',
    'web application development services',
    'web application development services in usa',
    'custom website development service',
    'website app development services',
    'website design and development services',
    'services in web development',
    'custom web application development services',
    'custom website development services',
    'web design company florida',
    'web development firms',
    'website development firms',
    'web design firm',
    'custom web design firm',
    'web design firms in united states',
    'Web Application Development Company in USA',
    'website design agency in usa',
    'web development services in usa',
    'web application development agency',
    'web design and development agency',
    'agency for website development',
    'website designing agency',
    'web design agency los angeles',
    'website development agency usa',
    'top web design companies in usa',
    'best web development company in usa',
    'web development in usa',
    'web app development company usa',
    'top web development companies in usa',
    'website design and development company in usa',
    'website designing company usa',
    'web application development company usa',
    'web application development in usa',
    'best website development company in usa',
    'best web design company in usa',
    'web application development usa',
    'best web design and development company in usa',
    'web development agency in usa',
    'top 10 web development companies in usa',
    'web design and development usa',
    'web design and development services in usa',
    'website development service in usa',
    'best website development companies in usa',
    'web development services company in usa',
    'top website development companies in usa',
    'web design and development in usa',
    'web design and development services usa',
    'website developer in usa',
    'best web development agency in usa',
    'best web development services in usa',
    'custom website design agency',
    'top website development agency',
    'web design and development agency',
    'website design and development agency',
    'custom web design agency',
    'web development agency',
    'web design & development company in usa',
    'web design and development company in usa'
  ],
  'Service'
)

export default function WebDevelopment () {
  const structuredData = getWebDevelopmentServicesSchema()
  const faqSchema = getWebDevelopmentServicesFAQSchema()

  return (
    <>
      <StructuredData data={structuredData} />
      <StructuredData data={faqSchema} />
      <WebDevelopmentClient />
    </>
  )
}
