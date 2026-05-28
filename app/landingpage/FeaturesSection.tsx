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

const services = [
  {
    icon: Code,
    title: 'Software Development Services',
    description:
      'Custom/Enterprise Web Applications, Information Security, Mobile Application Development, Database systems, UI/UX Design, Full Stack Development',
    link: '/services/software-development-in-florida'
  },
  {
    icon: Cloud,
    title: 'Digital & Cloud Solutions',
    description:
      'Cloud solutions and implementation, API-led integrations, IoT Middleware, IoT data pipeline, Mobility and Machine Learning',
    link: '/services/digital-cloud-solutions-in-Florida'
  },
  {
    icon: Settings,
    title: 'IT Consulting',
    description:
      'Advanced software solutions by helping you choose the right technologies like AI, BI & Analytics, Data Science, NetSuite, SAP, Salesforce etc.,',
    link: '/services/it-consulting-in-Florida'
  },
  {
    icon: TestTube,
    title: 'QA /Testing Services',
    description:
      'Quality Assurance with 360° view of quality across systems and processes using specialized End-to-End Managed Testing Services offerings Test Automation, Functional Testing, Performance Testing',
    link: '/services/testing-services-in-Florida'
  },
  {
    icon: Server,
    title: 'Cloud Services',
    description:
      'We have strong skills with AWS, Azure and Google Cloud Migration, DevOps, Cloud Infra Monitoring and 24/7 Support to enable seamless digital transformation.',
    link: '/services/cloud-services-in-Florida'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description:
      'Marketing and advertising of a business, product, or service using online channels, social media, email, pay-per-click, SEO, Online Reputation Management, Marketing Automation etc.,',
    link: '/services/branding-agency'
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
                  <p className="lg:text-base text-sm leading-relaxed mb-6 opacity-90 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <Link href={service.link}>
                      <Button
                        variant="outline"
                        className="bg-transparent border-white group-hover:border-green-600 text-white group-hover:text-green-600 hover:bg-white hover:text-green-600 hover:border-green-600 transition-all duration-300 flex items-center gap-2"
                      >
                        LEARN MORE
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
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
