'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'

export default function WordPressDevelopmentClient() {
  const techButtons = [
    {
      label: 'Web Development',
      href: '/web-development'
    },
    {
      label: 'HTML5 Development',
      href: '/html5-development-company-in-florida'
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
          <div className='absolute inset-0 bg-[#FF1212] opacity-50'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              WordPress Development Company
            </h1>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center'>
            {/* Left Image */}
            <div className='w-full flex justify-center'>
              <Image
                src='/WebDevlopment/2020-08-05-3.jpg'
                alt='WordPress Development Illustration'
                title='WordPress development company in Florida'
                width={500}
                height={400}
                className='w-full max-w-sm sm:max-w-md md:max-w-full h-80 object-contain'
                priority
              />
            </div>

            {/* Right Content */}
            <div className='w-full space-y-5 text-center md:text-left'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                WordPress Development Services
              </h2>

              <p className='text-gray-700 text-sm sm:text-lg leading-relaxed'>
                <strong>ConvenantSoft</strong> is a leading WordPress development company 
                specializing in creating custom WordPress websites, themes, and plugins. 
                Our expert WordPress developers deliver powerful, scalable, and user-friendly 
                solutions that drive business growth and enhance online presence.
              </p>

              <p className='text-gray-600 text-sm sm:text-lg leading-relaxed'>
                With years of experience in WordPress development, we create stunning, 
                responsive websites that are easy to manage and maintain. Our WordPress 
                solutions are optimized for performance, SEO, and user experience.
              </p>
            </div>
          </div>

          {/* CTA + Paragraph in a Row */}
          <div className='max-w-7xl mx-auto mt-12 px-4 sm:px-6 flex flex-col lg:flex-row gap-8'>
            {/* Additional Paragraph */}
            <div className='text-justify text-gray-700 text-sm sm:text-base md:text-lg leading-7 w-full lg:w-1/2'>
              <p>
                Our WordPress development services include custom theme development, 
                plugin development, e-commerce integration, website maintenance, and 
                performance optimization. We leverage the latest WordPress technologies 
                to create exceptional digital experiences.
              </p>
            </div>
            <Link
              href='/web-development'
              className='w-full lg:w-1/2 block transform transition-all duration-300 hover:scale-105'
            >
              <div className='  rounde flex justify-center'>
                <div className='bg-[#262152] text-white text-center px-6 py-4 rounded w-full max-w-md'>
                  <h3 className='text-lg sm:text-xl font-semibold mb-3'>
                    Web Development Services
                  </h3>
                  <div className='text-green-400 font-semibold inline-flex items-center gap-2'>
                    <span className='text-xl'>→</span> LEARN MORE
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className=' py-16 '>
          <div className='max-w-7xl mx-auto space-y-6 text-gray-800 px-4 sm:px-6 lg:px-8'>
            {/* WordPress Development */}
            <div>
              <h3 className='lg:text-4xl text-xl font-bold text-gray-900 mb-2'>
                WordPress Development Services
              </h3>
              <p className='lg:text-lg text-base mt-4 lg:leading-9 text-gray-700'>
                Our comprehensive WordPress development services include custom website 
                development, theme customization, plugin development, and WordPress 
                maintenance. We create powerful, scalable WordPress solutions that 
                meet your specific business requirements and goals.
              </p>
            </div>

            {/* Custom Theme Development */}
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                Custom WordPress Theme Development
              </h3>
              <p className='lg:text-lg text-base mt-4 lg:leading-9 text-gray-700'>
                We develop custom WordPress themes from scratch that perfectly match 
                your brand identity and business needs. Our themes are responsive, 
                SEO-friendly, and optimized for performance. We ensure your WordPress 
                website stands out from the competition with unique, professional designs.
              </p>
            </div>

            {/* Plugin Development */}
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                WordPress Plugin Development
              </h3>
              <p className='lg:text-lg text-base mt-4 lg:leading-9 text-gray-700'>
                Our WordPress plugin development services create custom functionality 
                tailored to your specific requirements. We develop secure, efficient, 
                and user-friendly plugins that extend your WordPress website's capabilities 
                and enhance user experience.
              </p>
            </div>

            {/* E-commerce Integration */}
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                WordPress E-commerce Development
              </h3>
              <p className='lg:text-lg text-base mt-4 lg:leading-9 text-gray-700'>
                We specialize in WordPress e-commerce development using WooCommerce 
                and other popular e-commerce plugins. Our WordPress e-commerce solutions 
                include payment gateway integration, inventory management, order processing, 
                and mobile-responsive shopping experiences.
              </p>
            </div>

            {/* Maintenance & Support */}
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                WordPress Maintenance & Support
              </h3>
              <p className='lg:text-lg text-base mt-4 lg:leading-9 text-gray-700'>
                We provide comprehensive WordPress maintenance services including regular 
                updates, security monitoring, performance optimization, backup management, 
                and technical support. Our maintenance services ensure your WordPress 
                website remains secure, fast, and up-to-date.
              </p>
            </div>

            {/* Buttons */}
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
      </main>
    </>
  )
}
