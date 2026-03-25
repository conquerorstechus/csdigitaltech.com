'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight, FaPhoneAlt, FaArrowRight } from 'react-icons/fa'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function WebDevelopmentClient() {
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
          <div className='absolute inset-0 bg-[#FF1212] opacity-50'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              Web Development
            </h1>
          </div>
        </section>

        <section className='lg:py-16 py-8 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center'>
            {/* Left Image */}
            <div className='w-full flex justify-center'>
              <Image
                src='/WebDevlopment/2020-08-05-3.jpg'
                alt='Web Development Illustration'
                title='Web Development Company Florida'
                width={500}
                height={400}
                className='w-full max-w-sm sm:max-w-md md:max-w-full h-80 object-contain'
                priority
              />
            </div>

            {/* Right Content */}
            <div className='w-full space-y-5 text-center md:text-left'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                AI-Driven Web Design & Development
              </h2>

              <p className='text-gray-700 text-sm sm:text-lg leading-relaxed'>
                <strong>CONQUERORS</strong> help businesses across Florida and the Southern USA build websites and applications that don’t just function—they think, adapt, and deliver results. With over a decade of experience, we combine custom web development expertise with the power of Artificial Intelligence to create solutions that help you outpace competitors and grow faster.
              </p>

              <p className='text-gray-600 text-sm sm:text-lg leading-relaxed'>
                Whether you’re in Florida and across other regions in the USA, like Miami, Orlando, Tampa, Jacksonville, or nearby regions, our team delivers AI-driven web and mobile solutions that are scalable, interactive, and built to convert.
              </p>
            </div>
          </div>

          {/* CTA + Paragraph in a Row */}
          <div className='max-w-7xl mx-auto mt-12 px-4 sm:px-6 flex flex-col lg:flex-row gap-8'>
            {/* CTA Card */}
            {/* Additional Paragraph */}
            <div className='text-justify text-gray-700 text-sm sm:text-base md:text-lg leading-7 w-full lg:w-1/2'>
              <p>
                We at CONQUERORS realize our responsibility and have come up
                with custom web application development solutions in Florida
                that enhance your business and personal growth. We offer web
                application development services for the following areas:
              </p>
            </div>
            <Link
              href='/progressive-web-application-development-company-in-florida'
              className='w-full lg:w-1/2 block transform transition-all duration-300 hover:scale-105'
            >
              <div className='  rounde flex justify-center'>

                <div className='bg-[#262152] text-white text-center px-6 py-4 rounded w-full max-w-md'>
                  <h3 className='text-lg sm:text-xl font-semibold mb-3'>
                    Progressive Web Application Development
                  </h3>
                  <div className='text-green-400 font-semibold inline-flex items-center gap-2'>
                    <span className='text-xl'>→</span> LEARN MORE
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className='lg:py-16 py-8 '>
          <div className='max-w-7xl mx-auto space-y-6 text-gray-800 px-4 sm:px-6 lg:px-8'>
            {/* E-Commerce */}
            <h3 className='text-lg sm:text-4xl font-bold mb-3'>
              Our AI-Powered Web Development Services

            </h3>
            <div>
              <h3 className='lg:text-2xl text-xl font-bold text-gray-900 mb-2'>
                Progressive Web Application (PWA) Development
              </h3>
              <p className='lg:text-lg text-base mt-4 lg:leading-9 text-gray-700'>
                We design AI-enabled Progressive Web Apps that offer fast, mobile-friendly experiences. With features like smart push notifications, offline capabilities, and personalised content delivery, your customers stay engaged no matter where they are.
              </p>
            </div>

            {/* Dynamic Websites */}
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                AI-Driven E-Commerce Solutions
              </h3>
              <p className='lg:text-lg text-base mt-4 lg:leading-9 text-gray-700'>
                Your online store should sell smarter. Our developers integrate AI recommendation engines, intelligent shopping carts, and predictive analytics to boost conversions and customer loyalty. Whether you’re on Magento, WooCommerce, Shopify, or a custom platform, we’ll customize an AI-powered e-commerce solution for your business.
              </p>
            </div>

            {/* Mobile Application */}
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                Dynamic & Interactive Website Development
              </h3>
              <p className='lg:text-lg text-base mt-4 lg:leading-9 text-gray-700'>
                Interactivity and personalisation matter in the current competitive web space. We build AI-enhanced dynamic websites with real-time content adaptation, user-friendly features, and advanced 2D/3D visuals, voice search, and chatbot support. These sites attract attention and convert visitors into customers.
              </p>
            </div>

            {/* Gaming Apps */}
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                AI-Enhanced Mobile App Development
              </h3>
              <p className='lg:text-lg text-base mt-4 lg:leading-9 text-gray-700'>
                From social networking and online shopping to e-learning and trading platforms, our mobile apps integrate AI for smart recommendations, voice-enabled search, fraud detection, and personalized experiences. Built on the latest frameworks, they keep your Florida business and other businesses across regions in the USA connected with customers on the move.
              </p>
            </div>
            {/* Gaming Apps */}
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                Content Management Systems (CMS) with AI
              </h3>
              <p className='lg:text-lg text-base mt-4 lg:leading-9 text-gray-700'>
                We customize CMS platforms like WordPress, Joomla, and Drupal with AI features that allow for smart content suggestions, automated tagging, SEO optimization, and personalized user journeys. This means your team can manage content easily while AI helps improve visibility and engagement.
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
            {/* Why Businesses in Florida Choose Us */}
            <div className='mt-12 pt-10 border-t-2 border-gray-200 pb-12'>
              <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-10 text-center leading-tight'>
                Why Businesses in Florida Choose Us
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-10 mt-8'>
                <div className='flex items-start gap-4 group'>
                  <div className='flex-shrink-0 w-3 h-3 bg-[#FF1212] rounded-full mt-2 group-hover:scale-125 transition-transform duration-300'></div>
                  <div>
                    <h4 className='text-lg md:text-xl font-bold text-gray-900 mb-2'>Local Focus</h4>
                    <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
                      We design websites and apps customized for businesses across Florida.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4 group'>
                  <div className='flex-shrink-0 w-3 h-3 bg-[#FF1212] rounded-full mt-2 group-hover:scale-125 transition-transform duration-300'></div>
                  <div>
                    <h4 className='text-lg md:text-xl font-bold text-gray-900 mb-2'>AI-Centric Approach</h4>
                    <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
                      Every solution integrates intelligence, automation, and adaptability.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4 group'>
                  <div className='flex-shrink-0 w-3 h-3 bg-[#FF1212] rounded-full mt-2 group-hover:scale-125 transition-transform duration-300'></div>
                  <div>
                    <h4 className='text-lg md:text-xl font-bold text-gray-900 mb-2'>Proven Expertise</h4>
                    <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
                      15+ years of web and mobile development experience.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4 group'>
                  <div className='flex-shrink-0 w-3 h-3 bg-[#FF1212] rounded-full mt-2 group-hover:scale-125 transition-transform duration-300'></div>
                  <div>
                    <h4 className='text-lg md:text-xl font-bold text-gray-900 mb-2'>Future-Ready</h4>
                    <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
                      Scalable solutions with cloud, DevOps, and AI integration.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4 md:col-span-2 group'>
                  <div className='flex-shrink-0 w-3 h-3 bg-[#FF1212] rounded-full mt-2 group-hover:scale-125 transition-transform duration-300'></div>
                  <div>
                    <h4 className='text-lg md:text-xl font-bold text-gray-900 mb-2'>End-to-End Delivery</h4>
                    <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
                      From strategy to design, development, and ongoing support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Let's Build Smarter Together */}
            <div className='mt-12 bg-gradient-to-r from-[#262152] to-[#3d3370] rounded-2xl p-6 md:p-12 text-white text-center sm:text-left relative overflow-hidden'>
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight'>
                  Let's Build Smarter Together
                </h3>
                <p className='text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 opacity-90'>
                  If you're a business in Florida and across other regions in the USA looking for a modern, AI-powered website or application, we're here to help. Whether you need an e-commerce store, a dynamic website, a mobile app, a CMS, or a gaming solution, we'll ensure it's intelligent, scalable, and designed for growth.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center'>
                  <Link
                    href='/contact-us'
                    className='w-full sm:w-auto flex items-center justify-center gap-3 bg-[#FF1212] hover:bg-[#cc0e0e] text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl'
                  >
                    <FaPhoneAlt className="text-sm" />
                    <span>Talk to Our Florida Web Experts</span>
                  </Link>
                  <Link
                    href='/contact-us'
                    className='w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#262152] hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl'
                  >
                    <span>Free Consultation</span>
                    <FaArrowRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>


          </div>
        </section>
        <section className='py-10'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center'>Frequently Asked Questions</h2>
          <FaqAccordion faqId="WebDevelopment" />
        </section>
      </main>
    </>
  )
}
