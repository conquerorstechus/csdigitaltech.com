'use client'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import {
  Briefcase,
  BarChart3,
  Activity,
  BrainCircuit,
  Megaphone,
  Bug,
  Database,
  Sparkles,
  TestTube2,
  Zap,
  Phone
} from 'lucide-react';
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'
import FaqAccordion from '@/components/faq/FaqAccordion';

export default function ITConsultingClient() {
  const services = [
    {
      title: 'RAG (Data to LLMs)',
      desc: 'Turn your enterprise data into actionable intelligence. We design and implement retrieval-augmented generation (RAG) pipelines that feed your business data securely into Large Language Models, enabling smarter search, insights, and decision-making.',
      icon: <Database className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box1.jpg'
    },
    {
      title: 'Custom LLMs for Enterprises',
      desc: 'Every business is unique. We develop and fine-tune custom enterprise LLMs that align with your workflows, compliance needs, and customer engagement strategies.',
      icon: <Sparkles className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box5.jpg'
    },
    {
      title: 'AI-Assisted Product Testing',
      desc: 'We integrate AI-driven automated testing to reduce defects, improve reliability, and accelerate product releases. Intelligent automation ensures zero-defect software delivery at scale.',
      icon: <TestTube2 className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box2.jpg'
    },
    {
      title: 'Intelligent Automation',
      desc: 'From workflow automation and chatbots to process optimization across finance, HR, and operations, we help enterprises cut costs and boost efficiency with AI-powered automation.',
      icon: <Zap className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box4.jpg'
    },
    {
      title: 'ERP Consulting (Salesforce, SAP, NetSuite)',
      desc: 'Functional & technical consultants for design, implementation, migration, and 24/7 support of ERP/CRM platforms.',
      icon: <Briefcase className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box1.jpg'
    },
    {
      title: 'Data Science & Analytics',
      desc: 'Big data solutions with Power BI, Tableau, Zoho Analytics, and AI-powered dashboards for real-time decision-making.',
      icon: <BarChart3 className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box6.jpg'
    },
    {
      title: 'Performance Engineering',
      desc: 'Ensure your applications scale efficiently with web analytics, optimization, and content management solutions.',
      icon: <Activity className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box4.jpg'
    },
    {
      title: 'Marketing Automation Consulting',
      desc: 'AI-enabled lead scoring, campaign automation, CRM integrations, and digital marketing tools that improve sales performance.',
      icon: <Megaphone className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box3.jpg'
    },
    {
      title: 'QA & Testing Services',
      desc: 'End-to-end testing, AI-assisted QA, and performance audits to ensure your applications remain secure, reliable, and future-ready.',
      icon: <Bug className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box2.jpg'
    }
  ];

  return (
    <>
      <main className='bg-gray-50'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          {/* Red overlay */}
          <div className='absolute inset-0 bg-[#75E71E] opacity-60'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              AI & IT Consulting Services in Florida
            </h1>
          </div>
        </section>

        <section className='py-12 px-4'>
          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            {/* Left Text */}
            <div>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>
                Smarter Consulting for Smarter Businesses
              </h2>
              <p className='text-gray-800 text-lg leading-8 tracking-wide text-justify'>
                ConvenantSoft Software Technologies USA brings together AI innovation and IT consulting expertise to help businesses in Florida and across other regions in the USA transform their technology landscape. Whether you need to integrate AI into enterprise systems, build custom LLMs, modernize legacy applications, or scale IT operations, our consulting team ensures you stay ahead in a fast-moving digital world.
              </p>
              <p className='text-gray-800 text-lg leading-8 tracking-wide text-justify'>We don’t just advise—we implement, integrate, and optimize. From AI-powered automation and testing to data strategy, cloud solutions, and ERP support, we provide end-to-end consulting that reduces costs, accelerates time-to-market, and delivers measurable outcomes.
              </p>
            </div>

            {/* Right Image */}
            <div className='flex justify-center'>
              <img
                src='/Digitalcloud/business-brainstorming-graph-chart-report-data-concept_53876-31213.webp'
                alt='IT Consulting'
                className='w-full max-w-md rounded-lg shadow-md object-cover'
              />
            </div>
          </div>
        </section>

        <section className='py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>
          <h2 className='text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12'>
            Our AI & IT Consulting Services
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className='block group'
              >
                <div className='relative h-full px-6 py-8 sm:px-8 sm:py-12 rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300'>
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

        {/* CTA Section */}
        <section className='relative py-16 px-4 bg-cover bg-center bg-no-repeat bg-[url("/ctabg.jpg")]'>
          {/* Overlay */}
          <div className='absolute inset-0 bg-[#75E71E] opacity-90'></div>

          {/* Content */}
          <div className='relative z-10 max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
              Partner With Us for AI & IT Consulting in Florida
            </h2>
            <p className='text-white text-lg leading-relaxed mb-4'>
              Your business doesn't just need technology—it needs the right AI and IT consulting partner who understands your market and challenges.
            </p>
            <p className='text-white text-lg leading-relaxed mb-8'>
              At ConvenantSoft Software Technologies USA, we deliver AI-driven consulting that simplifies technology adoption, improves efficiency, and accelerates growth for businesses across Florida and beyond.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6'>
              <div className='flex items-center gap-2 text-white text-lg font-semibold'>
                <Phone className='w-6 h-6' />
                <span>Talk to Our AI & IT Consultants Today</span>
              </div>
              <Link
                href='/contact-us'
                className='inline-block bg-white text-[#75E71E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg'
              >
                Request a Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <section className='py-12 px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center lg:mb-5 text-gray-800'>
              Frequently Asked Questions
            </h2>
            <FaqAccordion faqId='ItConsulting' />
          </div>
        </section>
      </main>
    </>
  )
}
