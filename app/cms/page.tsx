'use client'

import { 
  FaCogs, 
  FaEdit, 
  FaUsers, 
  FaGlobe, 
  FaShieldAlt, 
  FaRocket, 
  FaCheckCircle,
  FaDesktop,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaLock
} from 'react-icons/fa'
import { 
  FileText, 
  Settings, 
  Users, 
  Globe, 
  Zap,
  Target,
  Shield,
  Award
} from 'lucide-react'
import Image from 'next/image'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

const features = [
  {
    icon: <FaCogs className="text-4xl text-blue-600" />,
    title: "Easy Content Management",
    description: "Intuitive interfaces that make content creation, editing, and publishing simple for non-technical users."
  },
  {
    icon: <FaEdit className="text-4xl text-green-600" />,
    title: "WYSIWYG Editor",
    description: "What You See Is What You Get editor with drag-and-drop functionality for seamless content creation."
  },
  {
    icon: <FaUsers className="text-4xl text-purple-600" />,
    title: "User Management",
    description: "Comprehensive user roles and permissions system for secure content collaboration and management."
  },
  {
    icon: <FaGlobe className="text-4xl text-orange-600" />,
    title: "Multi-site Support",
    description: "Manage multiple websites from a single CMS platform with centralized control and administration."
  },
  {
    icon: <FaShieldAlt className="text-4xl text-yellow-600" />,
    title: "Security & Backup",
    description: "Enterprise-grade security features with automated backups and version control for content safety."
  },
  {
    icon: <FaRocket className="text-4xl text-indigo-600" />,
    title: "Performance Optimization",
    description: "Lightning-fast loading times with caching, CDN integration, and optimized database queries."
  }
]

const benefits = [
  {
    icon: <FileText className="w-8 h-8 text-green-600" />,
    title: "Streamlined Content Workflow",
    description: "Efficient content creation, review, and publishing processes that save time and reduce errors."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Team Collaboration",
    description: "Enable multiple team members to work on content simultaneously with role-based access control."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-600" />,
    title: "Quick Updates",
    description: "Make instant content changes without technical knowledge or developer intervention."
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-600" />,
    title: "Global Reach",
    description: "Multi-language support and internationalization features for global audience engagement."
  }
]

const technologies = [
  "WordPress", "Drupal", "Joomla", "Magento", 
  "Shopify", "WooCommerce", "Squarespace", "Wix", 
  "Contentful", "Strapi", "Ghost", "Hugo"
]

const industries = [
  "E-commerce", "Publishing", "Education", "Healthcare", 
  "Non-profit", "Government", "Media", "Corporate"
]

export default function CMSPage() {
  return (
    <>
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0">
            <Image
              src="/3-CRM.jpg"
              alt="Content Management System"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Content Management System
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Empower your team with powerful CMS solutions for seamless content creation, management, and delivery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Get Started
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive CMS Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver robust Content Management Systems that streamline your content operations and enhance user experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Management Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Advanced Content Management
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Take control of your digital content with our advanced CMS solutions. From simple blog posts to complex e-commerce catalogs, manage everything with ease.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-600 text-xl" />
                    <span className="text-gray-700">Drag-and-drop content creation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-600 text-xl" />
                    <span className="text-gray-700">Media library management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-600 text-xl" />
                    <span className="text-gray-700">SEO optimization tools</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-600 text-xl" />
                    <span className="text-gray-700">Content scheduling and publishing</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/Digitalcloud/testing-services.jpg"
                    alt="Content Management Interface"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our CMS Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the power of efficient content management and seamless digital experiences
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-2">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* E-commerce Integration Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/Digitalcloud/image1-about.webp"
                    alt="E-commerce CMS Integration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  E-commerce CMS Integration
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Seamlessly integrate e-commerce functionality with your CMS. Manage products, orders, customers, and content all from one powerful platform.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-600 text-xl" />
                    <span className="text-gray-700">Product catalog management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-600 text-xl" />
                    <span className="text-gray-700">Order processing system</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-600 text-xl" />
                    <span className="text-gray-700">Customer relationship management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-600 text-xl" />
                    <span className="text-gray-700">Payment gateway integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                CMS Platforms We Work With
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialize in the most popular and powerful CMS platforms in the industry
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                  <span className="text-gray-800 font-semibold">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Performance Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Security & Performance
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Your content and data security is our priority. We implement robust security measures and optimize performance for the best user experience.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaLock className="text-blue-600 text-xl" />
                    <span className="text-gray-700">SSL encryption and HTTPS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaLock className="text-blue-600 text-xl" />
                    <span className="text-gray-700">Regular security updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaLock className="text-blue-600 text-xl" />
                    <span className="text-gray-700">CDN and caching optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaLock className="text-blue-600 text-xl" />
                    <span className="text-gray-700">Database optimization</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/Digitalcloud/Stacks.jpg"
                    alt="CMS Security and Performance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our CMS solutions are tailored for diverse industry requirements
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-blue-900">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/Digitalcloud/bg-art-5.webp"
              alt="Background Pattern"
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Content Management?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our CMS solutions can streamline your content operations and enhance your digital presence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 