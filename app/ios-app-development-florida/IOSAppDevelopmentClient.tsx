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

export default function IOSAppDevelopmentClient() {
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
          <div className='absolute inset-0 bg-purple-800 opacity-50'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              Top iOS Application Development Company in Florida
            </h1>
            <p className='mt-4 lg:text-lg text-sm mx-auto drop-shadow-md'>
              "Conquerors Software Technologies Pvt. Ltd" Customer Satisfaction
              Is Our Best Business Strategy
            </p>
          </div>
        </section>

        <section className='lg:py-8 py-8'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center'>
            {/* Right Content */}
            <div className='w-full space-y-5  md:text-left'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                At Conquerors, We Follow a Semantic Approach
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify'>
                We aim for innovation not only in our organization but also in
                the way we approach every aspect of our business. With a
                conscientious team and skills, we crafted applications using the
                latest technologies. We employ the full potential of our team to
                support and move forward with dedication in implementing
                different projects in various technologies including Native
                Applications. Our imagination and design are unique, we work
                with creativity. At conquerors, we follow " We never stop making
                progress", we are always ready to acquire the latest technical
                skill set to bring a professional approach to implementing
                client's projects.
              </p>
            </div>
            {/* Left Image */}
            <div className='w-full flex justify-center'>
              <Image
                src='/WebDevlopment/IOsappright.png'
                alt='Web Development Illustration'
                title='Native Ios App Development Services in Florida'
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
                Native Application Development is an old approach to building
                the best performance applications. At Conquerors, we develop
                applications based on Native language that is more secure
                comparatively with the latest technologies like Ionic, PWA, and
                Flutter.
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
                high-quality Native application development services to our
                clients.
              </p>
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                Conquerors Digital Hub Where Technology Meets Innovation
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                As we are the Top Native Application Development Company in
                Florida, we follow the SMART approach with an Agile-style
                working environment across the cross-functional teams on work
                implementation, through which we have accomplished success. Our
                approach is like
              </p>
              <ul className='space-y-4 text-gray-500 font-medium text-base list-disc list-inside mt-2'>
                <li>
                  Specific, Measurable, Achievable, Relevant, and Time-bound
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
                Native Framework and its Requirement for App Development
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                Native is used to making high-performance-oriented applications.
                The term native application development refers to building
                mobile applications for a single platform. Native app
                development demands different skills and technologies and native
                Applications are more secure compared to other application
                development technologies. Which provides more Interaction and
                Intuitive, Native Applications Development Tends to Have Fewer
                Bugs During Development The two main operating systems are
                Android and iOS. Native iOS apps are coded in Swift or
                Objective-C, whereas Native Android apps are written in Java or
                Kotlin, The latest technologies used in the development of
                Native Application Development are Angular, Typescript,
                JavaScript, CSS, and Vue. js.
              </p>
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                Comparision Between Native and Other Technologies
              </h2>
              <div className='flex justify-center'>
                <Image
                  src='/WebDevlopment/Untitled-presentation-2-pv4gh946l90yrjwrraypyt9z1vum9pamkypiam7uxm.png'
                  alt='Web Development Illustration'
                  title='Comparision Between Native Ios and Other Technologies'
                  width={500}
                  height={400}
                  className='w-full  lg:h-96 h-full object-contain'
                  priority
                />
              </div>
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                iOS Development Services We Offer
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                Our comprehensive iOS development services cover every aspect of
                the app development lifecycle, from initial concept to ongoing
                maintenance and support.
              </p>
              <h4 className='text-lg font-semibold text-gray-700 mt-4'>
                APPLICATION DESIGN & DEVELOPMENT:
              </h4>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                With years of experience working with iOS, our team has created
                excellent iPhone apps for a variety of industries. They are also
                skilled at managing multi-threaded environments,
                industry-standard programming, and environments free of crashes,
                as well as leading architectural efforts.
              </p>
              <h4 className='text-lg font-semibold text-gray-700 mt-4'>
                TESTING & MAINTENANCE:
              </h4>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                In addition to being present while hosting, our team is also
                available after a product has been released to address any other
                problems. We can do this by assisting you with performance
                tuning, system monitoring, bug patching, and on-demand upgrades.
              </p>
              <h4 className='text-lg font-semibold text-gray-700 mt-4'>
                TEAM AUGMENTATION:
              </h4>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                We give your company the freedom to select from a variety of
                resources, assist you in managing your requirements, and also
                offer a team that can guide you through open, honest
                communication.
              </p>
            </div>

    
            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
               Native iOS and its Functionality
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
               A native application is a software application built for the specific device platform in a specific programming language, either iOS or Android. Native iOS apps are written in Objective-C or Swift and native Android apps are written in Java.
              </p>
              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
              There are specific features that distinguish the Native iOS UI from Native  Android. Both compete to provide the best experience to their users. And optimizes its functionality for the best use.
              </p>
              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
              The mobile application development process is filled with many ways to build a mobile application. The two main mobile OS platforms specified as Apple's iOS and Google's Android. Native apps are written in the code primarily used for the device and its OS. We can take examples as developers write iOS applications in Objective-C or Swift, while they create Android-native apps in Java.
              </p>
              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
             For iOS latest version is now available in iOS 16.1 beta and Xcode 14.1 beta. Which helps people to keep track of your app's content with real-time updates. It's a delightful way to experience iPhone 14 Pro and iPhone 14 Pro Max.
              </p>
             
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
               Purpose of Native Application Development
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
               The Native Application Development technology is used to make high-performance-oriented applications. The term native application development refers to building mobile applications for a single platform. Native app development demands different skills and technologies than mobile website development further no need to worry about browser behavior and compatibility. 
              </p>
             

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                Native Applications are more secure compared to other application development technologies. Which provides more Interaction and Intuitive, Native Applications Development tends to have fewer bugs during development. The two main operating systems are Android and iOS. Native iOS apps are coded in Swift or Objective-C, whereas Native Android apps are written in Java or Kotlin.
              </p>
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
