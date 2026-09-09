'use client'

import React from 'react'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

export default function CTANewSection() {
  return (
    <section className='relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#FFBB1B] via-[#FFC947] to-[#FFBB1B] overflow-hidden'>
      {/* Decorative Background Elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-6xl mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
          {/* Text Content */}
          <div className='text-center lg:text-left flex-1'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight'>
              Let's Discuss Your Business Requirements
            </h2>
            <p className='text-lg sm:text-xl text-gray-800 leading-relaxed max-w-2xl'>
              We create or customize products as per your needs. Partner with us to bring your vision to life.
            </p>
          </div>

          {/* CTA Button */}
          <div className='flex-shrink-0'>
            <Link
              href='/contact-us'
              className='group inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-800'
            >
              <span>Get Started Today</span>
              <FaChevronRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

