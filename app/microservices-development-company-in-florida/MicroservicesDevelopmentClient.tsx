'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import CTASection from '../landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function MicroservicesDevelopmentClient() {
  const enhancements = [
    'Connecting to multiple wide varieties of different data systems and data sets including databases and spreadsheets.',
    'Providing deep analysis, in helping users uncover hidden relationships and patterns of their data.',
    'Presenting answers in informative and compelling data visualizations like reports, charts, maps, and graphs.',
    'Enabling side-by-side comparisons of unique data under different scenarios.',
    'Providing drill-down, drill-up, and even drill-through features, enabling users to investigate different levels of data.'
  ]
  const variety = [
    'Spring Boot. Possibly one of the finest and easy-to-go frameworks in Java for developing microservices. …',
    'Quarkus',
    'Micronaut',
    'Eclipse Vert  ',
    'Ballerina'
  ]

  const tools = [
    'Journey Services provide or cater to different customer journeys like recommendation services in an e-commerce portal, like search and browse services',
    'Business Services are those that execute business functionality like withdrawal operations,  placing an order, or in a banking application',
    'Data Services help retrieve enterprise data in a very easy-to-consume format like JSON, or XML',

  ]
  const microservices = [
    'Improved fault isolation: Larger applications can remain mostly unaffected by the failure of single module implementation.',
    'Ease of understanding: With added simplicity, developers can always have a better understanding of the functionality of a service.',
   " Eliminate each vendor or technology lock-in: Microservices provide the flexibility in order to try out a new technology stack on an individual service as needed. There won't be as many dependency concerns and each time rolling back changes becomes much easier. With less code in play, there is always more flexibility.",
    'Smaller and faster deployments: Smaller codebases and scope is equal to quicker deployments, which also allow you to start to explore the benefits of the Continuous Deployment process.',
    'Scalability: Since your services are separated, even you can more easily scale the most needed ones at the appropriate times, which is opposed to the whole application. When done correctly, this can impact each cost savings.',

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
              Microservices
            </h1>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Heading */}
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
              We Work for you on Microservices
            </h2>
            <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              The team at Conquerors is equipped with the best developers who
              are highly knowledgeable and fully experienced and do the
              microservices architecture. Irrelevant to small or big businesses,
              we can work together to deliver your requirement and the solutions
              that work in favor of your organization. For us, every client is
              important to make success path. So, from our end, we never
              hesitate to go the extra mile to reach you. We craft accordingly,
              whether you need new changes in the middle or want the existing
              things to be changed – our flexible and capable team can deliver
              you the solutions accordingly. We work here to achieve 100%
              customer satisfaction and success rate.
            </p>
          </div>
        </section>

        <section className='pb-16 '>
          <div className='max-w-7xl mx-auto px-4 '>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>
              {/* Left - Icons */}
              <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/9 (2).jpg'
                  alt='HTML CSS JS Badges'
                  className='w-full lg:h-80 object-contain rounded-lg'
                />
              </div>

              {/* Right - Text Content */}
              <div>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                  Microservices Integration Methodology
                </h2>

                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                  Microservices are a design pattern in which applications are
                  composed of different small, independent modules that
                  communicate with each other using well-defined contracts. Each
                  microservice focuses on mostly a single concept. Microservices
                  make developing, testing, and deploying isolated parts of your
                  application easier. Once deployed, each microservice can be
                  scaled independently. Microservices are a modern approach to
                  software development (and one of the most important technical
                  skills for Java developers) wherein applications are built as a
                  collection of multiple different smaller services rather than
                  one whole app.
                </p>

                <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                  {variety.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-16 '>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                Microservices and Containers for Java, .net, Azure
              </h2>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                Containers combine an application plus its configuration and
                dependencies into a single, independently deployable unit.
                Containers are an excellent fit for deploying and bundling
                independent microservices.
              </p>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                Annotation syntaxes, which are easy to read, are the key factor
                that makes Java a great programming language mostly for
                developing microservices. This feature makes Java Microservices
                much easier to develop when those are powered by Microservices
                frameworks. the three C's of microservices are followers
                componentize, collaborate, and connect.
              </p>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                ASP.NET comes along with built-in support for developing and
                deploying microservices using Docker containers especially. .
                NET includes a set of APIs to easily consume microservices from
                any application you build, including mobile, desktop, web, and
                games, etc.
              </p>
              <div className='flex justify-center mt-4'>
                <img
                  src='/WebDevlopment/Screenshot-14.png'
                  alt='HTML CSS JS Badges'
                  className='w-full object-contain rounded-lg'
                />
              </div>
            </div>

            <div className='mt-16 '>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
               Role of Microservices in Integration
              </h2>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
               Enterprises are resorting to a more modular, and loosely-coupled approach to building enterprise IT because monolithic architectures are most complex and do not allow for agile changes in their functionality. Breaking down an application into small and independent components that can perform discrete services is at the core of microservice architecture. Microservice architecture, built on the principles of SOA from the integration to the implementation stage, gives flexibility on how services can be realized.
              </p>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
               Broadly, microservices can be classified into Journey services, Data services, and Business Services.
              </p>
          
              <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                {tools.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

               <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              Microservices architecture (MSA) encourages to development of a single application as a suite of small and independent services that are running in their own process, developed and deployed independently.
              </p>
            </div>

               <div className='mt-16 '>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
              Advantages of Microservices
              </h2>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              The advantages of microservices seem to be strong enough to have assured some big enterprise players such as Amazon, Netflix, and eBay to adopt the major methodology. Compared to more monolithic design structures, those microservices offer:
              </p>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
               Broadly, microservices can be classified into Journey services, Data services, and Business Services.
              </p>
          
              <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                {microservices.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

          
            </div>
          </div>
        </section>

        <ManagedServices />
        <section className='py-12'>
          <FaqAccordion faqId='Microservice' />
        </section>
        <CTASection />
      </main>
    </>
  )
}
