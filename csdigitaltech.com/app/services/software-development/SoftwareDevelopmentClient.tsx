'use client'

import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import Image from 'next/image'
import { MdDevices, MdPhoneAndroid, MdDesignServices } from 'react-icons/md'
import {
  Code2,
  Layers3,
  Boxes,
  Database,
  PenTool,
  Smartphone
} from 'lucide-react'
import Link from 'next/link'
import FaqAccordion from '@/components/faq/FaqAccordion'
import CTANewSection from '@/components/cta/cta-newsection'

export default function SoftwareDevelopmentClient() {
const serviceCards = [
  {
    title: 'AI-Powered Enterprise & Custom Software',
    icon: <MdDevices size={36} />,
    gradient: 'from-[#3A1C71] via-[#D76D77] to-[#FFAF7B]',
    href: '/services/ai-powered-enterprise-software-in-Florida'
  },
  {
    title: 'Next-Gen AI Mobile Applications ',
    icon: <MdPhoneAndroid size={36} />,
    gradient: 'from-[#396afc] to-[#2948ff]',
    href: '/mobile-app-development'
  },
  {
    title: 'AI-Driven Web Design & Development',
    icon: <MdDesignServices size={36} />,
    gradient: 'from-[#00c6ff] to-[#0072ff]',
    href: '/web-development'
  }
]


  const services = [
    {
      title: 'Custom AI Web App Development',
      desc: 'Custom AI-enabled web platforms with predictive dashboards, smart search, cloud-native architecture, AI-assisted UI/UX design and seamless integrations for scalable enterprise performance.,',
      icon: <Code2 className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box1.jpg',
      href: '/web-development'
    },
    {
      title: 'AI-Enhanced Full Stack Development',
      desc: 'End-to-end full stack solutions integrating AI capabilities across frontend, backend, and database layers. Leveraging React, Node.js, Python, and cloud services to build intelligent, scalable applications with modern DevOps practices.',
      icon: <Smartphone className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box2.jpg',
      href: '/fullstack-development-company-florida'
    },
    {
      title: 'AI in Mobile App Development',
      desc: 'Responsive native and hybrid apps with AI personalization, voice interactions, chatbot, enabling agentic AI and predictive engagement built using Flutter, Ionic, and React Native, etc., for iOS and Android platforms.',
      icon: <Layers3 className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box6.jpg'
    },
    {
      title: 'AI-Driven eCommerce & Retail',
      desc: 'Scalable AI-powered solutions including recommendation engines, fraud detection, personalized search, inventory optimization, SaaS product engineering, and unified dashboards for intelligent retail experiences.',
      icon: <Boxes className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box4.jpg'
    },
    {
      title: 'End-to-End App Development Lifecycle',
      desc: 'With our expert-led team, we offer services in the app development lifecycle — from UI/UX design,  App development, QA/testing, DevOps, continuous AI model enhancements and support & maintenance',
      icon: <Database className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box5.jpg'
    },
    {
      title: 'UI/UX Design',
      desc: 'Expertise in clear and effective web design and mockups preparation. Also we have skilled workforce in HTML, JavaScript, WordPress, Drupal, Umbraco, Joomla, Magento, Bespoke etc.,.',
      icon: <PenTool className='w-12 h-12 stroke-1' />,
      bgImage: '/softwaredev/bg-icon-box3.jpg'
    }
  ]

  return (
    <>
      <main className='bg-gray-50'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          <div className='absolute inset-0 bg-[#FF1212] opacity-50'></div>
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
            Software Development Services in Florida
            </h1>
          </div>
        </section>

        <section className='max-w-6xl mx-auto px-4 py-12'>
          <h2 className='text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-8'>
          AI-Powered Web and Mobile App Development
          </h2>

          <div className='text-gray-700 font-normal space-y-6 text-justify text-lg leading-8 tracking-wide'>
            <p>
            Cornerstone Digital Technologies, the best custom software development company in the US, doesn’t just build applications; we engineer intelligent solutions. By fusing Artificial Intelligence with secure web and mobile app development, we deliver smarter, scalable, and more personalized digital experiences that keep your business ahead. 
            </p>

            <p>
            From AI-driven design and workflow automation to secure APIs, scalable architectures, and continuous deployment pipelines, we deliver applications that perform, learn, adapt, and evolve..
            </p>

            <p>
            As a global technology partner, we enable businesses to accelerate digital transformation by embedding AI capabilities into applications for personalization, automation, predictive insights, and smarter decision-making. With extensive experience across industries, our AI-first development approach enables organizations to optimize operations, enhance customer engagement, and unlock new revenue streams.
            </p>
            <p>
              Our strength lies in our AI specialists, data scientists, and full-stack developers, skilled in Python, Java, Microsoft technologies, mobile frameworks, and advanced AI/ML tools such as TensorFlow, PyTorch, and OpenAI APIs. This blend of domain expertise and innovation ensures every application we deliver is intelligent, scalable, and future-ready.
            </p>
          </div>

          <div className='mt-10 flex justify-center'>
            <Image
              src='/softwaredevelopment1.jpg'
              alt='DevOps Agile Illustration'
              title='Software Development Process - DevOps and Agile Methodologies'
              width={400}
              height={450}
              className='rounded-lg shadow-lg w-full max-w-3xl object-cover'
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-10'>
  {serviceCards.map((card, idx) => (
    <Link
      key={idx}
      href={card.href}
      className='group'
    >
      <div
        className={`relative rounded-xl shadow-lg text-white p-6 flex items-center justify-between overflow-hidden bg-gradient-to-r ${card.gradient} transition-all duration-300 hover:shadow-2xl group-hover:scale-[1.02]`}
      >
        <h3 className='text-xl font-bold z-10 w-2/3'>{card.title}</h3>

        <div className='absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-white bg-opacity-10 flex items-center justify-center'>
          <div className='text-white'>{card.icon}</div>
        </div>
      </div>
    </Link>
  ))}
</div>

        </section>

        <section className='py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>
          <h2 className='text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12'>
            Software Development Services
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {services.map((service, index) => (
              <Link
                key={index}
                href={services[index].href || '#'}
                className='block group'
              >
                <div className='relative h-full px-6 py-8 sm:px-8 sm:py-12 rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300'>
                  <div
                    className='absolute inset-0 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out z-0 bg-cover bg-center'
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  >
                    <div className='absolute inset-0 bg-black/20'></div>
                  </div>

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
              </Link>
            ))}
          </div>

          <p className='text-gray-600 mt-8 sm:mt-10 text-sm sm:text-base lg:text-lg leading-8 tracking-wide font-normal text-justify'>
            Our experience in fulfilling time-sensitive projects gives you a
            competitive advantage by providing high-quality deliverables in an
            aggressive time frame. We have experience in creating dedicated
            centers for multiple client projects, with highly focused offshore
            managed services, technical solutions, and support etc.,
          </p>
        </section>

        {/* AI-First Delivery Framework Section */}
        <section className='py-12 sm:py-16 px-4 bg-white'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-10'>
              <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>
                The AI-First Delivery Framework
              </h2>
              <p className='text-base sm:text-lg font-semibold text-[#FF1212] mb-4 uppercase tracking-wide'>
                Our Digital Engineering Journey
              </p>
              <p className='text-gray-700 text-base sm:text-lg leading-8 tracking-wide font-normal max-w-4xl mx-auto'>
                Our approach combines Agile flexibility with AI precision. Through discovery, prototyping, automation, and incremental releases, we create solutions that evolve with your business.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10'>
              {/* Step 1 */}
              <div className=' py-2'>
                <div className='flex items-start gap-4'>
                  <span className='flex-shrink-0 w-10 h-10 bg-[#FF1212] text-white rounded-full flex items-center justify-center font-bold text-lg'>
                    1
                  </span>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>
                      Strategic Discovery & Roadmap Design
                    </h3>
                    <p className='text-gray-600 leading-7 tracking-wide'>
                      Shape a clear digital transformation pathway through collaborative workshops that identify objectives, challenges, and long-term opportunities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className=' py-2'>
                <div className='flex items-start gap-4'>
                  <span className='flex-shrink-0 w-10 h-10 bg-[#FF1212] text-white rounded-full flex items-center justify-center font-bold text-lg'>
                    2
                  </span>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>
                      UX/UI Ideation, Wireframes & Prototyping
                    </h3>
                    <p className='text-gray-600 leading-7 tracking-wide'>
                      Convert requirements into intuitive experiences with structured wireframes, interactive prototypes, and early user validation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className=' py-2'>
                <div className='flex items-start gap-4'>
                  <span className='flex-shrink-0 w-10 h-10 bg-[#FF1212] text-white rounded-full flex items-center justify-center font-bold text-lg'>
                    3
                  </span>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>
                      Agile Development & Cloud-Native Engineering
                    </h3>
                    <p className='text-gray-600 leading-7 tracking-wide'>
                      Deliver scalable, resilient applications using Agile methods and modern cloud-native technologies for faster, adaptive releases.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className=' py-2'>
                <div className='flex items-start gap-4'>
                  <span className='flex-shrink-0 w-10 h-10 bg-[#FF1212] text-white rounded-full flex items-center justify-center font-bold text-lg'>
                    4
                  </span>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>
                      API-led Integration & Enterprise Connectivity
                    </h3>
                    <p className='text-gray-600 leading-7 tracking-wide'>
                      Enable seamless interoperability across systems through secure API frameworks and enterprise-grade integration strategies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className=' py-2'>
                <div className='flex items-start gap-4'>
                  <span className='flex-shrink-0 w-10 h-10 bg-[#FF1212] text-white rounded-full flex items-center justify-center font-bold text-lg'>
                    5
                  </span>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>
                      Intelligent Automation & AI Optimization
                    </h3>
                    <p className='text-gray-600 leading-7 tracking-wide'>
                      Enhance workflows with embedded AI/ML automation, driving operational intelligence, efficiency, and smarter decision-making.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className=' py-2'>
                <div className='flex items-start gap-4'>
                  <span className='flex-shrink-0 w-10 h-10 bg-[#FF1212] text-white rounded-full flex items-center justify-center font-bold text-lg'>
                    6
                  </span>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>
                      Continuous Performance Monitoring & Iteration
                    </h3>
                    <p className='text-gray-600 leading-7 tracking-wide'>
                      Track performance in real time, apply enhancements, and adapt solutions to meet evolving business and technology needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div className=' py-2 md:col-span-2'>
                <div className='flex items-start gap-4'>
                  <span className='flex-shrink-0 w-10 h-10 bg-[#FF1212] text-white rounded-full flex items-center justify-center font-bold text-lg'>
                    7
                  </span>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>
                      Scalable Architecture & Future-readiness
                    </h3>
                    <p className='text-gray-600 leading-7 tracking-wide'>
                      Engineer systems for growth, ensuring adaptability to new technologies, market shifts, and enterprise expansion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Cornerstone Digital Technologies Section */}
        <section className='py-12 sm:py-16 px-4 bg-gray-50'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-10'>
              <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>
                Why Cornerstone Digital Technologies?
              </h2>
              <p className='text-gray-700 text-base sm:text-lg leading-8 tracking-wide font-normal max-w-4xl mx-auto'>
                Your trusted partner for AI-powered, secure, and scalable digital solutions.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
              {/* Point 1 */}
              <div className='bg-white p-6 rounded-lg shadow-sm'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  AI-Enabled Development Expertise
                </h3>
                <p className='text-gray-600 leading-7 tracking-wide'>
                  We merge AI, automation, and full-stack engineering to accelerate delivery, improve quality, and reduce risks.
                </p>
              </div>

              {/* Point 2 */}
              <div className='bg-white p-6 rounded-lg shadow-sm'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  Deep Domain & Industry Knowledge
                </h3>
                <p className='text-gray-600 leading-7 tracking-wide'>
                  From startups to enterprises, across healthcare, finance, retail, and manufacturing, we deliver customized, compliant, and future-ready solutions.
                </p>
              </div>

              {/* Point 3 */}
              <div className='bg-white p-6 rounded-lg shadow-sm'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  Design, Security & DevOps Integrated
                </h3>
                <p className='text-gray-600 leading-7 tracking-wide'>
                  Our approach unites AI-driven UI/UX, built-in DevSecOps, and modern cloud practices for intuitive, scalable, and secure applications.
                </p>
              </div>

              {/* Point 4 */}
              <div className='bg-white p-6 rounded-lg shadow-sm'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  Comprehensive Engagement & Support
                </h3>
                <p className='text-gray-600 leading-7 tracking-wide'>
                  With flexible models, 24/7 monitoring, and lifecycle optimization, we ensure long-term value and business alignment.
                </p>
              </div>
            </div>
          </div>
        </section>
        <CTANewSection />
        <section className='py-10 text-center bg-white'>
          <div className='max-w-6xl mx-auto px-4'> 
            <h2 className='text-2xl md:text-3xl font-bold mb-5'>
            FAQs – AI-Powered Software Development
            </h2>
          </div>
      <FaqAccordion faqId="software" />
        </section>
      </main>
    </>
  )
}
