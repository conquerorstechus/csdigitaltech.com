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

export default function IonicApplicationDevelopmentClient() {
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

  const services = [
    {
      title: 'Flutter Application Development',
      icon: <MdOutlineAndroid className='w-7 h-7' />,
      link: '/flutter-app-development-company-in-florida'
    },
    {
      title: 'Progressive Web Application Development',
      icon: <MdOutlineIosShare className='w-7 h-7' />,
      link: '/progressive-web-application-development-company-in-florida'
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
              Top Ionic Application Development Company in Florida
            </h1>
            <p className='mt-4 lg:text-lg text-sm mx-auto drop-shadow-md'>
              "ConvenantSoft Software Technologies Pvt. Ltd" Customer Satisfaction
              Is Our Best Business Strategy
            </p>
          </div>
        </section>

        <section className='lg:py-8 py-8'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center'>
            {/* Right Content */}
            <div className='w-full space-y-5  md:text-left'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                How ConvenantSoft Work to Solve Client Problems
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify'>
                At ConvenantSoft, we are experts in handling different projects in
                multiple technologies including Ionic Framework. We are a great
                team with an updated skill set crafted on distinctive
                requirements with great exposure in a challenging environment.
                As our success rate is high, which talks about robustness,
                design, and on-time delivery of the project. Our main objective
                is to seek customer satisfaction at the end of the day.
              </p>
            </div>
            {/* Left Image */}
            <div className='w-full flex justify-center'>
              <Image
                src='/WebDevlopment/ionicrightimage.png'
                alt='Web Development Illustration'
                title='Ionic Frame Work'
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
                Our Ideas are Simple but Unique
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                As stated above we follow simple creative ideas which are unique
                in nature and our great approach towards it can bring
                significant outcomes. We craft based on the client's
                requirements. Our innovative team brings uniqueness to design
                and development.
              </p>
              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                Ionic Application Development is an approach to building
                the best performance applications. At ConvenantSoft, we develop
                applications based on Ionic Framework that is more secure
                comparatively with the latest technologies like Flutter, PWA, and
                React Native.
              </p>
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                We use Customer Oriented Strategies
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                We use Customer Oriented Strategies
              </p>
              <ul className='space-y-4 text-gray-500 font-medium text-base list-disc list-inside mt-2'>
                <li>In-person Outreach </li>
                <li>
                  Agility: customer-oriented companies quickly adapt to customer
                  needs.{' '}
                </li>
                <li>Ability to understand and act on customer data. </li>
                <li>Effective communication</li>
                <li>Problem-solving skills</li>
                <li>Active listening</li>
                <li>Customer focus</li>
              </ul>
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                Performance-Oriented Implementations
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                We have a great team of talented developers who are in the
                process of creating innovative applications. From conception to
                deployment we molded the latest designs for mobile applications
                with all creative implementations. We always guarantee
                high-quality Ionic application development services to our
                clients.
              </p>
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                ConvenantSoft Digital Hub Where Technology Meets Innovation
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                As we are the Top Ionic Application Development Company in
                Florida, we follow the SMART approach with an Agile-style
                working environment across the cross-functional teams on work
                implementation, through which we have accomplished success. Our
                approach is like
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
            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                We Perform Strategy Oriented Implementation
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

            <div className='flex justify-center'>
              <Image
                src='/WebDevlopment/Technologies-Tools.jpg'
                alt='Web Development Illustration'
                title='Tools used for Ionic Application'
                width={500}
                height={400}
                className='w-full  lg:h-96 h-full object-contain'
                priority
              />
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                About Ionic Framework Development with ConvenantSoft
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                As we have an expert team in developing Ionic Frame Work-based
                applications that facilitate our clients in having growth and
                solutions in each step of the development and support. An
                open-source UI toolkit using web technologies that allows
                high-quality mobile and desktop applications to be developed.
                Ionic Architecture is based on interface, applications, and user
                experience.
              </p>
            </div>
            <div className='flex justify-center'>
              <Image
                src='/WebDevlopment/221-pv4gh9452fk4tsdynr8bzlij8inc1d8yh2uc52a1x8.jpg'
                alt='Web Development Illustration'
                title='Ionic Framework Development'
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
