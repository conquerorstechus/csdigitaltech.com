'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa6'

export default function WebDesignClient() {
  const techButtons = [
    {
      label: 'HTML5 Development',
      href: '/html5-development-company-in-florida'
    },
    {
      label: 'WordPress Development',
      href: '/wordpress-development-company'
    },
    {
      label: 'Drupal Development',
      href: '/drupal-development-company-in-florida'
    }
  ]
  return (
    <>
      <main className='bg-gray-50'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          {/* Red overlay */}
          <div className='absolute inset-0 bg-indigo-700 opacity-50'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              Web Design
            </h1>
          </div>
        </section>

        <section className='py-16 space-y-8'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center'>
            {/* Left Image */}
            <div className='w-full flex justify-center'>
              <Image
                src='/WebDevlopment/2-Web-Design.jpg'
                alt='Web Development Illustration'
                width={500}
                height={400}
                className='w-full max-w-sm sm:max-w-md md:max-w-full h-80 object-contain'
                priority
              />
            </div>

            {/* Right Content */}
            <div className='w-full space-y-5 text-center md:text-left'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                Web Design Company in Florida
              </h2>

              <p className='text-gray-500 text-sm sm:text-lg sm:leading-8'>
                There is no doubt that creativity is the most important human
                resource of all. Making the simple complicated is commonplace;
                making the complicated simple, awesomely simple, that's
                creativity. ConvenantSoft is the best web designing company in
                Florida, USA providing affordable services to clients all
                over the world. We intend to take this creativity identity
                outshine that of your peers; unlike the conventional web design
                approach, we offer custom web design services to the your creative
                solutions that cater to your marketing, Communication,
                promotion, advertising and designing needs.
              </p>
            </div>
          </div>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center'>
            {/* Left Image */}
            {/* Right Content */}
            <div className='w-full space-y-5 text-center md:text-left'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                Our Web Designing Services are
              </h2>

             <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-gray-500 font-medium leading-7 text-base'>
      {[
        'Website Design',
        'Graphic Design',
        'Corporate Identity',
        'Logo Design',
        'Brand Identity',
        'Corporate and Product Brochures',
        'Website Maintenance',
        'Analytics',
      ].map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <FaCheck className="text-green-500 mt-1 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
            </div>

            <div className='w-full flex justify-center'>
              <Image
                src='/WebDevlopment/11.jpg'
                alt='Web Development Illustration'
                width={500}
                height={400}
                className='w-full max-w-sm sm:max-w-md md:max-w-full h-80 object-contain'
                priority
              />
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
