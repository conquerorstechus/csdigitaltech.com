'use client'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import {
  BrainCircuit,
  Shield,
  Bot,
  Workflow
} from 'lucide-react'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'
import FaqAccordion from '@/components/faq/FaqAccordion'
import CTANewSection from '@/components/cta/cta-newsection'

export default function DigitalCloudSolutionsClient() {
  const services = [
    {
      title: 'AI for Better CX',
      desc: 'We integrate AI directly into your existing tech stack, ERP, and cloud platforms, delivering personalised and intelligent customer experiences. From AI-driven chatbots to predictive analytics, we help Florida businesses stay connected with their customers in smarter ways.',
      icon: <BrainCircuit className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box1.jpg'
    },
    {
      title: 'Reliability & Automation Engineering',
      desc: 'Our team ensures end-to-end automation, resilience, and proactive reliability engineering. With AI-driven monitoring and self-healing systems, your platforms remain secure, stable, and always available to serve your customers.',
      icon: <Shield className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box2.jpg'
    },
    {
      title: 'Robotic Process Automation (RPA) with AI',
      desc: 'Repetitive tasks consume valuable time. We implement RPA integrated with AI to automate back-office operations, finance workflows, HR processes, and customer support tasks—driving efficiency and lowering costs.',
      icon: <Bot className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box3.jpg'
    },
    {
      title: 'Intelligent Workflow Orchestration',
      desc: 'We enable AI-powered workflow automation across departments, ensuring seamless data exchange, task allocation, and decision-making—so your business runs faster and smarter.',
      icon: <Workflow className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box4.jpg'
    }
  ]

  return (
    <>
      <main className='bg-gray-50'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          {/* Red overlay */}
          <div className='absolute inset-0 bg-[#FFBB1B] opacity-70'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              Digital and Cloud Solutions
            </h1>
          </div>
        </section>

        <section className='py-12 px-4'>
          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            {/* Left Text */}
            <div>
              <h3 className='text-lg sm:text-3xl font-bold mb-3'>Smarter, AI-Driven Cloud & Digital Transformation Services</h3>
              <p className='text-gray-500 text-base leading-8 tracking-wide text-justify'>
                ConvenantSoft Software Technologies USA, helps businesses across Florida and nearby regions transform their operations with AI-powered digital and cloud solutions. Whether you’re modernising legacy systems, migrating to the cloud, or looking to integrate automation and AI into existing workflows, we deliver solutions that are secure, scalable, and built for better customer experiences (CX).
              </p>
              <p className='text-gray-500 text-base leading-8 tracking-wide text-justify'>We don’t just move you to the cloud—we help you unlock intelligence, automate processes, and orchestrate workflows that make your business more resilient and competitive in today’s digital-first economy in Florida and across other regions in the USA.
              </p>
            </div>

            {/* Right Image */}
            <div className='flex justify-center'>
              <img
                src='/Digitalcloud/hand-holding-cloud-system-with-data-protection_53876-124620.webp'
                alt='Cloud Security'
                className='w-full max-w-md rounded-lg shadow-md object-cover'
              />
            </div>
          </div>
        </section>

        <section className='py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>
          <h2 className='text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12'>
            Our AI-Centric Digital & Cloud Services
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                // href={`/services/${index}`}
                className='block group'
              >
                <div className='relative  h-full px-6 py-8 sm:px-8 sm:py-12 rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300'>
                  {/* Hover Background Image Layer */}
                  <div
                    className='absolute inset-0 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out z-0 bg-cover bg-center'
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  >
                    <div className='absolute inset-0 bg-black/20'></div>
                  </div>

                  {/* Content Layer */}
                  <div className='relative z-10 flex flex-col items-center text-center space-y-3 transition-all duration-300 group-hover:text-white'>
                    <div className='text-3xl sm:text-4xl transition-colors duration-300 group-hover:text-white'>
                      {service.icon}
                    </div>
                    <h3 className='text-lg sm:text-xl text-gray-800 font-semibold group-hover:text-white'>
                      {service.title}
                    </h3>
                    <p className='text-sm sm:text-base font-normal leading-6 sm:leading-7 text-gray-500 transition-colors duration-300 group-hover:text-white'>
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='py-12 px-4 sm:px-6 lg:px-8 bg-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center mb-6'>
              Cloud & Digital Transformation Services
            </h2>
            <p className='text-gray-600 text-center mb-8 max-w-4xl mx-auto leading-7'>
              Beyond AI, we provide a complete suite of cloud and digital engineering services for Florida-based businesses:
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-12'>
              <div className='flex items-start space-x-3'>
                <span className='text-[#FFBB1B] text-xl font-bold mt-1'>•</span>
                <div>
                  <h3 className='font-semibold text-gray-800 mb-1'>Cloud Security & Compliance</h3>
                  <p className='text-gray-600 text-sm'>Protecting sensitive data with enterprise-grade security.</p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <span className='text-[#FFBB1B] text-xl font-bold mt-1'>•</span>
                <div>
                  <h3 className='font-semibold text-gray-800 mb-1'>Cloud Solution Implementation</h3>
                  <p className='text-gray-600 text-sm'>Migration and deployment on AWS, Azure, and Google Cloud.</p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <span className='text-[#FFBB1B] text-xl font-bold mt-1'>•</span>
                <div>
                  <h3 className='font-semibold text-gray-800 mb-1'>Microservices & API-Led Integrations</h3>
                  <p className='text-gray-600 text-sm'>Modernise apps with modular, secure integrations.</p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <span className='text-[#FFBB1B] text-xl font-bold mt-1'>•</span>
                <div>
                  <h3 className='font-semibold text-gray-800 mb-1'>Digital Engineering</h3>
                  <p className='text-gray-600 text-sm'>Build scalable digital platforms with agile delivery models.</p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <span className='text-[#FFBB1B] text-xl font-bold mt-1'>•</span>
                <div>
                  <h3 className='font-semibold text-gray-800 mb-1'>IoT Middleware & Applications</h3>
                  <p className='text-gray-600 text-sm'>Enable communication between connected devices and business applications.</p>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <span className='text-[#FFBB1B] text-xl font-bold mt-1'>•</span>
                <div>
                  <h3 className='font-semibold text-gray-800 mb-1'>Cloud Transformation</h3>
                  <p className='text-gray-600 text-sm'>Legacy migration, cloud-native architecture, and infrastructure support.</p>
                </div>
              </div>

              <div className='flex items-start space-x-3 md:col-span-2'>
                <span className='text-[#FFBB1B] text-xl font-bold mt-1'>•</span>
                <div>
                  <h3 className='font-semibold text-gray-800 mb-1'>Next-Gen Solutions</h3>
                  <p className='text-gray-600 text-sm'>Blockchain, AI, Big Data, and low-code/no-code development.</p>
                </div>
              </div>
            </div>

            <div className='bg-gray-50 rounded-lg p-8 mt-10'>
              <h3 className='text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800'>
                Why Florida Businesses Choose Us
              </h3>
              <ul className='space-y-3 max-w-3xl mx-auto'>
                <li className='flex items-start space-x-3'>
                  <span className='text-[#FFBB1B] text-lg font-bold mt-1'>✓</span>
                  <span className='text-gray-700'><strong>Local focus:</strong> supporting businesses in Miami, Orlando, Tampa, Jacksonville, and surrounding regions.</span>
                </li>
                <li className='flex items-start space-x-3'>
                  <span className='text-[#FFBB1B] text-lg font-bold mt-1'>✓</span>
                  <span className='text-gray-700'>An <strong>AI-first approach</strong> to digital and cloud transformation.</span>
                </li>
                <li className='flex items-start space-x-3'>
                  <span className='text-[#FFBB1B] text-lg font-bold mt-1'>✓</span>
                  <span className='text-gray-700'>Skilled in <strong>AWS, Azure, Google Cloud, IoT, automation, and modern frameworks.</strong></span>
                </li>
                <li className='flex items-start space-x-3'>
                  <span className='text-[#FFBB1B] text-lg font-bold mt-1'>✓</span>
                  <span className='text-gray-700'>Proven expertise in <strong>workflow automation and AI-powered integration.</strong></span>
                </li>
                <li className='flex items-start space-x-3'>
                  <span className='text-[#FFBB1B] text-lg font-bold mt-1'>✓</span>
                  <span className='text-gray-700'><strong>Flexible engagement</strong>—whether you need a single project, migration, or full-scale digital transformation.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <CTANewSection />

        <section className='py-12'>
          <h2 className='text-2xl sm:text-3xl font-bold text-center mb-4'>Frequently Asked Questions</h2>
          <FaqAccordion faqId='DigitalCloud' />
        </section>
      </main>
    </>
  )
}
