'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import CTASection from '../landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function IOTDevelopmentClient() {
  const enhancements = [
    'Integrating the device and the software with the overall work environment is crucial to validating assumptions with real prototype functions.',
    'Testing device functions, connections, and software, with the required environment allows us to determine whether all business assumptions have been met or not.',
    'Adapting the prototype to any industrial production. Based on the cost requirements for the production process and the device dimensions, we design a device ready for production.'
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
    'DATA RETRIEVAL: One of the most important key points in building IoT software – is to design and build solutions for data gathering from any hardware source (sensor, industrial device, or wearable). The data should be structured, cleared, and securely stored in the cloud, or sent to the final receiver.',
    'DATA PROCESSING:Data brings little value if it is not structured, processed, and presented in the right way. We build IoT ecosystem architectures to ensure in making efficient H2M/M2M communications. We set up scalable cloud applications to generate aggregate IoT data and process it.',
    'DATA ANALYSIS : Best practices of Big Data analytics and analysis are to help collect, process and analyze Internet of Things data. We also develop different custom visually appealing IoT data visualization solutions. Consequently, you benefit from important business insights further.',
    'HARDWARE PROTOTYPE: In general, for IoT software development services with the help of our IoT hardware development partner, we plan, launch and manage all custom devices and sensor prototype development.   ',

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
              IoT Services
            </h1>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Heading */}
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
              Services we Offer on Internet of Things
            </h2>
            <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              Cornerstone Digital Technologies, the best IoT development services company in
              Florida, provides scalable digital products and a dedicated
              development team. We build secure IoT solutions with deep
              analytical layers. Our IoT development services include IoT app
              development, third-party integration, API deployment, data
              analytics, IoT gateway deployment, and connectivity with
              wearables. Their IoT expertise is mainly in industrial IoT and
              consumer IoT. We focus on every aspect of IoT ecosystems,
              including IoT consulting, customized IoT platform development,
              firmware development, and cloud deployment.
            </p>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 '>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>
              {/* Left - Icons */}
              <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/9 (1).jpg'
                  alt='HTML CSS JS Badges'
                  className='w-full lg:h-80 object-contain rounded-lg'
                />
              </div>

              {/* Right - Text Content */}
              <div>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                  The Uniqueness of IoT, Where it Effects
                </h2>

                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                  In an age of hyper-connectivity, the Internet of Things (IoT)
                  is the base for a booming sector in which countless innovators
                  give software and hardware for everything from intelligent
                  homes and cars to medical devices and manufacturing. IoT has
                  made complete automation possible. Solutions that are
                  connected together to Smart Cities, Smart homes, Smart
                  factories, and even Connected vehicles are possible only
                  because of IoT. IoT has differently shaped traditional
                  industries. It is mostly based on Information and
                  Communication Technology. It has combined both the digital and
                  physical worlds together.
                </p>
              </div>
            </div>

            <div className='mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              {/* Left Content */}
              <div className='space-y-12'>
                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    IoT Transformation Strategy
                  </h2>
                  <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                    Our IoT transformation approach involves a comprehensive
                    assessment of your current infrastructure and processes,
                    followed by a strategic roadmap for implementing IoT
                    practices that align with your business objectives.
                  </p>
                  <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2 mt-4'>
                    {enhancements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

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
              </div>

              {/* Right Side Cards */}
              <div className='grid grid-cols-2 gap-6'>
                {[
                  {
                    label: 'DATA RETRIEVAL',
                    img: '/WebDevlopment/startup-594090__340-2.jpg',
                    link: '/development'
                  },
                  {
                    label: 'DATA PROCESSING',
                    img: '/WebDevlopment/student-849824__340-1.webp',
                    link: '/uiux'
                  },
                  {
                    label: 'DATA ANALYSIS',
                    img: '/WebDevlopment/teamwork-3213924__340.webp',
                    link: '/integration'
                  },
                  {
                    label: 'INTEGRATION',
                    img: '/WebDevlopment/images.jpg',
                    link: '/discovery'
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    // href={item.link}
                    className='relative group overflow-hidden rounded-md shadow hover:shadow-lg transition duration-300'
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      className='w-full h-40 sm:h-full object-cover grayscale group-hover:grayscale-0 transition duration-500'
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
              <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                Process of IoT Architecture
              </h2>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                Artificial Intelligence (AI) is rapidly transforming the world.
                Remarkable processes in AI capabilities have led to a wide range
                of innovations those including autonomous vehicles and connected
                IoT devices even in our homes. AI is mostly contributing to the
                development of brain-controlled robotic arms with direct
                human-brain interfaces properly.
              </p>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                To improve your website with AI we have different Website
                Creation, Search Engine Optimization, Real-time Personalization,
                Content Creation, Online Customer Service, Content Curation,
                Churn Prediction Accessibility, Lead Generation/Data Collection,
                Text/Language Analysis, Design, and User Experience
              </p>
              <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/Screenshot-143456-min.webp'
                  alt='HTML CSS JS Badges'
                  className='w-full lg:h-80 object-contain rounded-lg'
                />
              </div>
            </div>

            <div className='mt-16 '>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
               Key Services That we Provide on IoT
              </h2>
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
          <FaqAccordion faqId='IOTSerices' />
        </section>
        <CTASection />
      </main>
    </>
  )
}
