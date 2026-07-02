import { getComprehensiveMetadata, getStructuredData, getHomePageFAQSchema } from '@/lib/seo-metadata'
import HeroSection from './landingpage/HeroSection'
import AboutSection from './landingpage/AboutSection'
import FeaturesSection from './landingpage/FeaturesSection'
import FaqSection from './landingpage/FaqSection'
import TechnologySection from './landingpage/TechnologySection'
import ClientSection from './landingpage/ClientSection'
import CustomerSection from './landingpage/CustomerSection'
import CTASection from './landingpage/CTASection'
import Techno from './landingpage/Techno'
import StructuredData from '@/components/ui/StructuredData'

export const metadata = getComprehensiveMetadata(
  'Software Development Company Florida',
  'Expert Software development company in Florida. Cornerstone Digital Technologies powers business growth with advanced web, mobile development, AI/IoT, cloud tech, and IT consulting based in Tampa.',
  '/',
  '/images/home-banner.jpg',
  [
    'custom software development company in Florida',
    'digital cloud solutions services in Florida',
    'digital cloud solutions services',
    'cloud transformation services in Florida',
    'cloud transformation services',
    'it consulting services in Florida',
    'flutter app development company in Florida',
    'taxi booking software development company',
    'taxi booking software development company in Florida',
    'drupal web development services in Florida',
    'laravel web development company in Florida',
    'learning management system software in Florida',
    'exam engines softwares in Florida',
    'node js web development services in Florida',
    'mobile app development company',
    'web development services',
    'software development company USA',
    'custom software solutions',
    'enterprise software development',
    'full stack development services',
    'Custom Software Development Companies',
    'Custom Software Development Agency',
    'Web Development Services in USA',
    'Web Development Companies in USA',
    'Website Development Company in USA',
    'Top App Development Companies in USA',
    'React Native App Development Services',
    'IT Consulting Companies in USA',
    'Mobile App Development Companies in USA',
    'App Development Company in USA',
    'Top Mobile App Development Companies in USA',
    'US IT Consulting Companies',
    'IT Consulting Firms In USA',
    'Top IT Consulting Firms In USA',
    'Mobile App Development Companies in US',
    'React Native App Development Company',
    'Best Mobile App Development Services in USA',
    'Enterprise CRM Implementation Services',
    'Drupal Web Development services in USA'
  ],
  'Organization'
)

export default function HomePage () {
  const structuredData = getStructuredData(
    'Software Development Company Florida',
    'Expert Software development company in Florida. Cornerstone Digital Technologies powers business growth with advanced web, mobile development, AI/IoT, cloud tech, and IT consulting based in Tampa.',
    '/',
    'Organization'
  )
  const faqSchema = getHomePageFAQSchema()

  return (
    <div>
      <StructuredData data={structuredData} />
      <StructuredData data={faqSchema} />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      
      <ClientSection />
      <CTASection />
      <CustomerSection />
      <Techno />
      <FaqSection />
    </div>
  )
}
