import { getComprehensiveMetadata, getStructuredData } from "@/lib/seo-metadata";
import StructuredData from "@/components/ui/StructuredData";
import Image from 'next/image'
import Link from 'next/link'
import ClientSection from '../landingpage/ClientSection'

export const metadata = getComprehensiveMetadata(
  "Portfolio-Projects & Success Stories",
  "Explore Conquerors Technologies' impressive portfolio of software development projects including e-commerce applications, CRM systems, learning management platforms, and custom business solutions. View our success stories and client projects.",
  "/portfolio",
  "/1-E-Commerce.jpg",
  [
    "portfolio",
    "software development portfolio",
    "web development projects",
    "mobile app projects",
    "e-commerce development",
    "CRM development",
    "learning management system",
    "custom software projects",
    "success stories",
    "client projects",
    "software development company portfolio",
    "web application portfolio",
    "mobile application portfolio",
    "enterprise software portfolio",
    "custom development projects",
    "software solutions portfolio",
    "technology portfolio",
    "digital transformation projects",
    "IT projects portfolio",
    "software development Florida portfolio"
  ],
  "WebPage"
);

const portfolioItems = [
  {
    id: 1,
    slug: "ecommerce",
    title: "E-Commerce Web Application",
    description: "Custom e-commerce application to suite your B2B & B2C business needs using the latest technology.",
    image: "/1-E-Commerce.jpg"
  },
  {
    id: 2,
    slug: "vehicle-booking",
    title: "Vehicle Booking Platform",
    description: "Efficient online taxi booking platform for small and medium companies, ensuring quick and easy reservations.",
    image: "/2-Vehicle-booking-online-1.jpg"
  },
  {
    id: 3,
    slug: "crm-saas",
    title: "Bot Billing (SaaS) CRM",
    description: "This system is the most competent to manage sales, purchase orders, recurring invoices, contracts with the utmost.",
    image: "3-CRM.jpg"
  },
  {
    id: 4,
    slug: "online-exam",
    title: "Online Learning & Examination System",
    description: "Online Examination System is a secure learning and assessment solution that supports creating various formats...",
    image: "/4-online-exam.jpg"
  },
  {
    id: 5,
    slug: "graduates-portal",
    title: "Graduates Leads Congr",
    description: "This is an education portal helpful for students who are seeking information on the higher education.",
    image: "/5-Graduates.jpg"
  },
  {
    id: 6,
    slug: "coworks-crm",
    title: "Coworks CRM & Bookings",
    description: "Streamline your office space booking process with our efficient online booking system.",
    image: "/6-coworks.jpg"
  },
  {
    id: 7,
    slug: "learning-management",
    title: "Learning Management System",
    description: "Student can learn online using web & mobile application with experimental learning using advanced tools.",
    image: "7-lms.jpg"
  },
  {
    id: 8,
    slug: "learn-eazy",
    title: "Learn Eazy",
    description: "Learn Eazy platform provides the best learning solutions for the students in the pursuit of realizing their dreams.",
    image: "/8-Learn-easy.jpg"
  },
  {
    id: 9,
    slug: "stone-trading",
    title: "Stone Trading - Inventory & CRM",
    description: "With Stone Trading, you can say goodbye to the days of manual inventory tracking and complicated spreadsheets.",
    image: "/9-Stone-CRM.jpg"
  }
]

const partners = [
  { name: "Indian Eagle", logo: "/placeholder-logo.png" },
  { name: "science&minds Powered by Trialect", logo: "/placeholder-logo.png" },
  { name: "aosh", logo: "/placeholder-logo.png" },
  { name: "National Academy of Construction", logo: "/placeholder-logo.png" }
]

export default function PortfolioPage() {
  const structuredData = getStructuredData(
    "Portfolio - Software Development Projects & Success Stories",
    "Explore Conquerors Technologies' impressive portfolio of software development projects including e-commerce applications, CRM systems, learning management platforms, and custom business solutions. View our success stories and client projects.",
    "/portfolio",
    "WebPage"
  );

  return (
    <div className="montserrat">
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-[#1a1a2e] py-16 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 border border-blue-300 rounded-full animate-bounce [animation-duration:3s]"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-blue-500 rounded-full animate-pulse [animation-delay:1s]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Products <span className="text-blue-400">Portfolio</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed opacity-90">
              Explore our portfolio to discover more about our products and the success stories we've helped create. Contact us today to find out how we can bring value to your organization.
            </p>
          </div>
        </section>

        {/* Portfolio Grid Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {portfolioItems.map((item) => (
                <Link key={item.id} href={`/portfolio/${item.slug}`} className="group h-full">
                  <div className="h-full bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col hover:-translate-y-2">
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        title={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-[#1a1a2e] mb-4 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base mb-6 line-clamp-3">
                        {item.description}
                      </p>
                      <div className="mt-auto pt-4 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        <span className="text-sm uppercase tracking-wider">Explore Project</span>
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section Title */}
        <div className="pt-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a2e] mb-4">
                Over a Decade of Business Excellence and Triumphs
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>

        <ClientSection />
      </div>
    </div>
  )
} 