'use client';

import {
  Code,
  Cloud,
  Settings,
  TestTube,
  Server,
  Megaphone,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DIGITAL_MARKETING_URL, isExternalUrl } from '@/lib/constants';

const services = [
  {
    icon: Server,
    title: 'Architecture & Infrastructure',
    description:
      'Scalable architecture and dependable operations for modern cloud-first businesses.',
    note: '(Designed by Ex-AWS/FAANG engineers)',
    link: '/services/digital-cloud-solutions',
    items: [
      'Scalable & Serverless AWS, Azure, GCP Architecture & Setup',
      'Managed Infrastructure'
    ]
  },
  {
    icon: Code,
    title: 'Web & Software Development',
    description:
      'Websites and custom software built for performance, scalability, and growth.',
    link: '/services/software-development',
    items: ['Websites', 'Custom Software Development']
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing & Lead Generation',
    description:
      'Performance-led campaigns that convert attention into qualified leads.',
    link: DIGITAL_MARKETING_URL,
    items: [
      'Social Media Marketing',
      'Email Marketing',
      'Search Engine Optimization (SEO)',
      'Paid Ads',
      'Lead Generation through Web Scraping'
    ]
  },
  {
    icon: Settings,
    title: 'AI & Automation',
    description:
      'Intelligent experiences and workflow automation that reduce manual effort.',
    link: '/services/ai-ml-services',
    items: [
      'AI Chatbots',
      'AI Call Centers',
      'Business processes AI Automation using tools like N8N',
      'Reporting (includes Data Analytics & BI, Data Science)'
    ]
  },
  {
    icon: Cloud,
    title: 'Business Systems Integration',
    description:
      'Connect your CRM and ERP workflows to create a unified operating model.',
    link: '/services/it-consulting',
    items: ['CRM Setup & Implementation', 'ERP Setup & Implementation']
  },
  {
    icon: TestTube,
    title: 'Quality Assurance',
    description:
      'Reliable quality engineering that strengthens releases and user confidence.',
    link: '/services/testing-services',
    items: ['QA / Testing Services']
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-[#E9E9E9]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4">
            Our Unique Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Delivering end-to-end <span className='inline-block font-bold'>Technology Solutions</span> that bring clarity to complexity and accelerate your digital evolution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="relative p-8 rounded-lg bg-[#262051] text-white transition-all duration-300 group border border-transparent min-h-[312px] h-full flex flex-col transform-gpu overflow-hidden"
              >
                {/* Inner wrapper for color transition */}
                <div className="absolute inset-0 bg-[#262051] group-hover:bg-white transition-colors duration-300 z-0" />

                {/* Content (keep above background) */}
                <div className="relative z-10 flex-grow flex flex-col">
                  <h3 className="lg:text-2xl text-xl font-bold font-poppins mb-4 group-hover:text-black transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="lg:text-base text-sm leading-relaxed mb-3 opacity-90 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  {service.note ? (
                    <p className="text-sm italic mb-4 opacity-80 group-hover:text-gray-600 transition-colors duration-300">
                      {service.note}
                    </p>
                  ) : null}
                  <ul className="text-sm leading-relaxed mb-6 opacity-90 group-hover:text-gray-700 transition-colors duration-300 space-y-1">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    {isExternalUrl(service.link) ? (
                      <a href={service.link}>
                        <Button
                          variant="outline"
                          className="bg-transparent border-white group-hover:border-green-600 text-white group-hover:text-green-600 hover:bg-white hover:text-green-600 hover:border-green-600 transition-all duration-300 flex items-center gap-2"
                        >
                          LEARN MORE
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </a>
                    ) : (
                      <Link href={service.link}>
                        <Button
                          variant="outline"
                          className="bg-transparent border-white group-hover:border-green-600 text-white group-hover:text-green-600 hover:bg-white hover:text-green-600 hover:border-green-600 transition-all duration-300 flex items-center gap-2"
                        >
                          LEARN MORE
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Icon at Bottom Right */}
                <div className="absolute bottom-4 right-4 z-10">
                  <div className="rounded-full p-3 bg-[#262051] group-hover:bg-green-500 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-white group-hover:text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
