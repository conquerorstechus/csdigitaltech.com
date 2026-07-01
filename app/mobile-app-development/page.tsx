import { getComprehensiveMetadata, getMobileAppDevelopmentServicesSchema, getMobileAppDevelopmentServicesFAQSchema } from '@/lib/seo-metadata'
import StructuredData from '@/components/ui/StructuredData'
import MobileAppDevelopmentClient from './MobileAppDevelopmentClient'

export const metadata = getComprehensiveMetadata(
  'Mobile App Development Company Florida',
  'Grow your business with Cornerstone Digital Technologies — a top mobile app development company that builds high-performing, engaging apps to delight your users and accelerate success.',
  '/mobile-app-development',
  '/WebDevlopment/smartphone-with-open-pages-landing-page_52683-22969.jpg',
  [
    'custom mobile app development company',
    'android app development agency',
    'mobile app development agency',
    'mobile application development agency',
    'custom application development agency',
    'custom mobile application development agency',
    'mobile app development agency usa',
    'application development agency',
    'app development agency usa',
    'mobile app development agency in usa',
    'mobile app development company in usa',
    'iphone app development company',
    'mobile application design company',
    'ios mobile app development company',
    'top rated mobile app development company',
    'ios app development company',
    'mobile application development company',
    'mobile app development company',
    'app development company',
    'application development company',
    'android app development company',
    'cross platform app development company',
    'app development company in us',
    'mobile application development company in usa',
    'app development company in usa',
    'application development company in usa',
    'mobile app development company united states',
    'ios mobile app development services',
    'mobile app development services in usa',
    'mobile app development services usa',
    'App Development Services USA',
    'application development services usa',
    'android application development services',
    'ios app development services',
    'mobile app development services',
    'react native application development services',
    'android app development services',
    'Mobile App Development in Florida',
    'mobile app development company in florida',
    'Mobile App Development in US',
    'ai app development company in usa',
    'app development usa',
    'leading mobile app development company',
    'cloud app development company',
    'lms agency',
    'lms development agency',
    'learning management system devlopment company',
    'lms agency in florida',
    'lms agency in usa',
    'lms development company in usa',
    'Best Mobile App Development Company in USA',
    'ios App Development Company in USA',
    'android development company in usa',
    'react native app development company in usa',
    'iot app development company in usa',
    'top mobile app development companies in usa',
    'mobile app development company in usa',
    'top app development companies in usa',
    'app developers in usa',
    'mobile app developers usa',
    'android development company in usa',
    'android app development company in usa',
    'top mobile app development companies usa',
    'android app development usa',
    'android app development services in usa',
    'android app development agency usa',
    'best app developers in usa',
    'android app developers in usa',
    'top app developers in usa',
    'top mobile app developers in usa',
    'mobile application development services usa',
    'app development services in usa',
    'mobile application development services in usa',
    'best app development companies in usa',
    'best mobile app development company in usa',
    'mobile development in usa',
    'best mobile app development company usa',
    'best android app development company in usa',
    'android app development services usa',
    'android app development in usa',
    'android app development agency usa',
    'top app developers usa',
    'android app development services in usa'
  ],
  'Service',

)

export default function MobileAppDevelopment() {
  const structuredData = getMobileAppDevelopmentServicesSchema()
  const faqSchema = getMobileAppDevelopmentServicesFAQSchema()

  return (
    <>
      <StructuredData data={structuredData} />
      <StructuredData data={faqSchema} />
      <MobileAppDevelopmentClient />
    </>
  )
}
