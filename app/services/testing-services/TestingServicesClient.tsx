'use client'

import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'
import {
  HiOutlinePlay,
  HiOutlineBeaker,
  HiOutlineShieldCheck,
  HiOutlineCpuChip
} from 'react-icons/hi2'
import FaqAccordion from '@/components/faq/FaqAccordion'
import CTANewSection from '@/components/cta/cta-newsection'

export default function TestingServicesClient() {
  const testingServices = [
    {
      title: 'UI Testing',
      desc: 'UI Testing, Automation using Selenium WebDriver, Browser Compatibility testing, Web & Mobile Responsive Testing etc.,',
      icon: (
        <HiOutlinePlay className='w-10 h-10 text-gray-800  transition-colors duration-300' />
      )
    },
    {
      title: 'Functional Testing',
      desc: 'Features and Interactions testing, API testing, Database testing, Mobile Testing and Agile Exploratory testing etc.,',
      icon: (
        <HiOutlineBeaker className='w-10 h-10 text-gray-800  transition-colors duration-300' />
      )
    },
    {
      title: 'Non-Functional Testing',
      desc: 'Performance Testing, Localization testing, Security Testing etc.,',
      icon: (
        <HiOutlineShieldCheck className='w-10 h-10 text-gray-800  transition-colors duration-300' />
      )
    },
    {
      title: 'Automation Testing',
      desc: 'Skilled in Functional & Performance test automation tools like Selenium WebDriver, Test NG, Postman, JMeter and Katalon etc.,',
      icon: (
        <HiOutlineCpuChip className='w-10 h-10 text-gray-800  transition-colors duration-300' />
      )
    }
  ]

  return (
    <>
      <main className='bg-gray-50'>
        <section className="relative text-white py-12 md:py-20 lg:py-24 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          {/* Red overlay */}
          <div className='absolute inset-0 bg-orange-800 opacity-60'></div>
          {/* Content */}
          <div className='relative z-10 px-4'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold drop-shadow-md tracking-wider leading-tight'>
              QA / Testing Services
            </h1>
          </div>
        </section>

        <section className='py-12 md:py-16 px-4'>
          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
            {/* Left Image */}
            <div className='flex justify-center order-2 md:order-1'>
              <img
                src='/Digitalcloud/testing-services.jpg'
                alt='Cloud Security'
                className='w-full max-w-sm md:max-w-md rounded-lg shadow-md object-cover transform hover:scale-105 transition-transform duration-300'
              />
            </div>

            {/* Right Text */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight'>
                Software Testing Services
              </h2>
              <div className='space-y-4 text-gray-800 text-sm sm:text-base leading-7 md:leading-8 tracking-wide text-justify md:text-left'>
                <p>
                  <span className='font-semibold'>ConvenantSoft</span> offers various
                  services in testing by designing an engagement model that works
                  best for customer business needs. We take total responsibility
                  for all test activities and deliver high quality test services
                  through our skilled engineers and using industry standard
                  testing techniques and tools.
                </p>
                <p>
                  We assure organizations to achieve
                  faster time-to-market with high quality software and help them
                  to reduce development and maintenance costs.
                </p>
                <p>
                  We perform comprehensive digital testing across digital products
                  and applications consisting of digital marketing, web portals,
                  web content, digital assets, web analytics, and the entire
                  digital ecosystem that includes cloud, mobility and big data.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='max-w-6xl mx-auto px-4 py-8 md:py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
            {testingServices.map((item, idx) => (
              <div
                key={idx}
                className='flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-6 rounded-lg border bg-white transition-all duration-300 hover:shadow-2xl group'
              >
                <div className="flex-shrink-0 bg-gray-50 p-3 rounded-full group-hover:bg-orange-50 transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className='text-lg font-bold text-gray-800 group-hover:text-orange-800 transition-colors duration-300'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 mt-2 text-sm leading-6'>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className='py-12 md:py-16 px-4 max-w-6xl mx-auto bg-white md:bg-transparent rounded-xl shadow-sm md:shadow-none'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center md:text-left'>
            Best Practices in QA:
          </h2>
          <p className='text-gray-700 mb-8 text-center md:text-left text-sm sm:text-base leading-relaxed'>
            We have successfully completed multiple testing projects across
            various domains by following best practices and well versed with
            manual and automation testing techniques:
          </p>
          <div className='grid grid-cols-1 gap-4'>
            <ul className='space-y-4 text-gray-700 text-sm sm:text-base'>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                <span>
                  <span className='font-bold text-gray-900'>High Quality</span>{' '}
                  – Reduced Regression issues and prevent defects in the production.
                  Specialized work force strive towards product quality and process
                  improvement.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                <span>
                  <span className='font-bold text-gray-900'>
                    Faster Cycle Time
                  </span>{' '}
                  – Agile testing techniques for early detection of issues Re-usable
                  test automation frameworks for quick test execution.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                <span>
                  <span className='font-bold text-gray-900'>
                    Cost Optimization
                  </span>{' '}
                  – Cost saving by preventing production issue cost reduction
                  through automation.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                <span>
                  <span className='font-bold text-gray-900'>
                    Process Improvement
                  </span>{' '}
                  – Process improvements for defect prevention, code cleanup and
                  performance fine tuning.
                </span>
              </li>
            </ul>
          </div>
        </section>
        <CTANewSection />
        <section className='py-12 px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 text-gray-800'>
              Frequently Asked Questions
            </h2>
            <FaqAccordion faqId='TestingService' />
          </div>
        </section>
      </main>
    </>
  )
}
