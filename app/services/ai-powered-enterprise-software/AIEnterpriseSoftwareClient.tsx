'use client'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import {
  Brain,
  Target,
  TrendingUp,
  Zap,
  Layers,
  Shield,
  Users,
  Building2,
  HeartPulse,
  Briefcase,
  ShoppingBag,
  GraduationCap,
  Factory,
  Home,
  Phone
} from 'lucide-react'
import Link from 'next/link'
import FaqAccordion from '@/components/faq/FaqAccordion'

export default function AIEnterpriseSoftwareClient() {
  const whyAICards = [
    {
      title: 'Automation',
      description: 'Eliminate repetitive tasks with intelligent workflows.',
      icon: <Zap className='w-12 h-12 stroke-1' />
    },
    {
      title: 'Personalization',
      description: 'Deliver customized user experiences at scale.',
      icon: <Target className='w-12 h-12 stroke-1' />
    },
    {
      title: 'Predictive Insights',
      description: 'Anticipate outcomes and improve decisions.',
      icon: <TrendingUp className='w-12 h-12 stroke-1' />
    },
    {
      title: 'Efficiency',
      description: 'Reduce costs and speed up operations.',
      icon: <Brain className='w-12 h-12 stroke-1' />
    },
    {
      title: 'Scalability',
      description: 'Applications evolve as your business grows.',
      icon: <Layers className='w-12 h-12 stroke-1' />
    }
  ]

  const developmentSteps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'Assess current systems, identify AI opportunities, and create a roadmap.'
    },
    {
      number: '02',
      title: 'Architecture & Prototyping',
      description: 'Design modular, scalable, and AI-ready architectures.'
    },
    {
      number: '03',
      title: 'Agile Development',
      description: 'Iterative coding with AI model integration.'
    },
    {
      number: '04',
      title: 'Testing & Compliance',
      description: 'Automated QA, security validation, and regulatory compliance checks (HIPAA, GDPR, SOC 2).'
    },
    {
      number: '05',
      title: 'Deployment & Scaling',
      description: 'Cloud-native deployment with DevOps automation.'
    },
    {
      number: '06',
      title: 'Support',
      description: '24x7 monitoring, Technical Support, AI model retraining, and system optimization.'
    }
  ]

  const services = [
    {
      title: 'Custom Enterprise Application Development',
      description: 'Cross-platform ERPs, CRMs, and workflow apps built using Flutter, React Native, and PWAs, customized to enterprise needs and integrated with existing systems.',
      icon: '🔹'
    },
    {
      title: 'AI-Enhanced Legacy Integration',
      description: 'Extend the life of existing enterprise software by adding AI-powered modules and API integrations, enabling smarter operations without full replacement.',
      icon: '🔹'
    },
    {
      title: 'Business Process Automation (BPA)',
      description: 'Intelligent automation through integrated apps and AI-driven workflows streamlines HR, finance, and operations for higher efficiency.',
      icon: '🔹'
    },
    {
      title: 'Data-Driven Decision Apps',
      description: 'Cross-platform dashboards and reporting tools with AI-enabled insights, designed to empower faster and more informed decision-making.',
      icon: '🔹'
    }
  ]

  const caseStudies = [
    {
      title: 'Healthcare Predictive Analytics Platform',
      description: 'Built an AI-driven patient management system that reduced readmission rates by 20% and improved care coordination.',
      icon: <HeartPulse className='w-8 h-8 stroke-1' />
    },
    {
      title: 'Banking Fraud Detection System',
      description: 'Developed a real-time fraud detection engine using ML models, reducing false positives by 40% while improving transaction security.',
      icon: <Shield className='w-8 h-8 stroke-1' />
    },
    {
      title: 'Manufacturing Predictive Maintenance',
      description: 'Delivered an AI-powered IoT solution that cut downtime by 25% and optimized supply chain operations.',
      icon: <Factory className='w-8 h-8 stroke-1' />
    }
  ]

  const industries = [
    {
      title: 'Healthcare',
      description: 'AI-driven patient engagement & predictive analytics',
      icon: <HeartPulse className='w-10 h-10 stroke-1' />
    },
    {
      title: 'Finance',
      description: 'Fraud detection, risk management, and compliance automation',
      icon: <Briefcase className='w-10 h-10 stroke-1' />
    },
    {
      title: 'Retail & eCommerce',
      description: 'Personalised shopping & inventory optimisation',
      icon: <ShoppingBag className='w-10 h-10 stroke-1' />
    },
    {
      title: 'Education',
      description: 'Adaptive learning platforms & AI tutors',
      icon: <GraduationCap className='w-10 h-10 stroke-1' />
    },
    {
      title: 'Manufacturing',
      description: 'Predictive maintenance & supply chain optimisation',
      icon: <Factory className='w-10 h-10 stroke-1' />
    },
    {
      title: 'Real Estate',
      description: 'Property recommendation engines & market analysis',
      icon: <Home className='w-10 h-10 stroke-1' />
    }
  ]

  const whyConquerors = [
    '15+ years of enterprise software expertise with 500+ projects delivered globally.',
    'AI-first approach—blending modern software engineering with intelligent automation.',
    'In-house AI specialists, data scientists, and enterprise architects.',
    'Flexible engagement models—dedicated teams, fixed-price, or time-and-material.',
    'Proven track record in highly regulated industries (Healthcare, Finance, Government).',
    'End-to-end delivery—from strategy and design to deployment and support.'
  ]

  return (
    <>
      
      <main className='bg-gray-50'>
        {/* Hero Section */}
        <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
          <div className='absolute inset-0 bg-[#FF1212] opacity-50'></div>
          <div className='relative z-10'>
            <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider px-4'>
              AI-Powered Enterprise & Custom Software
            </h1>
          </div>
        </section>

        {/* Introduction Section */}
        <section className='max-w-6xl mx-auto px-4 py-12'>
          <div className='text-gray-700 font-normal space-y-6 text-justify text-lg leading-8 tracking-wide'>
            <p>
              Conquerors Software Technologies USA builds intelligent, cross-platform enterprise applications that combine artificial intelligence with modern frameworks such as Flutter, React Native, and Progressive Web Apps (PWAs). Our solutions are designed to be scalable, adaptive, and user-centric, empowering businesses to automate workflows, personalize user experiences, and make smarter decisions in Florida and across other regions in the USA.
            </p>
            <p>
              With expertise in machine learning, natural language processing, predictive analytics, and automation, we integrate AI into enterprise applications to make them smarter, adaptive, and more efficient. From intelligent dashboards and recommendation engines to AI-driven mobile apps and decision-support systems, our solutions enhance existing platforms, enabling enterprises to boost productivity and unlock new opportunities.
            </p>
          </div>
        </section>

        {/* Why AI-Powered Enterprise Software */}
        <section className='bg-white py-16'>
          <div className='max-w-6xl mx-auto px-4'>
            <h2 className='text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-4'>
              Why AI-Powered Enterprise Software?
            </h2>
            <p className='text-center text-gray-700 text-lg mb-12 max-w-4xl mx-auto'>
              AI is transforming how businesses operate. Unlike traditional systems, AI-powered applications continuously learn, adapt, and improve.
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {whyAICards.map((item, index) => (
                <div
                  key={index}
                  className='bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100'
                >
                  <div className='text-blue-600 mb-4'>{item.icon}</div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>{item.title}</h3>
                  <p className='text-gray-700 leading-relaxed'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Approach */}
        <section className='py-16 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-4'>
            <h2 className='text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-4'>
              Our Development Approach
            </h2>
            <p className='text-center text-gray-700 text-lg mb-12 max-w-4xl mx-auto'>
              We follow a strategy-first, AI-enabled development process to ensure every solution is aligned with business goals and enterprise standards in Florida and across other regions in the USA.
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {developmentSteps.map((step, index) => (
                <div
                  key={index}
                  className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600'
                >
                  <div className='text-4xl font-bold text-blue-600 mb-3'>{step.number}</div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>{step.title}</h3>
                  <p className='text-gray-700 leading-relaxed'>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className='bg-white py-16'>
          <div className='max-w-6xl mx-auto px-4'>
            <h2 className='text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-12'>
              Technology Stack
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>Programming Languages & Frameworks</h3>
                <p className='text-gray-700'>Python, Java, .NET, Node.js, PHP</p>
              </div>
              <div className='bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>AI/ML Frameworks</h3>
                <p className='text-gray-700'>TensorFlow, PyTorch, Keras, OpenAI APIs, Hugging Face NLP</p>
              </div>
              <div className='bg-gradient-to-br from-green-50 to-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>Frontend Technologies</h3>
                <p className='text-gray-700'>React, Angular, Vue.js</p>
              </div>
              <div className='bg-gradient-to-br from-pink-50 to-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>Mobile</h3>
                <p className='text-gray-700'>Flutter, React Native, Kotlin, Swift</p>
              </div>
              <div className='bg-gradient-to-br from-yellow-50 to-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>Databases</h3>
                <p className='text-gray-700'>PostgreSQL, MySQL, MongoDB, SQL Server</p>
              </div>
              <div className='bg-gradient-to-br from-indigo-50 to-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>Cloud & DevOps</h3>
                <p className='text-gray-700'>AWS, Azure, GCP, Docker, Kubernetes, Jenkins</p>
              </div>
              <div className='bg-gradient-to-br from-red-50 to-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>Automation Tools</h3>
                <p className='text-gray-700'>UiPath, Automation Anywhere, custom RPA integrations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className='py-16 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-4'>
            <h2 className='text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-12'>
              Our Services
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
              {services.map((service, index) => (
                <div
                  key={index}
                  className='bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500'
                >
                  <div className='flex items-start gap-4'>
                    <span className='text-3xl'>{service.icon}</span>
                    <div>
                      <h3 className='text-xl font-bold text-gray-900 mb-3'>{service.title}</h3>
                      <p className='text-gray-700 leading-relaxed'>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className='bg-white py-16'>
          <div className='max-w-6xl mx-auto px-4'>
            <h2 className='text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-4'>
              Case Studies & Impact
            </h2>
            <div className='grid md:grid-cols-3 gap-8 mt-12'>
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className='bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
                >
                  <div className='text-blue-600 mb-4'>{study.icon}</div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>{study.title}</h3>
                  <p className='text-gray-700 leading-relaxed'>{study.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className='py-16 bg-gray-50'>
          <div className='max-w-6xl mx-auto px-4'>
            <h2 className='text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-12'>
              Industries We Serve
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center'
                >
                  <div className='text-blue-600 flex justify-center mb-4'>{industry.icon}</div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>{industry.title}</h3>
                  <p className='text-gray-700'>{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Conquerors */}
        <section className='bg-white py-16'>
          <div className='max-w-6xl mx-auto px-4'>
            <h2 className='text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-12'>
              Why Conquerors Software Technologies USA?
            </h2>
            <div className='grid md:grid-cols-2 gap-6'>
              {whyConquerors.map((reason, index) => (
                <div
                  key={index}
                  className='bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg shadow-md flex items-start gap-4'
                >
                  <div className='text-blue-600 text-2xl mt-1'>✓</div>
                  <p className='text-gray-700 text-lg leading-relaxed'>{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className='bg-gradient-to-r from-blue-600 to-blue-800 py-16'>
          <div className='max-w-4xl mx-auto px-4 text-center'>
            <h2 className='text-3xl lg:text-4xl font-extrabold text-white mb-4'>
              Embrace Intelligent Transformation
            </h2>
            <p className='text-white text-lg mb-8 leading-relaxed'>
              Enterprise software should do more than support operations—it should drive business growth. With Conquerors, you gain a partner that builds future-ready, AI-powered solutions customized to your needs.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Link
                href='/contact-us'
                className='inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg'
              >
                <Phone className='w-5 h-5' />
                Talk to Our Experts Today
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className='py-16 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4'>
            <h2 className='text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-12'>
              Frequently Asked Questions
            </h2>
            <FaqAccordion faqId="AIEnterpriseSoftware" />
          </div>
        </section>
      </main>
     
    </>
  )
}

