'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight, FaCubes } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import CTASection from '../landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function DevOpsDevelopmentClient() {
  const enhancements = [
    'Careful analysis of the current IT infrastructure',
    'Develop a blueprint for transformation',
    'Audit the application development lifecycle'
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

  
  const identification =[
    'Analyzing the scope of different technologies',
    'Executing technology for DevOps services',
    'Cloud-based technology selection for your app'
  ]
  const execution =[
    'ADevelop products based on the strategy',
    'Rigorous testing before the final release',
    'Design processes and streamline workflow'
  ]
  const monitoring =[
    'Measuring performance of product deployed',
    'Matching the expectation against the product',
    'Monitoring the product and reporting'
  ]
  const management =[
    'DevOps team provides extended services',
    'Provide regular maintenance & support',
    'Managing your operations & improve delivery'
  ]
  const transformation =[
    'Continuous integration for cloud transformation',
    'Becoming your digital transformation partner',
    'Assistance in frequent operations automation'
  ]
  const support =[
    'Infrastructure-as-a-Service (IaaS)',
    'Platforms-as-a-Service (PaaS)',
    'Software-as-a-Service (SaaS)'
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
              DevOps Services
            </h1>
            <p className='lg:text-lg text-base font-bold drop-shadow-md tracking-wider mt-4'>
              "Cornerstone Digital Technologies" Customer Satisfaction Is Our
              Best Business Strategy
            </p>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Heading */}
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
              Best DevOps Development Services Company in Florida
            </h2>
            <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              At Cornerstone Digital Technologies with our DevOps services, we support companies in
              the transition from conventional project-based conversion to fast
              and efficient DevOps practices. Our DevOps consulting services
              help organizations streamline their software development and
              deployment processes, enabling faster delivery and improved
              quality.
            </p>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  DevOps Transformation Strategy
                </h2>
                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8 mb-4'>
                  Our DevOps transformation approach involves a comprehensive
                  assessment of your current infrastructure and processes,
                  followed by a strategic roadmap for implementing DevOps
                  practices that align with your business objectives.
                </p>
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {enhancements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  Business Intelligence & Analytics
                </h2>
                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8 mb-4'>
                  Our business intelligence solutions provide comprehensive
                  insights into your business operations through advanced
                  analytics, reporting, and data visualization tools.
                </p>
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {variety.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-12 lg:mt-16'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                Key Benefits of Our DevOps Solutions
              </h2>
              <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                {tools.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className='mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  Technology Identification
                </h2>
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {identification.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  DevOps Execution
                </h2>
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {execution.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  Regular Monitoring
                </h2>             
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {monitoring.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  Continuous Management
                </h2>
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {management.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  Digital Transformation
                </h2>
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {transformation.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                  Cloud Services & IT Support
                </h2>
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {support.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ManagedServices />
        <section className='py-12'>
          <FaqAccordion faqId='devopsdevelopment' />
        </section>
        <CTASection />
      </main>
    </>
  )
}
