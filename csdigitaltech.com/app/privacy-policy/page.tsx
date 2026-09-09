'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import CTASection from '../landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function PrivacyPolicy() {
  const enhancements = [
    'Limit or exclude our or your liability for death or personal injury;',
    ' Limit or exclude our or your liability for fraud or fraudulent misrepresentation;',
    'Limit any of our or your liabilities in any way that is not permitted under applicable law; or',
    ' Exclude any of our or your liabilities that may not be excluded under applicable law.',

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
    'Increased efficiency of operational processes. ',
    'Accurate tracking of sales, financial performance, and marketing.',
    'Clear benchmarks based on historical and current data. ',
    'Insight into customer behavior and shopping patterns.   ',
    'Analyses that can be shared in real-time and across departments. ',
    'Instant alerts about data anomalies even in customer issues.'
  ]
  return (
    <>
      <main className='bg-gray-50'>
        <section className="relative text-white lg:py-24 py-12 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          {/* Red overlay */}
          <div className='absolute inset-0 bg-blue-700 opacity-50'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              Privacy Policy
            </h1>
          </div>
        </section>

        <section className='lg:py-16 py-8 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div>
              {/* Heading */}
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                Reservation of Rights
              </h2>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                We reserve the right to request that you remove all links or any
                particular link to our Website. You approve to immediately
                remove all links to our Website upon request. We also reserve
                the right to amen these terms and conditions and it’s linking
                policy at any time. By continuously linking to our Website, you
                agree to be bound to and follow these linking terms and
                conditions.
              </p>
            </div>

            <div className='my-8'>
              {/* Heading */}
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                Removal of links from our website
              </h2>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                If you find any link on our Website that is offensive for any
                reason, you are free to contact and inform us any moment. We
                will consider requests to remove links but we are not obligated
                to or so or to respond to you directly.
              </p>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                We do not ensure that the information on this website is
                correct, we do not warrant its completeness or accuracy; nor do
                we promise to ensure that the website remains available or that
                the material on the website is kept up to date.To the maximum
                extent permitted by applicable law, we exclude all
                representations, warranties and conditions relating to our
                website and the use of this website. Nothing in this disclaimer
                will:
              </p>
            </div>


            <div className='my-8'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                Disclaimer
              </h2>
              <ul className='list-decimal list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                {enhancements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
              </p>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
              </p>
            </div>
          </div>
        </section>


      </main>
    </>
  )
}
