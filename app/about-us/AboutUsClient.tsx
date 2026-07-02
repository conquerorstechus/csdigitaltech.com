'use client'

import { FaChevronRight, FaCubes, FaLinkedin } from 'react-icons/fa'
import CountUp from 'react-countup'
import { useState } from 'react'
import Image from 'next/image'

export default function AboutUsClient() {
  const services = [
    'Digital solutions and software development',
    'Web applications development',
    'Mobility - Hybrid and Native applications',
    'Website development, content management',
    'Digital marketing, Marketing automation',
    'Analytics, Data Science and Machine Learning',
    'Cloud Services & IT Support'
  ]

  const stats = [
    { number: 3850, label: 'CLIENTS SERVED' },
    { number: 120, label: 'PROJECTS DONE' },
    { number: 60, label: 'TEAM & ADVISORS' },
    { number: 16, label: 'GLORIOUS YEARS' }
  ]

  const faqs = [
    {
      question: 'Empathize',
      answer: 'We understand our customer requirements standing in their shoes.'
    },
    {
      question: 'Ideate',
      answer:
        'We never kick start our projects without meeting our teams to brainstorm on what best we could deliver by identifying the challenges on our ways to address.'
    },
    {
      question: 'Prototype',
      answer:
        'Our software developing teams shares the initial scope of work to seek feedback from our quality assurance team.'
    },
    {
      question: 'Deliverable and Feedback',
      answer:
        'As we focus on the continuous learning and improvement, we seek the client’s genuine feedback on all our deliverables.'
    },
    {
      question: 'Define',
      answer:
        'We define the scope of work and assign roles and responsibilities.'
    },
    {
      question: 'Action Teams',
      answer:
        'Our teams focus on the utmost quality deliverables to avoid time in rework..'
    },
    {
      question: 'Testing/QA',
      answer:
        'Our quality teams get into picture for testing the prototypes and have the gaps addressed if any.'
    },
    {
      question: 'Implementation and Training',
      answer:
        'We also extend our implementation and training services on the products, features and services as per the requirement in order to ensure the complete project is effective.'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const handleToggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? -1 : index))
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Split FAQs in two columns
  const mid = Math.ceil(faqs.length / 2)
  const left = faqs.slice(0, mid)
  const right = faqs.slice(mid)

  const renderItem = (item: any, index: number, globalIndex: number) => (
    <div
      key={globalIndex}
      className='border bg-gray-50 rounded-sm mb-2 overflow-hidden mt-4'
    >
      <button
        className={`w-full flex justify-between items-center px-4 py-3 text-left transition-colors duration-300 ${activeIndex === globalIndex
          ? 'bg-gray-800 text-white'
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        onClick={() => handleToggle(globalIndex)}
      >
        <span
          className={`font-medium text-lg flex items-center gap-2 transition-colors duration-300 ${activeIndex === globalIndex ? 'text-white' : 'text-gray-800'
            }`}
        >
          <span
            className={`mr-1 ${activeIndex === globalIndex ? 'text-white' : 'text-gray-800'
              }`}
          >
            {globalIndex + 1}.
          </span>
          {item.question}
        </span>

        <FaChevronRight
          className={`transition-transform duration-300 ${activeIndex === globalIndex
            ? 'rotate-90 text-white'
            : 'text-gray-500'
            }`}
        />
      </button>

      <div
        className={`px-4 overflow-hidden transition-all duration-500 ease-in-out text-sm text-gray-600 ${activeIndex === globalIndex
          ? 'max-h-40 pb-4 opacity-100'
          : 'max-h-0 opacity-0'
          }`}
      >
        <div className='py-4 text-base font-normal leading-6 text-gray-800'>
          {item.answer}
        </div>
      </div>
    </div>
  )

  return (
    <main className='bg-gray-50 overflow-x-hidden'>
      <section className='relative bg-[#211f3b] py-10 md:py-20 overflow-hidden '>
        {/* Top-left decorative image */}
        <div className='absolute top-0 left-0 w-32 md:w-48 lg:w-64 opacity-70'>
          <Image
            src='/Digitalcloud/bg-art-5.webp'
            alt='Top Left Decoration'
            width={256}
            height={256}
            className='w-full h-auto'
          />
        </div>

        {/* Bottom-right decorative image */}
        <div className='absolute bottom-0 right-0 w-32 md:w-48 lg:w-64 opacity-70'>
          <Image
            src='/Digitalcloud/bg-art-5.webp'
            alt='Bottom Right Decoration'
            width={256}
            height={256}
            className='w-full h-auto'
          />
        </div>

        <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center relative z-10'>
          {/* Left side image */}
          <div className='w-full md:w-1/2  md:mb-0 relative aspect-square'>
            <Image
              src='/Digitalcloud/image1-about.webp'
              alt='About Us Main'
              title= 'Cornerstone Digital Technologies'
              fill
              className='object-cover rounded-lg shadow-lg'
            />
          </div>

          {/* Right side content */}
          <div className='w-full md:w-1/2 md:pl-10 text-white text-justify lg:text-left  md:mt-0'>
            <p className='text-xs md:text-sm uppercase text-gray-200 mb-3'>
              //Experience. Execution. Excellence.
            </p>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 md:mb-8'>What We Actually Do</h1>

            {/* Image below heading */}
            <div className='mb-3 w-full relative h-48'>
              <Image
                src='/Digitalcloud/Stacks.jpg'
                alt='Decorative under heading'
                title='Technology stack and development tools we use'
                fill
                className='mb-3 w-full h-auto rounded-md shadow-lg'
              />
            </div>

            <p className='text-lg md:text-xl leading-relaxed md:leading-loose text-white font-normal'>
              <span className='font-bold'>Cornerstone Digital Technologies</span> is the partner of
              choice for many of the world’s leading enterprises. We help our
              clients to accelerate their business growth by providing
              innovative digital solutions, unique ideas to solve complex
              business needs across various industries like Healthcare,
              Education, Retail & E-Commerce, CRM, Travel & Logistics,
              Manufacturing, Granite Industry etc.,
            </p>
          </div>
        </div>
      </section>
      <section className='bg-white lg:py-16 py-8'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center'>
          {/* Left column - text */}
          <div className='w-full lg:w-2/3 text-lg text-justify leading-8'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
              About Us
            </h2>

            <p>
              Covenant Soft US is a fast-growing digital marketing company in
              Tampa, Florida, built with a clear mission—to help businesses grow
              by combining cutting-edge technology with results-driven
              marketing.
            </p>

            <p>
              Led by Sam Kasimalla, an ex-FAANG engineer, Covenant Soft Software
              Technologies LLC brings Silicon Valley–level innovation into the
              digital marketing space. Our foundation is rooted in advanced
              technologies like AI, Next.js, and cloud infrastructure, allowing
              us to deliver smarter, faster, and more scalable marketing
              solutions.
            </p>

            <p>
              As a Tampa-based digital marketing agency, we specialize in helping
              businesses stand out in competitive markets. From high-converting
              email marketing and performance-driven campaigns to modern web
              experiences and automation, everything we build is designed with
              one goal: measurable growth.
            </p>

            <p>
              We believe great marketing isn&apos;t just about visibility—it&apos;s
              about results. That&apos;s why we focus on strategies that drive real
              ROI, attract the right audience, and convert attention into revenue.
            </p>

            <p>
              At Covenant Soft US, we&apos;re not just another digital marketing
              company in Tampa, Florida—we&apos;re your technology-powered growth
              partner, committed to helping you scale with confidence.
            </p>
          </div>

          {/* Right column - image boxes */}
          <div className='w-full lg:w-1/3 grid grid-cols-2 gap-4'>
            {[
              { title: 'Our Mission', src: '/About/image-box1.jpg', sectionId: 'our-mission' },
              { title: 'Our Vision', src: '/About/image-box2.jpg', sectionId: 'our-vision' },
              { title: 'Our Values', src: '/About/image-box3.jpg', sectionId: 'our-values' },
              { title: 'Our Culture', src: '/About/image-box4.jpg', sectionId: 'our-culture' }
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => scrollToSection(item.sectionId)}
                className='relative h-40 bg-gray-200 rounded overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg'
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  title={`Cornerstone Digital Technologies ${item.title}`}
                  fill
                  className='object-cover transition-transform duration-300 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors duration-300'>
                  <h3 className='text-white text-lg font-bold'>{item.title}</h3>
                </div>
                {/* Optional: green corner design */}
                <div className='absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-green-500 border-l-[30px] border-l-transparent' />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=' bg-white text-white lg:pt-16 pt-8'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
            WE CATER OUR SERVICES ACROSS
          </h2>

          <div className='relative bg-[#142359] lg:rounded-tl-full lg:rounded-bl-full rounded-md  flex flex-col md:flex-row overflow-hidden'>
            {/* Left Side Image */}
            <div className='w-full md:w-1/2 p-8 flex items-center justify-center'>
              <div className='relative w-full aspect-square'>
                <Image
                  src='/About/it-services-03.webp'
                  alt='Services Illustration'
                  title='IT Services and Solutions we provide across industries'
                  fill
                  className='object-contain'
                />
              </div>
            </div>

            {/* Right Side Services List */}
            <div className='w-full md:w-1/2 py-10 px-6 md:px-12 flex flex-col justify-center gap-6'>
              {services.map((service, index) => (
                <div key={index} className='flex items-start gap-4 lg:my-3'>
                  <FaCubes className='text-white mt-1' size={20} />
                  <p className='text-white text-base md:text-2xl '>{service}</p>
                </div>
              ))}
            </div>
          </div>

          <div id='our-mission' className='max-w-5xl mx-auto mt-12 px-6 sm:px-10 lg:px-0 scroll-mt-20'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-gray-800'>
              OUR MISSION
            </h2>

            <div className='space-y-8 text-left '>
              <div className='flex items-start space-x-4 relative'>
                <p className='lg:text-2xl text-lg font-medium  text-gray-500 z-10'>
                  Exceeding the clients expectations by delightful platter of
                  technological quality services.
                </p>
                <div className='bg-red-400  w-10 h-10 -left-12 rounded-full absolute'></div>
              </div>
              <div className='flex items-start space-x-4 relative'>
                <p className='lg:text-2xl text-lg font-medium  text-gray-500 z-10'>
                  Continuous focus on upgrading our technological capabilities
                  to deliver our promises.
                </p>
                <div className='bg-green-400  w-10 h-10 -left-12 rounded-full absolute'></div>
              </div>
              <div className='flex items-start space-x-4 relative'>
                <p className='text-base md:text-lg lg:text-2xl font-medium text-gray-500 z-10'>
                  Building trusted relationship with our clients, business
                  partners & stakeholders.
                </p>
                <div className='bg-yellow-400 w-8 h-8 md:w-10 md:h-10 -left-8 md:-left-12 rounded-full absolute'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#f5f5f5] py-12 md:py-20 mt-8 mb-[-32px] md:mb-0'>
          <div className='max-w-5xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 px-6 sm:px-10 lg:px-0'>
              <div id='our-vision' className='scroll-mt-20'>
                <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-800'>
                  Our Vision
                </h2>
                <div className='flex space-x-4 relative'>
                  <p className='text-base md:text-lg lg:text-2xl font-medium text-gray-500 z-10 !leading-relaxed md:!leading-10'>
                    Leading player in digital space providing feasible solutions
                    to tomorrow’s explicit global needs through advanced
                    technological platforms/ streams.
                  </p>
                  <div className='bg-red-400 w-8 h-8 md:w-10 md:h-10 -left-8 md:-left-10 rounded-full absolute '></div>
                </div>
              </div>

              <div id='our-values' className='scroll-mt-20 mt-10 md:mt-0'>
                <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-800'>
                  Our Values
                </h2>
                <div className='space-y-6 md:space-y-8'>
                  <div className='flex items-center space-x-4 relative '>
                    <p className='text-base md:text-lg lg:text-2xl font-medium text-gray-500 z-10'>
                      Respect Relationships
                    </p>
                    <div className='bg-red-400 w-8 h-8 md:w-10 md:h-10 -left-8 md:-left-10 rounded-full absolute'></div>
                  </div>
                  <div className='flex items-center space-x-4 relative '>
                    <p className='text-base md:text-lg lg:text-2xl font-medium text-gray-500 z-10'>
                      Leadership Excellence
                    </p>
                    <div className='bg-yellow-400 w-8 h-8 md:w-10 md:h-10 -left-8 md:-left-10 rounded-full absolute'></div>
                  </div>
                  <div className='flex items-center space-x-4 relative '>
                    <p className='text-base md:text-lg lg:text-2xl font-medium text-gray-500 z-10'>
                      Ownership Accountability
                    </p>
                    <div className='bg-green-400 w-8 h-8 md:w-10 md:h-10 -left-8 md:-left-10 rounded-full absolute'></div>
                  </div>
                  <div className='flex items-center space-x-4 relative '>
                    <p className='text-base md:text-lg lg:text-2xl font-medium text-gray-500 z-10'>
                      Agility
                    </p>
                    <div className='bg-sky-400 w-8 h-8 md:w-10 md:h-10 -left-8 md:-left-10 rounded-full absolute'></div>
                  </div>
                  <div className='flex items-center space-x-4 relative '>
                    <p className='text-base md:text-lg lg:text-2xl font-medium text-gray-500 z-10'>
                      Integrity in everything we do
                    </p>
                    <div className='bg-blue-400 w-8 h-8 md:w-10 md:h-10 -left-8 md:-left-10 rounded-full absolute'></div>
                  </div>
                </div>
              </div>
            </div>

            <div id='our-culture' className='mt-12 md:mt-16 py-8 md:py-12 lg:px-0 px-6 sm:px-8 scroll-mt-20'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center md:text-left'>
                Our Culture
              </h2>
              <div className='space-y-6 md:space-y-8'>
                <div className='flex items-start space-x-4 relative'>
                  <p className='text-base md:text-lg lg:text-2xl font-medium text-gray-500 z-10'>
                    We Believe in Our ‘Calling of Serving People and Nations’.
                    Hence, Empathy Works better for us.
                  </p>
                  <div className='bg-red-400 w-8 h-8 md:w-10 md:h-10 -left-8 md:-left-10 rounded-full absolute'></div>
                </div>
                <div className='flex items-start space-x-4 relative '>
                  <p className='text-base md:text-lg lg:text-2xl font-medium text-gray-500 z-10'>
                    We found a Purpose and Passion to Come Together and Win
                    Together. We Collaborate & Work.
                  </p>
                  <div className='bg-yellow-400 w-8 h-8 md:w-10 md:h-10 -left-8 md:-left-10 rounded-full absolute'></div>
                </div>
                <div className='flex items-start space-x-4 relative '>
                  <p className='text-base md:text-lg lg:text-2xl font-medium text-gray-500 z-10'>
                    Culture of Continuous Learning & Development to Hack the
                    Growth of our Organization.
                  </p>
                  <div className='bg-green-400 w-8 h-8 md:w-10 md:h-10 -left-8 md:-left-10 rounded-full absolute'></div>
                </div>
                <div className='flex items-start space-x-4 relative '>
                  <p className='text-base md:text-lg lg:text-2xl font-medium text-gray-500 z-10'>
                    Capable Leadership Working Linear with Teams to Drive the
                    Performance of Organization.
                  </p>
                  <div className='bg-sky-400 w-8 h-8 md:w-10 md:h-10 -left-8 md:-left-10 rounded-full absolute'></div>
                </div>
                <div className='flex items-start space-x-4 relative '>
                  <p className='text-base md:text-lg lg:text-2xl font-medium text-gray-500 z-10'>
                    We are Glued together strongly with our Spiritual Ethical
                    Values & Beliefs.
                  </p>
                  <div className='bg-blue-400 w-8 h-8 md:w-10 md:h-10 -left-8 md:-left-10 rounded-full absolute'></div>
                </div>
                <div className='flex items-start space-x-4 relative '>
                  <p className='text-base md:text-lg lg:text-2xl font-medium text-gray-500 z-10'>
                    Freedom to Explore, Learn, Experiment and Experience Latest
                    Technologies.
                  </p>
                  <div className='bg-blue-400 w-8 h-8 md:w-10 md:h-10 -left-8 md:-left-10 rounded-full absolute'></div>
                </div>
                <div className='flex items-start space-x-4 relative '>
                  <p className='text-base md:text-lg lg:text-2xl font-medium text-gray-500 z-10'>
                    We Rejoice in Our Group Success.
                  </p>
                  <div className='bg-blue-400 w-8 h-8 md:w-10 md:h-10 -left-8 md:-left-10 rounded-full absolute'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='bg-gradient-to-r from-cyan-400 to-purple-600 text-white py-10'>
        <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h2 className='text-4xl font-bold mb-2'>
                <CountUp end={stat.number} duration={2.5} />+
              </h2>
              <p className='text-sm font-semibold tracking-wide'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <section className='max-w-6xl mx-auto px-4 py-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center'>
          Our Business Operating Model
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div>{left.map((item, i) => renderItem(item, i, i))}</div>
          <div>{right.map((item, i) => renderItem(item, i, i + mid))}</div>
        </div>
      </section>
    </main>
  )
}
