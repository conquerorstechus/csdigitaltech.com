'use client'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import {
  TrendingUp,
  BarChart3,
  Shield,
  Users,
  Zap,
  Database,
  Phone
} from 'lucide-react';
import Link from 'next/link'
import FaqAccordion from '@/components/faq/FaqAccordion';

export default function DataScienceClient() {
  const services = [
    {
      title: 'Predictive Analytics & Forecasting',
      description: 'AI models that forecast demand, customer behaviour, and financial trends.',
      icon: <TrendingUp className='w-12 h-12 stroke-1' />
    },
    {
      title: 'Business Intelligence (BI) Solutions',
      description: 'AI-powered dashboards that give executives real-time clarity.',
      icon: <BarChart3 className='w-12 h-12 stroke-1' />
    },
    {
      title: 'Risk & Fraud Detection',
      description: 'Advanced AI algorithms to safeguard businesses in finance, insurance, and e-commerce.',
      icon: <Shield className='w-12 h-12 stroke-1' />
    },
    {
      title: 'Customer & Market Insights',
      description: 'Segment audiences, personalise offers, and enhance customer journeys.',
      icon: <Users className='w-12 h-12 stroke-1' />
    },
    {
      title: 'AI-Powered Automation',
      description: 'Intelligent systems that reduce manual reporting and streamline operations.',
      icon: <Zap className='w-12 h-12 stroke-1' />
    },
    {
      title: 'Data Engineering & Integration',
      description: 'Structuring and connecting your data across systems for seamless AI adoption.',
      icon: <Database className='w-12 h-12 stroke-1' />
    }
  ];

  const benefits = [
    {
      icon: '🔮',
      title: 'Predictive Insights',
      description: 'Anticipate market shifts and customer behaviour before they occur.'
    },
    {
      icon: '📊',
      title: 'Automated Forecasting',
      description: 'Improve accuracy in sales, demand, and revenue projections.'
    },
    {
      icon: '🛡️',
      title: 'Risk Mitigation',
      description: 'Detect anomalies, prevent losses, and enhance compliance in real time.'
    },
    {
      icon: '💡',
      title: 'Smarter Decisions',
      description: 'Empower leadership with AI-backed recommendations and data-driven clarity.'
    },
    {
      icon: '🎯',
      title: 'Industry Relevance',
      description: 'Customised AI strategies for sectors like healthcare, finance, retail, real estate, and manufacturing.'
    }
  ];

  const whyChooseUs = [
    {
      title: 'AI-First Approach',
      description: 'Every solution we deliver is designed with intelligence, automation, and adaptability at its core—not added on as an afterthought.'
    },
    {
      title: 'Proven Expertise',
      description: 'Over 15 years of experience in enterprise software development, data science, and AI-driven innovation.'
    },
    {
      title: 'Cross-Industry Experience',
      description: 'Trusted by clients across diverse sectors, including healthcare, finance, retail, manufacturing, education, and real estate.'
    },
    {
      title: 'Scalable Solutions',
      description: 'Whether you\'re a growing startup or a large enterprise, our AI and analytics solutions scale effortlessly with your business.'
    },
    {
      title: 'End-to-End Delivery',
      description: 'From strategy and design to deployment and ongoing optimisation, we handle every stage of the AI journey.'
    },
    {
      title: 'Measurable Impact',
      description: 'We focus on tangible outcomes—enhanced efficiency, reduced costs, smarter decisions, and faster growth.'
    }
  ];

  const industries = [
    {
      emoji: '🏥',
      title: 'Healthcare & Life Sciences',
      description: 'Patient data analysis, predictive diagnostics, treatment insights.'
    },
    {
      emoji: '💰',
      title: 'Financial Services',
      description: 'Fraud detection, credit scoring, and risk modelling.'
    },
    {
      emoji: '🛒',
      title: 'Retail & E-Commerce',
      description: 'Smart product recommendations, demand forecasting, churn prediction.'
    },
    {
      emoji: '✈️',
      title: 'Tourism & Hospitality',
      description: 'AI-driven booking insights, occupancy forecasts, customer behaviour analysis.'
    },
    {
      emoji: '🏘️',
      title: 'Real Estate',
      description: 'Market trend predictions, property analytics, and intelligent lead scoring.'
    },
    {
      emoji: '🎓',
      title: 'Education',
      description: 'Student performance analytics, adaptive learning insights.'
    }
  ];

  return (
    <>
      <main className='bg-white'>
        <section className="relative text-white py-12 md:py-20 lg:py-24 text-center bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500">
          {/* Content */}
          <div className='relative z-10 px-4'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-md tracking-tight leading-tight'>
              AI-Driven Data Science & Analytics Services
            </h1>
            <p className='mt-4 text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto'>
              Turning Data Into Intelligent Business Decisions
            </p>
          </div>
        </section>

        <section className='py-12 md:py-16 px-4 bg-gradient-to-b from-gray-50 to-white'>
          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
            {/* Left Text */}
            <div className="text-center md:text-left">
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6 leading-tight'>
                Turning Data Into Intelligent Business Decisions
              </h2>
              <p className='text-gray-700 text-sm sm:text-lg leading-7 md:leading-8 tracking-wide text-justify md:text-left'>
                ConvenantSoft Software Technologies USA delivers AI-driven data science and analytics solutions that empower organisations to predict trends, optimise decision-making, and uncover hidden insights within their data.
              </p>
              <p className='text-gray-700 text-sm sm:text-lg leading-7 md:leading-8 tracking-wide mt-4 text-justify md:text-left'>
                By combining Agentic Architecture, advanced AI models, and intelligent automation, we help businesses move beyond static reports to real-time, predictive, and adaptive analytics that drive measurable business outcomes in Florida and across other regions in the USA.
              </p>
            </div>

            {/* Right Image */}
            <div className='flex justify-center'>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur opacity-25'></div>
                <img
                  src='/Digitalcloud/business-brainstorming-graph-chart-report-data-concept_53876-31213.webp'
                  alt='Data Science & Analytics Services'
                  className='relative w-full max-w-md rounded-lg shadow-xl object-cover'
                />
              </div>
            </div>
          </div>
        </section>

        {/* How AI-Driven Data Science Is Transforming Businesses */}
        <section className='py-12 md:py-16 px-4 bg-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight'>
              How AI-Driven Data Science Is Transforming Businesses Across the USA
            </h2>
            <p className='text-center text-gray-700 mb-6 max-w-3xl mx-auto text-base md:text-lg px-2'>
              Traditional analytics explain what happened — AI-driven data science reveals what will happen next.
            </p>
            <p className='text-center text-gray-700 mb-10 max-w-4xl mx-auto text-sm sm:text-base px-2'>
              Businesses today are moving beyond static reports and dashboards to intelligent systems that can learn, predict, and guide strategic decisions in real time. AI transforms raw data into actionable insights, helping organisations anticipate market changes, optimise performance, and drive measurable growth.
            </p>

            <h3 className='text-2xl font-bold text-center mb-8 text-gray-800'>With our AI-driven data science solutions, you gain:</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {benefits.map((benefit, index) => (
                <div key={index} className='p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border-2 border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300'>
                  <div className='text-4xl mb-3'>{benefit.icon}</div>
                  <h4 className='font-bold text-lg mb-2 text-gray-800'>{benefit.title}</h4>
                  <p className='text-gray-700 text-sm'>{benefit.description}</p>
                </div>
              ))}
            </div>

            <p className='text-center text-gray-700 mt-10 text-lg font-semibold'>
              AI-driven data science isn't just a trend—it's transforming how modern organisations operate, compete, and grow across the United States.
            </p>
          </div>
        </section>

        {/* Our AI-Driven Data Science Services */}
        <section className='py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gradient-to-b from-gray-50 to-white'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight'>
            Our AI-Driven Data Science Services
          </h2>
          <p className='text-center text-gray-600 mb-10 md:mb-12 max-w-3xl mx-auto text-sm sm:text-base'>
            We provide end-to-end solutions that turn your data into measurable business impact
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {services.map((service, index) => (
              <div
                key={index}
                className='block group'
              >
                <div className='relative h-full px-6 py-8 rounded-xl border-2 border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-2xl hover:border-teal-200 transition-all duration-300'>
                  {/* Gradient Background on Hover */}
                  <div className='absolute inset-0 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0'></div>

                  {/* Content Layer */}
                  <div className='relative z-10 space-y-4 transition-all duration-300 text-center'>
                    <div className='flex justify-center'>
                      <div className='p-4 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 group-hover:bg-white/20 transition-colors duration-300'>
                        <div className='text-teal-600 group-hover:text-white transition-colors duration-300'>
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300'>
                      {service.title}
                    </h3>
                    <p className='text-base leading-7 text-gray-600 transition-colors duration-300 group-hover:text-white/90'>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className='py-12 md:py-16 px-4 bg-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight'>
              Why Businesses Choose Us
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {whyChooseUs.map((item, index) => (
                <div key={index} className='p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border-2 border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300'>
                  <h3 className='font-bold text-lg mb-2 text-gray-800'>✓ {item.title}</h3>
                  <p className='text-gray-700 text-sm'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className='py-12 md:py-16 px-4 bg-gradient-to-b from-gray-50 to-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight'>
              Industries We Serve in Florida
            </h2>
            <p className='text-center text-gray-700 mb-10 max-w-3xl mx-auto text-sm sm:text-base px-2'>
              Our AI-Driven Data Science & Analytics services support a wide range of industries across Florida
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {industries.map((industry, index) => (
                <div key={index} className='p-6 bg-white rounded-xl border-2 border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300'>
                  <div className='text-5xl mb-4 text-center'>{industry.emoji}</div>
                  <h3 className='font-bold text-lg mb-2 text-gray-800 text-center'>{industry.title}</h3>
                  <p className='text-gray-700 text-sm text-center'>{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='relative py-20 px-4 overflow-hidden bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500'>
          {/* Animated Background Pattern */}
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
          </div>

          {/* Content */}
          <div className='relative z-10 max-w-4xl mx-auto text-center px-4'>
            <h2 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight'>
              Let's Put Your Data to Work
            </h2>
            <p className='text-white/90 text-sm sm:text-lg lg:text-xl leading-relaxed mb-4'>
              Your data is valuable—but only if it delivers insights that matter.
            </p>
            <p className='text-white/90 text-sm sm:text-lg lg:text-xl leading-relaxed mb-10'>
              With AI-driven data science and analytics, we help businesses in Florida and across the USA to transform data into smarter strategies, reduce risks, and achieve faster growth.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0'>
              <Link
                href='/contact-us'
                className='w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-6 sm:px-8 py-4 rounded-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl'
              >
                <Phone className='w-5 h-5' />
                Talk to Our AI Data Experts
              </Link>
            </div>
          </div>
        </section>

        <section className='py-12 px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center mb-5 text-gray-800'>
              Frequently Asked Questions
            </h2>
            <FaqAccordion faqId='DataScience' />
          </div>
        </section>
      </main>
    </>
  )
}

