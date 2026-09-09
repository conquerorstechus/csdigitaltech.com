'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import CTASection from '../landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function FullstackDevelopmentClient() {
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
  
  const popular = [
    'LAMP: Linux, Apache, MySQL, and PHP',
    'Django: Django, Python, and MySQL as Database',
    'MERN: MongoDB, Express, ReactJS, and Node.js',
    'MEAN: MongoDB, Express, AngularJS, and Node.js.',
    'Rails/Ruby on Rails: Ruby, PHP, and MySQL'
  ]

  const tools = [
    'Increased efficiency of operational processes. ',
    'Accurate tracking of sales, financial performance, and marketing.',
    'Clear benchmarks based on historical and current data. ',
    'Insight into customer behavior and shopping patterns.   ',
    'Analyses that can be shared in real-time and across departments. ',
    'Instant alerts about data anomalies even in customer issues.'
  ]

  const techButtons = [
    { label: 'Web Development', href: '/web-development' },
    { label: 'Mobile Development', href: '/mobile-app-development' },
    { label: 'Software Development', href: '/services/software-development-in-florida' }
  ]

  return (
    <>
      <main className='bg-white'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          <div className='absolute inset-0 bg-yellow-700 opacity-50'></div>
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              Fullstack Development Company in Florida
            </h1>
          </div>
        </section>

        <section className='py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
              Best Full Stack Web Development Company in Florida
            </h2>
            <p className='mt-4 text-gray-500 text-sm sm:text-lg lg:leading-8'>
              At Cornerstone Digital Technologies, Our team is experts in crafting Full stack web
              development, as the world is growing, Full Stack Web Development
              shows technology gradually unfolding new innovations. in brief,
              this process involves three layers – Presentation, Business Logic,
              and Database. A full-stack developer takes care of the steps from
              the beginning of an idea to the actual finished product. It refers
              to the development of both the front-end and back-end portions of
              web applications.
            </p>
          </div>
        </section>

        <section className='py-4'>
          <div className='max-w-7xl mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
              <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/1-1-min.jpg'
                  alt='Fullstack Development Technologies'
                  className='w-full lg:h-80 object-contain rounded-lg'
                />
              </div>

              <div>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                  Examples of popular stacks are:
                </h2>

                <div>
                  <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                    {popular.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className='mt-16'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                T-shaped development
              </h2>
              <p className='mt-4 text-gray-500 text-sm sm:text-lg lg:leading-8'>
                In real, full-stack developers are T-shaped developers. The
                T-shaped model is a concept where around for a while that
                describes the abilities or characteristics of an individual.
                With a specialization in one or a few specific fields, an ideal
                T-shaped development has many generalized skills. Full-stack web
                development is an excellent example of this model, as the
                developer has general knowledge across a wide breadth of
                technologies whereas the platforms as well as in-depth
                experience and specialization in a couple of those concepts.
              </p>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-0 lg:gap-8 pb-8'>
              <div className='mt-16'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                  Front End Technologies
                </h2>
                <p className='mt-4 text-gray-500 text-sm sm:text-lg lg:leading-8'>
                  In Full Stack Development, we have different technologies to
                  develop the front end. These technologies are used to develop
                  the client side which is Angular Js, React, Bootstrap, JQuery,
                  SASS, and NodeJs.
                </p>
              </div>
              <div className='mt-16'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                  Back End Technologies
                </h2>
                <p className='mt-4 text-gray-500 text-sm sm:text-lg lg:leading-8'>
                  In Full Stack Development, we have different technologies to
                  develop the backend. These technologies are used to develop
                  the serverside side which are Oracle, MongoDB, SQL, CouchDB,
                  and Redis.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-wrap justify-center gap-4 pt-8'>
              {techButtons.map(({ label, href }, idx) => (
                <Link key={idx} href={href} passHref>
                  <div className='group px-6 py-3 bg-[#262152] text-white text-sm sm:text-base font-medium rounded-full flex items-center gap-3 hover:bg-[#262152]/80 hover:shadow-lg transition duration-300 cursor-pointer'>
                    <span className='relative z-10'>{label}</span>
                    <span className='bg-white text-[#262152] w-7 h-7 rounded-full flex items-center justify-center transform group-hover:translate-x-1 transition duration-300'>
                      <FaChevronRight />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ManagedServices />
        <section className='py-12'>
          <FaqAccordion faqId='FullStack' />
        </section>
        <CTASection />
      </main>
    </>
  )
}
