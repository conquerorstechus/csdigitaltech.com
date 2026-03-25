'use client'

import { Mail, Phone } from 'lucide-react'
import { FiMapPin } from 'react-icons/fi'
import ContactForm from './ContactForm'
import { FaFlagUsa } from 'react-icons/fa'

export default function ContactUsClient() {
  const IndiaFlagIcon = ({ size = 24 }) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 512 512'
    >
      {/* Saffron */}
      <rect width='512' height='170.67' fill='#FF9933' />
      {/* White */}
      <rect y='170.67' width='512' height='170.67' fill='#FFFFFF' />
      {/* Green */}
      <rect y='341.33' width='512' height='170.67' fill='#138808' />
      {/* Blue Ashoka Chakra */}
      <circle
        cx='256'
        cy='256'
        r='43'
        fill='none'
        stroke='#000080'
        strokeWidth='4'
      />
      {[...Array(24)].map((_, i) => (
        <line
          key={i}
          x1='256'
          y1='256'
          x2={256 + 43 * Math.cos((i * 15 * Math.PI) / 180)}
          y2={256 + 43 * Math.sin((i * 15 * Math.PI) / 180)}
          stroke='#000080'
          strokeWidth='2'
        />
      ))}
    </svg>
  )

  const USAFlagIcon = ({ size = 24 }) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 7410 3900'
    >
      <rect width='7410' height='3900' fill='#b22234' />
      {[...Array(6)].map((_, i) => (
        <rect
          key={i}
          y={(i * 2 + 1) * 300}
          width='7410'
          height='300'
          fill='#fff'
        />
      ))}
      <rect width='2964' height='2100' fill='#3c3b6e' />
      {[...Array(9)].map((_, row) =>
        [...Array(row % 2 === 0 ? 6 : 5)].map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={(col + 0.5 + (row % 2 ? 0.5 : 0)) * (2964 / 6)}
            cy={(row + 0.5) * (2100 / 9)}
            r='90'
            fill='#fff'
          />
        ))
      )}
    </svg>
  )
  return (
    <main className='bg-gray-50'>
      {/* Header */}
      <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
        <div className='relative z-10'>
          <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wide'>
            {/* Get In Touch */}
            Reach Out to Us
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className='max-w-7xl mx-auto px-4 lg:py-20 py-10 grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-start justify-center'>
        {/* LEFT: Locations */}
        <div className='space-y-4'>
          {/* USA */}
          <div>
            <div className='flex items-center gap-2 text-green-600 font-semibold text-lg mb-2'>
              <div>
                <h2 className='text-xl text-gray-800'>Contact Us:</h2>
                <p className='text-base text-gray-700 font-medium leading-8 mt-2'>
                  Give us a call or drop by anytime, we endeavour to answer all
                  enquiries within 24 hours on business days. We will be happy
                  to answer your questions.
                </p>
              </div>

            </div>
            <div className='bg-white p-6 rounded-xl shadow-md text-gray-700 leading-relaxed'>
              <div className='flex items-center gap-3 mb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24"><g fill="none"><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd" /><path fill="#e31d1c" fill-rule="evenodd" d="M0 14.667v2h32v-2zm0 3.666v2h32v-2zm0-11v2h32v-2zM0 22v2h32v-2zm0-11v2h32v-2zM0 0v2h32V0zm0 3.667v2h32v-2z" clip-rule="evenodd" /><path fill="#2e42a5" d="M0 0h20v13H0z" /><path fill="#f7fcff" fill-rule="evenodd" d="m1.722 2.939l-.726.509l.245-.906l-.645-.574h.843l.282-.74l.331.74h.718l-.564.574l.218.906zm4 0l-.726.509l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zm3.274.509l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.842l.644.574zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zM.996 7.449l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74H.596l.645.574zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zm3.274.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.842l.644.574zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zM.996 11.449l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74H.596l.645.574zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zm3.274.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.842l.644.574zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zm3.274-7.49l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.843l.645.574zm.726 3.49l-.726.51l.245-.906l-.645-.574h.843l.282-.74l.331.74h.718l-.564.574l.218.906zm-.726 4.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.843l.645.574zM3.722 4.938l-.726.51l.245-.906l-.645-.574h.843l.282-.74l.331.74h.718l-.564.574l.218.906zm3.274.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.843l.645.574zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zm-8.726 4.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.843l.645.574zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zm3.274.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.842l.644.574zm4.726-4.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zm-.726 4.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.842l.644.574z" clip-rule="evenodd" /></g></svg>
                <span className='font-semibold text-lg text-gray-800'>
                  USA Location
                </span>
              </div>
              <p>
                19046 Bruce B. Downs Blvd. #1376,
                <br />
                Tampa, Florida 33647,

                United States.
              </p>
              <p className='mt-2'>
                <span className='font-semibold'>Tel:</span> +1 (813) 563-0060
              </p>
              <p className='mt-2'>
                <span className='font-semibold'>Mail:</span>{' '}
                info@conquerorstech.com
              </p>
              <p className="font-medium text-gray-600 border rounded-lg px-3 bg-gray-50 mt-3 w-fit">
                Conquerors Software Technologies LLC.
              </p>
            </div>
          </div>

          {/* GCC India */}
          <div>
            <div className="bg-white p-6 rounded-xl shadow-md text-gray-700 leading-relaxed">
              {/* Heading */}
              <div className="flex items-center gap-3 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24"><g fill="none"><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd" /><mask id="SVGTrazyc7b" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd" /></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#SVGTrazyc7b)"><path fill="#ff8c1a" d="M0 0v8h32V0z" /><path fill="#5eaa22" d="M0 16v8h32v-8z" /><path fill="#3d58db" d="M12 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0m7 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0" /><path fill="#3d58db" d="m15.995 12.86l-.571 3.121l.331-3.155l-1.427 2.834l1.207-2.934l-2.167 2.316l1.984-2.474l-2.732 1.612l2.602-1.816l-3.076.777l3.007-1.009l-3.17-.121l3.17-.12l-3.007-1.01l3.076.777l-2.602-1.815l2.732 1.612l-1.984-2.475l2.167 2.316l-1.207-2.934l1.427 2.834l-.331-3.155l.57 3.12l.571-3.12l-.331 3.155l1.427-2.834l-1.207 2.934L18.62 8.98l-1.984 2.475l2.732-1.612l-2.602 1.815l3.076-.777l-3.008 1.01l3.17.12l-3.17.121l3.008 1.01l-3.076-.778l2.602 1.816l-2.732-1.612l1.984 2.474l-2.167-2.316l1.207 2.934l-1.427-2.834l.331 3.155z" /></g></g></svg>
                <span className="font-semibold text-lg text-gray-800">India Location</span>
              </div>

              {/* Address */}
              <p className="mb-4">
                No.#16, Triveni Building, Silicon Valley,
                <br />
                Madhapur, Hitech City, Near Cyber Towers,
                <br />
                Hyderabad, Telangana – 500081.
              </p>

              {/* GST & CIN */}
              <div className="border rounded-lg p-3 bg-gray-50 mb-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">GSTIN:</span>
                  <span className="text-gray-600">36AAGCC1702L1ZT</span>
                </div>
                <div className="border-t mt-2 pt-2 flex justify-between items-center">
                  <span className="font-semibold text-gray-800">CIN:</span>
                  <span className="text-gray-600">U72300TG2015PTC100449</span>
                </div>
              </div>

              {/* Company Name */}
              <p className="font-medium text-gray-600 border rounded-lg px-3 bg-gray-50 w-fit">
                Conquerors Software Technologies Pvt. Ltd.
              </p>

            </div>
          </div>
        </div>

        {/* RIGHT: Contact Info */}
        <div className=' space-y-10'>
          {/* Email */}

          <ContactForm />
        </div>
      </section>

      <div className='w-full h-[500px]'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.0115134649814!2d-82.35470389999999!3d28.146137699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b71704660979%3A0x3a5c17202490ef7a!2sConquerors%20Software%20Technologies%20LLC!5e0!3m2!1sen!2sin!4v1770186709946!5m2!1sen!2sin'
          width='100%'
          height='100%'
          allowFullScreen={true}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='border-0 w-full h-full'
        ></iframe>
      </div>
    </main>


  )
}
