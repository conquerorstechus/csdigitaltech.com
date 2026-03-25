'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import CTASection from '../landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function ContentManagementServicesClient() {
  const enhancements = [
    'Optimizely the Content Cloud CMS',
    'Drupal',
    'Joomla',
    'Wix',
    'Magento',
    'Squarespace',
    'WordPress',
    'Squarespace'
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
      <main className='bg-white'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          {/* Red overlay */}
          <div className='absolute inset-0 bg-yellow-700 opacity-50'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              Content Management System
            </h1>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 '>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>
              {/* Left - Icons */}
              <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/10-2-min.jpg'
                  alt='HTML CSS JS Badges'
                  className='w-full lg:h-80 object-contain rounded-lg'
                />
              </div>

              {/* Right - Text Content */}
              <div>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                  Best Content Management Services we Provide
                </h2>

                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                  At Conquerors, we help clients to achieve their business
                  objectives by turning the challenge of producing and managing
                  the best quality content they require into an opportunity for
                  their business to excel. We focus on creating
                  professional-quality content that supports our clients'
                  products, software, and processes, as well as content
                  management solutions, to organize, translate, optimize,
                  synchronize, secure, and publish everything.
                </p>
                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                  Our pledge is to provide every client with the best skillful
                  project team, led by a Conquerors Software technologies
                  Content Solutions project manager, that also learns about
                  their unique business needs. The project manager will always
                  ensure that we deliver the content solutions as required by
                  the client on time and on budget, supported by a project team
                  comprised of most professionals who possess the best requisite
                  skills and experience.
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8'>
              {/* Left Content */}
              <div className='space-y-12'>
                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    CMS examples
                  </h2>

                  <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                    While there are hundreds of different Content Management
                    Systems platforms, better some of the more popular Content
                    Management Systems providers are listed below:
                  </p>
                  <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2 grid grid-cols-1 lg:grid-cols-2'>
                    {enhancements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side Cards */}
              <div>
                <div className='flex justify-center'>
                  <img
                    src='/WebDevlopment/123-1-min.jpg'
                    alt='HTML CSS JS Badges'
                    className='w-full h-96 object-contain rounded-lg'
                  />
                </div>
              </div>
            </div>

            <div className='mt-4 '>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                A content management system is for creating, optimizing, managing, and your customers' digital experience. More specifically, a CMS is a software application that allows users to collaborate in creating, producing, editing, and digital content, blog posts, web pages, etc. The content management system is evolving from just helping you launch digital content to a more robust system that is core to managing an overall better digital experience across many different channels, such as email, social media, mobile apps, websites, and more.
              </p>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              Any basic solution for web content management helps you to upload or write content, format it, images, add headlines, and do a number of backstage things like SEO. But in a user-centric and multi-device world that's not enough. Digital marketing has evolved, focusing more deeply on customer experience while incorporating most mobile apps, the IoT, and more. All that depends on a web content management system that separates always content management from content presentation.
              </p>

            </div>

            <div className='mt-16 '>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                Conquerors with best CMS Applications:
              </h2>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
               Conquerors technology provides an excellent CMS application with two popular types Open source applications and proprietary CMS applications.
              </p>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              <span className='font-semibold text-gray-700'>Open Source CMS Applications:</span> Open-source applications are those applications which are  the most commonly used CMS models as it offers the free downloading packages with free of charge collected for up-gradation in the future as well. These CMS applications have various user-friendly templates, extensions, and compatible plugins at less cost. Examples of open source applications are WordPress, Drupal, Joomla, Prestashop, and Magento, which are very popular for their very easy accessibility to develop our websites at a quick phase.
              </p>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
               <span className='font-semibold text-gray-700'>Proprietary CMS Applications:</span> Proprietary CMS applications are also said to be used in developing websites but it mostly stands at an expensive part as charges are collected for downloading such applications and even also there will be standard payments collected for most of the updates and for any support in future upgradations. Some of the commonly used proprietary CMS applications are Microsoft Share Point, Shopify, and IBM Enterprise Content Management.
              </p>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
               <span className='font-semibold text-gray-700'>Content Delivery Application:</span> The Content Delivery Application is said to be the actual back end of your application which controls the logic, stores data, and even merges with the coding part of the website to display the functionalities with a good user interface design. mostly CDA plays a vital role in editing and publishing content on websites.
              </p>
            </div>
          </div>
        </section>

        <ManagedServices />
        <section className='py-12'>
          <FaqAccordion faqId='ContentManagementservice' />
        </section>
        <CTASection />
      </main>
    </>
  )
}
