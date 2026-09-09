'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'
import { FiMonitor, FiSmartphone, FiEdit3 } from 'react-icons/fi'
import CTASection from '@/app/landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function BrandingServices() {
  const services = [
    {
      title: 'Online Reputation\nManagement',
      icon: <FiMonitor className='text-white w-10 h-10' />
    },
    {
      title: 'SEO & Marketing\nServices',
      icon: <FiSmartphone className='text-white w-10 h-10' />
    },
    {
      title: 'Web Design &\nDevelopment',
      icon: <FiEdit3 className='text-white w-10 h-10' />
    }
  ]

  return (
    <>
      <main className='bg-gray-50'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          {/* Red overlay */}
          <div className='absolute inset-0 bg-orange-800 opacity-60'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              Digital Marketing
            </h1>
          </div>
        </section>

        <section className='py-12 px-4'>
          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            {/* Left Image */}
            <div className='flex justify-center'>
              <div className='relative w-full max-w-md aspect-square'>
                <Image
                  src='/Digitalcloud/Group-1-min.jpg'
                  alt='Digital Marketing Services'
                  title='iConquerors Digital Marketing and SEO Services'
                  fill
                  className='object-contain rounded-lg shadow-md'
                />
              </div>
            </div>

            {/* Right Text */}
            <div>
              <p className='text-gray-800 text-base font-normal leading-8 tracking-wide text-justify'>
                <span className='font-semibold'>iConquerors</span> is one of the
                top-rated SEO & Digital Marketing Agency in South USA, started
                its journey in the year 2010 and serving wide range of portfolio
                in the digital era. We provide services across branding, email
                marketing, Social Media, SEO, PPC, marketing automation, online
                reputation management, Google Ads etc., We work with some of the
                prominent clients in different sectors like Education,
                Healthcare, Transport, Retail, Manufacturing and Technology/
                Business consultancies.
              </p>

              {/* View More Button */}
              <div className='mt-4'>
                <a
                  href='https://www.iconquerors.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Visit iConquerors website for more digital marketing services (opens in new tab)'
                  className='inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition'
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className='max-w-7xl mx-auto px-4 '>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4  py-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className='relative border border-gray-200 bg-white py-12 px-6 overflow-hidden shadow-sm rounded-lg'
              >
                {/* Title */}
                <h3 className='text-lg font-bold text-gray-900 whitespace-pre-line z-10 relative'>
                  {service.title}
                </h3>

                {/* Top-right semi circle with icon */}
                <div className='absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center'>
                  {service.icon}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='py-12 px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-800'>
              Frequently Asked Questions
            </h2>
            <FaqAccordion faqId='Brandingagency' />
          </div>
        </section>

        <CTASection />
      </main>
    </>
  )
}
