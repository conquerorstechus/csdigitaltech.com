'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import CTASection from '../landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function DrupalDevelopmentClient() {
  const cardData = [
    {
      title: 'Detailed Discovery',
      description: "At ConvenantSoft, we deliver custom-tailored solutions to modern web development problems. We don’t use cookie-cutter kinds of solutions to common development issues and we take the time to get to know every client. We’ll research your product and service catalog, customer interactions, competitors, and various other facets of your organization to develop a completely designed solution."
    },
    {
      title: 'Robust Code / Application',
      description: 'Our development team at ConvenantSoft has considerable experience in creating powerful applications along with robust code. Regardless of how many integrations or extensions require for your individualized program/system, ConvenantSoft has the expertise to handle everything seamlessly from blueprinting and wire-framing to coding and testing to deliver a robust application.'
    },
    {
      title: 'User Experience',
      description: 'ConvenantSoft go one more extra mile to ensure the user experience will be top-notch in every facet of your project. Crafting a new and personalized UX strategy in developing every project has been our core principle.'
    }
  ]

  const techButtons = [
    { label: 'Web Development', href: '/web-development' },
    { label: 'HTML5 Development', href: '/html5-development-company-in-florida' },
    { label: 'WordPress Development', href: '/wordpress-development-company' }
  ]

  return (
    <>
      <main className='bg-gray-50'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          <div className='absolute inset-0 bg-indigo-700 opacity-50'></div>
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              Drupal Development Company in Florida
            </h1>
          </div>
        </section>

        <section className='py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
              Custom Drupal Development Company in Florida
            </h2>
            <p className='mt-4 text-gray-500 text-sm sm:text-lg lg:leading-8'>
              ConvenantSoft, We are the best Drupal Application Development Company in Florida, 
              where we design and craft websites. Drupal is a content management system (CMS), 
              Drupal is used to build websites. Due to its versatile features and extensive modules, 
              many well-established companies trust Drupal to run their high-traffic sites.
            </p>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
              <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/3-1.jpg'
                  alt='Drupal Development Illustration'
                  title='Custom Drupal Development Company in Florida'
                  className='w-full max-w-3xl h-auto object-contain'
                />
              </div>

              <div className='text-sm sm:text-base text-gray-500 leading-relaxed space-y-4'>
                <p>
                  Drupal runs on any platform that supports both a web server capable of running 
                  PHP 4.4.0+ including Apache, IIS, Lighttpd, and Nginx and a database such as 
                  MySQL, PostgreSQL, or SQLite to store content and settings.
                </p>
                <p>Benefits of Drupal</p>
                <ul className='list-disc list-inside text-gray-500 font-medium space-y-4 pt-2'>
                  <li>Backward Compatible.</li>
                  <li>Deprecations are Now Removed.</li>
                  <li>Faster and Better Performance.</li>
                  <li>Headless CMS.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16'>
          <div className='max-w-7xl mx-auto px-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              <div className='space-y-12'>
                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    Drupal CRM Integration
                  </h2>
                  <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                  The Drupal platform includes the Core CRM, These are a set of specially designed modules for managing contracts, tracking interactions, customer relationships, and for a Drupal website. We thank the flexibility of Drupal and its powerful strength is the platform’s ability to integrate with most of the other leading CRM systems. We can help you develop an integrated CRM suite customized to your needs.
                  </p>
                </div>

                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    Drupal e-Commerce
                  </h2>
                  <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                  In the modern digital economy eCommerce is a staple. We can build a robust eCommerce application on the Drupal platform or integrate. This process enables more in-depth monitoring of customers’ purchase histories, long-term value, and interactions. You can use the Drupal system to create a unified commerce platform that cultivates trust with your audience and enables a unified brand image across every point of contact with your brand.
                  </p>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-6'>
                {[
                  { label: 'e-Commerce', img: '/WebDevlopment/startup-594090__340-2.jpg' },
                  { label: 'Migration', img: '/WebDevlopment/student-849824__340-1.webp' },
                  { label: 'Integration', img: '/WebDevlopment/teamwork-3213924__340.webp' },
                  { label: 'Discovery', img: '/WebDevlopment/images.jpg' }
                ].map((item, i) => (
                  <div key={i} className='relative group overflow-hidden rounded-md shadow hover:shadow-lg transition duration-300'>
                    <img
                      src={item.img}
                      alt={item.label}
                      title={item.label === 'e-Commerce' ? 'Drupal e-Commerce' : item.label === 'Migration' ? 'Drupal Migration' : item.label === 'Integration' ? 'Drupal Integration' : 'Discovery Drupal'}
                      className='w-full h-40 sm:h-full object-cover grayscale group-hover:grayscale-0 transition duration-500'
                    />
                    <div className='absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300 flex items-center justify-center'>
                      <span className='text-white font-bold text-lg sm:text-xl'>{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='lg:mt-12 mt-8'>
              <div>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                  Drupal Migration
                </h2>
                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                Have you seen most of the benefits of the Drupal platform to want to migrate your CRM resources to Drupal? We can help you through every phase of Drupal development and migration for a stress-free rollout. Implementation of these new systems always involves some delays, but this makes structure and ease of use of the Drupal system help minimize disruption to your everyday operations.
                </p>
              </div>
            </div>
          </div>

          <div className='max-w-7xl mx-auto px-4 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {cardData.map((card, index) => (
                <div key={index} className='border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300'>
                  <h3 className='text-xl font-semibold text-gray-900 mb-4'>{card.title}</h3>
                  <p className='text-gray-500 text-base leading-8'>{card.description}</p>
                </div>
              ))}
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
        <section className="py-12">
          <FaqAccordion faqId="DrupalDevelopment" />
        </section>
        <CTASection />
      </main>
    </>
  )
}
