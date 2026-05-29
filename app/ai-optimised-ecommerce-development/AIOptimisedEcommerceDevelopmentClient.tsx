'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight, FaCubes } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import CTASection from '../landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function AIOptimisedEcommerceDevelopmentClient() {
  const aiFeatures = [
    'AI-powered product recommendations based on user behavior',
    'Intelligent inventory management and demand forecasting',
    'Automated pricing optimization and dynamic pricing strategies'
  ]
  const aiCapabilities = [
    'Personalized shopping experiences with AI-driven product suggestions',
    'Chatbot integration for 24/7 customer support',
    'Visual search and image recognition for product discovery',
    'Predictive analytics for sales forecasting and trend analysis',
    'AI-driven fraud detection and security measures',
    'Automated customer segmentation and targeted marketing'
  ]

  const benefits = [
    'Increased conversion rates through personalized shopping experiences',
    'Improved customer satisfaction with AI-powered recommendations',
    'Better inventory management with predictive analytics',
    'Reduced operational costs through automation',
    'Enhanced security with AI-driven fraud detection',
    'Scalable solutions that grow with your business'
  ]

  const implementation = [
    'AI integration strategy and eCommerce platform selection',
    'Custom AI module development for your eCommerce platform',
    'Third-party AI service integration (recommendation engines, chatbots)'
  ]
  const optimization = [
    'Performance optimization with AI-driven caching and CDN',
    'Product catalog optimization using machine learning',
    'User experience enhancement through AI personalization'
  ]
  const analytics = [
    'AI-powered analytics and reporting dashboards',
    'Predictive analytics for sales and customer behavior',
    'Real-time insights for inventory and pricing decisions'
  ]
  const maintenance = [
    'Continuous AI model training and improvement',
    'Regular updates and security patches',
    'Performance monitoring and optimization'
  ]
  const integration = [
    'Integration with popular eCommerce platforms (Magento, Shopify, WooCommerce)',
    'Custom AI solutions tailored to your business needs',
    'Seamless integration with payment gateways and shipping providers'
  ]
  const support = [
    'AI-powered customer support chatbots',
    'Intelligent order management and fulfillment',
    '24/7 technical support and maintenance'
  ]
  return (
    <>
      <main className='bg-gray-50'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          {/* Overlay */}
          <div className='absolute inset-0 bg-purple-700 opacity-50'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              AI-Optimised eCommerce Development
            </h1>
            <p className='lg:text-lg text-base font-bold drop-shadow-md tracking-wider mt-4'>
              "Convenantsoft  Transforming Online Shopping with AI-Powered Solutions
            </p>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Heading */}
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
              Best AI-Optimised eCommerce Development Company in Florida
            </h2>
            <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              At ConvenantSoft, we combine cutting-edge artificial intelligence technologies with robust 
              eCommerce platforms to create intelligent, personalized, and highly efficient online stores. 
              Our AI-optimised eCommerce development services help businesses increase sales, improve 
              customer experiences, and optimize operations through data-driven insights and automation.
            </p>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  AI-Powered Shopping Experience
                </h2>
                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8 mb-4'>
                  Our AI-optimised eCommerce solutions leverage machine learning and advanced algorithms 
                  to create personalized shopping experiences, intelligent product recommendations, and 
                  automated processes that drive conversions and customer satisfaction.
                </p>
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {aiFeatures.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  Advanced AI Capabilities
                </h2>
                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8 mb-4'>
                  We integrate state-of-the-art AI technologies into your eCommerce platform, enabling 
                  intelligent features that learn from customer behavior, optimize product discovery, and 
                  provide actionable insights for your business growth.
                </p>
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {aiCapabilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-12 lg:mt-16'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Key Benefits of AI-Optimised eCommerce Development
              </h2>
              <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                {benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className='mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  AI Implementation
                </h2>
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {implementation.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  Performance Optimization
                </h2>
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {optimization.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  AI Analytics & Insights
                </h2>             
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {analytics.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  Ongoing Maintenance
                </h2>
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {maintenance.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  Platform Integration
                </h2>
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {integration.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  AI-Powered Support
                </h2>
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {support.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ManagedServices />
        <section className='py-12'>
          <FaqAccordion faqId='aioptimisedecommercedevelopment' />
        </section>
        <CTASection />
      </main>
    </>
  )
}

