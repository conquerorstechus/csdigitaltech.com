'use client'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import {
  Brain,
  Eye,
  MessageSquare,
  Layers,
  Phone
} from 'lucide-react';
import Link from 'next/link'
import FaqAccordion from '@/components/faq/FaqAccordion';

export default function AIMLServicesClient() {
 const services = [
  {
    title: 'Architecture & Platform Optimization',
    description: 'We transform outdated monolithic systems into modern microservices architectures, integrate AI-driven automation, and optimise your IT infrastructure for speed, scalability, security, and cost-efficiency.',
    features: [
      'Cloud migration and AI integration',
      'Microservices & containerisation (Docker, Kubernetes)',
      'Scalable, secure enterprise platform',
      'Optimised DevOps pipelines for AI models'
    ],
    icon: <Layers className='w-12 h-12 stroke-1' />
  },
  {
    title: 'Specialized LLM Tuning',
    description: 'Generic AI models aren\'t enough for industry-specific needs. We fine-tune Large Language Models (LLMs) using domain-specific datasets with transfer learning and parameter-efficient fine-tuning (PEFT).',
    features: [
      'Enhanced semantic accuracy & contextual relevance',
      'Customized for industries such as education, healthcare, finance, and real estate',
      'Reliable AI-driven content generation for Florida businesses',
      'Custom chatbot and assistant development'
    ],
    icon: <Brain className='w-12 h-12 stroke-1' />
  },
  {
    title: 'Natural Language Processing (NLP) Implementation',
    description: 'We integrate NLP capabilities into your applications to make communication and customer engagement more intelligent.',
    features: [
      'Sentiment analysis for customer insights',
      'Speech-to-text for support and transcription',
      'Conversational AI for 24/7 customer service',
      'Multilingual AI for diverse Florida audiences and global scalability'
    ],
    icon: <MessageSquare className='w-12 h-12 stroke-1' />
  },
  {
    title: 'Computer Vision & Image Recognition Integration',
    description: 'We implement computer vision models into your workflows for automation, quality assurance, and real-time analytics.',
    features: [
      'Object detection & image/video classification',
      'Healthcare imaging solutions for faster diagnosis',
      'Retail applications: smart checkout & visual inventory tracking',
      'Manufacturing: predictive maintenance & defect detection',
      'Security: video analytics & monitoring'
    ],
    icon: <Eye className='w-12 h-12 stroke-1' />
  }
];

  return (
    <>
      <main className='bg-white'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-5xl text-3xl font-bold drop-shadow-md tracking-tight'>
            AI & ML Services in Florida
            </h1>
            <p className='mt-4 text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4'>
              Smarter Business Solutions with Artificial Intelligence & Machine Learning
            </p>
          </div>
        </section>

        <section className='py-16 px-4 bg-gradient-to-b from-gray-50 to-white'>
          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            {/* Left Text */}
            <div>
              <h2 className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6'>
              Smarter Business Solutions with Artificial Intelligence & Machine Learning
              </h2>
              <p className='text-gray-700 text-lg leading-8 tracking-wide'>
              Conquerors Software Technologies USA helps businesses across Florida and nearby regions leverage the power of Artificial Intelligence (AI) and Machine Learning (ML) to improve efficiency, reduce costs, and deliver smarter customer experiences.
              </p>
              <p className='text-gray-700 text-lg leading-8 tracking-wide mt-4'>
              Whether you're a healthcare provider in Miami, a retail chain in Tampa, a manufacturer in Orlando, or a growing enterprise in Jacksonville, our AI & ML services are designed to give your business the competitive edge it needs in Florida and across other regions in the USA.
            </p>
            </div>

            {/* Right Image */}
            <div className='flex justify-center'>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-25'></div>
                <img
                  src='/Digitalcloud/business-brainstorming-graph-chart-report-data-concept_53876-31213.webp'
                  alt='AI & Machine Learning Services'
                  className='relative w-full max-w-md rounded-lg shadow-xl object-cover'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
          Our AI & ML Service Offerings
          </h2>
          <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
            Comprehensive AI/ML solutions tailored to your business needs
          </p>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className='block group'
              >
                <div className='relative h-full px-8 py-8 rounded-xl border-2 border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-2xl hover:border-purple-200 transition-all duration-300'>
                  {/* Gradient Background on Hover */}
                  <div className='absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0'></div>

                  {/* Content Layer */}
                  <div className='relative z-10 space-y-4 transition-all duration-300'>
                    <div className='flex items-start gap-4'>
                      <div className='p-3 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:bg-white/20 transition-colors duration-300 flex-shrink-0'>
                        <div className='text-indigo-600 group-hover:text-white transition-colors duration-300'>
                          {service.icon}
                        </div>
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 mb-3'>
                          {service.title}
                        </h3>
                        <p className='text-base leading-7 text-gray-600 transition-colors duration-300 group-hover:text-white/90 mb-4'>
                          {service.description}
                        </p>
                        <ul className='space-y-2'>
                          {service.features.map((feature, idx) => (
                            <li key={idx} className='flex items-start gap-2 text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300'>
                              <span className='text-indigo-600 group-hover:text-white mt-1 flex-shrink-0'>✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className='py-16 px-4 bg-gradient-to-b from-gray-50 to-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Industries We Support in Florida, USA
            </h2>
            <p className='text-center text-gray-600 mb-10 max-w-3xl mx-auto'>
              We work with organisations across Florida and other regions in the USA to integrate AI where it delivers the most impact
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div className='p-6 bg-white rounded-xl border-2 border-indigo-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-300'>
                <div className='w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl'>
                  🏥
                </div>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>Healthcare</h3>
                <p className='text-gray-600 text-sm'>AI-driven diagnostics, patient monitoring, and clinical workflows</p>
              </div>
              <div className='p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300'>
                <div className='w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-2xl'>
                  🛒
                </div>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>Retail & E-Commerce</h3>
                <p className='text-gray-600 text-sm'>Product recommendations, visual search, and AI-enabled checkout</p>
              </div>
              <div className='p-6 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300'>
                <div className='w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-2xl'>
                  🏭
                </div>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>Manufacturing</h3>
                <p className='text-gray-600 text-sm'>Automated quality control, predictive maintenance, and process efficiency</p>
              </div>
              <div className='p-6 bg-white rounded-xl border-2 border-indigo-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-300'>
                <div className='w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-2xl'>
                  💰
                </div>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>Finance & Banking</h3>
                <p className='text-gray-600 text-sm'>Fraud detection, compliance monitoring, and risk analysis</p>
              </div>
              <div className='p-6 bg-white rounded-xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300'>
                <div className='w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-2xl'>
                  🎓
                </div>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>Education</h3>
                <p className='text-gray-600 text-sm'>Adaptive learning tools, AI content systems, and student analytics</p>
              </div>
              <div className='p-6 bg-white rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300'>
                <div className='w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-2xl'>
                  🏘️
                </div>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>Real Estate</h3>
                <p className='text-gray-600 text-sm'>Smart property matching, pricing insights, and market forecasting</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className='py-16 px-4 bg-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              Why Florida Businesses Choose Us
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
              <div className='p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl'>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>✓ Local expertise</h3>
                <p className='text-gray-600 text-sm'>Serving clients across Florida and across other regions in the USA</p>
              </div>
              <div className='p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl'>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>✓ Proven AI integration experience</h3>
                <p className='text-gray-600 text-sm'>Skilled in AI/ML frameworks (TensorFlow, PyTorch, Hugging Face, OpenAI APIs)</p>
              </div>
              <div className='p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl'>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>✓ Seamless implementation</h3>
                <p className='text-gray-600 text-sm'>AI features added to your existing systems without disruption</p>
              </div>
              <div className='p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl'>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>✓ Compliance-first approach</h3>
                <p className='text-gray-600 text-sm'>GDPR, HIPAA, and SOC 2-ready integrations</p>
              </div>
              <div className='p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl'>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>✓ Flexible models</h3>
                <p className='text-gray-600 text-sm'>From pilot integrations to full enterprise rollouts</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='relative py-20 px-4 overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600'>
          {/* Animated Background Pattern */}
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
          </div>
          
          {/* Content */}
          <div className='relative z-10 max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl sm:text-5xl font-bold text-white mb-6'>
              Let's Bring AI Into Your Business
            </h2>
            <p className='text-white/90 text-lg sm:text-xl leading-relaxed mb-4'>
              AI isn't about replacing your systems—it's about making them smarter.
            </p>
            <p className='text-white/90 text-lg sm:text-xl leading-relaxed mb-10'>
              Conquerors helps Florida businesses integrate and implement AI/ML solutions that improve performance, reduce costs, and create new growth opportunities.
            </p>
            
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6'>
              <Link 
                href='/contact-us'
                className='inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl'
              >
                <Phone className='w-5 h-5' />
                Talk to Our AI Integration Experts
              </Link>
            </div>
          </div>
        </section>

        <section className='py-12 px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center mb-5 text-gray-800'>
              Frequently Asked Questions
            </h2>
            <FaqAccordion faqId='AIMLServices' />
          </div>
        </section>
      </main>
    </>
  )
}

