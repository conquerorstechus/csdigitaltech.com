'use client';

import { FaArrowRight, FaChevronRight, FaChartLine, FaCogs, FaDrupal, FaCode, FaLaravel, FaWordpress, FaCloud, FaDatabase, FaLightbulb, FaServer, FaShieldAlt, FaGlobe, FaDesktop, FaCogs as FaDevOps, FaShoppingCart, FaMicrochip, FaMobile } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  {
    name: 'AI-Driven Business Intelligence Solutions',
    link: '/business-intelligence-development-company-in-florida',
    icon: FaChartLine,
  },
  {
    name: 'Intelligent Content Management Systems (AI-CMS)',
    link: '/content-management-services-florida',
    icon: FaCogs,
  },
  {
    name: 'AI-Optimised Drupal Development',
    link: '/drupal-development-company-in-florida',
    icon: FaDrupal,
  },
  {
    name: 'AI-Powered Full Stack Development',
    link: '/fullstack-development-company-florida',
    icon: FaCode,
  },
  {
    name: 'Smart Laravel Development with AI Integration',
    link: '/laravel-development-company-in-florida',
    icon: FaLaravel,
  },
  {
    name: 'AI-Enhanced WordPress Solutions',
    link: '/wordpress-development-company',
    icon: FaWordpress,
  },
  {
    name: 'Cloud Transformation with AI-Orchestration',
    link: '/cloud-development-company-in-florida',
    icon: FaCloud,
  },
  {
    name: 'AI-Powered Data Science & Predictive Analytics',
    link: '/data-science-services-florida',
    icon: FaDatabase,
  },
  {
    name: 'AI-First Digital Strategy & Consulting',
    link: '/digital-strategy-services-florida',
    icon: FaLightbulb,
  },
  {
    name: 'AI-Enabled Infrastructure & Support Services',
    link: '/ai-enabled-infrastructure-support-services',
    icon: FaServer,
  },
  {
    name: 'Managed Services with Intelligent Automation',
    link: '/managed-services-florida',
    icon: FaShieldAlt,
  },
  {
    name: 'AI-Centric Web Development',
    link: '/web-development',
    icon: FaGlobe,
  },
  {
    name: 'Custom AI-Infused Software Development',
    link: '/custom-software-development-company-in-florida',
    icon: FaDesktop,
  },
  {
    name: 'DevOps with AI-Powered CI/CD Automation',
    link: '/devops-development-company-in-florida',
    icon: FaDevOps,
  },
  {
    name: 'AI-Optimised eCommerce Development',
    link: '/ai-optimised-ecommerce-development',
    icon: FaShoppingCart,
  },
  {
    name: 'AI-Integrated IoT Solutions',
    link: '/iot-development-services-florida',
    icon: FaMicrochip,
  },
  {
    name: 'AI-Native Microservices Architecture',
    link: '/microservices-development-company-in-florida',
    icon: FaCogs,
  },
  {
    name: 'Next-Gen AI Mobile Application Development',
    link: '/mobile-app-development',
    icon: FaMobile,
  },
];

export default function ManagedServices() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 px-2">
            Managed Services & Support Offerings
          </h2>
          <div className="w-16 md:w-20 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                href={service.link}
                className="group block bg-white shadow-md rounded-lg p-4 sm:p-5 md:p-6 hover:shadow-lg hover:scale-[1.02] md:hover:scale-105 transition-all duration-300 ease-out"
              >
                <div className="flex items-center space-x-4">
                  {/* <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <IconComponent size={24} className="text-blue-600" />
                    </div>
                  </div> */}

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      {service.name}
                    </h3>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <FaChevronRight size={12} className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
