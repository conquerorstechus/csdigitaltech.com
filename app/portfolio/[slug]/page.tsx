import { Metadata } from 'next'
import { getComprehensiveMetadata, getStructuredData } from '@/lib/seo-metadata'
import StructuredData from '@/components/ui/StructuredData'
import ManagedServices from '@/components/ManagedServices/ManagedServices'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
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
      'ConvenantSoft Technologies delivers custom B2B & B2C e-commerce solutions, designing user-friendly sites and enhancing apps to boost business growth for clients worldwide. Elevate your online presence today.',
    category: 'Best E-commerce Application',
    subcategory:
      'ConvenantSoft Technologies: Experts in custom e-commerce solutions. We build tailored, user-friendly applications to help your business thrive globally, offering growth-oriented websites and unique feature enhancements.',
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
      'ConvenantSoft Technologies: Empowering businesses with customizable e-commerce solutions for seamless operations and enhanced customer experiences. Enhance online presence, user-friendly features.',
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
    id: 2,
    slug: 'vehicle-booking',
    title: 'Vehicle Booking Platform-Project',
    description:
      'Efficient online taxi booking platform for small and medium companies, ensuring quick and easy reservations.',
    image: '/WebDevlopment/hero-1-1.png',
    imageintroduction: '/portfolio/vehicalhero.webp',
    introductionText:
      'Vehicle Booking Platform for SMBs enables easy online taxi booking with vehicle management, pricing, coupons, payment gateways, settings, permissions, and more for smooth, flexible operations',
    category: 'Vehicle Booking Platform',
    subcategory:
      'This platform for small and medium scale companies where customers can book taxis online, with a quick and easy process. There are robust features to add and manage vehicles listing, various details like vehicles name, features,',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API'],
    duration: '3-4 months',
    client: 'CityRide Services',
    features: [
      'Manage Vehicles Listing',
      'Special Fare',
      'Email Templates',
      'Coupon Codes',
      'Availability Status',
      'Request Callbacks'
    ],
    subfeatures: [
      'Admin can be able to manage all the vehicles with details like name, features, type, location, hourly package, lay out date, special fare date, distance price , coupon code and published date.',
      'Admin can set the special fare increase for any particular day in terms of setting any value in number or in percentile, for example, on Christmas, you can hike the fare by 10% or decrease the fare by 10%',
      'E-mail alerts for different actions like payment status, booking cancel, booking confirm, booking status, booking success, reset password, new user registration with personalized message.',
      'Coupons are available weapons for business growth, to increase the conversions, admin can set the coupon code for value or percentile, there is a provision for coupon validity period also.',
      'To disable any vehicle for a certain period of time, due to non-availability of vehicle, then admin can deactivate for not showing it for users.',
      'Visitors can request the callback, all these details are stored in the system, where admin can follow up them manually.'
    ],
    challenges: [
      'Real-time GPS tracking accuracy',
      'Peak hour demand management',
      'Driver-customer communication'
    ],
    solutions: [
      'Integrated high-precision GPS with geofencing',
      'Implemented dynamic pricing algorithm',
      'Built in-app chat system with push notifications'
    ],
    stats: [
      { label: '15+ Countries', icon: '🏙️' },
      { label: '180K+ Customers', icon: '👥' },
      { label: 'Robust Design', icon: '⚡' },
      { label: 'Responsive', icon: '📍' }
    ]
  },
  {
    id: 3,
    slug: 'crm-saas',
    title: 'Bot Billing (SaaS) CRM & Project Management development project',
    description:
      'This system is the most competent to manage sales, purchase orders, recurring invoices, contracts with the utmost.',
    image: '/portfolio/saasbanner.png',
    imageintroduction: '/portfolio/saashero.png',
    introductionText:
      'Bot Billing (SaaS) CRM & Project Management streamlines sales, invoices, orders, tasks, and contracts with real-time collaboration, lead tracking, follow-up alerts, and insightful sales reports.',
    category: 'Bot Billing (SaaS) CRM & Project Management',
    subcategory:
      'Bot Billing (SaaS) CRM & Project Management is the ultimate tool to streamline sales, projects, and contracts. Keep tasks in one place, collaborate in real-time, and track customer leads and orders effortlessly. Gain insights with reports and never miss a follow-up with automated notifications.',
    technologies: ['Angular', 'Python Django', 'PostgreSQL', 'Redis'],
    duration: '6-8 months',
    client: 'Enterprise Solutions Ltd.',
    features: [
      'Invoices',
      'Quotes',
      'Recurring Invoices',
      'Cart Orders',
      'Projects',
      'E-mail/ Sms Templates',
      'Accounting',
      'Messaging System',
      'Plug-ins',
      'Leads',
      'User Management'
    ],
    subfeatures: [
      'The SaaS CRM generates detailed invoices with product information, taxes, discounts, and total price upon customer confirmation. It also offers payment initiation options through various gateways, streamlining the purchasing process.',

      'SaaS has the ability to send quotes to the customer except leads before the payments are made with all the product details including taxes, discounts and fixed prices. Quotes are a preview of product details before confirmation by the customer.',

      'Recurring invoices that can be configured to a specific period of time of the day and hour. when the action to be performed. The SaaS CRM generates recurring invoices, scheduled at specific times, triggering alerts for timely invoice generation.',

      'SAAS helps both the customers and admin to place more than one order or payment at the same time by placing all the selected products into cart and make payment at a time. Admin can also place the products into cart on behalf of customer’s requests.',

      'SaaS simplifies project management with budgeting, expense tracking, and flexible billing options. Efficiently manage projects, track progress, and optimize operations with intuitive sub-modules. Versatile billing methods for efficient project management.',

      'SAAS offers email templates with predefined formats, including addresses (From, To, Cc, Bcc), subject, and body text. It also allows customization of SMS templates, enabling predefined formats for SMS content with sender and receiver details.',

      'SAAS has the ultimate ability to keeping track of all the transactions such as payments, credit notes, and refunding over a large period of time. All incomes, expenses, profits, losses are tracked and calculated',

      'SAAS messaging system integrates with MailChimp, facilitating message sending and receiving. Manage Inbox and Outbox messages effortlessly for streamlined communication.',

      'Plug-ins allow you to optimize or customize this application to some extent by activating or deactivating the plug-ins of your choice or requirement',

      'SaaS CRM enables the process of initiating an inquiry about the product in order to know the interests of customers and categorize them as leads so that they will be able to get the proposals.',

      'Specific administrative structure, as well as to group users in any other way and to define the access and permission settings.'
    ],
    challenges: [
      'Complex billing rule engine',
      'Multi-tenant architecture',
      'Data security compliance'
    ],
    solutions: [
      'Built flexible rule engine with visual configuration',
      'Implemented secure tenant isolation',
      'Added SOC 2 compliance features'
    ],
    stats: [
      { label: '12 + Countries', icon: '🏢' },
      { label: '125 + Customers', icon: '⚡' },
      { label: 'Robust Design', icon: '🔐' },
      { label: 'Responsive', icon: '🤖' }
    ]
  },
  {
    id: 4,
    slug: 'online-exam',
    title: 'Online Learning & Examination System',
    description:
      'Online Examination System is a secure learning and assessment solution that supports creating various formats...',
    image: '/portfolio/oesbanner.png',
    imageintroduction: '/portfolio/OES1.webp',
    introductionText:
      'Admin controls student categories, tests, feedback, pages, FAQs, blogs, newsletters, resume builder, search, fraud disable, exam layout, CMS, multilingual exams, themes, RazorPay, reCaptcha, & LMS features.',
    category: 'Online Learning & Examination System',
    subcategory:
      'The administrator can assign categories to students and display approved testimonials on the front end. Additionally, the system offers features such as a search bar, newsletter subscription, and resume builder to enhance user experience.',
    technologies: ['React', 'Express.js', 'MongoDB', 'WebRTC'],
    duration: '5-7 months',
    client: 'EduTech Institute',
    features: [
      'Secure online examinations',
      'Video proctoring',
      'Question bank management',
      'Automated grading',
      'Certificate generation',
      'Learning analytics'
    ],
    challenges: [
      'Preventing cheating during online exams',
      'Handling large concurrent users',
      'Question randomization'
    ],
    solutions: [
      'Implemented AI-powered proctoring system',
      'Used load balancing and CDN for scalability',
      'Built dynamic question randomization algorithm'
    ],
    stats: [
      { label: '17+ Countries', icon: '🎓' },
      { label: '110 K+ Customers', icon: '👨‍🎓' },
      { label: 'Robust Design', icon: '🤖' },
      { label: 'Responsive', icon: '🔒' }
    ]
  },
  {
    id: 5,
    slug: 'graduates-portal',
    title: 'Graduates Leads Conqr Development',
    description:
      'This is an education portal helpful for students who are seeking information on the higher education.',
    image: '/portfolio/GE1-1.webp',
    imageintroduction: '/portfolio/GE-1.webp',
    introductionText:
      'Graduates Leads Conqr offers info on 2,000+ US institutions and 25,000+ courses across fields like Management and Science, helping students explore and choose the right path for their studies.',
    category: 'Graduates Leads Conqr',
    subcategory:
      'Graduates Leads Conqr is a one-stop platform for students to explore and secure admissions to undergraduate and postgraduate courses in USA. It provides reliable information on 2,000+ institutions and 25,000+ courses across various educational streams, accessible through both website and mobile site.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    duration: '3-5 months',
    client: 'Higher Education Council',
    features: [
      'University directory',
      'Course comparison tools',
      'Application tracking',
      'Student community forum',
      'Scholarship database',
      'Career guidance'
    ],
    challenges: [
      'Aggregating data from multiple universities',
      'User engagement and retention',
      'Content moderation'
    ],
    solutions: [
      'Built automated data scraping with API integrations',
      'Implemented gamification features',
      'Added AI-powered content moderation'
    ],
    stats: [
      { label: '500+ Universities', icon: '🎓' },
      { label: '10k+ Students', icon: '👨‍🎓' },
      { label: 'Real-time Data', icon: '📊' },
      { label: 'Community', icon: '👥' }
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
  {
    id: 8,
    slug: 'learn-eazy',
    title: 'Learn Eazy - Learn Wise Platform',
    description:
      'Learn Eazy platform provides the best learning solutions for the students in the pursuit of realizing their dreams.',
    image: '/portfolio/hero-1-1.png',
    imageintroduction: '/portfolio/hero-2-1 (1).webp',
    introductionText:
      'An LMS dashboard is an e-learning system with admin, tracking, reporting, and delivery tools—used by 58% of global institutes to manage branches and deliver online training.',
    category: 'Learn Wise Platform',
    subcategory:
      'Learn Wise is a comprehensive e-learning platform that offers a wide range of courses, providing learners with access to high-quality educational content, interactive lessons, and valuable resources to enhance their knowledge and skills in various subjects.',
    technologies: ['React', 'Firebase', 'TensorFlow', 'WebRTC'],
    duration: '5-7 months',
    client: 'LearnEazy Education',
    features: [
      'Engaging Tests',
      'Enriched Teaching Methodology',
      'Self Assessment'
    ],
    subfeatures: [
      'Learner typically must answer the question by experimenting with animations. This test gives a chance to understand the concepts byexperimenting with the animations as these aren’t time bound.',
      'In scientific learning activity precedes theoretical conclusions. Theinteractive animations help learner to play around to understand complex concepts which are hard to visualize otherwise.',
      'The questions of the bank with proper tagging can assess the student’s logical and analytical skills. The tests offer best assessment of the student’s learning gaps.'
    ],
    challenges: [
      'Personalized content recommendation',
      'Real-time AI tutoring',
      'Student engagement'
    ],
    solutions: [
      'Built ML-based recommendation engine',
      'Implemented real-time AI chat system',
      'Added gamification and rewards system'
    ],
    stats: [
      { label: '10+ Countries', icon: '🤖' },
      { label: '125+ Customers', icon: '👨‍🎓' },
      { label: 'Robust Design', icon: '🎯' },
      { label: 'Responsive', icon: '🎮' }
    ]
  },
  {
    id: 9,
    slug: 'stone-trading',
    title: 'Stone Trading - Inventory & CRM',
    description:
      'With Stone Trading, you can say goodbye to the days of manual inventory tracking and complicated spreadsheets.',
    image: '/portfolio/hero-1.png',
    imageintroduction: '/portfolio/hero-2.webp',
    introductionText:
      'We provide info and services on worktops for kitchens, bathrooms, and commercial spaces with a user-friendly site, detailed specs, and high-quality images for easy exploration and decision-making.',
    category: 'Stone Trading - Inventory & CRM',
    subcategory:
      'We serves as a valuable resource for those interested in finding the perfect worktops for their spaces, offering a seamless browsing experience and essential information, we may include a blog or articles section, offering helpful tips, inspiration, and trends related to worktops.',
    technologies: ['Angular', 'Java Spring', 'Oracle', 'Redis'],
    duration: '7-9 months',
    client: 'Stone Trading Co.',
    features: [
      'Contacts & Leads Management',
      'Manage Product Catalog',
      'Manage Quotations, Invoices',
      'Inventory Tracking',
      'Delivery Tracking',
      'Reports & Analytics',
      'Email/SMS Notifications',
      'Settings',
      'Support Requests'
    ],
    subfeatures: [
      'Maintain a centralized contact database of customers, suppliers, and partners involved in granite trading. Capture Leads, Enquiries and communication history',

      'Manage and update comprehensive product catalog with details such as types, sizes, colors, stock availability, location, and pricing. Ensuring accurate and organized product listings',

      'Provide accurate pricing and detailed breakdowns of costs related products/ services. Manage Purchase Orders, Efficiently manage quotations and invoices for worktops with streamlined processes.',

      'Tracking Stock quantity, location and movements, Track and manage worktop inventory with precision, ensuring accurate stock levels and streamlined operations.',

      'Track item shipment/delivery progress, timelines, and timely follow-ups, Track worktop deliveries in real-time for enhanced visibility and customer satisfaction.',

      'Customer information, sales data, top-selling products and financial transactions, Drive informed decisions with detailed worktop reports and analytics',

      'Stay informed and connected with timely email and SMS notifications for worktop updates and status changes.',
      'Provide with the ability to set permissions and access levels, allowing them to control & edit, or manage certain features or data.',
      'Efficiently handle and resolve support requests regarding kitchen worktops, ensuring customer needs are met promptly and effectively.'
    ],
    challenges: [
      'Complex inventory categorization',
      'Quality control automation',
      'Supply chain optimization'
    ],
    solutions: [
      'Built AI-powered inventory categorization',
      'Implemented automated quality control checks',
      'Created predictive supply chain analytics'
    ],
    stats: [
      { label: '10+ Countries', icon: '📦' },
      { label: '125+ Customers', icon: '🏭' },
      { label: 'Robust Design', icon: '📊' },
      { label: 'Responsive', icon: '✅' }
    ]
  }
]

// Meta title mapping for portfolio items
const metaTitles: Record<string, string> = {
  'stone-trading': 'Stone Trading-Inventory & CRM Florida ',
  'vehicle-booking': 'Vehicle Booking Platform Florida ',
  'crm-saas': 'Bot Billing SaaS CRM & Projects Florida ',
  'coworks-crm': 'Coworks CRM & Booking Development FL ',
  'ecommerce': 'Best E-commerce App Development Florida ',
  'graduates-portal': 'Graduates Leads Conqr Development FL ',
  'learn-eazy': 'Learn Wise Platform Florida ',
  'learning-management': 'LMS App Development in Florida ',
  'online-exam': 'Online Learning & Exam System Florida '
}

// Meta description mapping for portfolio items
const metaDescriptions: Record<string, string> = {
  'stone-trading': 'Professional stone trading inventory and CRM solution in Florida. Manage worktops for kitchens, bathrooms, and commercial spaces with advanced inventory tracking, CRM features, and delivery management.',
  'vehicle-booking': 'Efficient vehicle booking platform development in Florida. Online taxi booking system with vehicle management, dynamic pricing, coupon codes, and real-time availability for seamless reservations.',
  'crm-saas': 'Comprehensive SaaS CRM and project management system in Florida. Streamline sales, invoices, orders, tasks, and contracts with real-time collaboration, lead tracking, and automated billing.',
  'coworks-crm': 'Coworks CRM and booking system development in Florida. Streamline office space booking with flexible workspace options including private offices, dedicated desks, meeting rooms, and virtual offices.',
  'ecommerce': 'Leading e-commerce app development services in Florida. Custom B2B & B2C e-commerce solutions with SEO-friendly platforms, customized shopping carts, payment gateways, and order management systems.',
  'graduates-portal': 'Graduates Leads Conqr development platform in Florida. Connect students with 2000+ US institutions and 25000+ courses for undergraduate and postgraduate admissions across various educational streams.',
  'learn-eazy': 'Learn Eazy - Learn Wise Platform in Florida. Interactive online learning platform with engaging tests, enriched teaching methodology, animated content, and self-assessment tools for comprehensive student learning.',
  'learning-management': 'An LMS dashboard is an e-learning system with admin, tracking, reporting, and delivery tools—used by 58% of global institutes to manage branches and deliver online training.',
  'online-exam': 'Advanced online learning and examination system in Florida. Secure exam platform with video proctoring, automated grading, question bank management, certificate generation, and comprehensive learning analytics.'
}

// Meta keywords mapping for portfolio items
const metaKeywords: Record<string, string[]> = {
  'stone-trading': [
    'stone trading inventory crm florida',
    'worktops inventory management',
    'kitchen worktops crm',
    'stone trading software florida',
    'inventory tracking system',
    'crm for stone traders',
    'worktops delivery tracking',
    'stone trading florida',
    'inventory management florida',
    'crm development florida',
    'granite trading software',
    'worktops quotation system'
  ],
  'vehicle-booking': [
    'vehicle booking platform florida',
    'taxi booking system florida',
    'online taxi booking',
    'vehicle reservation system',
    'ride booking app florida',
    'taxi management system',
    'vehicle booking software',
    'booking platform development florida',
    'car rental booking system',
    'transportation booking florida',
    'vehicle booking app',
    'fleet management booking'
  ],
  'crm-saas': [
    'saas crm florida',
    'bot billing crm',
    'project management crm',
    'saas billing system florida',
    'recurring invoice system',
    'crm project management',
    'saas crm development florida',
    'billing crm software',
    'saas invoicing system',
    'crm leads management',
    'project management software florida',
    'enterprise crm florida'
  ],
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
  'graduates-portal': [
    'graduates leads conqr florida',
    'student portal development',
    'university admission portal',
    'graduate education portal florida',
    'college admission system',
    'student leads management',
    'education portal florida',
    'university course finder',
    'graduate admission platform',
    'student portal software florida',
    'education management system',
    'college search portal florida'
  ],
  'learn-eazy': [
    'learn eazy platform florida',
    'learn wise platform',
    'online learning platform florida',
    'e-learning app development',
    'interactive learning platform',
    'student learning app florida',
    'educational platform development',
    'online education florida',
    'learning management platform',
    'e-learning software florida',
    'student assessment platform',
    'educational app development florida'
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
  'online-exam': [
    'online exam system florida',
    'online learning system',
    'online examination platform',
    'exam management system florida',
    'online assessment system',
    'exam software development florida',
    'proctored exam system',
    'online test platform florida',
    'examination software',
    'assessment platform florida',
    'online exam proctoring',
    'learning examination system florida'
  ]
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
  const metaTitle = metaTitles[slug] || `${item.title} - ${item.category} Development Project | ConvenantSoft Technologies`

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
      'ConvenantSoft technologies portfolio',
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
      'ConvenantSoft technologies portfolio'
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
    `${item.title} - ${item.category} Development Project | ConvenantSoft Technologies`,
    item.introductionText || item.description,
    `/portfolio/${slug}`,
    'SoftwareApplication',
    {
      image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://conquerorstech.com'}${item.image}`,
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
  const learneasy = [
    {
      title: 'Quiz & Assessments',
      text: 'Quiz & Assessments available to assess student’s logical & analytical skills'
    },
    {
      title: 'Learn Online',
      text: 'Students can learn from online using web application / Android application with experimental learning using advanced tools'
    },
    {
      title: 'Notes',
      text: 'Students can capture notes within the application while studying online'
    },
    {
      title: 'Online Payment',
      text: 'Payment can be made at convenience as it supports different online modes of payments'
    },
    {
      title: 'Notifications',
      text: 'Students will receive regular notification updates and reminders'
    },
    {
      title: 'Animated Content',
      text: ' Engaging interactive content for learning and play in all subjects, including languages, keeping students fully engaged'
    },
    {
      title: 'Study Materials',
      text: 'All grade study material in one place, including downloadable reference books, for comprehensive learning'
    }
  ]
  const stonetrading = [
    {
      title: 'Quiz & Assessments',
      text: 'Extensive range of worktop options for kitchens, bathrooms, and commercial spaces.'
    },
    {
      title: 'Learn Online',
      text: 'Students can learn from online using web application / Android application with experimental learning using advanced tools'
    },
    {
      title: 'Notes',
      text: 'Detailed descriptions, specifications, and visuals for each worktop product.'
    },
    {
      title: 'Online Payment',
      text: 'Resources and guides on worktop installation, maintenance, and care.'
    },
    {
      title: 'Notifications',
      text: 'Suitable for individuals and businesses seeking high-quality and visually appealing worktop solutions.'
    },

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

        {item.id === 4 && (
          <section className='py-12 md:py-16 lg:py-20 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <h2 className='text-2xl font-bold mb-4'>
                What's New in the Examination Application?
              </h2>
              <ul className='space-y-2 grid lg:grid-cols-2 grid-cols-1 gap-8'>
                {[
                  'The Administrator can assign the categories to the students.',
                  'Frontend CMS Pages',
                  'All the tests with registration, without registration and paid tests can be appeared on the homepage.',
                  'Sectional exams',
                  'Student Feedback about System or Exams based. Only admin approved testimonies will be displayed on the front end.',
                  'Practice exams',
                  'Questions display in 2 languages',
                  'Give an Option to admin for adding Front end pages.',
                  'Multi layouts management',
                  'RazorPay Payment Gateway',
                  'Option for Adding FAQs to Admin, can be shown in front end.',
                  'reCaptcha Management',
                  'Email Activation link for Register Users(to avoid duplicate users).',
                  'LMS as frontend',
                  'Home Page Search bar.',
                  'Newsletter Subscription',
                  'Complete Account Disable option for the admin if any Fraud user/activity.',
                  'Resume Builder',
                  'Admin can add Blogs, it can be shown in front end.',
                  'New Exam Layout'
                ].map((item, index) => (
                  <li key={index} className='flex items-start'>
                    <FaChevronRight className='text-blue-500 mt-1 mr-2' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {item.id === 5 && (
          <section className='py-12 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* Column 1 */}
                <div className='text-center md:text-left'>
                  <FaTrophy className='text-blue-800 text-3xl mx-auto md:mx-0 mb-4' />
                  <p className='text-gray-800 leading-relaxed text-justify'>
                    Graduates Leads Conqr is students’ one-stop-solution
                    platform for exploring courses and helps in admissions to
                    their dream colleges to pursue undergraduate (UG) and
                    postgraduate (PG) courses in USA. Along with
                    website, It is also accessible to users through the mobile
                    site. Our website is a repository of reliable and authentic
                    information for over 2,000+ institutions, 25,000+ courses
                    offer specific information for students interested in UG/PG
                    courses in USA across the most popular
                    educational streams – Management, Science & Engineering,
                    Banking & Finance, Information Technology, Hospitality,
                    Aviation & Tourism, Medicine, Internship and Test
                    Assessments.
                  </p>
                </div>

                {/* Column 2 */}
                <div className='text-center md:text-left'>
                  <FaProjectDiagram className='text-blue-800 text-3xl mx-auto md:mx-0 mb-4' />
                  <p className='text-gray-800 leading-relaxed text-justify'>
                    Apart from colleges information, we also provide latest
                    happenings in education sector for the betterment of each
                    individual graduate to connect with latest technologies and
                    research, internships and all sorts of job openings in
                    public and private sectors. Graduates Engine collecting all
                    the potential of young USAn graduates to build the
                    NATION’S POWER as part of self sustainability and global
                    outreach, all graduates community has a great potential for
                    knowledge exchange through the community portal. We have
                    many more options like Preparation of exams and Resume
                    Preparation tools as well.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {item.id !== 4 && item.id !== 5 && item.id !== 7 && (
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

        {item.id === 8 && (
          <section className='py-10 bg-white'>
            <div className='max-w-7xl mx-auto px-4'>
              <ul className='space-y-4'>
                {learneasy.map((item, idx) => (
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


        {item.id === 9 && (
          <section className='py-10 bg-white'>
            <div className='max-w-7xl mx-auto px-4'>
              <ul className='space-y-4'>
                {stonetrading.map((item, idx) => (
                  <li key={idx} className='flex items-start'>
                    <FaCheck className='text-green-600 flex-shrink-0 mt-1 mr-3' />
                    <p className='text-gray-700 leading-relaxed'>

                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
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
