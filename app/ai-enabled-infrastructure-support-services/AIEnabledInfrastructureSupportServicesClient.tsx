'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight, FaCubes } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import CTASection from '../landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function AIEnabledInfrastructureSupportServicesClient() {
  const aiInfrastructure = [
    'AI-powered server monitoring and predictive maintenance',
    'Intelligent resource allocation and capacity planning',
    'Automated infrastructure scaling based on demand patterns'
  ]
  const aiCapabilities = [
    'Machine Learning-based anomaly detection and alerting',
    'Automated incident response and self-healing systems',
    'Predictive analytics for infrastructure performance optimization',
    'AI-driven security threat detection and prevention',
    'Intelligent load balancing and traffic management',
    'Automated backup and disaster recovery solutions'
  ]

  const benefits = [
    'Reduced downtime through predictive maintenance and proactive monitoring',
    'Improved resource utilization with AI-driven optimization',
    'Enhanced security with intelligent threat detection and response',
    'Lower operational costs through automation and efficiency',
    'Scalable infrastructure that adapts to business needs',
    '24/7 intelligent monitoring and support'
  ]

  const implementation = [
    'AI infrastructure assessment and strategy development',
    'Custom AI solutions for infrastructure management',
    'Integration with existing IT infrastructure and tools'
  ]
  const optimization = [
    'Performance optimization with AI-driven resource management',
    'Cost optimization through intelligent capacity planning',
    'Infrastructure efficiency enhancement with machine learning'
  ]
  const monitoring = [
    'AI-powered monitoring dashboards and real-time alerts',
    'Predictive analytics for infrastructure health and performance',
    'Automated reporting and intelligent insights'
  ]
  const support = [
    'AI-powered helpdesk and ticketing systems',
    'Intelligent troubleshooting and automated resolution',
    'Proactive support with predictive issue detection'
  ]
  const security = [
    'AI-driven security monitoring and threat detection',
    'Automated security patch management and updates',
    'Intelligent access control and identity management'
  ]
  const maintenance = [
    'Continuous AI model training and improvement',
    'Regular infrastructure updates and optimization',
    'Performance monitoring and proactive maintenance'
  ]
  return (
    <>
      <main className='bg-gray-50'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          {/* Overlay */}
          <div className='absolute inset-0 bg-blue-700 opacity-50'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              AI-Enabled Infrastructure & Support Services
            </h1>
            <p className='lg:text-lg text-base font-bold drop-shadow-md tracking-wider mt-4'>
              "Conquerors Software Technologies" Intelligent Infrastructure Management for Modern Businesses
            </p>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Heading */}
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
              Best AI-Enabled Infrastructure & Support Services Company in Florida
            </h2>
            <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              At Conquerors, we leverage artificial intelligence to transform your IT infrastructure 
              management and support services. Our AI-enabled infrastructure solutions provide intelligent 
              monitoring, predictive maintenance, automated optimization, and proactive support to ensure 
              your systems run efficiently, securely, and reliably around the clock.
            </p>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  AI-Powered Infrastructure Management
                </h2>
                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8 mb-4'>
                  Our AI-enabled infrastructure services use machine learning and advanced analytics to 
                  monitor, manage, and optimize your IT infrastructure. We provide intelligent automation 
                  that reduces manual effort, prevents issues before they occur, and ensures optimal 
                  performance.
                </p>
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {aiInfrastructure.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  Advanced AI Capabilities
                </h2>
                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8 mb-4'>
                  We integrate cutting-edge AI technologies into your infrastructure management, enabling 
                  intelligent features that learn from system behavior, predict potential issues, and 
                  automate responses to ensure continuous operations and optimal performance.
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
                Key Benefits of AI-Enabled Infrastructure & Support Services
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
                  Intelligent Monitoring
                </h2>             
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {monitoring.map((item, index) => (
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

            <div className='mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  Security & Protection
                </h2>
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {security.map((item, index) => (
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
          </div>
        </section>

        <ManagedServices />
        <section className='py-12'>
          <FaqAccordion faqId='aienabledinfrastructuresupportservices' />
        </section>
        <CTASection />
      </main>
    </>
  )
}

