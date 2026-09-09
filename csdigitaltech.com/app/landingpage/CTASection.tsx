'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CTASection () {
  return (
    <section className='relative overflow-hidden'>
      {/* Background Image with Overlay */}
      <div
        className='relative min-h-[200px] bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url('/ctabg.jpg')`
        }}
      >
        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-300/20 to-blue-200/20'></div>

        {/* Content */}
        <div className='relative z-10 container mx-auto px-4 py-16'>
          <div className='flex flex-col lg:flex-row items-start justify-between min-h-[150px]'>
  {/* Text Content */}
  <div className='text-center lg:text-left mb-8 lg:mb-0 lg:flex-1'>
    <p className='text-lg md:text-xl text-gray-800 font-medium mb-4'>
      We Create Or Customize Product As Per Your Needs
    </p>
    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
      Let's discuss your business requirements
    </h2>
  </div>

  {/* CTA Button */}
  <div className='flex justify-center lg:justify-end w-full lg:w-auto'>
    <Link
      href='/contact-us'
      className='bg-blue-400 hover:bg-blue-500 h-auto text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
    >
      CONTACT US
    </Link>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}
