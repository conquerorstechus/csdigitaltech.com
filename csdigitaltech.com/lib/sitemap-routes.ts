/**
 * Indexable static pages for /sitemap.xml.
 * When you add a public page, add it here. Do not list checkout/success pages,
 * API routes, or anything marked noindex.
 */
export type SitemapRoute = { path: string; priority: number }

const high = (path: string): SitemapRoute => ({ path, priority: 0.8 })
const normal = (path: string): SitemapRoute => ({ path, priority: 0.6 })

export const STATIC_SITEMAP_ROUTES: SitemapRoute[] = [
  { path: '/', priority: 1 },

  // Core pages
  high('/services'),
  high('/portfolio'),
  high('/contact-us'),
  normal('/about-us'),
  normal('/careers'),
  normal('/blog'),
  normal('/privacy-policy'),

  // Landing pages
  high('/website-audit'),

  // Services
  high('/services/ai-learning'),
  high('/services/ai-ml-services'),
  high('/services/ai-powered-enterprise-software'),
  high('/services/branding-agency'),
  high('/services/cloud-services'),
  high('/services/custom-llms'),
  high('/services/data-analytics-bi'),
  high('/services/data-science'),
  high('/services/digital-cloud-solutions'),
  high('/services/it-consulting'),
  high('/services/software-development'),
  high('/services/testing-services'),

  // Development / solution pages
  high('/web-development'),
  high('/web-design'),
  high('/mobile-app-development'),
  high('/ai-enabled-infrastructure-support-services'),
  high('/ai-optimised-ecommerce-development'),
  high('/ai-powered-mmrag-services-florida'),
  high('/android-app-development-florida'),
  high('/business-intelligence'),
  high('/business-intelligence-development-company-in-florida'),
  high('/cloud-development-company-in-florida'),
  high('/cms'),
  high('/content-management-services-florida'),
  high('/custom-software-development-company-in-florida'),
  high('/data-science-services-florida'),
  high('/devops-development-company-in-florida'),
  high('/digital-strategy-services-florida'),
  high('/drupal-development-company-in-florida'),
  high('/flutter-app-development-company-in-florida'),
  high('/fullstack-development-company-florida'),
  high('/html5-development-company-in-florida'),
  high('/ionic-application-development-company-in-florida'),
  high('/ios-app-development-florida'),
  high('/iot-development-services-florida'),
  high('/laravel-development-company-in-florida'),
  high('/managed-services-florida'),
  high('/microservices-development-company-in-florida'),
  high('/progressive-web-application-development-company-in-florida'),
  high('/react-native-application-development-company-in-florida'),
  high('/wordpress-development-company'),

  // Digital marketing (/marketing)
  high('/marketing'),
  high('/marketing/pricing'),
  high('/marketing/services'),
  high('/marketing/services/posts'),
  high('/marketing/services/videos'),
  high('/marketing/seo'),
  high('/marketing/meta-ads'),
  high('/marketing/google-ads'),
  high('/marketing/instagram-growth'),
  high('/marketing/email-design'),
  high('/marketing/videos'),
  normal('/marketing/about'),
  normal('/marketing/blog'),
  normal('/marketing/contact'),
  normal('/marketing/help'),
  normal('/marketing/privacy'),
  normal('/marketing/terms'),
]
