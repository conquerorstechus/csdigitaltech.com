'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='relative bg-[#262051] text-white pt-16 pb-8 overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 opacity-50'>
        <Image
          src='/bg-footer1.webp'
          alt='Footer Background'
          title='Conquerors Technologies footer background pattern'
          fill
          className='object-cover'
          priority={false}
        />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-1 md:gap-8'>
          {/* Left Section - Company Information & Address - Full width on mobile */}
          <div className='col-span-2 md:col-span-1 space-y-5 md:space-y-6'>
            {/* Logo */}
            <div className='flex items-center space-x-3'>
              <Link href='/'>
                <Image
                  src='/covenant-logo-footer.png'
                  alt='Covenant Software Solutions logo'
                  title='Covenant Software Solutions — Digital Growth'
                  width={320}
                  height={80}
                  className='w-56 md:w-64 h-auto object-contain'
                />
              </Link>
            </div>

            {/* Address */}
            <div className='flex items-start'>
              <p className='text-sm md:text-base font-medium text-white leading-relaxed md:leading-8 max-w-sm md:max-w-none'>
                19046 Bruce B. Downs Blvd. # 1376, Tampa, Florida 33647, United
                States.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className='flex items-center space-x-3 md:space-x-4'>
              {[
                { icon: <FaFacebookF />, href: 'https://www.facebook.com/ConquerorsSoftwareTechnologiesPvtLimited/', label: 'Facebook' },
                { icon: <FaXTwitter />, href: 'https://x.com/ConquerorsTech', label: 'Twitter' },
                { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/company/conquerorssoftwaretechnologies', label: 'LinkedIn' },
                { icon: <FaInstagram />, href: 'https://www.instagram.com/conquerorstechnologies/', label: 'Instagram' },
                { icon: <FaPinterestP />, href: 'https://www.pinterest.com/conquerorstech/', label: 'Pinterest' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Visit Conquerors Technologies on ${social.label}`}
                  className='w-9 h-9 md:w-10 md:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors'
                >
                  <span className='text-white text-base md:text-lg'>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Middle Section - Company Navigation - Side by side on mobile */}
          <div className='col-span-1 space-y-4 md:space-y-6'>
            <div>
              <h3 className='text-xl md:text-2xl font-bold text-white mb-2 md:mb-3'>Company</h3>
              <div className='w-10 md:w-12 h-0.5 bg-white'></div>
            </div>

            <ul className='space-y-3 md:space-y-4'>
              {[
                { name: 'About Us', href: '/about-us' },
                { name: 'Our Services', href: '/services' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Blogs', href: '/blog' },
                { name: 'Contact Us', href: '/contact-us' }
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className='flex items-center space-x-3 md:space-x-6 text-white hover:text-blue-300 transition-colors'
                  >
                    <svg
                      className='w-2 h-2 md:w-3 md:h-3 fill-white shrink-0'
                      viewBox='0 0 6 10'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M0 0L6 5L0 10V0Z' />
                    </svg>
                    <span className='text-sm md:text-base font-semibold'>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Contact Information - Side by side on mobile */}
          <div className='col-span-1 space-y-4 md:space-y-6'>
            <div>
              <h3 className='text-xl md:text-2xl font-bold text-white mb-2 md:mb-3'>Contact Us</h3>
              <div className='w-10 md:w-12 h-0.5 bg-white'></div>
            </div>

            <div className='space-y-4'>
              <div className='flex items-start space-x-2 md:space-x-3'>
                <Phone className='w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0 mt-1' />
                <a
                  href='tel:+18135630060'
                  className='text-sm md:text-base font-semibold text-white hover:underline leading-tight'
                >
                  +1 (813) 563-0060
                </a>
              </div>
              <div className='flex items-start space-x-2 md:space-x-3'>
                <Mail className='w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0 mt-1' />
                <a
                  href='mailto:info@conquerorstech.net'
                  className='text-sm md:text-base font-semibold text-white break-words overflow-hidden leading-tight'
                >
                  info@conquerorstech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Privacy */}
        <div className='border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <Link href='/privacy-policy' className='text-sm text-white'>Privacy Policy</Link>
          <div className='text-sm text-white mt-4 md:mt-0'>
            {/* © 2010–2025 All Rights Reserved. Powered by Conquerors Software Technologies LLC (USA) & Conquerors Software Technologies Pvt. Ltd. (USA). */}
            © 2010–2026 All Rights Reserved. Powered by Conquerors Software Technologies LLC.

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
