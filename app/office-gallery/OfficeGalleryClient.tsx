'use client'

import { useState } from 'react'
import Image from 'next/image'
import { 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight,
  FaTh,
  FaDesktop,
  FaUsers,
  FaCalendarAlt,
  FaBuilding,
  FaDoorOpen
} from 'react-icons/fa'

export default function OfficeGalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = [
    { name: 'All', icon: FaTh },
    { name: 'Workspace', icon: FaDesktop },
    { name: 'Team', icon: FaUsers },
    { name: 'Events', icon: FaCalendarAlt },
    { name: 'Office Space', icon: FaBuilding },
    { name: 'Meeting Rooms', icon: FaDoorOpen }
  ]

  // Gallery images from /Gallery/ folder
  // Size: 'small', 'medium', 'large', 'wide', 'tall'
  const galleryImages = [
    {
      id: 1,
      src: '/Gallery/gallery1.webp',
      alt: 'Office Workspace',
      category: 'Workspace',
      title: 'Modern Workspace',
      size: 'large'
    },
    {
      id: 2,
      src: '/Gallery/gallery2.webp',
      alt: 'Team Collaboration',
      category: 'Team',
      title: 'Team Collaboration Area',
      size: 'medium'
    },
    {
      id: 3,
      src: '/Gallery/gallery4.webp',
      alt: 'Office Space',
      category: 'Office Space',
      title: 'Open Office Layout',
      size: 'tall'
    },
    {
      id: 4,
      src: '/Gallery/gallery6.webp',
      alt: 'Company Event',
      category: 'Events',
      title: 'Company Gathering',
      size: 'wide'
    },
    {
      id: 5,
      src: '/Gallery/gallery7.webp',
      alt: 'Meeting Room',
      category: 'Meeting Rooms',
      title: 'Conference Room',
      size: 'small'
    },
    {
      id: 6,
      src: '/Gallery/gallery8.webp',
      alt: 'Creative Space',
      category: 'Workspace',
      title: 'Creative Workspace',
      size: 'medium'
    },
    {
      id: 7,
      src: '/Gallery/gallery9.webp',
      alt: 'Team Meeting',
      category: 'Team',
      title: 'Team Meeting',
      size: 'large'
    },
    {
      id: 8,
      src: '/Gallery/gallery10.webp',
      alt: 'Office Design',
      category: 'Office Space',
      title: 'Modern Office Design',
      size: 'small'
    },
    {
      id: 9,
      src: '/Gallery/gallery11.webp',
      alt: 'Company Event',
      category: 'Events',
      title: 'Team Event',
      size: 'tall'
    },
    {
      id: 10,
      src: '/Gallery/gallery13.webp',
      alt: 'Collaboration Space',
      category: 'Workspace',
      title: 'Collaboration Zone',
      size: 'wide'
    },
    {
      id: 11,
      src: '/Gallery/gallery14.webp',
      alt: 'Office Lounge',
      category: 'Office Space',
      title: 'Relaxation Area',
      size: 'medium'
    },
    {
      id: 12,
      src: '/Gallery/gallery15.webp',
      alt: 'Team Building',
      category: 'Team',
      title: 'Team Building Activity',
      size: 'large'
    },
    {
      id: 13,
      src: '/Gallery/gallery16.webp',
      alt: 'Office Environment',
      category: 'Workspace',
      title: 'Productive Environment',
      size: 'medium'
    },
    {
      id: 14,
      src: '/Gallery/gallery17.webp',
      alt: 'Team Space',
      category: 'Team',
      title: 'Team Workspace',
      size: 'small'
    },
    {
      id: 15,
      src: '/Gallery/gallery18.webp',
      alt: 'Office Area',
      category: 'Office Space',
      title: 'Modern Office Area',
      size: 'tall'
    },
    {
      id: 16,
      src: '/Gallery/gallery19.webp',
      alt: 'Company Celebration',
      category: 'Events',
      title: 'Company Celebration',
      size: 'wide'
    },
    {
      id: 17,
      src: '/Gallery/gallery20.webp',
      alt: 'Work Space',
      category: 'Workspace',
      title: 'Professional Workspace',
      size: 'large'
    },
    {
      id: 18,
      src: '/Gallery/gallery21.webp',
      alt: 'Team Collaboration',
      category: 'Team',
      title: 'Collaborative Team',
      size: 'medium'
    },
    {
      id: 19,
      src: '/Gallery/gallery22.webp',
      alt: 'Office Interior',
      category: 'Office Space',
      title: 'Beautiful Interior',
      size: 'small'
    },
    {
      id: 20,
      src: '/Gallery/gallery23.webp',
      alt: 'Team Activity',
      category: 'Team',
      title: 'Team Activity',
      size: 'tall'
    },
    {
      id: 21,
      src: '/Gallery/gallery24.webp',
      alt: 'Office Design',
      category: 'Office Space',
      title: 'Elegant Design',
      size: 'wide'
    },
    {
      id: 22,
      src: '/Gallery/gallery25.webp',
      alt: 'Workspace',
      category: 'Workspace',
      title: 'Innovative Workspace',
      size: 'large'
    },
    {
      id: 23,
      src: '/Gallery/gallery26.webp',
      alt: 'Team Meeting',
      category: 'Meeting Rooms',
      title: 'Board Room',
      size: 'medium'
    },
    {
      id: 24,
      src: '/Gallery/gallery27.webp',
      alt: 'Office Space',
      category: 'Office Space',
      title: 'Spacious Office',
      size: 'small'
    },
    {
      id: 25,
      src: '/Gallery/gallery28.webp',
      alt: 'Team Event',
      category: 'Events',
      title: 'Annual Event',
      size: 'tall'
    },
    {
      id: 26,
      src: '/Gallery/gallery29.webp',
      alt: 'Workspace Design',
      category: 'Workspace',
      title: 'Modern Design',
      size: 'wide'
    },
    {
      id: 27,
      src: '/Gallery/gallery30.webp',
      alt: 'Team Collaboration',
      category: 'Team',
      title: 'Team Collaboration',
      size: 'large'
    },
    {
      id: 28,
      src: '/Gallery/gallery31.webp',
      alt: 'Office Environment',
      category: 'Office Space',
      title: 'Work Environment',
      size: 'medium'
    },
    {
      id: 29,
      src: '/Gallery/gallery32.webp',
      alt: 'Company Space',
      category: 'Workspace',
      title: 'Company Space',
      size: 'small'
    },
    {
      id: 30,
      src: '/Gallery/gallery33.webp',
      alt: 'Office View',
      category: 'Office Space',
      title: 'Office View',
      size: 'tall'
    },
    {
      id: 31,
      src: '/Gallery/gallery34.webp',
      alt: 'Team Workspace',
      category: 'Team',
      title: 'Team Workspace',
      size: 'wide'
    },
    {
      id: 32,
      src: '/Gallery/1.webp',
      alt: 'Office Gallery',
      category: 'Office Space',
      title: 'Gallery View',
      size: 'large'
    }
  ]

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const getCurrentImageIndex = () => {
    if (selectedImage === null) return -1
    return filteredImages.findIndex((img) => img.id === selectedImage)
  }

  const currentImageIndex = getCurrentImageIndex()
  const currentImage = currentImageIndex >= 0 ? filteredImages[currentImageIndex] : null

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length
    } else {
      newIndex = currentIndex - 1 < 0 ? filteredImages.length - 1 : currentIndex - 1
    }
    
    setSelectedImage(filteredImages[newIndex].id)
  }

  return (
    <main className='bg-gray-50'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-[#211f3b] via-[#2a2750] to-[#211f3b] py-12 lg:py-16 overflow-hidden'>
        <div className='absolute top-0 left-0 w-32 md:w-48 lg:w-64 opacity-20'>
          <Image
            src='/Digitalcloud/bg-art-5.webp'
            alt='Background decoration'
            width={256}
            height={256}
            className='w-full h-auto'
          />
        </div>
        <div className='absolute bottom-0 right-0 w-32 md:w-48 lg:w-64 opacity-20'>
          <Image
            src='/Digitalcloud/bg-art-5.webp'
            alt='Background decoration'
            width={256}
            height={256}
            className='w-full h-auto'
          />
        </div>

        <div className='max-w-7xl mx-auto px-4 relative z-10'>
          <div className='text-center text-white'>
            <p className='text-sm uppercase tracking-wider text-gray-300 mb-3 font-medium'>
              Our Office
            </p>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight'>
              Office Gallery
            </h1>
            <p className='text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Take a virtual tour of our modern workspace and discover where innovation and
              creativity come together
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className='py-12 lg:py-16 bg-white relative'>
        {/* Filter Buttons - Fixed Right Side Outside Container */}
        <div className='hidden lg:flex fixed right-4 bottom-24 z-30 flex-col gap-2'>
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = selectedCategory === category.name
            return (
              <div
                key={category.name}
                className='group relative'
              >
                <button
                  onClick={() => {
                    setSelectedCategory(category.name)
                    setSelectedImage(null)
                  }}
                  className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 transform shadow-lg ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white scale-110 ring-2 ring-red-300'
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-red-600 hover:shadow-xl border border-gray-200 hover:scale-105'
                  }`}
                  aria-label={category.name}
                >
                  <Icon size={18} />
                </button>
                {/* Tooltip on the left */}
                <div className='absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none whitespace-nowrap'>
                  <div className='bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg'>
                    {category.name}
                    <div className='absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900'></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile Filter Buttons */}
        <div className='lg:hidden flex flex-row justify-center gap-2 mb-8 px-4'>
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = selectedCategory === category.name
            return (
              <button
                key={category.name}
                onClick={() => {
                  setSelectedCategory(category.name)
                  setSelectedImage(null)
                }}
                className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 transform shadow-lg ${
                  isActive
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white scale-110 ring-2 ring-red-300'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-red-600 shadow-md border border-gray-200 hover:scale-105'
                }`}
                title={category.name}
                aria-label={category.name}
              >
                <Icon size={18} />
              </button>
            )
          })}
        </div>

        <div className='max-w-7xl mx-auto px-4 lg:px-6'>
          {/* Flexible Masonry Gallery - No Fixed Dimensions */}
          <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 lg:gap-6'>
            {filteredImages.map((image) => {
              return (
                <div
                  key={image.id}
                  className='group relative break-inside-avoid mb-4 lg:mb-6 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer'
                  onClick={() => setSelectedImage(image.id)}
                >
                  {/* Image Container - Natural Size */}
                  <div className='relative w-full overflow-hidden bg-gray-50'>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className='w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ease-out'
                      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw'
                    />
                    
                    {/* Gradient Overlay - Bottom */}
                    <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'></div>
                    
                    {/* Category Badge - Top Right */}
                    {/* <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0 z-10 pointer-events-none'>
                      <span className='inline-flex items-center px-3 py-1.5 bg-white/95 backdrop-blur-md text-gray-900 text-xs font-bold uppercase tracking-wider rounded-lg shadow-xl border border-white/20'>
                        {image.category}
                      </span>
                    </div> */}

                    {/* Title Overlay - Bottom */}
                    <div className='absolute bottom-0 left-0 right-0 p-5 lg:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-10 pointer-events-none'>
                      <h3 className='text-lg lg:text-xl font-bold text-white mb-2 drop-shadow-lg'>
                        {image.title}
                      </h3>
                      <div className='flex items-center text-sm text-white/90'>
                        <span className='w-10 h-0.5 bg-red-400 mr-3'></span>
                        <span className='font-medium'>View Details</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Card - Always Visible */}
                  {/* <div className='p-4 lg:p-5 bg-white'>
                    <h3 className='text-base lg:text-lg font-semibold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300 line-clamp-2'>
                      {image.title}
                    </h3>
                    <div className='flex items-center text-xs lg:text-sm text-gray-500'>
                      <span className='inline-block w-6 h-0.5 bg-red-500 mr-2'></span>
                      <span className='font-medium'>{image.category}</span>
                    </div>
                  </div> */}

                  {/* Hover Glow Effect */}
                  <div className='absolute inset-0 rounded-2xl ring-2 ring-red-500/0 group-hover:ring-red-500/30 transition-all duration-500 pointer-events-none'></div>
                </div>
              )
            })}
          </div>

          {filteredImages.length === 0 && (
            <div className='text-center py-20'>
              <div className='inline-block p-4 bg-gray-100 rounded-full mb-4'>
                <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                </svg>
              </div>
              <p className='text-gray-500 text-lg font-medium'>No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className='fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4'
          style={{ animation: 'fadeIn 0.3s ease-out' }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className='relative max-w-6xl w-full max-h-[90vh]'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className='absolute top-4 right-4 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-red-600 transition-all duration-300 transform hover:scale-110 shadow-lg'
              aria-label='Close'
            >
              <FaTimes size={24} />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className='absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-red-600 transition-all duration-300 transform hover:scale-110 shadow-lg'
                  aria-label='Previous image'
                >
                  <FaChevronLeft size={20} />
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className='absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-800 hover:text-red-600 transition-all duration-300 transform hover:scale-110 shadow-lg'
                  aria-label='Next image'
                >
                  <FaChevronRight size={20} />
                </button>
              </>
            )}

            {/* Image */}
            <div className='relative w-full h-[80vh] bg-gray-900 rounded-lg overflow-hidden'>
              {currentImage && (
                <>
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    className='object-contain'
                    style={{ animation: 'scaleIn 0.3s ease-out' }}
                  />
                  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white'>
                    <h3 className='text-2xl font-bold mb-2'>{currentImage.title}</h3>
                    <p className='text-gray-300'>{currentImage.category}</p>
                    <p className='text-sm text-gray-400 mt-2'>
                      {currentImageIndex + 1} of {filteredImages.length}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

