import { getComprehensiveMetadata, getBrandingAgencyServicesSchema, getDigitalMarketingFAQSchema } from '@/lib/seo-metadata'
import StructuredData from '@/components/ui/StructuredData'
import BrandingAgencyClient from './BrandingAgencyClient'

export const metadata = getComprehensiveMetadata(
  'Branding Marketing Agency in Florida',
  'Discover expert branding agency services at ConvenantSoft Technologies—offering brand strategy, identity design, and digital branding solutions to elevate your business presence and impact.',
  '/services/branding-agency',
  '/WebDevlopment/smartphone-with-open-pages-landing-page_52683-22969.jpg',
  [
 "digital marketing services",
  "digital marketing and advertising agency",
  "digital marketing advertising agency",
  "white label marketing agency",
  "white label digital marketing agency",
  "top digital marketing agency",
  "top digital advertising agencies",
  "social media marketing agency for small business",
  "search engine optimization in digital marketing",
  "search engine optimization agencies",
  "real estate digital marketing agency",
  "internet marketing service",
  "ecommerce marketing agencies",
  "digital marketing in florida",
  "digital marketing for small business",
  "digital marketing for real estate",
  "digital marketing firms in florida",
  "digital marketing agency florida",
  "digital marketing agency for small business",
  "digital marketing agencies in florida",
  "digital advertising company in florida",
  "digital advertising agencies",
  "content marketing in digital marketing",
  "content marketing agencies",
  "best digital marketing agency in florida",
  "best digital marketing agency florida",
  "advertising agency in florida",
  "advertising agencies in florida",
  "ad agency in florida",
  "ad agencies in florida",
  "digital marketing agency in florida",
  "digital marketing services florida",
  "digital marketing services in florida",
  "marketing agencies in florida",
  "top digital marketing agency in florida",
  "social media marketing agency florida",
  "best digital marketing company in florida",
  "social media marketing agency in florida",
  "best digital marketing company florida",
  "best advertising agency in florida",
  "top ad agency in florida",
  "best ad agency in florida",
  "top advertising agency in florida",
  "best marketing agency in florida",
  "best digital marketing services in florida",
  "google ads agency in florida",
  "top marketing agencies in florida",
  "real estate digital marketing agency in florida",
  "social media agency florida",
  "creative agencies in florida"

  ],
  'Service'
)

export default function MobileAppDevelopment () {
  const structuredData = getBrandingAgencyServicesSchema()
  const faqSchema = getDigitalMarketingFAQSchema()

  return (
    <>
      <StructuredData data={structuredData} />
      <StructuredData data={faqSchema} />
      <BrandingAgencyClient />
    </>
  )
}
