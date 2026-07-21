'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, ChevronRight, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useNavigation } from '@/hooks/useNavigation'
import SearchModal from './SearchModal'
import { DIGITAL_MARKETING_URL, isExternalUrl } from '@/lib/constants'

const servicesCategories = [
  {
    category: 'Architecture & Infrastructure',
    items: [
      { label: 'Scalable & Serverless AWS, Azure, GCP Architecture & Setup', href: '/services/digital-cloud-solutions' },
      { label: 'Managed Infrastructure', href: '/managed-services-florida' }
    ]
  },
  {
    category: 'Web & Software Development',
    items: [
      { label: 'Websites', href: '/web-development' },
      { label: 'Custom Software Development', href: '/services/software-development' }
    ]
  },
  {
    category: 'Digital Marketing & Lead Generation',
    items: [
      { label: 'Social Media Marketing', href: DIGITAL_MARKETING_URL },
      { label: 'Email Marketing', href: DIGITAL_MARKETING_URL },
      { label: 'Search Engine Optimization (SEO)', href: DIGITAL_MARKETING_URL },
      { label: 'Paid Ads', href: DIGITAL_MARKETING_URL },
      { label: 'Lead Generation through Web Scraping', href: DIGITAL_MARKETING_URL }
    ]
  },
  {
    category: 'AI & Automation',
    items: [
      { label: 'AI Chatbots', href: '/services/ai-ml-services' },
      { label: 'AI Call Centers', href: '/services/ai-ml-services' },
      { label: 'Business processes AI Automation using tools like N8N', href: '/services/ai-ml-services' },
      { label: 'Reporting', href: '/services/data-analytics-bi' }
    ]
  },
  {
    category: 'Business Systems Integration',
    items: [
      { label: 'CRM Setup & Implementation', href: '/services/it-consulting' },
      { label: 'ERP Setup & Implementation', href: '/services/it-consulting' }
    ]
  },
  {
    category: 'Quality Assurance',
    items: [
      { label: 'QA / Testing Services', href: '/services/testing-services' }
    ]
  }
]

const aboutMenuItems = [
  { label: 'About Cornerstone Digital Technologies', href: '/about-us' }
]

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    hasMegaMenu: true
  },
  { label: 'Portfolio', href: '/portfolio' },
  { 
    label: 'About', 
    href: '/about-us',
    hasDropdown: true
  },
  { label: 'Blogs', href: '/blog' },
  { label: 'Contact Us', href: '/contact-us' }
]

const Header = () => {
  const pathname = usePathname()
  const { isLoading, navigate } = useNavigation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState('Services')
  const [searchOpen, setSearchOpen] = useState(false)

  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false)
    navigate(href)
  }

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  const getNavLinkClassName = (href: string) =>
    `flex items-center font-medium ${
      isActive(href)
        ? 'text-red-600'
        : 'text-gray-700 font-semibold hover:text-red-600'
    }`

  return (
    <>
      {/* Loading Overlay */}
     {/* {isLoading && <Loader />} */}

      <header className='bg-white shadow-sm sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-between items-center h-24'>
            {/* Logo */}
            <Link
              href='/'
              onClick={() => handleNavigation('/')}
              className='flex shrink-0 items-center'
            >
              <Image
                src='/cornerstone-logo.png'
                title='Cornerstone Digital Technologies'
                alt='Cornerstone Digital Technologies logo'
                width={1024}
                height={344}
                priority
                className='h-16 sm:h-20 lg:h-[5.5rem] w-auto max-w-[16rem] sm:max-w-[20rem] lg:max-w-[22rem] object-contain object-left'
              />
            </Link>

            {/* Desktop Navigation */}
            <div className='flex items-center gap-4'>
              <nav className='hidden lg:flex items-center space-x-8 relative'>
                {navItems.map(item => (
                  <div key={item.label} className='relative group'>
                    {item.hasMegaMenu ? (
                      <Link
                        href={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className={getNavLinkClassName(item.href)}
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        {item.label}
                        <ChevronDown className='ml-1 h-4 w-4 transition-transform group-hover:rotate-180' />
                      </Link>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className={getNavLinkClassName(item.href)}
                      >
                        {item.label}
                        {item.hasDropdown && (
                          <ChevronDown className='ml-1 h-4 w-4 transition-transform group-hover:rotate-180' />
                        )}
                      </Link>
                    )}

                    {/* Mega Menu for Services */}
                    {item.hasMegaMenu && (
                      <div className='absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-200 z-50'>
                        <div className='w-[980px] bg-white shadow-2xl rounded-lg border border-gray-100'>
                          <div className='p-6'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
                              {servicesCategories.map((category, idx) => (
                                <div key={idx}>
                                  <h3 className='font-bold text-sm text-gray-900 uppercase tracking-wide pb-2 border-b border-gray-200'>
                                    {category.category}
                                  </h3>
                                  <ul className='mt-3 space-y-2'>
                                    {category.items.map(service => (
                                      <li key={service.href}>
                                        {isExternalUrl(service.href) ? (
                                          <a
                                            href={service.href}
                                            className='block text-sm text-gray-700 hover:text-red-600 transition-colors'
                                          >
                                            {service.label}
                                          </a>
                                        ) : (
                                          <Link
                                            href={service.href}
                                            onClick={() => handleNavigation(service.href)}
                                            className='block text-sm text-gray-700 hover:text-red-600 transition-colors'
                                          >
                                            {service.label}
                                          </Link>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>

                            <div className='mt-6 pt-6 border-t border-gray-200 flex items-center justify-between'>
                              <p className='text-sm text-gray-500'>
                                Can&apos;t find what you&apos;re looking for?
                              </p>
                              <Link
                                href='/contact-us'
                                onClick={() => handleNavigation('/contact-us')}
                                className='inline-block px-5 py-2 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-700 transition-colors'
                              >
                                Contact Us
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Dropdown Menu for About */}
                    {item.hasDropdown && (
                      <div className='absolute top-full left-0 mt-2 w-56 bg-white shadow-2xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 z-40'>
                        <div className='py-2'>
                          {aboutMenuItems.map((menuItem, idx) => (
                            <Link
                              key={idx}
                              href={menuItem.href}
                              onClick={() => handleNavigation(menuItem.href)}
                              className='group/item flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-200 font-medium'
                            >
                              <span>{menuItem.label}</span>
                              <ChevronRight className='h-4 w-4 opacity-0 group-hover/item:opacity-100 translate-x-[-8px] group-hover/item:translate-x-0 transition-all duration-200' />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Search Icon */}
              <button
                onClick={() => setSearchOpen(true)}
                className='hidden lg:flex p-2 hover:bg-gray-100 rounded-lg transition-colors'
                aria-label='Search'
                suppressHydrationWarning
              >
                <Search className='h-5 w-5 text-gray-700' />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className='lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className='h-6 w-6 text-gray-700' />
                ) : (
                  <Menu className='h-6 w-6 text-gray-700' />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className='lg:hidden px-4 pb-4 max-h-[calc(100vh-80px)] overflow-y-auto'>
            {/* Mobile Search Button */}
            <button
              onClick={() => {
                setSearchOpen(true)
                setMobileMenuOpen(false)
              }}
              className='w-full flex items-center gap-3 py-3 px-3 mb-3 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors'
            >
              <Search className='h-5 w-5 text-gray-700' />
              <span className='text-gray-700 font-medium'>Search</span>
            </button>

            <nav className='flex flex-col space-y-3'>
              {navItems.map(item => (
                <div key={item.label}>
                {(item.hasMegaMenu || item.hasDropdown) ? (
  <>
    <button
      onClick={() =>
        setOpenSubmenu(prev =>
          prev === item.label ? '' : item.label
        )
      }
      className={`w-full text-left py-2 px-3 rounded-md font-medium flex justify-between items-center ${
        isActive(item.href)
          ? 'text-red-600 bg-gray-100'
          : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
      }`}
    >
      {item.label}
      <ChevronDown
        className={`h-4 w-4 transition-transform duration-300 ${
          openSubmenu === item.label ? 'rotate-180' : ''
        }`}
      />
    </button>
    {openSubmenu === item.label && (
      <div className='mt-2 space-y-3'>
        {item.hasMegaMenu && servicesCategories.map((category, idx) => (
          <div key={idx} className='pl-4'>
            <h4 className='text-xs font-bold text-gray-500 uppercase tracking-wide mb-2'>
              {category.category}
            </h4>
            <div className='space-y-1'>
              {category.items.map(service => (
                isExternalUrl(service.href) ? (
                  <a
                    key={service.href}
                    href={service.href}
                    className='block py-2 px-3 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md'
                  >
                    {service.label}
                  </a>
                ) : (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => handleNavigation(service.href)}
                    className='block py-2 px-3 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md'
                  >
                    {service.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        ))}
        {item.hasDropdown && (
          <div className='pl-4 space-y-1'>
            {aboutMenuItems.map((menuItem, idx) => (
              <Link
                key={idx}
                href={menuItem.href}
                onClick={() => handleNavigation(menuItem.href)}
                className='block py-2 px-3 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md'
              >
                {menuItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    )}
  </>
) : (
                    <Link
                      href={item.href}
                      onClick={() => handleNavigation(item.href)}
                      className={`block py-2 px-3 rounded-md font-medium ${
                        isActive(item.href)
                          ? 'text-red-600 bg-gray-100'
                          : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}

        {/* Search Modal */}
        <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      </header>
    </>
  )
}

export default Header
