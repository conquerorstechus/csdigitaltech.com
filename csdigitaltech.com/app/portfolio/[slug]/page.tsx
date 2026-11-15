import { Metadata } from 'next'
import { getComprehensiveMetadata, getStructuredData } from '@/lib/seo-metadata'
import StructuredData from '@/components/ui/StructuredData'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SITE_URL } from '@/lib/site'
import { FaCheck, FaChevronRight, FaTrophy } from 'react-icons/fa6'
import { FaArrowRight, FaProjectDiagram } from 'react-icons/fa'

const portfolioItems = [
  {
    id: 1,
    slug: 'ecommerce',
    title: ' Best E-commerce Application Development',
    description:
      'Custom e-commerce application to suite your B2B & B2C business needs using the latest technology.',
    image: '/portfolio/E-Commerce1.png',
    imageintroduction: '/portfolio/E-Commerce.png',
    introductionText:
      'Cornerstone Digital Technologies delivers custom B2B & B2C e-commerce solutions, designing user-friendly sites and enhancing apps to boost business growth for clients worldwide. Elevate your online presence today.',
    category: 'Best E-commerce Application',
    subcategory:
      'Cornerstone Digital Technologies: Experts in custom e-commerce solutions. We build tailored, user-friendly applications to help your business thrive globally, offering growth-oriented websites and unique feature enhancements.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    duration: '4-6 months',
    client: 'Retail Solutions Inc.',
    features: [
      'SEO-Friendly E-commerce Platform',
      'Customized Features',
      'Customized Shopping Cart and Checkout',
      'Order Processing and Shipping Management:',
      'Expansion and Growth'
    ],
    subfeatures: [
      'Your web presence is engineered for online success. It is built to ensure prominent rankings and be liked as much by the search engines as by visitors to your store or site.',
      'Cornerstone Digital Technologies: Empowering businesses with customizable e-commerce solutions for seamless operations and enhanced customer experiences. Enhance online presence, user-friendly features.',
      'The shopping cart and the checkout process include every convenience to make the experience a memorable one for your customers and ensure repeat custom.',
      'It is equally easy for store owners to process orders and manages to ship from their store. These features are seamlessly woven into the store.',
      'We help for your online business to grow in leaps and bounds by creating or upgrading your current website to match the latest trends, also provide maintenance and support to fix any issues and improve performance.'
    ],

    challenges: [
      'Complex inventory synchronization across multiple vendors',
      'High-traffic handling during peak seasons',
      'Secure payment processing compliance'
    ],
    solutions: [
      'Implemented real-time inventory updates using WebSocket connections',
      'Deployed auto-scaling infrastructure on AWS',
      'Integrated PCI-compliant payment gateways with fraud detection'
    ],
    stats: [
      { label: '8+ Countries', icon: '🌍' },
      { label: '98k+ Customers', icon: '👥' },
      { label: 'Robust Design', icon: '🔧' },
      { label: 'Responsive', icon: '📱' }
    ]
  },
  {
    id: 6,
    slug: 'coworks-crm',
    title: 'Coworks CRM & Bookings Development Project',
    description:
      'Streamline your office space booking process with our efficient online booking system.',
    image: '/portfolio/hero-1-2.png',
    imageintroduction: '/portfolio/hero-2-1.webp',
    introductionText:
      'Looking for flexible, fully managed office space? The Co-works helps startups, entrepreneurs, and companies find the perfect workspace to fit their needs and thrive in a world full of options.',
    category: 'Coworks CRM & Bookings Development Project',
    subcategory:
      'You may have a large enterprise looking for an exclusive managed office space or a startup looking for a Coworking/Meeting space, our wide database of properties help you find the best workspaces for your business.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
    duration: '4-6 months',
    client: 'CoWork Spaces',
    features: [
      'Booking & Reservation',
      'Open Desks',
      'Virtual Office',
      'Private Office',
      'Dedicated Desks',
      'Conference Rooms'
    ],
    subfeatures: [
      'We enables members to make reservations for workspaces, meeting rooms, or other facilities within the coworking space. Our system allows for easy scheduling, availability checks, and streamlining the reservation process.',

      'Open desks are the available spaces in a coworking environment and are not dedicated seats. Guests occupy the open desk on a first come basis, and utilize that desk for the day.',

      'A virtual office provides you a professional business address and mailbox with the ability to book additional spaces as needed. This is perfect for virtual business owners or those with home offices.',

      'A private office provides you a private enclosed space with a door for additional privacy and phone calls.',

      'Dedicated desks provide the benefits of a coworking shared space environment with the added level of having an assigned desk space.',
      'Visitors can request the callback, all these details are stored in the system, where admin can follow up them manually.'
    ],
    challenges: [
      'Real-time availability synchronization',
      'Integration with building access systems',
      'Flexible pricing models'
    ],
    solutions: [
      'Implemented real-time booking engine',
      'Built API integrations with access control systems',
      'Created dynamic pricing based on demand'
    ],
    stats: [
      { label: '8+ Countries', icon: '🏢' },
      { label: '125+ Customers', icon: '👥' },
      { label: 'Robust Design', icon: '⚡' },
      { label: 'Responsive', icon: '🔐' }
    ]
  },
  {
    id: 7,
    slug: 'learning-management',
    title: 'LMS Application Development Project',
    description:
      'Referred to as an e-learning system, the LMS dashboard offers admin, tracking, reporting, and delivery tools. 58% of global institutes now use it to manage multiple branches and deliver online training',
    image: '/portfolio/hero-1-2(1).png',
    imageintroduction: '/portfolio/hero-2-2.webp',
    introductionText:
      'It is also, referred to as e-learning system. When it comes to the system, the dashboard is developed in such a way that you can get a variety of separate and exciting features such as administration, documentation, tracking, reporting and delivery of educational or training programs. In fact, as per the recent study 58% of the international schools, B-Schools and Universities have upgraded the software application to LMS. With a single application, you can manage ‘n’ of branches across the cities. In the current scenario most of the training institute, a business consultancy who provides training to the young generation and business people they depend on online training.',
    category: 'LMS Application Development',
    subcategory:
      'As the world is moving digital, even schools/ colleges/ universities want to update the system from old version to new version. By the name itself we can identify (it is a system specifically designed and targeted for schools/ colleges/ universities at any level).',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS S3'],
    duration: '6-8 months',
    client: 'Digital Learning Academy',
    features: [
      'Course creation and management',
      'Interactive video lessons',
      'Progress tracking',
      'Discussion forums',
      'Assignment submission',
      'Mobile learning app'
    ],

    challenges: [
      'Video streaming optimization',
      'Offline content synchronization',
      'Scalable content delivery'
    ],
    solutions: [
      'Implemented adaptive bitrate streaming',
      'Built offline-first mobile app with sync',
      'Used CDN for global content delivery'
    ],
    stats: [
      { label: '14+ Countries', icon: '📚' },
      { label: '140+ Customers', icon: '👨‍🎓' },
      { label: 'Robust Design', icon: '📱' },
      { label: 'Responsive', icon: '🔄' }
    ]
  },
]

// Meta title mapping for portfolio items
const metaTitles: Record<string, string> = {
  'coworks-crm': 'Coworks CRM & Booking Development FL ',
  'ecommerce': 'Best E-commerce App Development Florida ',
  'learning-management': 'LMS App Development in Florida ',
}

// Meta description mapping for portfolio items
const metaDescriptions: Record<string, string> = {
  'coworks-crm': 'Coworks CRM and booking system development in Florida. Streamline office space booking with flexible workspace options including private offices, dedicated desks, meeting rooms, and virtual offices.',
  'ecommerce': 'Leading e-commerce app development services in Florida. Custom B2B & B2C e-commerce solutions with SEO-friendly platforms, customized shopping carts, payment gateways, and order management systems.',
  'learning-management': 'An LMS dashboard is an e-learning system with admin, tracking, reporting, and delivery tools—used by 58% of global institutes to manage branches and deliver online training.',
}

// Meta keywords mapping for portfolio items
const metaKeywords: Record<string, string[]> = {
  'coworks-crm': [
    'coworks crm florida',
    'office space booking system',
    'coworking space booking',
    'workspace booking crm',
    'office booking platform florida',
    'coworking crm development',
    'workspace management system',
    'meeting room booking florida',
    'virtual office booking',
    'private office booking system',
    'coworks booking app',
    'office space crm florida'
  ],
  'ecommerce': [
    'ecommerce app development florida',
    'b2b ecommerce platform',
    'b2c ecommerce development',
    'custom ecommerce solutions florida',
    'ecommerce website development',
    'online store development florida',
    'shopping cart development',
    'payment gateway integration florida',
    'ecommerce platform development',
    'magento development florida',
    'woocommerce development',
    'ecommerce app florida'
  ],
  'learning-management': [
    'lms app development florida',
    'learning management system',
    'lms platform development',
    'e-learning system florida',
    'online training platform',
    'lms software development',
    'educational lms florida',
    'course management system',
    'lms application florida',
    'online learning platform',
    'training management system florida',
    'school management lms'
  ],
}

// Generate metadata for individual portfolio items
export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = portfolioItems.find(item => item.slug === slug)

  if (!item) {
    return getComprehensiveMetadata(
      'Portfolio Project Not Found',
      'The requested portfolio project could not be found.',
      `/portfolio/${slug}`,
      '/1-E-Commerce.jpg',
      ['portfolio', 'not found', '404'],
      'WebPage'
    )
  }

  // Use custom meta title if available, otherwise fallback to default
  const metaTitle = metaTitles[slug] || `${item.title} - ${item.category} Development Project | Cornerstone Digital Technologies`

  // Use custom meta description if available, otherwise fallback to default
  const metaDescription = metaDescriptions[slug] || item.introductionText || item.description

  // Use custom keywords if available, otherwise generate from portfolio item content
  const customKeywords = metaKeywords[slug]

  let allKeywords: string[]
  if (customKeywords) {
    // Merge custom keywords with base keywords and technology keywords for better SEO
    const baseKeywords = [
      'portfolio project',
      'software development project',
      'custom software solution',
      'Cornerstone Digital Technologies technologies portfolio',
      'florida software development'
    ]
    const technologyKeywords = item.technologies.map(tech => tech.toLowerCase())
    allKeywords = [...customKeywords, ...baseKeywords, ...technologyKeywords]
  } else {
    // Fallback: Generate keywords from portfolio item content
    const baseKeywords = [
      'portfolio project',
      'software development project',
      'custom software solution',
      'web application development',
      'mobile app development',
      'Cornerstone Digital Technologies technologies portfolio'
    ]

    const categoryKeywords = item.category ? [
      item.category.toLowerCase(),
      `${item.category.toLowerCase()} development`,
      `${item.category.toLowerCase()} solution`,
      `${item.category.toLowerCase()} application`
    ] : []

    const technologyKeywords = item.technologies.map(tech => tech.toLowerCase())
    const featureKeywords = item.features.map(feature =>
      feature.toLowerCase().replace(/\s+/g, ' ')
    )

    allKeywords = [
      ...baseKeywords,
      ...categoryKeywords,
      ...technologyKeywords,
      ...featureKeywords
    ]
  }

  return getComprehensiveMetadata(
    metaTitle,
    metaDescription,
    `/portfolio/${slug}`,
    item.imageintroduction || item.image,
    allKeywords,
    'WebPage'
  )
}

export default async function PortfolioDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = portfolioItems.find(item => item.slug === slug)

  if (!item) {
    notFound()
  }

  const structuredData = getStructuredData(
    `${item.title} - ${item.category} Development Project | Cornerstone Digital Technologies`,
    item.introductionText || item.description,
    `/portfolio/${slug}`,
    'SoftwareApplication',
    {
      image: `${SITE_URL}${item.image}`,
      operatingSystem: item.technologies.join(', '),
      features: item.features,
      screenshots: [item.image, item.imageintroduction].filter(Boolean)
    }
  )

  const featuresdemo = [
    {
      title: 'Personalized Service',
      text: 'Our network with hosts across different markets will help you find workspace for all your requirements.'
    },
    {
      title: 'The Market Picture',
      text: 'Our wide network across different markets will help you to choose a required workspace and make an instant booking.'
    },
    {
      title: 'Ease of finding',
      text: 'You can choose from wide range of options like open & dedicated desks, private office, meeting & training rooms etc.'
    },
    {
      title: 'Agility',
      text: 'No Brokerage, No Service charges and No overhead costs. All our offerings are completely FREE..!'
    },
    {
      title: 'Flexible',
      text: 'Pay only for what you use. Pick your Coworking desk, private desk, meeting rooms, training rooms for short and long term.'
    },
    {
      title: 'Affordable',
      text: 'Contact us for affordable long-term lease options from property managers, ensuring you get the right deal for your needs.'
    },
    {
      title: 'By your side',
      text: 'Wide variety of customer friendly services, flexible to scale up on a need basis, and utilization of virtual office services etc.'
    }
  ]

  return (
    <>
      <StructuredData data={structuredData} />
      <div className='min-h-screen bg-white montserrat'>
        {/* Hero Section with Device Mockups */}
        <section className='relative bg-blue-900 overflow-visible'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-12 items-center relative'>
              {/* Left Content */}
              <div className='lg:col-span-5 text-white text-center lg:text-left py-16 lg:py-24'>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 leading-tight'>
                  {item.category}
                </h1>
                <p className='text-base lg:leading-8 mb-6 md:mb-8 opacity-90 max-w-lg mx-auto lg:mx-0'>
                  {item.subcategory}
                </p>
              </div>

              {/* Right Image */}
              <div className='lg:col-span-7 flex justify-center lg:justify-end relative'>
                <div
                  className='relative w-[300px] sm:w-[350px] md:w-[420px] lg:w-[300px] lg:h-[500px] xl:w-[580px] 
                        h-[300px] sm:h-[600px] 
                        transform rotate-3 
                        lg:absolute lg:top-[-80px] lg:right-10 z-20'
                >
                  <Image
                    src={item.image}
                    alt='Main Portfolio Image'
                    title={`${item.category || 'Portfolio Project'} - ${item.title}`}
                    width={1000}
                    height={1000}
                    className='object-cover rounded-2xl'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className='py-8 md:py-12 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 max-w-3xl'>
              {item.stats.map((stat, index) => (
                <div
                  key={index}
                  className='text-center flex lg:flex-row flex-col gap-8 items-center'
                >
                  <div className='w-10 h-10 md:w-12 md:h-12 bg-red-500 rounded-full flex items-center justify-center  '>
                    <i
                      className={`fa ${index === 0
                        ? 'fa-globe'
                        : index === 1
                          ? 'fa-users'
                          : index === 2
                            ? 'fa-cogs'
                            : 'fa-mobile'
                        } text-white text-lg md:text-xl`}
                    ></i>
                  </div>
                  <div className='text-sm md:text-lg font-medium text-gray-900'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className='py-4 md:py-4 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
              {/* Left Side - Single Portfolio Image */}
              <div className='relative w-full lg:h-[400px] md:h-[500px] h-[200px]'>
                <Image
                  src={item.imageintroduction || item.image}
                  alt={item.title}
                  title={`${item.title} - Project Introduction`}
                  fill
                  className='object-cover'
                />
              </div>

              {/* Right Side - Introduction Text */}
              <div className='prose prose-lg max-w-none'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 lg:text-left text-center'>
                  Introduction
                </h2>
                <p className='text-gray-700 leading-relaxed text-base md:text-lg text-justify'>
                  {item.introductionText}
                </p>
              </div>
            </div>
          </div>
        </section>



        {item.id !== 7 && (
          <section className='py-12 md:py-16 lg:py-20 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-8 md:mb-12 lg:mb-16 text-center'>
                Our {item.category} Platform Advantages
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10'>
                {item.features.map((feature, index) => (
                  <div
                    key={index}
                    className='group bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-blue-300'
                  >
                    <div className='text-blue-600 text-3xl md:text-4xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300'>
                      <i
                        className={`fa ${index === 0
                          ? 'fa-cogs'
                          : index === 1
                            ? 'fa-file-text'
                            : index === 2
                              ? 'fa-shopping-cart'
                              : index === 3
                                ? 'fa-truck'
                                : index === 4
                                  ? 'fa-line-chart'
                                  : index === 5
                                    ? 'fa-bolt'
                                    : index === 6
                                      ? 'fa-graduation-cap'
                                      : index === 7
                                        ? 'fa-users'
                                        : index === 8
                                          ? 'fa-laptop'
                                          : 'fa-star'
                          }`}
                      ></i>
                    </div>
                    <h3 className='text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors'>
                      {feature}
                    </h3>
                    <p className='text-gray-600 leading-relaxed text-sm md:text-base'>
                      {item.subfeatures && item.subfeatures[index]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {item.id === 6 && (
          <section className='py-10 bg-white'>
            <div className='max-w-7xl mx-auto px-4'>
              <ul className='space-y-4'>
                {featuresdemo.map((item, idx) => (
                  <li key={idx} className='flex items-start'>
                    <FaCheck className='text-green-600 flex-shrink-0 mt-1 mr-3' />
                    <p className='text-gray-700 leading-relaxed'>
                      <span className='font-semibold'>{item.title}:</span>{' '}
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {item.id === 7 && (
          <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='grid md:grid-cols-2 gap-8'>
              {/* Left Side */}
              <div>
                <h2 className='text-2xl md:text-3xl font-bold leading-snug'>
                  LMS Mobile App Development <br />
                  Why Our LMS Web Application and Mobile App?
                </h2>
                <p className='mt-4 text-gray-600'>
                  We are the leading e-learning management system development
                  company in Florida who built our application in a
                  user-friendly interface in such a way that anyone can
                  understand the process...
                </p>

                <h3 className='mt-6 text-xl font-bold'>LMS Web Application</h3>
                <p className='mt-2 text-gray-600'>
                  We came up with our own application i.e The Next Gen School
                  Management Software. We are the best LMS Application
                  Development Company in Florida, USA...
                </p>

                <h3 className='mt-8 text-xl font-bold'>
                  Major Advantages Of LMS
                </h3>
                <ul className='mt-4 space-y-2'>
                  {[
                    'Interoperability',
                    'Accessibility',
                    'Reusability',
                    'Durability',
                    'Maintenance Ability',
                    'Adaptability'
                  ].map((item, idx) => (
                    <li key={idx} className='flex items-start gap-2'>
                      <FaArrowRight className='text-gray-500 mt-1' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side */}
              <div>
                <h3 className='text-xl md:text-2xl font-bold'>
                  Our Exciting Pre Planned Features
                </h3>
                <ul className='mt-4 space-y-2'>
                  {[
                    'Creating and uploading any Content format effortlessly.',
                    'Setting up any program.',
                    'Live Audio/Video Conferencing.',
                    'Conduct Test, Survey and Evaluations',
                    'Combine and send Bulletins to Individuals and Groups',
                    'Circulate new learning content/modules directly to the Web.',
                    'Built-in course making.',
                    'Training Firms.',
                    'Analysis and Valuation',
                    'Talent Tracing.',
                    'Record and view user performance assessments.',
                    'Authorize and meet out tests, Survey and Appraisals.',
                    'Managing Certificates and increase Skill assessment programs.',
                    'Evaluation/Scrutinise and apprise Learners progress report and Training',
                    'Schedule Online.'
                  ].map((item, idx) => (
                    <li key={idx} className='flex items-start gap-2'>
                      <FaCheck className='text-green-500 mt-1' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className='mt-8 text-xl font-bold'>Other Advantages</h3>
                <ul className='mt-4 space-y-2'>
                  {[
                    'Can support content in various formats such as: text, video, audio, etc.',
                    'Accessible materials, modified by teachers, viewed by students anytime, anywhere.',
                    'Fairly assess students through attendance and online quizzes for easier evaluation.',
                    'Students and teachers can re-use the material every time they need.'
                  ].map((item, idx) => (
                    <li key={idx} className='flex items-start gap-2'>
                      <FaArrowRight className='text-gray-500 mt-1' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}




        <ManagedServices />

        {/* <section className='py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 md:mb-12 lg:mb-16 text-center'>
            Managed Services & Support Offerings
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6'>
            {item.technologies.map((tech, index) => (
              <button
                key={index}
                className={`px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 transform hover:scale-105 ${
                  index % 2 === 0
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl'
                    : 'bg-white text-gray-900 border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-400 shadow-md hover:shadow-lg'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </section>

    
      <section className='py-8 md:py-12 bg-white border-t border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
            <Link
              href='/portfolio'
              className='inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg md:rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base'
            >
              ← Back to Portfolio
            </Link>

            <div className='flex gap-2 md:gap-4'>
              {item.id > 1 && (
                <Link
                  href={`/portfolio/${
                    portfolioItems.find(p => p.id === item.id - 1)?.slug
                  }`}
                  className='inline-flex items-center px-4 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg md:rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base'
                >
                  ← Previous
                </Link>
              )}
              {item.id < portfolioItems.length && (
                <Link
                  href={`/portfolio/${
                    portfolioItems.find(p => p.id === item.id + 1)?.slug
                  }`}
                  className='inline-flex items-center px-4 md:px-8 py-3 md:py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg md:rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base'
                >
                  Next →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section> */}
      </div>
    </>
  )
}
