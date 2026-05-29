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

export default function ReactNativeWebDevelopment () {
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
      title: 'Flutter Application Development Services',
      icon: <MdOutlineMobileFriendly className='w-7 h-7' />,
      link: '/flutter-app-development-company-in-florida'
    },
    {
      title: 'Progressive Web Application Development',
      icon: <MdOutlineWeb className='w-7 h-7' />,
      link: '/progressive-web-application-development-company-in-florida'
    },
    {
      title: 'Ionic Application Development',
      icon: <MdOutlineDesignServices className='w-7 h-7' />,
      link: '/ionic-application-development-company-in-florida'
    },

    {
      title: 'React Native Application Development',
      icon: <MdOutlineIntegrationInstructions className='w-7 h-7' />,
      link: '/react-native-application-development-company-in-florida'
    },
    {
      title: 'Native Android Application Development',
      icon: <MdOutlineAndroid className='w-7 h-7' />,
      link: '/android-app-development-florida'
    },
    {
      title: 'Native iOS Application Development',
      icon: <MdOutlineIosShare className='w-7 h-7' />,
      link: '/ios-app-development-florida'
    }
  ]
  return (
    <>
      <main className='bg-gray-50'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          {/* Red overlay */}
          <div className='absolute inset-0 bg-green-800 opacity-50'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              Top React Native Application Development Company in Florida
            </h1>
            <p className='mt-4 lg:text-lg text-sm mx-auto drop-shadow-md'>
              “ConvenantSoft Software Technologies Pvt. Ltd” Customer Satisfaction
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
                At ConvenantSoft we aim for innovation not only in our development
                organization but also in the way we approach every aspect of our
                business. With a conscientious team and skills, we crafted
                applications using multiple technologies. We employ the full
                potential of our team to support and move forward with
                dedication in implementing different projects in various
                technologies including React Native Applications. Our
                imagination and design are unique, we work with creativity. At
                ConvenantSoft, we follow “ We never stop making progress”, we are
                always ready to add updated technical skill sets to bring a
                professional approach to implementing client’s projects.
              </p>
            </div>
            {/* Left Image */}
            <div className='w-full flex justify-center'>
              <Image
                src='/WebDevlopment/reactnativerightimage.png'
                alt='Web Development Illustration'
                title='React Native Application Development Services'
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
                Customer Centric Ideology
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                As per the client requirement, major parts of React Native
                mobile technologies are implemented with a high success rate, We
                always look forward to a positive approach towards improving
                customer satisfaction and their growth simultaneously.
              </p>
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
                high-quality React Native application development services to
                our clients.
              </p>
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                What We are Following
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                We strive to implement best practices and encourage innovation
                in each project with our team innovators where creativity meets
                implementation. We always consider customer growth as our major
                success, by implementing the latest technologies for different
                projects and helping their business growth to reach overall
                success.
              </p>
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                Our Achievements are Simple but Unique
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                Association with the different possible approaches to client
                needs brings uniqueness to our work. We divide the process in
                such a way that the steps themselves give much clarity to the
                client’s needs so there is no ambiguity in understanding it and
                can also move together with clarity.
              </p>
            </div>
            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                ConvenantSoft Digital Hub Where Technology Meets Innovation
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                As we are the Top React Native Application Development Company
                in Florida, we follow the SMART approach with an Agile-style
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
                We are a digital hub where we follow different technologies and
                updated versions. We emerged with different technologies for
                different industries like E-commerce, education, traveling,
                health care, manufacturing, etc. where our services are
                distributed across the technologies like Flutter, Progressive
                Web Applications, Ionic, React Native, Native, etc.
              </p>
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                Strategy Oriented Implementation
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                We follow different strategies and methodologies. This approach
                brings clarity in moving forward with different solutions for
                given problems.
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
                React Native and its Functionality
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                React Native development is an open-source mobile app platform
                created in JavaScript. Making an outstanding application with
                less cost has a number of great advantages in the usage of React
                Native. However, like any other platform, even it has cons as
                well. So, you should consider a few points before you add them
                to your tech stack.
              </p>
            </div>
            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                React Native Version Release Mechanism And Architecture
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                React Native is an Open source release that follows a monthly
                release chain that is coordinated on GitHub with the
                react-native-releases repository. At the beginning of each
                month, in the main branch of react-native, a new release
                candidate has been created. to allow contributors like yourself
                to identify any issues by writing clear and verifying the
                changes the release candidate will soak for a month, actionable
                bug reports. Then slowly, the release candidate will be promoted
                to stable. To get access to more APIs, developer tools, views,
                and other goodies you have to upgrade to new versions of React
                Native. Upgrading requires a small amount of effort.
              </p>
            </div>
            <div className='flex justify-center'>
              <Image
                src='/WebDevlopment/6666.jpg'
                alt='Web Development Illustration'
                title='React Native Architecture'
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
