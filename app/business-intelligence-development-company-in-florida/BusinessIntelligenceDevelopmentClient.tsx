'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import CTASection from '../landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function BusinessIntelligenceDevelopmentClient() {
  const enhancements = [
    'Connecting to multiple wide varieties of different data systems and data sets including databases and spreadsheets.',
    'Providing deep analysis, in helping users uncover hidden relationships and patterns of their data.',
    'Presenting answers in informative and compelling data visualizations like reports, charts, maps, and graphs.',
    'Enabling side-by-side comparisons of unique data under different scenarios.',
    'Providing drill-down, drill-up, and even drill-through features, enabling users to investigate different levels of data.'
  ]
  const variety = [
    'Dashboards',
    'Visualizations',
    'Reporting',
    'Data mining  ',
    'ETL (extract-transform-load —tools that import data from one data store into another)',
    'OLAP (online analytical processing)'
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
              Business Intelligence Development
            </h1>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Heading */}
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
              Best Business Intelligence Development Company in Florida
            </h2>
            <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              Our existence in the professional arena supplements the technical
              proficiency of all the client service teams to create powerful
              business solutions tailored according to the client's needs. We
              focus on clients. We take pride in our ability to provide all the
              quality services—whether they are owner-managed businesses or
              large multinational corporations. We are a multi-disciplined,
              multi-skilled firm, offering clients a wide range of
              industry-focused on most of the ways of business solutions. We
              recruit the brightest and the best—whatever their specialization
              is. Investing in our people means that our clients get world-class
              expertise to solve most of the most complex business problems.
              Business intelligence (BI) refers to the procedural and technical
              infrastructure that collects, analyzes, and stores the data
              produced by a company's activities. BI is a broad term that
              divides into data mining, process analysis, descriptive analytics,
              and performance benchmarking.
            </p>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 '>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>
              {/* Left - Icons */}
              <div className='flex justify-center'>
                <div className='relative w-full lg:h-80 h-64'>
                  <Image
                    src='/WebDevlopment/6_1.jpg'
                    alt='Business Intelligence Development'
                    title='Business Intelligence Solutions and Data Analytics'
                    fill
                    className='object-contain rounded-lg'
                  />
                </div>
              </div>

              {/* Right - Text Content */}
              <div>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                  Latest Enhancements in WordPress
                </h2>

                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                  Organizations benefit when they can fully assess the
                  operations and processes, understand their customers, measure
                  the market, and drive improvement. They need the right tools
                  to aggregate business information from anywhere, analyze it,
                  discover patterns and find all the solutions.
                </p>

                <div>
                  <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                    {enhancements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side Cards */}
              <div className='grid grid-cols-2 gap-6'>
                {[
                  {
                    label: 'Procurement',
                    img: '/WebDevlopment/startup-594090__340-2.jpg',
                    link: '/development'
                  },
                  {
                    label: 'Reporting',
                    img: '/WebDevlopment/student-849824__340-1.webp',
                    link: '/uiux'
                  },
                  {
                    label: 'Integration',
                    img: '/WebDevlopment/teamwork-3213924__340.webp',
                    link: '/integration'
                  },
                  {
                    label: 'Architecture',
                    img: '/WebDevlopment/images.jpg',
                    link: '/discovery'
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    // href={item.link}
                    className='relative group overflow-hidden rounded-md shadow hover:shadow-lg transition duration-300 h-40 sm:h-full'
                  >
                    <Image
                      src={item.img}
                      alt={item.label}
                      title={`${item.label} - Business Intelligence Service`}
                      fill
                      className='object-cover grayscale group-hover:grayscale-0 transition duration-500'
                    />
                    <div className='absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300 flex items-center justify-center'>
                      <span className='text-white font-bold text-lg sm:text-xl'>
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='mt-16 '>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                A variety of different types of tools fall under the process of
                business intelligence umbrella. The software selection service
                and Select Hub break down some of the most important categories
                and features:
              </p>

              <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                {variety.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className='mt-16 '>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                Benefits From Using Business Intelligence Tools
              </h2>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                Because business intelligence tools bring speed information
                analysis and performance evaluation, they're valuable in helping
                companies reduce all kinds of inefficiencies, flag potential
                problems, identify areas for future growth find new revenue
                streams. Some of the most specific benefits that businesses
                experience when using BI include:
              </p>

              <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                {tools.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ManagedServices />
        <section className='py-12'>
          <FaqAccordion faqId='BussinessInteligent' />
        </section>
        <CTASection />
      </main>
    </>
  )
}
