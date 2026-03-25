'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import FaqAccordion from '@/components/faq/FaqAccordion'
import CTASection from '../landingpage/CTASection'

export default function HTML5DevelopmentClient() {
  const techButtons = [
    {
      label: 'Web Development',
      href: '/web-development'
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
          <div className='absolute inset-0 bg-green-700 opacity-50'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              HTML5 Development
            </h1>
          </div>
        </section>
        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Heading */}
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
              HTML5 Development Company in Florida
            </h2>
            <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              At Conquerors, we are the best HTML5 application development
              company in Florida. We have a dedicated team of HTML developers
              who provide exclusive and customized solutions as per client’s
              requirements.
            </p>
             {/* Main Content Grid */}
             <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
              {/* Left - Icons */}
              <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/11-2.jpg'
                  alt='HTML CSS JS Badges'
                  title='HTML CSS JS Badges'
                  className='w-full max-w-3xl h-auto object-contain'
                />
              </div>

              {/* Right - Text Content */}
              <div className='text-sm sm:text-base text-gray-500 leading-relaxed space-y-4'>
                <p>
                  Our HTML developers offer better quality service along with
                  superior HTML coding. We have expertise in data object
                  modeling and CMS which includes CSS, JAVA®, Joomla®, Magento®,
                  and JavaScript.
                </p>
                <p>
                  We are working throughout the development stage to support our
                  client’s project within the preset deadlines.
                </p>
                <ul className='list-disc list-inside text-gray-500 font-medium space-y-4 pt-2'>
                  <li>HTML5 Website Development</li>
                  <li>HTML5 Mobile App Development</li>
                  <li>HTML5 Custom Migration Services</li>
                  <li>HTML5 UI/UX Design and Prototyping</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 '>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              {/* Left Content */}
              <div className='space-y-12'>
                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    Our Digital Transformation Strategy
                  </h2>
                  <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                    Digital transformation consulting generally starts with the
                    consumer experience. And keeping the customer as the initial
                    of your digital transformation strategy. Our strategists
                    will make you rethink how to interact with your consumers,
                    understand the modern-time buyer, engage with them, and
                    deliver on their expectations of different multi-channel
                    customer experiences
                  </p>
                </div>

                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    Where HTML Used For
                  </h2>
                  <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                    HTML can be used for various purposes, one of which is to
                    write code that is clear and which is easy to understand.
                    The HTML allows you to write descriptive and semantic code
                    to separate meaning from the content and style. Below you
                    will find information on other different popular
                    applications of HTML. In different scenarios, we use HTML
                    among them these Includes Game Development and Better
                    Storage, Native APIs, Offline Capabilities, Audio, and Video
                    Support, and Internet Navigation.
                  </p>
                </div>
              </div>

              {/* Right Side Cards */}
              <div className='grid grid-cols-2 gap-6'>
                {[
                  {
                    label: 'Development',
                    img: '/WebDevlopment/startup-594090__340-2.jpg',
                    link: '/development'
                  },
                  {
                    label: 'UI/UX Design',
                    img: '/WebDevlopment/student-849824__340-1.webp',
                    link: '/uiux'
                  },
                  {
                    label: 'Integration',
                    img: '/WebDevlopment/teamwork-3213924__340.webp',
                    link: '/integration'
                  },
                  {
                    label: 'Discovery',
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
                      title={item.label === 'Development' ? 'HTML Development' : item.label === 'UI/UX Design' ? 'UI/UX Design for HTML' : item.label === 'Integration' ? 'HTML Integration' : item.label === 'Discovery' ? 'HTML Discovery' : 'HTML'}
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

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
              {/* Left - Icons */}
              <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/4-2.jpg'
                  alt='HTML CSS JS Badges'
                  title='HTML Development'
                  className='w-full max-w-3xl h-auto object-contain'
                />
              </div>

              {/* Right - Text Content */}
              <div>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                  HTML5 as a Base Technology Includes
                </h2>
                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                  Bootstrap programmers at Conquerors believe clients’ growth is
                  their growth and thus, they make efforts to accomplish the
                  client’s goals by implementing the latest technology and even
                  ever-changing trends of the market. We, with our talented
                  developers, take the challenge to complete the whole bootstrap
                  development task by leveraging HTML, CSS & JavaScript
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ManagedServices />
        <section className='py-12'>
          <FaqAccordion faqId='html5developemnt' />
        </section>
        <CTASection />
      </main>
    </>
  )
}
