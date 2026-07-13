'use client'

import ContactForm from './ContactForm'

export default function ContactUsClient() {
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
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24"><g fill="none"><path fill="#f7fcff" fillRule="evenodd" d="M0 0h32v24H0z" clipRule="evenodd" /><path fill="#e31d1c" fillRule="evenodd" d="M0 14.667v2h32v-2zm0 3.666v2h32v-2zm0-11v2h32v-2zM0 22v2h32v-2zm0-11v2h32v-2zM0 0v2h32V0zm0 3.667v2h32v-2z" clipRule="evenodd" /><path fill="#2e42a5" d="M0 0h20v13H0z" /><path fill="#f7fcff" fillRule="evenodd" d="m1.722 2.939l-.726.509l.245-.906l-.645-.574h.843l.282-.74l.331.74h.718l-.564.574l.218.906zm4 0l-.726.509l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zm3.274.509l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.842l.644.574zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zM.996 7.449l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74H.596l.645.574zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zm3.274.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.842l.644.574zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zM.996 11.449l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74H.596l.645.574zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zm3.274.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.842l.644.574zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zm3.274-7.49l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.843l.645.574zm.726 3.49l-.726.51l.245-.906l-.645-.574h.843l.282-.74l.331.74h.718l-.564.574l.218.906zm-.726 4.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.843l.645.574zM3.722 4.938l-.726.51l.245-.906l-.645-.574h.843l.282-.74l.331.74h.718l-.564.574l.218.906zm3.274.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.843l.645.574zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zm-8.726 4.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.843l.645.574zm4.726-.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zm3.274.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.842l.644.574zm4.726-4.51l-.726.51l.245-.906l-.644-.574h.842l.282-.74l.331.74h.718l-.564.574l.218.906zm-.726 4.51l.726-.51l.702.51l-.218-.906l.564-.574h-.718l-.331-.74l-.282.74h-.842l.644.574z" clipRule="evenodd" /></g></svg>
                <span className='font-semibold text-lg text-gray-800'>
                  USA Location
                </span>
              </div>
              <p className='font-semibold text-gray-800 mb-2'>
                Cornerstone Digital Technologies
              </p>
              <p>
                19046 Bruce B. Downs Blvd. #1376,
                <br />
                Tampa, Florida 33647,

                United States.
              </p>
              <p className='mt-2'>
                <span className='font-semibold'>Tel:</span> +1 908-922-1063
              </p>
              <p className='mt-2'>
                <span className='font-semibold'>Mail:</span>{' '}
                info@csdigitaltech.com
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

      <div className='relative w-full h-[500px]'>
        <div className='absolute top-4 left-4 z-10 max-w-sm rounded-lg bg-white p-4 shadow-lg border border-gray-200'>
          <p className='font-semibold text-gray-900 text-base'>
            Cornerstone Digital Technologies
          </p>
          <p className='text-sm text-gray-600 mt-1 leading-relaxed'>
            19046 Bruce B. Downs Blvd. #1376,
            <br />
            Tampa, Florida 33647, United States.
          </p>
          <a
            href='https://www.google.com/maps/search/?api=1&query=Cornerstone+Digital+Technologies,+19046+Bruce+B.+Downs+Blvd+%231376,+Tampa,+FL+33647,+USA'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block mt-2 text-sm font-medium text-blue-600 hover:text-blue-800'
          >
            View larger map
          </a>
        </div>
        <iframe
          src='https://maps.google.com/maps?q=Cornerstone+Digital+Technologies,+19046+Bruce+B.+Downs+Blvd+%231376,+Tampa,+FL+33647,+USA&hl=en&z=16&output=embed'
          title='Cornerstone Digital Technologies location'
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
