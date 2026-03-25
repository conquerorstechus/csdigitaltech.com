'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import CTASection from '../landingpage/CTASection'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function CloudDevelopmentClient() {
  const Migration = [
    'Database migration',
    'Move web servers, platforms, and software assets',
    'Hybrid application deployments',
    'Migrate as SaaS model applications',
    'Setup Monitoring tools'
  ]
  const Monitoring = [
    'Cloud health monitoring',
    '24 x 7 support and incident handlingInfra',
    'Provisioning and environment setup',
    'Security aspects, Backup and Recovery  ',
    'SRE – Site Reliability Engineer'
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
      <main className='bg-white'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          {/* Red overlay */}
          <div className='absolute inset-0 bg-yellow-700 opacity-50'></div>
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
              Cloud Development
            </h1>
          </div>
        </section>

        <section className='py-16 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Heading */}
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
              Best Cloud Based Company in Florida
            </h2>
            <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
              Cloud usage is highest comparatively, thanks to factors like
              increasing home office usage and advances in mobile networking.
              Fortunately, there is a vast selection of computing companies that
              are there to help meet the rising demand. However, the
              considerable number of cloud computing companies also pose a
              challenge for applicants among them Conquerors are aspiring teams,
              one of the best cloud computing companies and it's worth investing
              your efforts and time..
            </p>
          </div>
        </section>

        <section className='py-4 '>
          <div className='max-w-7xl mx-auto px-4 '>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 items-center '>
              {/* Left - Icons */}
              <div className='flex justify-center'>
                <img
                  src='/WebDevlopment/8-1.jpg'
                  alt='HTML CSS JS Badges'
                  title='Cloud Computing Services - Amazon Web Services (AWS)'
                  className='w-full lg:h-80 object-contain rounded-lg'
                />
              </div>

              {/* Right - Text Content */}
              <div>
                <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                  Companies of all sizes are undergoing more cloud
                  transformation to keep up with the speed of modern business.
                  Cloud services make it easier to efficiently deliver all the
                  services, engage with customers, and manage other business
                  operations, Some of the benefits and challenges associated
                  with a transformation even strategy that helps your company
                  reach its strategic goals
                </p>
              </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              {/* Left Content */}
              <div className='space-y-12'>
                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    How Cloud Transformation Benefits Your Organization
                  </h2>
                  <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                    Cloud transformation offers numerous benefits for
                    organizations of all sizes. By migrating to cloud-based
                    solutions, companies can achieve greater scalability,
                    flexibility, and cost efficiency. Cloud services enable
                    businesses to access advanced technologies without the need
                    for significant upfront investments in hardware and
                    infrastructure.
                  </p>
                </div>

                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    Enhanced Security and Compliance
                  </h2>
                  <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                    Modern cloud platforms provide enterprise-grade security
                    features, including encryption, identity management, and
                    compliance certifications. This ensures that your data and
                    applications are protected according to industry standards
                    and regulatory requirements.
                  </p>
                </div>

                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    Improved Collaboration and Productivity
                  </h2>
                  <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                    Cloud-based tools and platforms enable teams to collaborate
                    more effectively, regardless of their location. Real-time
                    document sharing, video conferencing, and project
                    management tools help increase productivity and streamline
                    workflows.
                  </p>
                </div>
              </div>

              {/* Right Content */}
              <div className='space-y-12'>
                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    Cost Optimization and Resource Management
                  </h2>
                  <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                    Cloud services operate on a pay-as-you-use model, allowing
                    organizations to optimize costs by scaling resources up or
                    down based on demand. This eliminates the need to maintain
                    underutilized infrastructure and provides predictable
                    monthly expenses.
                  </p>
                </div>

                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    Disaster Recovery and Business Continuity
                  </h2>
                  <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                    Cloud platforms offer robust disaster recovery solutions
                    that ensure business continuity in case of unexpected
                    events. Automated backups, geo-redundancy, and rapid
                    recovery options minimize downtime and data loss.
                  </p>
                </div>

                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                    Innovation and Competitive Advantage
                  </h2>
                  <p className='text-gray-500 lg:text-base text-sm font-medium lg:leading-8'>
                    Cloud platforms provide access to cutting-edge technologies
                    like artificial intelligence, machine learning, and
                    Internet of Things (IoT) services. This enables
                    organizations to innovate faster and gain competitive
                    advantages in their respective markets.
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-16'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                Our Cloud Technology Stack
              </h2>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-8'>
                {[
                  { label: 'AWS', img: '/WebDevlopment/aws.png' },
                  { label: 'Azure', img: '/WebDevlopment/azure.png' },
                  { label: 'GCP', img: '/WebDevlopment/gcp.png' },
                  { label: 'Docker', img: '/WebDevlopment/docker.png' },
                  { label: 'Kubernetes', img: '/WebDevlopment/kubernetes.png' },
                  { label: 'Terraform', img: '/WebDevlopment/terraform.png' }
                ].map((item, i) => (
                  <div
                    key={i}
                    // href={item.link}
                    className='relative group overflow-hidden rounded-md shadow hover:shadow-lg transition duration-300 h-32'
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      title={item.label === 'AWS' ? 'Cloud Computing Services - Amazon Web Services (AWS)' : item.label === 'Azure' ? 'Microsoft Azure' : item.label === 'GCP' ? 'Google Cloud Platform' : item.label}
                      className='w-full h-full sm:h-full grayscale-0 transition duration-500 object-fill'
                    />
                    <div className='absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300 flex items-center justify-center'>
                      {/* <span className='text-white font-bold text-lg sm:text-xl'>
                        {item.label}
                      </span> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='mt-16 '>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 '>
                A Most Effective Way to use Cloud Computing
              </h2>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                <span className='font-semibold text-gray-700'>
                  Infrastructure-as-a-Service (IaaS)
                </span>{' '}
                delivers fundamental computing techniques, network, and storage
                resources to consumers on-demand, over the Internet, and on the
                process of pay-as-you-go basis. Using cloud infrastructure on
                every pay-per-use scheme enables companies to save on the costs
                of acquiring, managing, and maintaining their own IT
                infrastructure. Plus, the cloud is easily accessible to all.
                Most major cloud service providers — including Amazon Web
                Services (AWS), Google Cloud, Microsoft Azure, IBM Cloud, and —
                offer IaaS with their all cloud computing services.
              </p>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                <span className='font-semibold text-gray-700'>
                  Platform-as-a-Service (PaaS)
                </span>{' '}
                provides customers with a complete cloud platform — hardware,
                software, and infrastructure — for developing, running, and
                managing all applications without the cost, inflexibility, and
                complexity of building and maintaining that platform
                on-premises. Organizations may turn to PaaS for the same reasons
                they look to IaaS; they want to increase the speed of
                development on a ready-to-use platform and deploy applications
                with a predictable and cost-effective pricing model.
              </p>
              <p className='mt-4 text-gray-500  text-sm sm:text-lg lg:leading-8'>
                <span className='font-semibold text-gray-700'>
                  Software-as-a-Service (SaaS)
                </span>{' '}
                provides While Software-as-a-Service (SaaS) is similar to the
                IaaS and PaaS uses described above, it actually deserves its own
                mention for the indisputable change this model has brought about
                in the way companies use the software. SaaS offers all the
                software access online via a subscription, rather than IT teams
                having to buy and install it on different individual systems.
              </p>

              <div className='grid lg:grid-cols-2 grid-cols-1 mt-4'>
                <div>
                  <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 mb-3'>
                    GCP Cloud Migration
                  </h2>
                  <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                    {Migration.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-700  mb-3'>
                    Cloud Infra Monitoring
                  </h2>
                  <ul className='list-disc list-inside text-gray-500 lg:text-base text-sm font-medium lg:leading-8 space-y-2'>
                    {Monitoring.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

         
          </div>
        </section>

        <ManagedServices />
        <section className='py-12'>
          <FaqAccordion faqId='CloudDevelopment' />
        </section>
        <CTASection />
      </main>
    </>
  )
}
