'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import CTASection from '../landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function ManagedServicesClient() {
  const enhancements = [
    'Application monitoring along with a focus on critical metrics, like application availability and even response time.',
    'Application evolution mostly with continuous delivery of new features and design experiments.',
    'Application troubleshooting.',
    'Application modernization including application re-engineering, re-architecting, and redesign.'
  ]
  const variety = [
    'Dashboards',
    'Visualizations',
    'Reporting',
    'Data mining  ',
    'ETL (extract-transform-load —tools that import data from one data store into another)',
    'OLAP (online analytical processing)'
  ]

  const tools = [
    'Remote support. These MSPs offer the best cloud-based software, support remote devices and even remotely troubleshoot technical issues.',
    'Monitoring. These Managed Service Providers always offer real-time monitoring software for different applications, servers, network devices, or websites.',
    'Centralized management. These MSPs provide the best management console for different complex networks, remote monitoring, security software, and patch management.',
    'Proactive support. These Managed Service Providers perform preventative maintenance to stay best ahead of any device or network issues that could arise.',
    'Simplified billing. These MSPs handle invoicing, budgeting, payments, and billing management systems.',
    'Scheduled maintenance. These MSPs offer organizations regularly scheduled networks and their maintenance.'
  ]
  const devops = [
    'Deployment of CI/CD pipeline.',
    'Implementation of containerization of the strategy (based on Kubernetes or Apache Mesos).',
    'Implementation of test automation.',
    'Design of multiple automated monitoring solutions.'
  ]
  const Security = [
    'Security audits.',
    'Vulnerability assessment.',
    'Penetration testing.',
    'A compliance program is planned and assessed.'
  ]
  const Management = [
    'AWS, Azure, and multi-cloud infrastructure management.',
    'Deployment of cloud infrastructures.',
    'Applications and data migration to the cloud.',
    'Cloud monitoring and optimization.'
  ]

  return (
    <>
      <main className='bg-gray-50'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          {/* Red overlay */}
          <div className='absolute inset-0 bg-yellow-700 opacity-50'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              Managed Services
            </h1>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Heading */}
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
              We are Best in Providing Managed Services
            </h2>
            <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              Cornerstone Digital Technologies is a leading tech provider working primarily with
              educational, Manufacturing, ecommerce, Travelling industries who
              provides IT managed services, custom software development, CRM
              consulting, and sales intelligence. As a managed service provider
              delivers services, mainly as a network, infrastructure,
              application, and security, via ongoing and regular support and
              even active administration on customers' premises, in their MSP's
              data center (hosting), or in the best third-party data center.
            </p>
          </div>
        </section>

        <section className='pb-16 '>
          <div className='max-w-7xl mx-auto px-4 '>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>
              {/* Left - Icons */}
              <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/9.jpg'
                  alt='HTML CSS JS Badges'
                  className='w-full lg:h-80 object-contain rounded-lg'
                />
              </div>

              {/* Right - Text Content */}
              <div>
                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                  the managed service providers may deliver their own native
                  services in conjunction with other providers' services (for
                  example, a security MSP always provides system admin on top of
                  a third-party cloud as IaaS). Pure-play managed service
                  providers focus on one vendor or technology, usually their own
                  core offerings. Many managed service providers include many
                  services from other types of providers. MSP was traditionally
                  applied to infrastructure or device-centric services but has
                  expanded to form continuous, regular management, maintenance,
                  and support.
                </p>
              </div>
            </div>

            <div className='mt-16 '>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                MSPs Categorized by the Type of Services Offered:
              </h2>
              <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                {tools.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className='mt-16 grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-8'>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                  Managed Application Services
                </h2>

                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {enhancements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                  Managed DevOps
                </h2>

                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {devops.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

               <div className='mt-16 grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-8'>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                 Managed Security
                </h2>

                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {Security.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                  Cloud Management
                </h2>

                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {Management.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ManagedServices />
        <section className='py-12'>
          <FaqAccordion faqId='BussinessInteligent' />
        </section>
        <CTASection />
      </main>
    </>
  )
}
