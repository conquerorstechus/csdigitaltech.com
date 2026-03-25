'use client'

import { 
  FaChartLine, 
  FaDatabase, 
  FaChartBar, 
  FaChartPie, 
  FaLightbulb, 
  FaArrowRight, 
  FaCheckCircle,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaCogs,
  FaDesktop
} from 'react-icons/fa'
import { 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Database, 
  Zap,
  Target,
  Globe,
  Award
} from 'lucide-react'
import Image from 'next/image'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

const features = [
  {
    icon: <FaChartLine className="text-4xl text-blue-600" />,
    title: "Data Analytics & Reporting",
    description: "Transform raw data into actionable insights with advanced analytics and comprehensive reporting solutions."
  },
  {
    icon: <FaDatabase className="text-4xl text-green-600" />,
    title: "Data Warehousing",
    description: "Build robust data warehouses that consolidate information from multiple sources for unified analysis."
  },
  {
    icon: <FaChartBar className="text-4xl text-purple-600" />,
    title: "Business Dashboards",
    description: "Create interactive dashboards that provide real-time visibility into key business metrics and KPIs."
  },
  {
    icon: <FaChartPie className="text-4xl text-orange-600" />,
    title: "Predictive Analytics",
    description: "Leverage machine learning algorithms to forecast trends and make data-driven predictions."
  },
  {
    icon: <FaLightbulb className="text-4xl text-yellow-600" />,
    title: "Strategic Insights",
    description: "Generate strategic insights that drive business growth and competitive advantage."
  },
  {
    icon: <FaUsers className="text-4xl text-indigo-600" />,
    title: "User Adoption",
    description: "Ensure successful user adoption through comprehensive training and change management."
  }
]

const benefits = [
  {
    icon: <TrendingUp className="w-8 h-8 text-green-600" />,
    title: "Improved Decision Making",
    description: "Make informed decisions based on real-time data and comprehensive analytics."
  },
  {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    title: "Increased Efficiency",
    description: "Streamline operations and identify optimization opportunities through data insights."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-600" />,
    title: "Faster Insights",
    description: "Access critical business information instantly with automated reporting and dashboards."
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-600" />,
    title: "Competitive Advantage",
    description: "Gain competitive edge by leveraging advanced analytics and predictive capabilities."
  }
]

const technologies = [
  "Power BI", "Tableau", "QlikView", "SAP BusinessObjects", 
  "Microsoft SQL Server", "Oracle Database", "Amazon Redshift", 
  "Google BigQuery", "Snowflake", "Apache Hadoop", "Python", "R"
]

const industries = [
  "Healthcare", "Finance", "Retail", "Manufacturing", 
  "Telecommunications", "Transportation", "Energy", "Education"
]

export default function BusinessIntelligenceClient() {
  return (
    <>
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0">
            <Image
              src="/Digitalcloud/business-brainstorming-graph-chart-report-data-concept_53876-31213.webp"
              alt="Business Intelligence Dashboard"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Business Intelligence
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our comprehensive Business Intelligence solutions
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
                Comprehensive BI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver end-to-end Business Intelligence solutions that empower organizations to make data-driven decisions
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

        {/* Data Visualization Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Advanced Data Visualization
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Transform complex data into clear, actionable visualizations that drive business decisions. Our interactive dashboards provide real-time insights across all your key metrics.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-600 text-xl" />
                    <span className="text-gray-700">Interactive charts and graphs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-600 text-xl" />
                    <span className="text-gray-700">Real-time data updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-600 text-xl" />
                    <span className="text-gray-700">Customizable dashboards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-green-600 text-xl" />
                    <span className="text-gray-700">Mobile-responsive design</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/Digitalcloud/Stacks.jpg"
                    alt="Data Visualization Dashboard"
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
                Why Choose Our BI Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the transformative power of data-driven decision making
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage cutting-edge BI technologies and platforms for optimal performance
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-gray-900">{tech}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Protection Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Data Protection & Security
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Your data security is our top priority. We implement enterprise-grade security measures to protect your sensitive business information and ensure compliance with industry standards.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaShieldAlt className="text-blue-600 text-xl" />
                    <span className="text-gray-700">End-to-end encryption</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaShieldAlt className="text-blue-600 text-xl" />
                    <span className="text-gray-700">GDPR compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaShieldAlt className="text-blue-600 text-xl" />
                    <span className="text-gray-700">Regular security audits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaShieldAlt className="text-blue-600 text-xl" />
                    <span className="text-gray-700">Role-based access control</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/Digitalcloud/hand-holding-cloud-system-with-data-protection_53876-124620.webp"
                    alt="Data Protection and Security"
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
                Our BI solutions are tailored for diverse industry requirements
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our Business Intelligence solutions can drive growth and efficiency in your organization
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
