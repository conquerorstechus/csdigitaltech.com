'use client'

import {
  FaCloud,
  FaBullhorn,
  FaBriefcase,
  FaMicroscope,
  FaServer,
  FaCogs,
  FaArrowRight
} from 'react-icons/fa'
import {
  MdHealthAndSafety,
  MdAgriculture,
  MdSchool,
  MdStore,
  MdLocalShipping,
  MdFactory
} from 'react-icons/md'

import {
  HeartPulse,
  Leaf,
  GraduationCap,
  ShoppingCart,
  Truck,
  Factory
} from 'lucide-react' // modern outline icons

import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Link from 'next/link'
import { DIGITAL_MARKETING_URL, isExternalUrl } from '@/lib/constants'

const services = [
  {
    title: 'Architecture & Infrastructure',
    desc: 'Scalable architecture and dependable operations for modern cloud-first businesses.',
    note: '(Designed by Ex-AWS/FAANG engineers)',
    icon: <FaServer className='text-3xl' />,
    link: '/services/digital-cloud-solutions',
    items: [
      {
        label: 'Scalable & Serverless AWS, Azure, GCP Architecture & Setup',
        href: '/services/digital-cloud-solutions'
      },
      {
        label: 'Managed Infrastructure',
        href: '/managed-services-florida'
      }
    ]
  },
  {
    title: 'Web & Software Development',
    desc: 'Websites and custom software built for performance, scalability, and growth.',
    icon: <FaBriefcase className='text-3xl' />,
    link: '/services/software-development',
    items: [
      {
        label: 'Websites',
        href: '/web-development'
      },
      {
        label: 'Custom Software Development',
        href: '/services/software-development'
      }
    ]
  },
  {
    title: 'Digital Marketing & Lead Generation',
    desc: 'Performance-led campaigns that convert attention into qualified leads.',
    icon: <FaBullhorn className='text-3xl' />,
    link: DIGITAL_MARKETING_URL,
    items: [
      {
        label: 'Social Media Marketing',
        href: DIGITAL_MARKETING_URL
      },
      {
        label: 'Email Marketing',
        href: DIGITAL_MARKETING_URL
      },
      {
        label: 'Search Engine Optimization (SEO)',
        href: DIGITAL_MARKETING_URL
      },
      {
        label: 'Paid Ads',
        href: DIGITAL_MARKETING_URL
      },
      {
        label: 'Lead Generation through Web Scraping',
        href: DIGITAL_MARKETING_URL
      }
    ]
  },
  {
    title: 'AI & Automation',
    desc: 'Intelligent experiences and workflow automation that reduce manual effort.',
    icon: <FaCogs className='text-3xl' />,
    link: '/services/ai-ml-services',
    items: [
      {
        label: 'AI Chatbots',
        href: '/services/ai-ml-services'
      },
      {
        label: 'AI Call Centers',
        href: '/services/ai-ml-services'
      },
      {
        label: 'Business processes AI Automation using tools like N8N',
        href: '/services/ai-ml-services'
      },
      {
        label: 'Reporting (includes Data Analytics & BI, Data Science)',
        href: '/services/data-analytics-bi'
      }
    ]
  },
  {
    title: 'Business Systems Integration',
    desc: 'Connect your CRM and ERP workflows to create a unified operating model.',
    icon: <FaCloud className='text-3xl' />,
    link: '/services/it-consulting',
    items: [
      {
        label: 'CRM Setup & Implementation',
        href: '/services/it-consulting'
      },
      {
        label: 'ERP Setup & Implementation',
        href: '/services/it-consulting'
      }
    ]
  },
  {
    title: 'Quality Assurance',
    desc: 'Reliable quality engineering that strengthens releases and user confidence.',
    icon: <FaMicroscope className='text-3xl' />,
    link: '/services/testing-services',
    items: [
      {
        label: 'QA / Testing Services',
        href: '/services/testing-services'
      }
    ]
  }
]


const industries = [
  {
    title: 'Healthcare',
    desc: 'We deliver aspired outcomes in web applications design, development, support and maintenance services',
    icon: <HeartPulse className='w-10 h-10 text-[#262152]' />
    
  },
  {
    title: 'Agri-Tech',
    desc: 'We provide full stack development services with our skilled workforce in Angular, ReactJS, Node JS, Java',
    icon: <Leaf className='w-10 h-10 text-[#262152]' />
  },
  {
    title: 'Edu-Tech',
    desc: 'Create complex enterprise software, ensure reliable software integration, modernise your legacy system.',
    icon: <GraduationCap className='w-10 h-10 text-[#262152]' />
  },
  {
    title: 'E-Commerce',
    desc: 'Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app.',
    icon: <ShoppingCart className='w-10 h-10 text-[#262152]' />
  },
  {
    title: 'Travel & Logistics',
    desc: 'Build the product you need on time with an experienced team that uses a clear and effective design.',
    icon: <Truck className='w-10 h-10 text-[#262152]' />
  },
  {
    title: 'Manufacturing',
    desc: 'Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.',
    icon: <Factory className='w-10 h-10 text-[#262152]' />
  }
]

export default function ServicesClient () {
  return (
    <>
   

      <main className='bg-gray-50'>
        {/* Top Banner with background image */}
        <section
          className='text-white lg:py-24 py-16 text-center bg-cover bg-center'
          style={{ backgroundImage: 'url("/bg-pheader.jpg")' }}
        >
          <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
            Our Services
          </h1>
        </section>

        {/* Services Cards */}
        <section className='max-w-6xl mx-auto px-4 lg:py-16 py-10'>
          <h2 className='lg:text-3xl text-2xl font-semibold text-center lg:mb-12 mb-10'>
            What We Do
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white'>
            {services.map((service, i) => {
              const cardClassName =
                'group bg-[#262152] rounded-xl lg:p-6 px-6 py-8 relative overflow-hidden h-80 lg:h-96 flex flex-col justify-between transition-colors duration-300 hover:bg-white hover:shadow-2xl'

              const learnMoreClassName =
                'group inline-flex items-center gap-2 text-green-400 font-semibold text-sm transition-all duration-300'

              const learnMoreContent = (
                <>
                  <FaArrowRight className='w-3 h-3 transform transition-transform duration-300 group-hover:-translate-x-1' />
                  <span className='transform transition-transform duration-300 group-hover:-translate-x-1'>
                    LEARN MORE
                  </span>
                </>
              )

              const inner = (
                <>
                  <div className='absolute -bottom-14 -right-12 w-36 h-36 rounded-full transition-colors duration-300 bg-[#332d5f] group-hover:bg-[#84b642]'></div>

                  <div className='absolute text-[6rem] text-indigo-800 font-bold top-0 right-4 opacity-20 pointer-events-none'>
                    {`0${i + 1}`}
                  </div>

                  <div>
                    <h3 className='lg:text-2xl text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-black'>
                      {service.title}
                    </h3>
                    <p className='lg:text-base text-sm mt-4 tracking-wide text-gray-300 transition-colors font-normal duration-300 group-hover:text-gray-700 !leading-7'>
                      {service.desc}
                    </p>
                    {service.note ? (
                      <p className='mt-2 text-sm italic text-gray-400 transition-colors duration-300 group-hover:text-gray-600'>
                        {service.note}
                      </p>
                    ) : null}
                    <ul className='mt-5 space-y-2 text-sm text-gray-300 transition-colors duration-300 group-hover:text-gray-700'>
                      {service.items.map((item) => (
                        <li key={item.label}>
                          {isExternalUrl(item.href) ? (
                            <a href={item.href} className='block hover:text-green-400 transition-colors duration-300'>
                              {item.label}
                            </a>
                          ) : (
                            <Link href={item.href} className='block hover:text-green-400 transition-colors duration-300'>
                              {item.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='flex justify-between items-end pt-6'>
                    {isExternalUrl(service.link) ? (
                      <a href={service.link} className={learnMoreClassName}>{learnMoreContent}</a>
                    ) : (
                      <Link href={service.link} className={learnMoreClassName}>
                        {learnMoreContent}
                      </Link>
                    )}

                    <div className='transition-colors duration-300'>
                      <span className='relative z-10 text-white transition-colors duration-300'>
                        {service.icon}
                      </span>
                    </div>
                  </div>
                </>
              )

              if (isExternalUrl(service.link)) {
                return (
                  <a
                    key={service.title}
                    href={service.link}
                    className={cardClassName}
                  >
                    {inner}
                  </a>
                )
              }

              return (
                <div key={service.title} className={cardClassName}>
                  {inner}
                </div>
              )
            })}
          </div>
        </section>

        {/* Industries & Areas of Expertise */}
        <section className=' py-16'>
          <div className='max-w-6xl mx-auto px-4'>
            <h2 className='lg:text-3xl text-xl font-semibold text-center mb-12'>
              Industries & Areas of Expertise
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
  {industries.map((industry, i) => (
    <div
      key={i}
      className="group relative overflow-hidden rounded-xl border border-gray-200 px-6 py-9 transition-shadow duration-300 hover:shadow-2xl"
    >
      {/* Background fill layer */}
      <div className="absolute inset-0 bg-blue-50 left-0 w-0 group-hover:w-full transition-all duration-500 ease-out z-0"></div>

      {/* Card content */}
      <div className="relative z-10">
        <div className="mb-3 flex justify-center">{industry.icon}</div>
        <h3 className="text-xl font-bold my-4">{industry.title}</h3>
        <p className="text-gray-600 text-base leading-7">{industry.desc}</p>
      </div>
    </div>
  ))}
</div>

          </div>
        </section>
      </main>

    </>
  )
}

