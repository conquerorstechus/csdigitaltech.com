'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, ChevronRight, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useNavigation } from '@/hooks/useNavigation'
import SearchModal from './SearchModal'

const servicesCategories = [
  {
    category: 'AI Services',
    items: [
      { label: 'AI & IT Consulting', href: '/services/it-consulting-in-Florida' },
      { label: 'AI & ML Services', href: '/services/ai-ml-services-in-Florida' },
      { label: 'Custom LLMs', href: '/services/custom-llms-in-Florida' },
      { label: 'AI Learning Solutions', href: '/services/ai-learning-in-Florida' },
      { label: 'AI-Powered MMRAG Services', href: '/ai-powered-mmrag-services-florida' }
    ]
  },
  {
    category: 'Data Services',
    items: [
      { label: 'Data Analytics & BI', href: '/services/data-analytics-bi-in-Florida' },
      { label: 'Data Science', href: '/services/data-science' }
    ]
  },
  {
    category: 'Development & Cloud',
    items: [
      { label: 'Software Development', href: '/services/software-development-in-florida' },
      { label: 'Digital & Cloud Solutions', href: '/services/digital-cloud-solutions-in-Florida' },
      { label: 'Cloud Services', href: '/services/cloud-services-in-Florida' }
    ]
  },
  {
    category: 'Quality & Marketing',
    items: [
      { label: 'QA / Testing Services', href: '/services/testing-services-in-Florida' },
      { label: 'Digital Marketing', href: '/services/branding-agency' }
    ]
  }
]

const aboutMenuItems = [
  { label: 'About Conquerors', href: '/about-us' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Office gallery', href: '/office-gallery' }
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
          <div className='flex justify-between items-center h-20'>
            {/* Logo */}
            <Link href='/' onClick={() => handleNavigation('/')}>
              <Image
                src='/covenant-logo.png'
                title='Covenant Software Solutions — Digital Growth'
                alt='Covenant Software Solutions logo'
                width={320}
                height={80}
                priority
                className='w-56 sm:w-64 h-auto object-contain'
              />
            </Link>

            {/* Desktop Navigation */}
            <div className='flex items-center gap-4'>
              <nav className='hidden lg:flex items-center space-x-8 relative'>
                {navItems.map(item => (
                  <div key={item.label} className='relative group'>
                    <Link
                      href={item.href}
                      onClick={() => handleNavigation(item.href)}
                      className={getNavLinkClassName(item.href)}
                    >
                      {item.label}
                      {(item.hasMegaMenu || item.hasDropdown) && (
                        <ChevronDown className='ml-1 h-4 w-4 transition-transform group-hover:rotate-180' />
                      )}
                    </Link>

                    {/* Mega Menu for Services */}
                    {item.hasMegaMenu && (
                      <div className='absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white shadow-2xl rounded-lg opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-300 border border-gray-100 z-40'>
                        <div className='p-6'>
                          <div className='grid grid-cols-4 gap-6'>
                            {servicesCategories.map((category, idx) => (
                              <div key={idx} className='space-y-3'>
                                <h3 className='font-bold text-sm text-gray-900 uppercase tracking-wide pb-2 border-b border-gray-200'>
                                  {category.category}
                                </h3>
                                <div className='space-y-2'>
                                  {category.items.map(service => (
                                    <Link
                                      key={service.href}
                                      href={service.href}
                                      onClick={() => handleNavigation(service.href)}
                                      className='group/item flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md transition-all duration-200 font-medium'
                                    >
                                      <span>{service.label}</span>
                                      <ChevronRight className='h-4 w-4 opacity-0 group-hover/item:opacity-100 translate-x-[-8px] group-hover/item:translate-x-0 transition-all duration-200' />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Bottom CTA */}
                          <div className='mt-6 pt-6 border-t border-gray-200'>
                            <div className='flex items-center justify-between'>
                              <p className='text-sm text-gray-600'>
                                Can't find what you're looking for?
                              </p>
                              <Link
                                href='/contact-us'
                                onClick={() => handleNavigation('/contact-us')}
                                className='inline-block px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-700 transition-colors'
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
      onClick={() => {
        handleNavigation(item.href)
        setOpenSubmenu(prev =>
          prev === item.label ? '' : item.label
        )
      }}
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
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => handleNavigation(service.href)}
                  className='block py-2 px-3 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md'
                >
                  {service.label}
                </Link>
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
