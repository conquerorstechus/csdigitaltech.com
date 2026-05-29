'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import CTASection from '../landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function LaravelDevelopmentClient() {
  const enhancements = [
    'Faster development.',
    'Inbuilt Feature.',
    'Regimented coding.',
    'Amazing migration.',
    'Unit testing.'
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
    'Robust CRM (Customer Relationship Management) ',
    'Restaurant food ordering system',
    'Online Video classes tutor system ',
    'Live Auction system',
    'Crypto current system'
  ]

  const items = [
    "Laravel Web Application Development: For Custom Portal or Laravel Applications, hire our expert Laravel Developers who can build secure & robust Laravel projects.",
    " Laravel Mobile App Development: Our Laravel developers have built many REST Laravel services applications to be used In Angular / Ionic or React Native Mobile Apps.",
    "Laravel E-commerce: Products, services, Add to cart, Order, etc or mobile Apps, our Laravel developers have developed these kinds of applications in the Past.",
    "Laravel CRM: We develop the Ultimate CRM & Project Management System is a complete dynamic with multi-login software that manages the daily sales, customer follow-ups, meetings, invoices, marketing, services & orders.",
  ];
  return (
    <>
      <main className='bg-gray-50'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          {/* Red overlay */}
          <div className='absolute inset-0 bg-yellow-700 opacity-50'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              Laravel Development
            </h1>
            <p className='text-base leading-8'>
              "ConvenantSoft Software Technologies" Customer Satisfaction Is Our
              Best Business Strategy
            </p>
          </div>
        </section>

        {/* <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            
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
        </section> */}

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 '>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>
              {/* Left - Icons */}
              <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/Laravel-banner.jpg'
                  alt='HTML CSS JS Badges'
                  className='w-full lg:h-80 object-contain rounded-lg'
                />
              </div>

              {/* Right - Text Content */}
              <div>
                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                  Laravel is a free, open-source PHP web application framework
                  intended for the development of web applications following the
                  model–view–controller (MVC) architectural pattern and based on
                  Symfony. Some of the features of Laravel are a modular
                  packaging system with a dedicated dependency manager, different
                  ways for accessing relational databases, utilities that aid in
                  application deployment and maintenance, and its orientation
                  toward syntactic sugar. Laravel is regarded as one of the most
                  popular PHP frameworks, together with Symfony, CodeIgniter,
                  Yii2, and other emerging frameworks can also be used for
                  developing the best web applications. Laravel is a powerful
                  PHP web application framework. Laravel framework development
                  can manage the cache of the web application which helps to
                  assist in developing more sustainable and better codes in a
                  short span of time. It is immensely loaded with amazing
                  features and attributes that can increase the level of output,
                  efficiency, quality, performance, and competitiveness along
                  with saving a considerable amount of time.
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8'>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                  Why choose us for Laravel Development?
                </h2>
                <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                  ConvenantSoft technologies as a Laravel Development Company, with
                  skilled developers, create a clean design, code readability,
                  and code reusability. Laravel Framework Website Development
                  allows the developers to design web applications, Mobile
                  compatible responsive websites with exciting and attractive
                  designs to give the clients, rich and ultimate development for
                  different projects based on their Client requirements.
                </p>
                <div className='space-y-12'>
                  <div>
                    <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                      {enhancements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Side Cards */}
              <div className=''>
                <div className='flex justify-center'>
                  <img
                    src='/WebDevlopment/2020-02-24.jpg'
                    alt='HTML CSS JS Badges'
                    className='w-full lg:h-80 object-contain rounded-lg'
                  />
                </div>
              </div>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-12 items-center mt-8'>
              <div className=''>
                <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-gray-900 '>
                  Laravel Website Development Services
                </h2>
 <ol className="list-decimal list-inside space-y-3 text-gray-600 text-sm sm:text-lg leading-relaxed">
        {items.map((item, index) => (
          <li key={index} className="text-gray-500  text-sm sm:text-lg lg:leading-8">
            {item}
          </li>
        ))}
      </ol>
              </div>

              <div>
                <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-gray-900  '>
                  Laravel Projects
                </h2>
                <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                  We are expertise in PHP Laravel Development Services, having
                  comprehensive expertise in developing rich Laravel
                  applications. Our developers will draft your vision into
                  reality with a combination of versatile domain experience and
                  Laravel framework knowledge. In due course, the Laravel
                  development team at the ConvenantSoft is one step ahead and
                  capable of leveraging given features and functionality of the
                  Laravel framework in favor of its clientele. We developed
                  high-end and professional Larvel Frameworks for different
                  types of business based Client requirement:
                </p>

                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {tools.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        <ManagedServices />
        <section className='py-12'>
          <FaqAccordion faqId='LaravelDevelopment' />
        </section>
        <CTASection />
      </main>
    </>
  )
}
