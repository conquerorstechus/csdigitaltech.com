'use client'
import { FiTool, FiLifeBuoy, FiCpu, FiServer } from 'react-icons/fi'
import FaqAccordion from '@/components/faq/FaqAccordion'
import CTANewSection from '@/components/cta/cta-newsection'

export default function CloudServicesClient() {
  const services = [
    {
      title: 'DevOps',
      desc: 'Expertise in Ansible, Chef, Jenkins, Docker, Kubernetes clusters, CI/CD Pipelines etc.,',
      icon: <FiTool className='w-12 h-12' />,
      bgImage: '/softwaredev/bg-icon-box1.jpg'
    },
    {
      title: 'Maintenance Support',
      desc: 'IT support and manage servers, environment setup, support issues, setup monitoring tools, configuration management etc.,',
      icon: <FiLifeBuoy className='w-12 h-12' />,
      bgImage: '/softwaredev/bg-icon-box6.jpg'
    },
    {
      title: 'Systems IT Support',
      desc: 'Networking support, servers & Infra support, datacenters, systems helpdesk, data backup & recovery etc.,',
      icon: <FiCpu className='w-12 h-12' />,
      bgImage: '/softwaredev/bg-icon-box4.jpg'
    },
    {
      title: '24x7 Infra Monitoring',
      desc: 'We provide services in 24 x 7 support and incident handling, Infra Provisioning, Security aspects, Backup and Recovery etc.,',
      icon: <FiServer className='w-12 h-12' />,
      bgImage: '/softwaredev/bg-icon-box5.jpg'
    }
  ]

  return (
    <main className='bg-gray-50'>
      <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
        <div className='absolute inset-0 bg-[#FFBB1B] opacity-70'></div>
        <div className='relative z-10'>
          <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
            Cloud Services
          </h1>
        </div>
      </section>

      <section className='py-12 px-4'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>
              Cloud Support & Services
            </h2>
            <p className='text-gray-800 text-lg leading-8 tracking-wide text-justify'>
              We provide reliable technical support services for cloud &
              on-premise environments to minimize your network and server
              problems. Our range of professional IT support services include
              24/7 cloud infra monitoring, managing networks and datacenters,
              security services, web application firewall support, performance
              monitoring, incident handling etc.,
            </p>
          </div>

          <div className='flex justify-center'>
            <img
              src='/Digitalcloud/cloud-computing-banner-background-smart-city_53876-108504.webp'
              alt='Cloud Security'
              title='Cloud Development Services'
              className='w-full max-w-md rounded-lg shadow-md object-cover'
            />
          </div>
        </div>
      </section>

      <section className='py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>
        <h2 className='text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12'>
          Cloud Support & Services
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8'>
          {services.map((service, index) => (
            <div key={index} className='block group'>
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
            </div>
          ))}
        </div>
      </section>
      <CTANewSection />
      <section className='py-12 px-4'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 text-gray-800'>
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqId='CloudServices' />
        </div>
      </section>
    </main>
  )
}
