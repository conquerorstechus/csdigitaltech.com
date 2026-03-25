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

export default nextConfig