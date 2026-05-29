'use client'
import {
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
  Database,
  Zap,
  Phone
} from 'lucide-react';
import Link from 'next/link'
import FaqAccordion from '@/components/faq/FaqAccordion';

export default function DataAnalyticsBIClient() {
 const services = [
  {
    emoji: '🔹',
    title: 'BI Dashboards',
    description: 'Interactive dashboards giving leaders real-time visibility into sales, operations, and performance metrics using AI-driven tools.',
    icon: <BarChart3 className='w-12 h-12 stroke-1' />
  },
  {
    emoji: '🔹',
    title: 'Predictive Analytics & Forecasting',
    description: 'Custom ML models that forecast demand, sales trends, and customer behavior, helping you plan with confidence.',
    icon: <TrendingUp className='w-12 h-12 stroke-1' />
  },
  {
    emoji: '🔹',
    title: 'Automated Reporting & Alerts',
    description: 'No more manual data operations—our AI systems generate reports automatically, send alerts, and highlight risks before they impact business.',
    icon: <Zap className='w-12 h-12 stroke-1' />
  },
  {
    emoji: '🔹',
    title: 'Data Integration & Cleansing',
    description: 'We connect and clean data from multiple sources—ERP, CRM, cloud apps, and eCommerce platforms—so you have one accurate view of your business.',
    icon: <Database className='w-12 h-12 stroke-1' />
  },
  {
    emoji: '🔹',
    title: 'ML/AI Pipelines for Real-Time Analytics',
    description: 'Continuous AI pipelines that process data streams for instant, up-to-date insights.',
    icon: <LineChart className='w-12 h-12 stroke-1' />
  },
  {
    emoji: '🔹',
    title: 'Industry-Specific AI Analytics',
    description: 'Tailored analytics solutions for Healthcare, Finance, Retail & E-Commerce, Real Estate, and Manufacturing with AI-powered insights.',
    icon: <PieChart className='w-12 h-12 stroke-1' />
  }
];

 const industries = [
  {
    title: 'Healthcare',
    description: 'Patient analytics, treatment predictions, and hospital workflow optimization.'
  },
  {
    title: 'Finance',
    description: 'Credit risk scoring, fraud detection, compliance monitoring.'
  },
  {
    title: 'Retail & E-Commerce',
    description: 'Recommendation engines, customer segmentation, churn prediction.'
  },
  {
    title: 'Real Estate',
    description: 'Market pricing analytics, property demand forecasting.'
  },
  {
    title: 'Manufacturing',
    description: 'Predictive maintenance, supply chain optimisation.'
  }
];

 const approach = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description: 'Understand your data challenges and define goals.'
  },
  {
    number: '02',
    title: 'AI Strategy Roadmap',
    description: 'Identify where AI can add the most business value.'
  },
  {
    number: '03',
    title: 'Data Integration',
    description: 'Connect all your data sources into a single, unified system.'
  },
  {
    number: '04',
    title: 'AI Implementation',
    description: 'Build dashboards, predictive models, and automation workflows.'
  },
  {
    number: '05',
    title: 'Deployment',
    description: 'Launch cloud-ready solutions for web and mobile.'
  },
  {
    number: '06',
    title: 'Continuous Optimisation',
    description: 'Ongoing AI model retraining to improve accuracy.'
  }
];

 const caseStudies = [
  {
    title: 'Major Healthcare Provider in Miami',
    result: 'Built a predictive analytics system that reduced patient wait times by 20% and improved treatment planning efficiency.',
    icon: '🏥'
  },
  {
    title: 'Top Retailer in Orlando',
    result: 'Implemented AI-driven recommendation engines that increased repeat sales by 28% and improved customer loyalty.',
    icon: '🛒'
  },
  {
    title: 'Financial Services Provider in Tampa',
    result: 'Delivered fraud detection analytics that reduced false positives by 40% and improved compliance reporting.',
    icon: '💰'
  }
];

  return (
    <>
      <main className='bg-white'>
        <section className="relative text-white lg:py-24 py-16 text-center bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
          {/* Content */}
          <div className='relative z-10'>
            <h1 className='lg:text-5xl text-3xl font-bold drop-shadow-md tracking-tight'>
            AI-Driven Data Analytics & BI Services in Florida
            </h1>
            <p className='mt-4 text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4'>
              Turn Data into Decisions with AI-Powered Analytics
            </p>
          </div>
        </section>

        <section className='py-16 px-4 bg-gradient-to-b from-gray-50 to-white'>
          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            {/* Left Text */}
            <div>
              <h2 className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-6'>
              Turn Data into Decisions with AI-Powered Analytics
              </h2>
              <p className='text-gray-700 text-lg leading-8 tracking-wide'>
              Your business collects data every second—from customers, sales, operations, and digital interactions. But data without intelligence is just noise. ConvenantSoft Software Technologies USA helps businesses across Florida and its surrounding regions unlock the true value of their data through AI-driven data analytics and business intelligence (BI) services.
              </p>
              <p className='text-gray-700 text-lg leading-8 tracking-wide mt-4'>
              Our solutions combine Agentic Architecture with advanced AI/ML models to deliver real-time predictive analytics, automated forecasting, and smarter decision-making. Whether you're in Florida and across other regions in the USA like Miami, Orlando, Tampa, Jacksonville, or nearby areas, we design solutions that transform raw data into clear insights, accurate predictions, and business growth opportunities.
            </p>
            </div>

            {/* Right Image */}
            <div className='flex justify-center'>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg blur opacity-25'></div>
                <img
                  src='/Digitalcloud/business-brainstorming-graph-chart-report-data-concept_53876-31213.webp'
                  alt='Data Analytics & BI Services'
                  className='relative w-full max-w-md rounded-lg shadow-xl object-cover'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why AI-Driven Analytics Matters */}
        <section className='py-16 px-4 bg-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent'>
              Why AI-Driven Analytics Matters for Florida Businesses
            </h2>
            <p className='text-center text-gray-700 mb-10 max-w-3xl mx-auto text-lg'>
              Florida's business environment is diverse and competitive—healthcare providers, real estate companies, retailers, financial institutions, and tourism businesses all rely on data to stay ahead. But traditional analytics only tells you what happened. AI-driven analytics goes further by predicting what will happen next and advising you on how to respond.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div className='p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-100'>
                <div className='text-3xl mb-3'>📊</div>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>Transform Raw Data into Actionable Insights</h3>
                <p className='text-gray-600 text-sm'>Get clear, visual dashboards instead of confusing reports.</p>
              </div>
              <div className='p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-100'>
                <div className='text-3xl mb-3'>🔮</div>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>Predict Future Trends</h3>
                <p className='text-gray-600 text-sm'>Anticipate customer behavior, demand shifts, and market risks.</p>
              </div>
              <div className='p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-100'>
                <div className='text-3xl mb-3'>⚙️</div>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>Optimise Operations</h3>
                <p className='text-gray-600 text-sm'>Reduce inefficiencies, cut costs, and improve ROI.</p>
              </div>
              <div className='p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-100'>
                <div className='text-3xl mb-3'>🎯</div>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>Personalise Customer Experiences</h3>
                <p className='text-gray-600 text-sm'>Offer services and recommendations customized to every client.</p>
              </div>
              <div className='p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-100'>
                <div className='text-3xl mb-3'>🛡️</div>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>Mitigate Business Risks</h3>
                <p className='text-gray-600 text-sm'>Detect anomalies, compliance issues, and fraud before they escalate.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gradient-to-b from-gray-50 to-white'>
          <h2 className='text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent'>
          Our AI-Driven Data Analytics & BI Services
          </h2>
          <p className='text-center text-gray-600 mb-12 max-w-3xl mx-auto'>
            We provide end-to-end analytics and BI solutions designed for businesses in Florida and across other regions in the USA
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {services.map((service, index) => (
              <div
                key={index}
                className='block group'
              >
                <div className='relative h-full px-6 py-8 rounded-xl border-2 border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-2xl hover:border-orange-200 transition-all duration-300'>
                  {/* Gradient Background on Hover */}
                  <div className='absolute inset-0 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0'></div>

                  {/* Content Layer */}
                  <div className='relative z-10 space-y-4 transition-all duration-300 text-center'>
                    <div className='flex justify-center'>
                      <div className='p-4 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 group-hover:bg-white/20 transition-colors duration-300'>
                        <div className='text-orange-600 group-hover:text-white transition-colors duration-300'>
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

        {/* Industry-Specific AI Analytics */}
        <section className='py-16 px-4 bg-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent'>
              Industry-Specific AI Analytics
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {industries.map((industry, index) => (
                <div key={index} className='p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300'>
                  <h3 className='font-bold text-lg mb-2 text-gray-800'>• {industry.title}</h3>
                  <p className='text-gray-700 text-sm'>{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Proven Approach */}
        <section className='py-16 px-4 bg-gradient-to-b from-gray-50 to-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent'>
              Our Proven Approach
            </h2>
            <p className='text-center text-gray-700 mb-10 max-w-2xl mx-auto'>
              We keep our process simple, transparent, and AI-focused
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {approach.map((step, index) => (
                <div key={index} className='relative p-6 bg-white rounded-xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300'>
                  <div className='absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg'>
                    {step.number}
                  </div>
                  <h3 className='font-bold text-lg mb-2 text-gray-800 mt-2'>{step.title}</h3>
                  <p className='text-gray-600 text-sm'>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className='py-16 px-4 bg-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent'>
              Why Florida Businesses Choose ConvenantSoft
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              <div className='p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-100'>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>✅ USA Focused</h3>
                <p className='text-gray-600 text-sm'>We build AI solutions customized to local markets.</p>
              </div>
              <div className='p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-100'>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>✅ 15+ Years of Expertise</h3>
                <p className='text-gray-600 text-sm'>Trusted globally, delivering 500+ successful projects.</p>
              </div>
              <div className='p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-100'>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>✅ AI-First Approach</h3>
                <p className='text-gray-600 text-sm'>Solutions built on machine learning, NLP, and predictive models.</p>
              </div>
              <div className='p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border-2 border-orange-100'>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>✅ Regulatory Compliance</h3>
                <p className='text-gray-600 text-sm'>HIPAA, GDPR, SOC 2, and industry-specific standards.</p>
              </div>
              <div className='p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-100'>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>✅ Future-Ready</h3>
                <p className='text-gray-600 text-sm'>Cloud-native, scalable, and adaptable solutions designed for growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className='py-16 px-4 bg-gradient-to-b from-gray-50 to-white'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl sm:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent'>
              Case Studies & Impact
            </h2>
            <p className='text-center text-gray-700 mb-10 max-w-2xl mx-auto'>
              Real results from our AI-driven analytics implementations
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {caseStudies.map((study, index) => (
                <div key={index} className='p-8 bg-white rounded-xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300'>
                  <div className='text-5xl mb-4 text-center'>{study.icon}</div>
                  <h3 className='font-bold text-lg mb-3 text-gray-800 text-center'>{study.title}</h3>
                  <p className='text-gray-700 text-sm text-center leading-relaxed'>{study.result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='relative py-20 px-4 overflow-hidden bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500'>
          {/* Animated Background Pattern */}
          <div className='absolute inset-0 opacity-10'>
            <div className='absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
          </div>
          
          {/* Content */}
          <div className='relative z-10 max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl sm:text-5xl font-bold text-white mb-6'>
              Let's Build Smarter Decisions Together
            </h2>
            <p className='text-white/90 text-lg sm:text-xl leading-relaxed mb-4'>
              Your business data holds answers—AI makes them clear.
            </p>
            <p className='text-white/90 text-lg sm:text-xl leading-relaxed mb-10'>
              With ConvenantSoft' AI-Driven Data Analytics & BI services, companies across Florida can predict trends, optimise decisions, and gain a competitive advantage.
            </p>
            
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6'>
              <Link 
                href='/contact-us'
                className='inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl'
              >
                <Phone className='w-5 h-5' />
                Talk to Our AI Analytics Experts Today
              </Link>
              <Link 
                href='/contact-us'
                className='inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-all duration-300'
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <section className='py-12 px-4'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl font-bold text-center mb-5 text-gray-800'>
              Frequently Asked Questions
            </h2>
            <FaqAccordion faqId='DataAnalyticsBI' />
          </div>
        </section>
      </main>
    </>
  )
}

