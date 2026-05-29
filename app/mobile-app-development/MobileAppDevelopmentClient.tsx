'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaChevronRight } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import CTASection from '../landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'
import {
  MdOutlineAndroid,
  MdOutlineIosShare,
  MdOutlineWeb,
  MdOutlineMobileFriendly,
  MdOutlineIntegrationInstructions,
  MdOutlineDesignServices
} from 'react-icons/md'

export default function MobileAppDevelopmentClient() {
  const services = [
    {
      title: 'AI-Powered Flutter Application Development',
      icon: <MdOutlineMobileFriendly className='w-7 h-7' />,
      link: '/flutter-app-development-company-in-florida'
    },
    {
      title: 'Intelligent Progressive Web Application (PWA) Development',
      icon: <MdOutlineWeb className='w-7 h-7' />,
      link: '/progressive-web-application-development-company-in-florida'
    },
    {
      title: 'AI-Enhanced Ionic Application Development',
      icon: <MdOutlineDesignServices className='w-7 h-7' />,
      link: '/ionic-application-development-company-in-florida'
    },
    {
      title: 'Smart React Native Application Development with AI',
      icon: <MdOutlineIntegrationInstructions className='w-7 h-7' />,
      link: '/react-native-application-development-company-in-florida'
    },
    {
      title: 'AI-Driven Native Android Application Development',
      icon: <MdOutlineAndroid className='w-7 h-7' />,
      link: '/android-app-development-florida'
    },
    {
      title: 'AI-Enabled Native iOS Application Development',
      icon: <MdOutlineIosShare className='w-7 h-7' />,
      link: '/ios-app-development-florida'
    }
  ]

  const techButtons = [
    { label: 'Web Development', href: '/web-development' },
    { label: 'Flutter Development', href: '/flutter-app-development-company-in-florida' },
    { label: 'React Native Development', href: '/react-native-application-development-company-in-florida' }
  ]

  return (
    <>
      <main className='bg-white'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          <div className='absolute inset-0 bg-indigo-700 opacity-50'></div>
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              Mobile App Development Company
            </h1>
          </div>
        </section>

        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                Next-Gen AI Mobile Applications in Florida, USA
              </h2>
              <div className='max-w-5xl mx-auto space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed'>
                <p>
                  ConvenantSoft Software Technologies USA builds next-generation AI-powered mobile applications for businesses across Florida and the USA, helping organizations transform the way they interact with their customers and workforce. By integrating machine learning, natural language processing, predictive analytics, computer vision, and intelligent automation into mobile-first solutions, we deliver apps that are personalized, adaptive, and future-ready.
                </p>
                <p>
                  Our expertise spans native iOS/Android apps, cross-platform frameworks like Flutter and React Native, and progressive mobile solutions that seamlessly integrate with enterprise systems and cloud platforms. From AI-driven healthcare apps in Miami and Orlando to intelligent eCommerce platforms in Tampa and Fort Lauderdale to smart financial assistant apps in Jacksonville and nearby regions, we design mobile applications that evolve with users, boost engagement, and create measurable business outcomes.
                </p>
                <p>
                  Headquartered in the USA, we proudly serve clients across Florida's major technology and business hubs, including Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale, St. Petersburg, Palm Beach, Tallahassee, and surrounding areas, while extending our services throughout the United States.
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
              {services.map((service, index) => (
                <a
                  href={service.link}
                  key={index}
                  className='relative bg-[#211B50] text-white rounded-xl px-6 py-8 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group'
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
        </section>

        {/* AI-Enhanced Mobile App Development Section */}
        <section className='py-20 bg-gradient-to-br from-gray-50 to-blue-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
                AI-Enhanced Hybrid & Native Mobile App Development Company in Florida, USA
              </h2>
              <div className='text-gray-600 text-base sm:text-lg leading-relaxed space-y-4 max-w-5xl mx-auto'>
                <p>
                  We specialise in AI-powered hybrid and native mobile app development for businesses across Florida and across other regions in the USA. Our frameworks enable companies to mobilise multiple business processes, extend them to mobile devices, and embed AI-driven intelligence for smarter decision-making and automation. Using cross-platform toolkits and the latest AI-ready technologies, we deliver scalable, secure, and future-ready mobile apps.
                </p>
                <p>
                  From Miami to Orlando, Tampa to Jacksonville, and Fort Lauderdale to Palm Beach, we design and deploy apps that integrate seamlessly with enterprise systems while providing personalised, adaptive, and data-driven user experiences.
                </p>
              </div>
            </div>

            <div className='mt-16'>
              <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center'>
                Our AI-Driven Mobile Development Approach
              </h3>
              <p className='text-gray-600 text-center max-w-3xl mx-auto mb-12'>
                Leveraging cutting-edge technologies and methodologies to deliver exceptional mobile solutions
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* Card 1 */}
                <div className='group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-blue-100 hover:border-blue-300 overflow-hidden'>
                  <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-bl-full opacity-10'></div>
                  <div className='relative'>
                    <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'>
                      <svg className='w-7 h-7 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' />
                      </svg>
                    </div>
                    <h4 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300'>
                      Cross-Platform AI Integration
                    </h4>
                    <p className='text-gray-600 leading-relaxed'>
                      One source code deployed across iOS, Android, and other platforms with AI features.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className='group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-300 overflow-hidden'>
                  <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-bl-full opacity-10'></div>
                  <div className='relative'>
                    <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'>
                      <svg className='w-7 h-7 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                      </svg>
                    </div>
                    <h4 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300'>
                      Future-Ready Architecture
                    </h4>
                    <p className='text-gray-600 leading-relaxed'>
                      Built with frameworks like Flutter, React Native, and AI APIs for long-term scalability.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className='group relative bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-green-100 hover:border-green-300 overflow-hidden'>
                  <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-bl-full opacity-10'></div>
                  <div className='relative'>
                    <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'>
                      <svg className='w-7 h-7 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' />
                      </svg>
                    </div>
                    <h4 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300'>
                      Enterprise Integration
                    </h4>
                    <p className='text-gray-600 leading-relaxed'>
                      Seamless connection with legacy and modern enterprise systems.
                    </p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className='group relative bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:border-orange-300 overflow-hidden'>
                  <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-bl-full opacity-10'></div>
                  <div className='relative'>
                    <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'>
                      <svg className='w-7 h-7 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                      </svg>
                    </div>
                    <h4 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors duration-300'>
                      Intelligent Automation
                    </h4>
                    <p className='text-gray-600 leading-relaxed'>
                      AI-driven workflows that reduce manual processes and improve accuracy.
                    </p>
                  </div>
                </div>

                {/* Card 5 */}
                <div className='md:col-span-2 group relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-cyan-100 hover:border-cyan-300 overflow-hidden'>
                  <div className='relative'>
                    <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'>
                      <svg className='w-7 h-7 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                      </svg>
                    </div>
                    <h4 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-700 transition-colors duration-300'>
                      Security & Compliance
                    </h4>
                    <p className='text-gray-600 leading-relaxed'>
                      Strong encryption and adherence to HIPAA, GDPR, and SOC 2—critical for Florida's healthcare, finance, and government sectors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Florida Businesses Choose Us */}
        <section className='py-20 bg-white relative overflow-hidden'>

          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <div className='text-center mb-16'>
              <div className='inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4'>
                Why Choose Us
              </div>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                Why Florida Businesses Choose Us for AI Mobile Development
              </h2>
              <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
                Delivering innovation, expertise, and results across Florida and beyond
              </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              <div className='group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-500'></div>
                <div className='relative'>
                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                      <svg className='w-6 h-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                      </svg>
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300'>
                        Local Expertise
                      </h3>
                      <p className='text-gray-600 leading-relaxed'>
                        Serving Florida and across other states and regions in the USA with deep understanding of local business needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-500'></div>
                <div className='relative'>
                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                      <svg className='w-6 h-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                      </svg>
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300'>
                        AI-First Approach
                      </h3>
                      <p className='text-gray-600 leading-relaxed'>
                        Mobile apps designed to be intelligent, predictive, and adaptive from the ground up.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500 to-teal-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-500'></div>
                <div className='relative'>
                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                      <svg className='w-6 h-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' />
                      </svg>
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300'>
                        Cross-Platform Delivery
                      </h3>
                      <p className='text-gray-600 leading-relaxed'>
                        Faster launches using one AI-optimised codebase for iOS, Android, and web.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-500'></div>
                <div className='relative'>
                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'>
                      <svg className='w-6 h-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                      </svg>
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300'>
                        Domain Strength
                      </h3>
                      <p className='text-gray-600 leading-relaxed'>
                        Healthcare, finance, retail, real estate, and tourism apps across Florida and beyond.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ManagedServices />
        <section className='py-10'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center'>Frequently Asked Questions</h2>
          <FaqAccordion faqId="MobileApplication" />
        </section>
        <CTASection />
      </main>
    </>
  )
}
