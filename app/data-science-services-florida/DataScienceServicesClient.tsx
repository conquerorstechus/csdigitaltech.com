'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import CTASection from '../landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function DataScienceServicesClient() {
  const enhancements = [
    'Connecting to multiple wide varieties of different data systems and data sets including databases and spreadsheets.',
    'Providing deep analysis, in helping users uncover hidden relationships and patterns of their data.',
    'Presenting answers in informative and compelling data visualizations like reports, charts, maps, and graphs.',
    'Enabling side-by-side comparisons of unique data under different scenarios.',
    'Providing drill-down, drill-up, and even drill-through features, enabling users to investigate different levels of data.'
  ]
  const variety = [
    'Machine learning is the backbone of data science implementation. Data Scientists need to have solid grasping techniques of Machine Learning in addition to basic knowledge of statistics.',
    'Mathematical models enable you to make quick calculations and most of the predictions are based on what you already know about the data. Modeling is also a part of Machine Learning and this involves identifying which algorithm is the most suitable to solve any given problem and how to train all these models',
    'Statistics are at the heart of data science. A well-built handle on statistics can help you extract more intelligence and even obtain more meaningful results.',
   " Some level of programming is definitely required to execute a successful data science project. The most common programming languages are as follows Python, and R. Python is especially popular because it's easy to learn and implement, and it supports multiple libraries for data science and machine learning. ",
    'A capable data scientist needs to understand most of the processes of how databases work, even how to manage them, and mostly how to extract data from them.',
    
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
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          {/* Red overlay */}
          <div className='absolute inset-0 bg-yellow-700 opacity-50'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              Data Science Services
            </h1>
          </div>
        </section>

      
        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 '>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>
              {/* Left - Icons */}
              <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/one-min-1.jpg'
                  alt='HTML CSS JS Badges'
                  className='w-full lg:h-80 object-contain rounded-lg'
                />
              </div>

              {/* Right - Text Content */}
              <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
             AI-Driven Data Solutions
            </h2>
            <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              Conquerors, one of the top Data Science companies in USA, is a pioneer in analytical applications for any consumer-facing businesses. The specialty areas include Retail Analytics, Consumer Goods Analytics, Customer Analytics, Big Data Analytics, Advanced Analytics Solutions, Cloud Analytics, Retailer Supplier Collaboration, Predictive Analytics, eCommerce Analytics, and Analytics-driven and location-based marketing.
            </p>
            <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
             We offer consulting services (customer strategy, data management, marketing, digital campaigns management, analytics, and social media), data management platforms,  insights platforms, customer analytics, and marketing optimization platform.
            </p>
              </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8'>
              {/* Left Content */}
              <div className='space-y-12'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
             Machine Learning and its Applications
            </h2>
            <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              Practically all together achievements mentioned so far come from machine learning, a subset of AI that brings the vast majority of the accomplishments in the field in recent years. When people talk about Artificial Intelligence, they are generally talking about machine learning also. 
            </p>
            <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              in simple terms, machine learning is where a computer system process continuously learns how to perform a task rather than being programmed on even how to do so.
            </p>
              </div>

              {/* Right Side Cards */}
              <div className='grid grid-cols-2 gap-6'>
                {[
                  {
                    label: 'Machine Learning',
                    img: '/WebDevlopment/startup-594090__340-2.jpg',
                    link: '/development'
                  },
                  {
                    label: 'Data Management',
                    img: '/WebDevlopment/student-849824__340-1.webp',
                    link: '/development'
                  }
                ].map((item, index) => (
                  <div key={index} className='relative group cursor-pointer'>
                    <div className='relative overflow-hidden rounded-lg'>
                      <img
                        src={item.img}
                        alt={item.label}
                        className='w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110'
                      />
                      <div className='absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300'></div>
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <span className='text-white font-semibold text-center px-2'>
                          {item.label}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-4'>

                 <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/Screenshot-14256-min.png'
                  alt='HTML CSS JS Badges'
                  className='w-full lg:h-80 object-contain rounded-lg'
                />
              </div>

               <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/Screenshot-141-min.png'
                  alt='HTML CSS JS Badges'
                  className='w-full lg:h-80 object-contain rounded-lg'
                />
              </div>

               <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/Screenshot-1412-min.webp'
                  alt='HTML CSS JS Badges'
                  className='w-full lg:h-80 object-contain rounded-lg'
                />
              </div>

            </div>


               <div className='mt-16 '>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                Deep learning
              </h2>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                Deep learning is a machine learning technique that teaches computers to do more of what comes naturally to humans. Deep learning is a key technology behind each of them like driverless cars, enabling them to recognize a stop sign or even to distinguish a pedestrian from a light post. It is the key to voice control in consumer devices just as phones, tablets, hands-free speakers, and TVs. Deep learning is getting lots of attention lately and for most good reason. It's achieving results that were not obviously possible before.
              </p>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                In deep learning, a computer model learns better to perform classification tasks directly from images, sound, and text. Deep learning models can achieve always state-of-the-art accuracy, sometimes exceeding the level of human performance. Models are trained by using a large set of labeled data and neural network architectures that suitably contains many layers.
              </p>

              </div>

                 <div className='mt-16 '>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                Python and its major implementation
              </h2>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
               Conquerors have expert Python developers for scalable and even reliable application development for your business. We provide Python development services with Django, Tornado, and Flask for the best results. With our truly skilled, resourceful, and agile Python development practices, our only motto is to provide the most effective and efficient working solutions for your business. We have experienced Python developers who can develop scalable, interactive solutions, powerful to make your business processes easier. Get end-to-end Python development services right from conceptualization to support and even maintenance, with Conquerors. We have experts who have great knowledge of data science, machine learning, data analytics, and other modern technologies.
              </p>
              </div>

                 <div className='mt-16 '>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
               Managed Services & Support Offerings
              </h2>
               <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/Screenshot-145678-min.png'
                  alt='HTML CSS JS Badges'
                  className='w-full lg:h-80 object-contain rounded-lg'
                />
              </div>
              </div>

            <div className='mt-16 '>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                Prerequisites for Data Science
              </h2>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                Here are some of the technical concepts you should know about before starting to learn what is data science.
              </p>

              <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                {variety.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ManagedServices />
        <section className='py-12'>
          <FaqAccordion faqId='DatascienceDevelopment' />
        </section>
        <CTASection />
      </main>
    </>
  )
}
