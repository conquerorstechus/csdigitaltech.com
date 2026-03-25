'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import CTASection from '../landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function CustomSoftwareDevelopmentClient() {
  const enhancements = [
    'Agile Methodology',
    'Metrics for Operations',
    'Metrics for Output',
    'Sample Value Metrics',
    'Cloud-based development',
    'Mobile application technology',
    'Sample Value Metrics',
    'Cloud Services & IT Support'
  ]
  const variety = [
    'Dashboards',
    'Visualizations',
    'Reporting',
    'Data mining  ',
    'ETL (extract-transform-load —tools that import data from one data store into another)',
    'OLAP (online analytical processing)'
  ]

  const Operations = ['Lead Time', 'Cycle Time', 'Burndown Charts']
  const Output = [
    'Throughput',
    'The technical quality or defect measurements or code coverage',
    'Agility Assessment Model'
  ]
  const Outcome = [
    'Team Morale',
    'Business Value',
    'Customer Satisfaction / NPS'
  ]

  const tools = [
    'Increased efficiency of operational processes. ',
    'Accurate tracking of sales, financial performance, and marketing.',
    'Clear benchmarks based on historical and current data. ',
    'Insight into customer behavior and shopping patterns.   ',
    'Analyses that can be shared in real-time and across departments. ',
    'Instant alerts about data anomalies even in customer issues.'
  ]
  return (
    <>
      <main className='bg-gray-50'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          {/* Red overlay */}
          <div className='absolute inset-0 bg-yellow-700 opacity-50'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              Custom Software Development
            </h1>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Heading */}
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
              Custom Software Development Company in Florida
            </h2>
            <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              At Conquerors, our team is handling different projects which are
              customized according to the requirement. Where customization is
              essential among the chief drivers of growth with ever-changing
              consumer preferences, Custom Software Application Development
              holds an important slot in this area. As a Custom Software
              Development Company, our proficiency traverse between multiple
              verticals with skills in PHP, Laravel, Java, J2EE, Spring boot,
              .Net core, C++, C#., SQL, NoSql, Web API, SOAP, Microservices,
              TIBCO, etc
            </p>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 '>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>
              {/* Left - Icons */}
              <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/1-min.webp'
                  alt='HTML CSS JS Badges'
                  className='w-full lg:h-80 object-contain rounded-lg'
                />
              </div>

              {/* Right - Text Content */}
              <div>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                  Agile Methodology in a Nutshell
                </h2>
                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                  Agile methodology is a project management approach that
                  emphasizes flexibility, collaboration, and customer
                  satisfaction. It involves breaking down projects into smaller,
                  manageable iterations called sprints, allowing teams to
                  respond quickly to changing requirements and deliver value
                  incrementally.
                </p>
                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8 mt-4'>
                  Our agile approach ensures that we can adapt to evolving
                  business needs while maintaining high quality standards and
                  meeting project deadlines effectively.
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16'>
              {/* Left Content */}
              <div className='space-y-12'>
                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    Metrics for Operations
                  </h2>
                  <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                    {Operations.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    Metrics for Output
                  </h2>
                  <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                    {Output.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    Metrics for Outcome
                  </h2>
                  <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                    {Outcome.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Content */}
              <div className='space-y-12'>
                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    Business Intelligence & Analytics
                  </h2>
                  <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                    Our business intelligence solutions provide comprehensive
                    insights into your business operations through advanced
                    analytics, reporting, and data visualization tools.
                  </p>
                  <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2 mt-4'>
                    {variety.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    Technology Enhancements
                  </h2>
                  <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                    {enhancements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    Key Benefits of Our Solutions
                  </h2>
                  <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                    {tools.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 '>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              <div>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6'>
                  Why Choose Custom Software Development?
                </h2>
                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                  <span className='font-semibold text-gray-700'>
                    Scalability:
                  </span>
                  Custom software always grows as an organization or business
                  grows and changes. Developers and Designers can assess future
                  needs as part of their requirements gathering. These factors can
                  be included in the application, rather than obtaining costs by
                  subscriptions to packaged applications or purchasing additional
                  licenses.
                </p>
                <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                  <span className='font-semibold text-gray-700'>
                    Profitability:
                  </span>
                  It's possible to make money using custom software development.
                  Depending on the terms and conditions of the project, businesses
                  that develop their own software and therefore be able to license
                  or sell it to other organizations.
                </p>
                <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                  <span className='font-semibold text-gray-700'>
                    Lower integration costs:
                  </span>
                  To reduce integration costs we focus on many things in them
                  majorly, including working with Clean data, Limited
                  customizations, Thinking forward, Building strong, and
                  Incorporating best practices.
                </p>
                <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                  <span className='font-semibold text-gray-700'>
                    Independence:
                  </span>
                  The advantages of being from this commercial software vendor are
                  cut in both ways. As an added advantage, organizations can avoid
                  price hikes for support and license — and even getting stuck
                  maintaining packaged software should the vendor terminate a
                  product or go out of business.
                </p>
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6'>
                  Custom Applications in different verticals
                </h2>
                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                  <span className='font-semibold text-gray-700'>
                    Educational Industry:
                  </span>
                  In this Project, we operated CRM for customer benefit which
                  includes communication, lead generation, campaign management,
                  etc.
                </p>
                <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                  <span className='font-semibold text-gray-700'>
                    Ecommerce Industry:
                  </span>
                  Our work success mostly occupies different industries where the
                  Ecommerce industry made us most successful, We accomplished many
                  projects successfully related to this industry where we used CRM
                  to make customers satisfied.
                </p>
              </div>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 mt-6'>
              <div className=' '>
                <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 '>
                  Supply Chain Management
                </h2>
                <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                  Supply chain management (SCM) represents an effort by the
                  suppliers to develop and implement supply chains that are as
                  economical and efficient as possible. There are a few stages
                  to be considered in order to explain SCM. Planning, Sourcing,
                  Manufacturing, Delivering, Returning.
                </p>
              </div>
              <div className=''>
                <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 '>
                  HRMS
                </h2>
                <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                  Human Resource Management System employee life cycle
                  management stages are as follows, The life cycle management
                  for an employee contains different stages like Recruitment,
                  Onboarding, Career Development, Employee Retaining, and
                  Off-boarding.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ManagedServices />
        <section className='py-12'>
          <FaqAccordion faqId='CustomSoftwareDevelopment' />
        </section>
        <CTASection />
      </main>
    </>
  )
}
