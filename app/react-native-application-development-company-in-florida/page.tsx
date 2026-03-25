import { getComprehensiveMetadata, getStructuredData } from '@/lib/seo-metadata'
import StructuredData from '@/components/ui/StructuredData'
import ReactNativeApplicationClient from './ReactNativeApplicationClient'

export const metadata = getComprehensiveMetadata(
  'React Native Application Development Services in Florida ',
  'Conquerors Technologies is a React Native application development company in Florida offering mobile app solutions and branding agency services to help businesses grow with smart, scalable digital tools.',
  '/react-native-application-development-company-in-florida',
  '/WebDevlopment/smartphone-with-open-pages-landing-page_52683-22969.jpg',
  [

    "best mobile app development companies",
    "android app development company",
    "flutter app development company",
    "react native app development company",
    "react native app development services",
    "native application development",
    "top app development companies in usa",
    "app development companies in usa",
    "mobile app development company in usa",
    "top mobile app development companies",
    "web and app development company",
    "mobile app development company near me",
    "top mobile app development companies in usa",
    "healthcare app development company",
    "ecommerce app development company",
    "iot app development company",
    "android app development company in usa",
    "iphone app development company",
    "hybrid app development companies",
    "healthcare mobile app development company",
    "mobile app development company website",
    "android mobile app development company",
    "best android app development company",
    "enterprise mobile app development company",
    "top android app development company",
    "react native app development company in Florida",
    "react native app development services in Florida",
    "top app development companies in Florida",
    "app development companies in Florida",
    "mobile app development company in Florida",
    "top mobile app development companies in Florida",
    "android app development company in Florida",
  ],
  'Service'
)

export default function MobileAppDevelopment() {
  const structuredData = getStructuredData(
    'Mobile App Development Company - Custom Mobile Application Development Services',
    'Conquerors Technologies is a leading mobile app development company offering custom iOS, Android, React Native, Flutter, and cross-platform mobile application development services. Expert mobile developers for your business needs.',
    '/mobile-app-development',
    'Service'
  )

  return (
    <>
      <StructuredData data={structuredData} />
      <ReactNativeApplicationClient />
    </>
  )
}
