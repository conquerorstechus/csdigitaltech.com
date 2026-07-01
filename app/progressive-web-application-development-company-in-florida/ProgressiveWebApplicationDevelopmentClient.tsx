'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaArrowRight, FaChevronRight } from 'react-icons/fa'
import {
  MdOutlineAndroid,
  MdOutlineIosShare,
  MdOutlineWeb,
  MdOutlineMobileFriendly,
  MdOutlineIntegrationInstructions,
  MdOutlineDesignServices
} from 'react-icons/md'

export default function ProgressiveWebApplicationDevelopmentClient() {
  const services = [
    {
      title: 'Ionic Application Development',
      icon: <MdOutlineAndroid className='w-7 h-7' />,
      link: '/ionic-application-development-company-in-florida'
    },
    {
      title: 'Web Application Development',
      icon: <MdOutlineIosShare className='w-7 h-7' />,
      link: '/web-development'
    },
    {
      title: 'Mobile Application Development',
      icon: <MdOutlineWeb className='w-7 h-7' />,
      link: '/mobile-app-development'
    }
  ]
  return (
    <>
      <main className='bg-gray-50'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          {/* Red overlay */}
          <div className='absolute inset-0 bg-orange-800 opacity-50'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              Top Progressive Web Application Development Company in Florida
            </h1>
            <p className='mt-4 lg:text-lg text-sm mx-auto drop-shadow-md'>
              "Cornerstone Digital Technologies Pvt. Ltd" Customer Satisfaction
              Is Our Best Business Strategy
            </p>
          </div>
        </section>

        <section className='lg:py-8 py-8'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center'>
            {/* Right Content */}
            <div className='w-full space-y-5  md:text-left'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                PWA Development at Cornerstone Digital Technologies
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify'>
                At Cornerstone Digital Technologies, we have an expert team in developing Progressive
                Web Applications that take the benefit of the latest
                technologies to achieve the best web and mobile apps. Recent
                enhancements in the browser and Push APIs have enabled web
                developers in the Cache and to their home screen allowing users
                to install web apps in the availability of service workers, and
                even work offline to receive and push notifications.
              </p>
            </div>
            {/* Left Image */}
            <div className='w-full flex justify-center'>
              <Image
                src='/WebDevlopment/2020-08-05-3.jpg'
                alt='Web Development Illustration'
                title='PWA Progressive Web Application Development'
                width={500}
                height={400}
                className='w-full  lg:h-96 h-64 object-contain'
                priority
              />
            </div>
          </div>

          {/* CTA + Paragraph in a Row */}
          <div className='max-w-7xl mx-auto mt-12 px-4 sm:px-6 space-y-8'>
            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                How Cornerstone Digital Technologies Works To Solve Client's Problems
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                At Cornerstone Digital Technologies, we are experts in handling different projects in
                multiple technologies including Progressive Web Application. We
                are a great team with an updated skill set crafted on
                distinctive requirements with great exposure in a challenging
                environment. As our success rate is high, which talks about
                robustness, design, and on-time delivery of the project. Our
                main objective is to seek customer satisfaction at the end of
                the day.
              </p>
            </div>
            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                We Follow Strategy Oriented Implementation
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                We built with great plans and even greater strategies, We follow
                different strategies and methodologies. This approach brings
                clarity in moving forward with different solutions for given
                problems.
              </p>
              <ul className='space-y-4 text-gray-500 font-medium text-base list-disc list-inside mt-2'>
                <li>Customer Retention </li>
                <li>Sustainability </li>
                <li>Product Differentiation </li>
                <li>Cross Selling Products</li>
                <li>in-Person Out Reach</li>
              </ul>
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                Cornerstone Digital Technologies Hub Where Technology Meets Innovation
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                As we are the Top Progressive Web Application Development
                Company in Florida, we follow the SMART approach with an
                Agile-style working environment across the cross-functional
                teams on work implementation, through which we have accomplished
                success. Our approach is like
              </p>
              <ul className='space-y-4 text-gray-500 font-medium text-base list-disc list-inside mt-2'>
                <li>
                  Specific, Measurable, Achievable, Relevant, and Time-bound{' '}
                </li>
              </ul>
              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                We are a technology hub where we follow different technologies
                along with their updated versions. We emerged with different
                technologies for different industries like E-commerce,
                education, traveling, health care, manufacturing, etc. where our
                services are distributed across the technologies like Flutter,
                Progressive Web Applications, Ionic, React Native, Native, etc.
              </p>
            </div>

            <div className='flex justify-center'>
              <Image
                src='/WebDevlopment/Technologies-Tools.jpg'
                alt='Web Development Illustration'
                title='Tools used for Progressive Web Application'
                width={500}
                height={400}
                className='w-full  lg:h-96 h-full object-contain'
                priority
              />
            </div>

            <div>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 '>
                {services.map((service, index) => (
                  <a
                    href={service.link}
                    key={index}
                    className='relative bg-[#211B50] text-white rounded-md px-6 py-8 overflow-hidden hover:shadow-lg transition-all group'
                  >
                    <h3 className='text-lg font-bold leading-snug mb-4'>
                      {service.title}
                    </h3>
                    <div className='flex items-center gap-2 text-green-400 font-semibold text-sm'>
                      <FaArrowRight className='text-xs transform transition-transform group-hover:translate-x-1' />
                      <span>Learn More</span>
                    </div>

                    <div className='absolute bottom-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-tl-full flex items-center justify-center'>
                      <div className='text-white'>{service.icon}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
