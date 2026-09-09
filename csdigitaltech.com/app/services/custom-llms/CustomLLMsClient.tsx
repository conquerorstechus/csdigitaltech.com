'use client'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import {
  Sparkles,
  Bot,
  FileText,
  Zap,
  Globe,
  Shield,
  Phone
} from 'lucide-react';
import Link from 'next/link'
import FaqAccordion from '@/components/faq/FaqAccordion';

export default function CustomLLMsClient() {
  const services = [
    {
      title: 'LLM Integration with Enterprise Apps',
      description: 'Connect AI with CRMs, ERPs, portals, and cloud platforms.',
      icon: <Sparkles className='w-12 h-12 stroke-1' />
    },
    {
      title: 'Fine-Tuning & Customisation',
      description: 'Adjust models to your industry terminology, workflows, and compliance needs.',
      icon: <Zap className='w-12 h-12 stroke-1' />
    },
    {
      title: 'AI-Powered Chatbots & Assistants',
      description: 'Deploy intelligent, context-aware chat interfaces for employees and customers.',
      icon: <Bot className='w-12 h-12 stroke-1' />
    },
    {
      title: 'Knowledge Base & Document AI',
      description: 'Enable LLMs to interact with your documents, FAQs, and policies.',
      icon: <FileText className='w-12 h-12 stroke-1' />
    },
    {
      title: 'Process Automation',
      description: 'Use LLMs for summarization, reporting, and intelligent data extraction.',
      icon: <Zap className='w-12 h-12 stroke-1' />
    },
    {
      title: 'Multilingual AI Support',
      description: 'Cater to Florida\'s diverse communities with multilingual AI interfaces.',
      icon: <Globe className='w-12 h-12 stroke-1' />
    },
    {
      title: 'Secure Deployment',
      description: 'Cloud, hybrid, or on-premise LLM integration with ongoing monitoring.',
      icon: <Shield className='w-12 h-12 stroke-1' />
    }
  ];

  const whyEnterprises = [
    {
      icon: '⚙️',
      text: 'Works with your existing systems (CRM, ERP, cloud apps).'
    },
    {
      icon: '🎯',
      text: 'Understands your workflows and data context.'
    },
    {
      icon: '✅',
      text: 'Delivers accurate, compliant, and reliable outputs.'
    },
    {
      icon: '🚀',
      text: 'Enhances customer experience and productivity.'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Consultation & Use-Case Mapping',
      description: 'Identify where LLMs can add value in your business.'
    },
    {
      number: '02',
      title: 'Integration Strategy',
      description: 'Plan how to connect AI with your existing systems.'
    },
    {
      number: '03',
      title: 'Customisation',
      description: 'Fine-tune pre-trained LLMs to your business domain.'
    },
    {
      number: '04',
      title: 'Deployment',
      description: 'Implement LLMs into apps, workflows, and cloud infrastructure.'
    },
    {
      number: '05',
      title: 'Testing & Validation',
      description: 'Ensure accuracy, security, and compliance.'
    },
    {
      number: '06',
      title: 'Support & Evolution',
      description: 'Continuous monitoring, updates, and scaling.'
    }
  ];

  const industries = [
    {
      emoji: '🏥',
      title: 'Healthcare',
      description: 'AI-powered patient assistants and medical support portals.'
    },
    {
      emoji: '💰',
      title: 'Finance',
      description: 'Intelligent fraud checks, customer query handling, and compliance bots.'
    },
    {
      emoji: '🛒',
      title: 'Retail & E-Commerce',
      description: 'AI product recommenders, shopping assistants, and customer service chatbots.'
    },
    {
      emoji: '⚖️',
      title: 'Legal & Compliance',
      description: 'Contract summarisation, policy review, and compliance support.'
    },
    {
      emoji: '🏘️',
      title: 'Real Estate',
      description: 'Smart property search assistants for agents and buyers.'
    },
    {
      emoji: '🎓',
      title: 'Education',
      description: 'AI-driven tutoring platforms and student support chatbots.'
    },
    {
      emoji: '✈️',
      title: 'Hospitality & Tourism',
      description: 'Smart booking assistants and multilingual concierge bots.'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Local expertise',
      description: 'Serving businesses in Florida and nearby areas.'
    },
    {
      title: 'Enterprise-ready solutions',
      description: 'Scalable, secure, and compliant.'
    },
    {
      title: 'Custom-made',
      description: 'We adjust LLMs to your workflows and industry.'
    },
    {
      title: 'Ongoing support',
      description: 'Continuous monitoring, updates, and optimisation.'
    }
  ];

  return (
    <>
      <main className='bg-white'>
        <section className="relative text-white py-12 md:py-20 lg:py-24 text-center bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
          {/* Content */}
          <div className='relative z-10 px-4'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-md tracking-tight leading-tight'>
              AI-Driven Custom LLMs for Enterprises in Florida
            </h1>
            <p className='mt-4 text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto'>
              Smarter Business Solutions Through Enterprise AI Integration
            </p>
          </div>
        </section>

        <section className='py-12 md:py-16 px-4 bg-gradient-to-b from-gray-50 to-white'>
          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
            {/* Left Text */}
            <div className="text-center md:text-left">
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight'>
                Smarter Business Solutions Through Enterprise AI Integration
              </h2>
              <p className='text-gray-700 text-sm sm:text-lg leading-7 md:leading-8 tracking-wide text-justify md:text-left'>
                Cornerstone Digital Technologies USA helps enterprises across Florida and surrounding regions harness the power of Large Language Models (LLMs) by seamlessly implementing, customising, and integrating them into existing business systems.
              </p>
              <p className='text-gray-700 text-sm sm:text-lg leading-7 md:leading-8 tracking-wide mt-4 text-justify md:text-left'>
                From Miami and Orlando to Tampa and Jacksonville, we enable businesses to enhance customer engagement, streamline workflows, and unlock real-time insights with LLM-powered chatbots, document assistants, and intelligent automation.
              </p>
            </div>

            {/* Right Image */}
            <div className='flex justify-center'>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg blur opacity-25'></div>
                <img
                  src='/Digitalcloud/business-brainstorming-graph-chart-report-data-concept_53876-31213.webp'
                  alt='Custom LLM Services'
                  className='relative w-full max-w-md rounded-lg shadow-xl object-cover'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Enterprises Need Customised LLM Integration */}
        <section className='py-12 md:py-16 px-4 bg-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent leading-tight'>
              Why Enterprises Need Customised LLM Integration
            </h2>
            <p className='text-center text-gray-700 mb-8 max-w-3xl mx-auto text-base md:text-lg'>
              Off-the-shelf AI models are powerful, but they are too generic for enterprise needs. Your business requires AI that:
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8'>
              {whyEnterprises.map((item, index) => (
                <div key={index} className='flex items-start gap-3 p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border-2 border-violet-100'>
                  <div className='text-3xl flex-shrink-0'>{item.icon}</div>
                  <p className='text-gray-700 text-base'>{item.text}</p>
                </div>
              ))}
            </div>

            <p className='text-center text-gray-800 text-lg font-semibold max-w-3xl mx-auto'>
              That's exactly what we deliver—custom LLM integration that makes enterprise software smarter and more effective.
            </p>
          </div>
        </section>

        {/* Our AI-Driven LLM Services */}
        <section className='py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gradient-to-b from-gray-50 to-white'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent leading-tight'>
            Our AI-Driven LLM Services
          </h2>
          <p className='text-center text-gray-600 mb-10 md:mb-12 max-w-3xl mx-auto text-sm sm:text-base'>
            We specialise in helping enterprises adopt and incorporate leading AI models (OpenAI GPT, LLaMA, Hugging Face, and others) into their business systems
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {services.map((service, index) => (
              <div
                key={index}
                className='block group'
              >
                <div className='relative h-full px-6 py-8 rounded-xl border-2 border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-2xl hover:border-violet-200 transition-all duration-300'>
                  {/* Gradient Background on Hover */}
                  <div className='absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0'></div>

                  {/* Content Layer */}
                  <div className='relative z-10 space-y-4 transition-all duration-300 text-center'>
                    <div className='flex justify-center'>
                      <div className='p-4 rounded-full bg-gradient-to-br from-violet-100 to-purple-100 group-hover:bg-white/20 transition-colors duration-300'>
                        <div className='text-violet-600 group-hover:text-white transition-colors duration-300'>
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

        {/* Our Process */}
        <section className='py-12 md:py-16 px-4 bg-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent leading-tight'>
              Our Process: Incorporating LLMs into Your Enterprise
            </h2>
            <p className='text-center text-gray-700 mb-10 max-w-2xl mx-auto text-sm sm:text-base'>
              A structured approach to seamless LLM integration
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {process.map((step, index) => (
                <div key={index} className='relative p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border-2 border-violet-100 hover:border-violet-300 hover:shadow-xl transition-all duration-300'>
                  <div className='absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg'>
                    {step.number}
                  </div>
                  <h3 className='font-bold text-lg mb-2 text-gray-800 mt-2'>{step.title}</h3>
                  <p className='text-gray-600 text-sm'>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Support */}
        <section className='py-16 px-4 bg-gradient-to-b from-gray-50 to-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent'>
              Industries We Support
            </h2>
            <p className='text-center text-gray-700 mb-10 max-w-3xl mx-auto'>
              We work with enterprises across Florida in industries such as:
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {industries.map((industry, index) => (
                <div key={index} className='p-6 bg-white rounded-xl border-2 border-violet-100 hover:border-violet-300 hover:shadow-xl transition-all duration-300'>
                  <div className='text-5xl mb-4 text-center'>{industry.emoji}</div>
                  <h3 className='font-bold text-lg mb-2 text-gray-800 text-center'>{industry.title}</h3>
                  <p className='text-gray-700 text-sm text-center'>{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className='py-12 md:py-16 px-4 bg-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent leading-tight'>
              Why Choose Us for LLM Integration in Florida
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {whyChooseUs.map((item, index) => (
                <div key={index} className='p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border-2 border-violet-100 hover:border-violet-300 hover:shadow-xl transition-all duration-300 text-center'>
                  <h3 className='font-bold text-lg mb-2 text-gray-800'>✓ {item.title}</h3>
                  <p className='text-gray-700 text-sm'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='relative py-20 px-4 overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600'>
          {/* Animated Background Pattern */}
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
          </div>

          {/* Content */}
          <div className='relative z-10 max-w-4xl mx-auto text-center px-4'>
            <h2 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight'>
              Get Started Today
            </h2>
            <p className='text-white/90 text-sm sm:text-lg lg:text-xl leading-relaxed mb-4'>
              If you're a business in Florida and across other regions in the USA looking to implement AI into your enterprise systems, our team is here to help.
            </p>
            <p className='text-white/90 text-sm sm:text-lg lg:text-xl leading-relaxed mb-10'>
              With our AI-driven custom LLM integration services, we make your software more intelligent, your processes more efficient, and your customer interactions more engaging.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0'>
              <Link
                href='/contact-us'
                className='w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-violet-600 px-6 sm:px-8 py-4 rounded-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl'
              >
                <Phone className='w-5 h-5' />
                Talk to Our AI Integration Experts
              </Link>
              <Link
                href='/contact-us'
                className='w-full sm:w-auto inline-block border-2 border-white text-white px-6 sm:px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-violet-600 transition-all duration-300'
              >
                Request a Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <section className='py-12 px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center mb-5 text-gray-800'>
              Frequently Asked Questions
            </h2>
            <FaqAccordion faqId='CustomLLMs' />
          </div>
        </section>
      </main>
    </>
  )
}

