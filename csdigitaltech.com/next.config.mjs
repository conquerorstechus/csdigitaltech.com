import { withOpinlyConfig } from '@opinly/next/config'

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  // The /og link-preview route reads fonts and the logo from disk at request time.
  outputFileTracingIncludes: {
    '/og': ['./assets/fonts/**/*', './public/cornerstone-logo.png'],
  },

  async headers() {
    return [
      {
        source: '/uploads/careers/:path*',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'inline',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      {
        // The standalone demo page was replaced by the Google Calendar booking link.
        source: '/marketing/schedule-demo',
        destination: 'https://calendar.app.google/5WqZQDXD559r7Am1A',
        permanent: false,
      },
      // Retired portfolio projects: send old links (and their search rankings) to the portfolio index.
      ...[
        'vehicle-booking',
        'crm-saas',
        'online-exam',
        'graduates-portal',
        'learn-eazy',
        'stone-trading',
      ].map((slug) => ({
        source: `/portfolio/${slug}`,
        destination: '/portfolio',
        permanent: true,
      })),
    ]
  },

  async rewrites() {
    return [
      {
        source: '/services/software-development-in-florida',
        destination: '/services/software-development',
      },
      {
        source: '/services/digital-cloud-solutions-in-Florida',
        destination: '/services/digital-cloud-solutions',
      },
      {
        source: '/services/it-consulting-in-Florida',
        destination: '/services/it-consulting',
      },
      {
        source: '/services/testing-services-in-Florida',
        destination: '/services/testing-services',
      },
      {
        source: '/services/cloud-services-in-Florida',
        destination: '/services/cloud-services',
      },
      {
        source: '/services/ai-powered-enterprise-software-in-Florida',
        destination: '/services/ai-powered-enterprise-software',
      },
      {
        source: '/services/ai-ml-services-in-Florida',
        destination: '/services/ai-ml-services',
      },
      {
        source: '/services/custom-llms-in-Florida',
        destination: '/services/custom-llms',
      },
      {
        source: '/services/ai-learning-in-Florida',
        destination: '/services/ai-learning',
      },
      {
        source: '/services/data-analytics-bi-in-Florida',
        destination: '/services/data-analytics-bi',
      },
      {
        source: '/fullstack-development-company-florida',
        destination: '/fullstack-development-company-florida',
      },
      {
        source: '/drupal-development-company-in-Florida',
        destination: '/drupal-development-company-in-florida',
      },
      {
        source: '/html5-development-company-in-Florida',
        destination: '/html5-development-company-in-florida',
      },
    ]
  },
}

export default withOpinlyConfig({
  blogPath: '/blog',
  imagesPath: '/images',
  companyName: 'Cornerstone Digital Technologies',

  cdnNamespace:
    process.env.OPINLY_CDN_NAMESPACE || 'qjV-Vnn6mIXlr2x3a1dgQ',

  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || 'https://csdigitaltech.com',

  unoptimizedImages: true,
})(nextConfig)