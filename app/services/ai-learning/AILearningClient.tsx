'use client'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import {
  GraduationCap,
  Brain,
  Target,
  FileCheck,
  Sparkles,
  Code,
  Phone
} from 'lucide-react';
import Link from 'next/link'
import FaqAccordion from '@/components/faq/FaqAccordion';

export default function AILearningClient() {
  const services = [
    {
      title: 'Customized AI Learning Platforms',
      description: 'We design and develop AI-driven eLearning solutions that adapt to each learner\'s pace and needs, enabling institutions to provide truly personalized education.',
      icon: <GraduationCap className='w-12 h-12 stroke-1' />
    },
    {
      title: 'Fine-Tuned LLM Integration',
      description: 'We integrate specialized large language models (LLMs) trained on academic and domain-specific datasets, ensuring students get accurate, context-rich, and reliable content.',
      icon: <Brain className='w-12 h-12 stroke-1' />
    },
    {
      title: 'Personalized Learning Paths',
      description: 'Our adaptive systems use knowledge tracing models and semantic analysis to assess learner progress, identify gaps, and deliver targeted quizzes and recommendations.',
      icon: <Target className='w-12 h-12 stroke-1' />
    },
    {
      title: 'AI-Powered Quiz & Assessment Tools',
      description: 'We build intelligent quiz engines that use prompt engineering and natural language generation to create contextually relevant questions aligned with your curriculum.',
      icon: <FileCheck className='w-12 h-12 stroke-1' />
    },
    {
      title: 'Educational Content Automation',
      description: 'From lesson plan generation to curriculum summarization, our AI-powered content engines streamline academic workflows and ensure consistent quality.',
      icon: <Sparkles className='w-12 h-12 stroke-1' />
    },
    {
      title: 'BERT & Transformer-Based Architectures',
      description: 'Our solutions are powered by advanced AI models, including BERT and transformer architectures, delivering semantic accuracy and deep contextual understanding.',
      icon: <Code className='w-12 h-12 stroke-1' />
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery & Consultation',
      description: 'Understand your institution\'s learning goals and challenges.'
    },
    {
      number: '02',
      title: 'AI Strategy & Design',
      description: 'Identify opportunities to apply AI-driven personalization and automation.'
    },
    {
      number: '03',
      title: 'Development & Integration',
      description: 'Build scalable platforms using transformer models, semantic embeddings, and adaptive learning engines.'
    },
    {
      number: '04',
      title: 'Testing & Rollout',
      description: 'Validate accuracy, usability, and scalability in real-world learning environments.'
    },
    {
      number: '05',
      title: 'Continuous Optimization',
      description: 'Retrain models, refine personalization, and enhance engagement over time.'
    }
  ];

  const industries = [
    {
      emoji: '🏫',
      title: 'K-12 Schools',
      description: 'Personalized learning dashboards, quiz automation, and student engagement tools.'
    },
    {
      emoji: '🎓',
      title: 'Universities & Colleges',
      description: 'Smart assessment systems, research assistants, and AI-powered tutoring platforms.'
    },
    {
      emoji: '💼',
      title: 'Corporate Training',
      description: 'Adaptive training platforms for workforce upskilling and compliance learning.'
    },
    {
      emoji: '🚀',
      title: 'EdTech Startups',
      description: 'Full-scale AI integration to power next-generation learning apps.'
    },
    {
      emoji: '🔧',
      title: 'Vocational & Skill Centers',
      description: 'Custom AI-based assessments and interactive content.'
    }
  ];

  const whyChooseUs = [
    {
      title: 'AI-first approach',
      description: 'Purpose-built solutions leveraging LLMs, NLG, and adaptive learning algorithms.'
    },
    {
      title: 'Local understanding',
      description: 'Solutions designed to meet the educational needs of Florida\'s diverse learner base.'
    },
    {
      title: 'Scalable delivery',
      description: 'From small classroom pilots to statewide deployments.'
    },
    {
      title: '15+ years of digital expertise',
      description: 'Proven experience in AI, custom software, and enterprise learning platforms.'
    },
    {
      title: 'End-to-end support',
      description: 'From strategy and development to training and ongoing optimization.'
    }
  ];

  return (
    <>
      <main className='bg-white'>
        <section className="relative text-white py-12 md:py-20 lg:py-24 text-center bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600">
          {/* Content */}
          <div className='relative z-10 px-4'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-md tracking-tight leading-tight'>
              AI-Powered Learning Solutions in Florida, USA
            </h1>
            <p className='mt-4 text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto'>
              Revolutionizing Education with AI
            </p>
          </div>
        </section>

        <section className='py-12 md:py-16 px-4 bg-gradient-to-b from-gray-50 to-white'>
          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
            {/* Left Text */}
            <div className="text-center md:text-left">
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-6 leading-tight'>
                Revolutionizing Education with AI
              </h2>
              <p className='text-gray-700 text-sm sm:text-lg leading-7 md:leading-8 tracking-wide text-justify md:text-left'>
                Conquerors Software Technologies USA helps educational institutions and training providers across Florida and the surrounding regions in the USA unlock the future of learning with AI-powered solutions.
              </p>
              <p className='text-gray-700 text-sm sm:text-lg leading-7 md:leading-8 tracking-wide mt-4 text-justify md:text-left'>
                Our services go beyond traditional e-learning platforms by integrating fine-tuned Large Language Models (LLMs), adaptive learning algorithms, and intelligent content generation tools to deliver personalized, scalable, and impactful educational experiences.
              </p>
            </div>

            {/* Right Image */}
            <div className='flex justify-center'>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg blur opacity-25'></div>
                <img
                  src='/Digitalcloud/business-brainstorming-graph-chart-report-data-concept_53876-31213.webp'
                  alt='AI-Powered Learning Solutions'
                  className='relative w-full max-w-md rounded-lg shadow-xl object-cover'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our AI-Powered Learning Services */}
        <section className='py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent leading-tight'>
            Our AI-Powered Learning Services
          </h2>
          <p className='text-center text-gray-600 mb-10 md:mb-12 max-w-3xl mx-auto text-sm sm:text-base'>
            Comprehensive AI-driven education solutions that transform how learners engage, retain, and succeed
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {services.map((service, index) => (
              <div
                key={index}
                className='block group'
              >
                <div className='relative h-full px-6 py-8 rounded-xl border-2 border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-2xl hover:border-emerald-200 transition-all duration-300'>
                  {/* Gradient Background on Hover */}
                  <div className='absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0'></div>

                  {/* Content Layer */}
                  <div className='relative z-10 space-y-4 transition-all duration-300 text-center'>
                    <div className='flex justify-center'>
                      <div className='p-4 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 group-hover:bg-white/20 transition-colors duration-300'>
                        <div className='text-emerald-600 group-hover:text-white transition-colors duration-300'>
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
        <section className='py-12 md:py-16 px-4 bg-gradient-to-b from-gray-50 to-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent leading-tight'>
              Our Process
            </h2>
            <p className='text-center text-gray-700 mb-10 max-w-2xl mx-auto text-sm sm:text-base'>
              A structured approach to implementing AI in education
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {process.map((step, index) => (
                <div key={index} className='relative p-6 bg-white rounded-xl border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300'>
                  <div className='absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg'>
                    {step.number}
                  </div>
                  <h3 className='font-bold text-lg mb-2 text-gray-800 mt-2'>{step.title}</h3>
                  <p className='text-gray-600 text-sm'>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries & Clients We Serve */}
        <section className='py-12 md:py-16 px-4 bg-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent leading-tight'>
              Industries & Clients We Serve in Florida
            </h2>
            <p className='text-center text-gray-700 mb-10 max-w-3xl mx-auto text-sm sm:text-base'>
              Our AI-powered learning solutions are customized for diverse educational needs
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'>
              {industries.map((industry, index) => (
                <div key={index} className='p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300'>
                  <div className='text-5xl mb-4 text-center'>{industry.emoji}</div>
                  <h3 className='font-bold text-lg mb-2 text-gray-800 text-center'>{industry.title}</h3>
                  <p className='text-gray-700 text-sm text-center'>{industry.description}</p>
                </div>
              ))}
            </div>
            <p className='text-center text-gray-700 text-base md:text-lg px-4'>
              We proudly serve clients across <span className='font-semibold'>Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale, Tallahassee</span>, and nearby regions in Florida and across other states and regions in the USA.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className='py-12 md:py-16 px-4 bg-gradient-to-b from-gray-50 to-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent leading-tight'>
              Why Florida Educators & Businesses Choose Us
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {whyChooseUs.map((item, index) => (
                <div key={index} className='p-6 bg-white rounded-xl border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300'>
                  <h3 className='font-bold text-lg mb-2 text-gray-800'>✓ {item.title}</h3>
                  <p className='text-gray-700 text-sm'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='relative py-20 px-4 overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600'>
          {/* Animated Background Pattern */}
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
          </div>

          {/* Content */}
          <div className='relative z-10 max-w-4xl mx-auto text-center px-4'>
            <h2 className='text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight'>
              Let's Shape the Future of Learning Together
            </h2>
            <p className='text-white/90 text-sm sm:text-lg lg:text-xl leading-relaxed mb-4'>
              AI isn't the future of education—it's happening now.
            </p>
            <p className='text-white/90 text-sm sm:text-lg lg:text-xl leading-relaxed mb-10'>
              If you're an educational institution, corporate trainer, or edtech innovator in Florida and across other regions in the USA, we can help you implement AI-powered learning platforms that truly transform how knowledge is delivered and retained.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0'>
              <Link
                href='/contact-us'
                className='w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-6 sm:px-8 py-4 rounded-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl'
              >
                <Phone className='w-5 h-5' />
                Talk to Our AI Learning Experts
              </Link>
              <Link
                href='/contact-us'
                className='w-full sm:w-auto inline-block border-2 border-white text-white px-6 sm:px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-emerald-600 transition-all duration-300'
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <section className='py-12 px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center lg:mb-5 text-gray-800'>
              Frequently Asked Questions
            </h2>
            <FaqAccordion faqId='AILearning' />
          </div>
        </section>
      </main>
    </>
  )
}

