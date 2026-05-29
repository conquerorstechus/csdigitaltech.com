'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import CTASection from '../landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function DigitalStrategyServicesClient() {
  const enhancements = [
    'Artificial intelligence (AI)',
    'Augmented reality (AR)',
    'Cloud computing',
    'Internet of Things (IoT)',
    'Mobile',
    'Digital Twin'
  ]
  const variety = [
    'Optimizing ROI',
    'It enables market share to understand even better',
    'A strategy gives you direction',
    "You'll better understand your customers",
    'It helps you develop definite effective value proposition solutions',
    'Avoid the risks when it comes to the disintegration',
    'Avoid resource-wasting duplication and time '
  ]

  const tools = [
    'Digital transformation allows efficiency and accuracy that majorly can help in order to  improve business performance',
    'It improves business flexibility and ability to adapt to changing customer needs',
    'It elevates the customer experience, which makes  addressing the customers expectations for faster, safer interactions, simpler, and the service',
    'It increases customer interactions',
   
  ]

  const requirement = [
    'Project onboarding and an internal team briefing become our basic prime focus where the team gets an overview of what the strategy team is doing and what the requirements client is expecting from us!',
    'Followed by this is pre-kickoff research and even a Kick-off call to ensure the team gets introduced to the business owners and even SPOC',
    'Creation of the Final Strategy Document and submission of the same includes a lot of research and hard work.',
    'The final Strategy Presentation is done after an important internal discussion.',
    'Completion of all Tech Recommendations and Content is done before the project moves to the dedicated team even along with an account manager leading the same.',
   
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
              Digital Strategy
            </h1>
            <p className='lg:text-lg text-base font-bold drop-shadow-md tracking-wider mt-3'>
              "ConvenantSoft Software Technologies" Customer Satisfaction Is Our
              Best Business Strategy
            </p>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Heading */}
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
              Mostly Balancing High-Tech and High-Touch Digital Strategies
            </h2>
            <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              Nowadays, the importance of digital technology implementations is
              exponentially heightened, especially after a global pandemic
              situation that disrupted the world. Today, we are observing
              accelerated AI, advanced data analytics, digital channel
              interactions, automation, chatbot integration, or virtual care
              dominating the digital landscape.
            </p>
            <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              As ConvenantSoft is the best Digital Strategy implementing company in
              Florida, To win in the digital era you always need a bold
              ambition and better flawless execution. We can help you with both.
              Our multidisciplinary teams of experts and their implementation of
              the work side-by-side with you to design, build and scale easy
              transformative digital businesses.
            </p>
          </div>
        </section>

        <section className='pb-16 '>
          <div className='max-w-7xl mx-auto px-4 '>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>
              {/* Left - Icons */}
              <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/two-min.jpg'
                  alt='HTML CSS JS Badges'
                  className='w-full lg:h-80 object-contain rounded-lg'
                />
              </div>

              {/* Right - Text Content */}
              <div>
                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                  Whatever our ambition may be—from covering new digital
                  capabilities to reimagining how your business operates by
                  launching entirely new digital ventures—we can help you set a
                  new standard of excellence and majorly achieve unprecedented
                  levels of value. Our approach combines a proven analysis and
                  end-to-end transformation framework, an integrated platform of
                  digital capabilities always supported by an expansive
                  ecosystem of best-of-breed partners who are specializing in
                  digital transformation.
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8'>
              {/* Left Content */}
              <div className='space-y-12'>
                <div>
                  <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                    A plan for leveraging the commercial advantages of
                    technology-focused, data assets and activities is known as a
                    digital strategy, sometimes also known as a digital media
                    strategy. A cross-functional team including representatives
                    from executive leadership, information technology (IT), and
                    marketing is necessary for a successful digital strategy.
                    Offering a uniform digital customer experience entails
                    dismantling the silo between information technology leaders
                    and those in other customer-facing departments.
                  </p>
                  <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                    {enhancements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side Cards */}
              <div className=''>
                <div className='flex justify-center'>
                  <img
                    src='/WebDevlopment/Screenshot-146576-min.png'
                    alt='HTML CSS JS Badges'
                    className='w-full lg:h-80 object-contain rounded-lg'
                  />
                </div>
              </div>
            </div>

            <div className='mt-16 '>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                How The Digital Service Will Help Your Business
              </h2>

              <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                {variety.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className='mt-16 grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-8'>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                  Points to Note in Digital Strategy
                </h2>
                <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
               Digital Process Transformation involves radically changing the elements of your processes to meet most of the new business goals. Usually, these new goals are centered and concentrated around a new digital transformation implementation.
                </p>

                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {tools.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                 Methodology is for Your Requirement
                </h2>
                
                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {requirement.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ManagedServices />
        <section className='py-12'>
          <FaqAccordion faqId='DigitalService' />
        </section>
        <CTASection />
      </main>
    </>
  )
}
