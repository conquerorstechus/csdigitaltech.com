'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaArrowRight, FaChevronRight } from 'react-icons/fa'
import {
  MdOutlineAndroid,
  MdOutlineWeb,
  MdOutlineMobileFriendly,
  MdOutlineIntegrationInstructions,
  MdOutlineDesignServices,
  MdOutlineCloud
} from 'react-icons/md'
import FaqAccordion from '@/components/faq/FaqAccordion'
import CTASection from '../landingpage/CTASection'

export default function MmragServicesClient() {
  const services = [
    {
      title: 'Custom Software Development',
      icon: <MdOutlineDesignServices className='w-7 h-7' />,
      link: '/custom-software-development-company-in-florida'
    },
    {
      title: 'Cloud Development Services',
      icon: <MdOutlineCloud className='w-7 h-7' />,
      link: '/cloud-development-company-in-florida'
    },
    {
      title: 'Mobile App Development',
      icon: <MdOutlineMobileFriendly className='w-7 h-7' />,
      link: '/mobile-app-development'
    },
    {
      title: 'Web Development Services',
      icon: <MdOutlineWeb className='w-7 h-7' />,
      link: '/web-development'
    },
    {
      title: 'Business Intelligence',
      icon: <MdOutlineIntegrationInstructions className='w-7 h-7' />,
      link: '/business-intelligence-development-company-in-florida'
    },
    {
      title: 'DevOps Services',
      icon: <MdOutlineAndroid className='w-7 h-7' />,
      link: '/devops-development-company-in-florida'
    }
  ]

  const mmragApplications = [
    'AI chatbots & virtual assistants',
    'Knowledge hubs for employees',
    'Automated customer support',
    'E-commerce recommendations',
    'Legal/medical document analysis',
    'Education & training platforms'
  ]

  const industries = [
    'Healthcare & Clinics – AI assistants for patient queries',
    'Finance & Legal – Smarter document search and compliance support',
    'Retail & E-Commerce – AI-powered product recommendations and visual search',
    'Education & Training – Adaptive multimodal learning systems',
    'Tourism & Real Estate – Intelligent property, booking, and service platforms'
  ]

  const benefits = [
    'Answer customer queries using all available knowledge (manuals, product images, videos, reports)',
    'Provide accurate, AI-generated responses that are context-aware and multi-source verified',
    'Deliver smarter user experiences across websites, mobile apps, and enterprise platforms'
  ]

  const whyChooseUs = [
    'AI-Centric Expertise – Our team specializes in AI, machine learning, and retrieval-augmented generation with proven implementations',
    'Local Understanding – We work with clients across Florida markets—Miami, Tampa, Orlando, Jacksonville, Fort Lauderdale, and nearby regions',
    'Custom Solutions – We design MMRAG applications that fit your industry, data sources, and workflows',
    'Enterprise-Ready – Secure, scalable, and compliant with HIPAA, GDPR, and SOC 2 standards',
    'End-to-End Delivery – From AI strategy and development to deployment and continuous support'
  ]

  return (
    <>
      <main className='bg-gray-50'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          {/* Purple overlay */}
          <div className='absolute inset-0 bg-purple-800 opacity-50'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              AI-Powered MMRAG Services in Florida
            </h1>
            <p className='mt-4 lg:text-lg text-sm mx-auto drop-shadow-md max-w-4xl px-4'>
              Multimodal Retrieval-Augmented Generation Solutions for Smarter Business Intelligence
            </p>
          </div>
        </section>

        <section className='lg:py-8 py-8'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center'>
            {/* Left Content */}
            <div className='w-full space-y-5 md:text-left'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                AI-Powered Multimodal Retrieval-Augmented Generation (MMRAG) Services in Florida
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify'>
                At Cornerstone Digital Technologies USA, we help businesses across Florida and surrounding regions unlock the true potential of AI with our Multimodal Retrieval-Augmented Generation (MMRAG) services. MMRAG combines multiple data sources—documents, PDFs, images, audio, and video—to retrieve the right information and generate meaningful, context-rich responses.
              </p>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify'>
                That means your website, mobile app, or enterprise platform can deliver faster, more accurate, and human-like interactions, whether it's answering customer questions, supporting employees with instant knowledge, or improving client experiences. Imagine a system where your product manuals, customer records, training videos, and support documents all work together through AI to provide instant, intelligent responses—that's the power of MMRAG.
              </p>
            </div>
            {/* Right Image */}
            <div className='w-full flex justify-center'>
              <Image
                src='/WebDevlopment/6_1.jpg'
                alt='AI-Powered MMRAG Services Illustration'
                width={500}
                height={400}
                className='w-full lg:h-96 h-64 object-contain rounded-lg'
                priority
              />
            </div>
          </div>

          {/* Additional Content */}
          <div className='max-w-7xl mx-auto mt-12 px-4 sm:px-6 space-y-8'>
            <div>
              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                We work closely with businesses in Miami, Tampa, Orlando and across USA, helping them integrate AI into existing workflows or build AI-driven platforms from the ground up. Our focus is on enterprise-ready AI services that create measurable impact—whether you need a smarter chatbot, an AI-powered knowledge hub, or multimodal assistants customized to your industry.
              </p>
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                What is Multimodal Retrieval-Augmented Generation (MMRAG)?
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                Think of MMRAG as next-level AI. While traditional AI chatbots or systems only understand text, MMRAG can process and combine multiple forms of data—like documents, PDFs, images, audio, and video—retrieving the most relevant information and generating meaningful, human-like responses.
              </p>

              <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mt-6'>
                This means your business can:
              </h3>
              <ul className='space-y-3 text-gray-500 font-medium text-base list-disc list-inside mt-4'>
                {benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                Our AI-Powered MMRAG Services in Florida
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                We deliver custom AI solutions to meet your specific business needs:
              </p>

              <div className='mt-6 space-y-4'>
                <div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    AI Chatbots & Virtual Assistants
                  </h3>
                  <p className='text-gray-500 font-medium text-base mt-2'>
                    Multimodal bots that understand text, images, and documents to give accurate responses 24/7.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    Enterprise Knowledge Platforms
                  </h3>
                  <p className='text-gray-500 font-medium text-base mt-2'>
                    Connect your manuals, reports, training videos, and PDFs into an AI-powered knowledge hub for employees or clients.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    E-Commerce & Retail AI
                  </h3>
                  <p className='text-gray-500 font-medium text-base mt-2'>
                    Enable smarter product search and recommendations by combining text, product images, and customer behavior data.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    Healthcare & Legal Applications
                  </h3>
                  <p className='text-gray-500 font-medium text-base mt-2'>
                    Provide accurate responses using medical records, research papers, case files, and images—helping professionals save time.
                  </p>
                </div>

                <div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    Education & Training Solutions
                  </h3>
                  <p className='text-gray-500 font-medium text-base mt-2'>
                    Intelligent learning assistants that combine textbooks, lectures, and multimedia content for personalized learning in Florida institutions.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                Why Florida Businesses Choose Us
              </h2>

              <ul className='space-y-3 text-gray-500 font-medium text-base list-disc list-inside mt-4'>
                {whyChooseUs.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                Industries We Serve
              </h2>

              <p className='text-gray-500 font-medium text-base sm:text-lg lg:leading-8 leading-8 text-justify mt-4'>
                Almost every industry can benefit from MMRAG solutions, including:
              </p>

              <ul className='space-y-3 text-gray-500 font-medium text-base list-disc list-inside mt-4'>
                {industries.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
                Common Applications of MMRAG
              </h2>

              <ul className='space-y-3 text-gray-500 font-medium text-base list-disc list-inside mt-4'>
                {mmragApplications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                Related Services
              </h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
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

        <section className='py-12'>
          <FaqAccordion faqId='MmragServices' />
        </section>

        <CTASection />
      </main>
    </>
  )
}

