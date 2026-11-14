'use client'

import Link from 'next/link'
import { AllServicesSection } from '@/components/marketing/pricing/service-cards-grid'
import { Video, Users, ChevronRight } from 'lucide-react'

export default function VideosPage() {
  const videoServices = [
    {
      id: 'short-form',
      title: 'Videos',
      description: 'Professional short-form content for TikTok, Instagram Reels, and YouTube Shorts',
      icon: Video,
      href: '/marketing/services/videos/short-form-videos',
    },
    {
      id: 'ugc',
      title: 'UGC Videos',
      description: 'High-quality user-generated content created by vetted content creators',
      icon: Users,
      href: '/marketing/services/videos/ugc-videos',
    },
  ]

  return (
    <main className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <nav className="pt-14 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm mb-8">
          <Link href="/marketing/services" className="text-[#6B7280] hover:text-gray-900">
            Services
          </Link>
          <ChevronRight className="w-4 h-4 text-[#6B7280]" />
          <span className="text-gray-900 font-medium">Videos</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Video Services
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Professional video content creation for all your social media needs
          </p>
        </div>
      </section>

      {/* Video Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videoServices.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.id} href={service.href}>
                  <div className="group h-full p-8 border border-gray-200 rounded-xl hover:border-[#DC2626] hover:shadow-lg transition-all bg-white cursor-pointer">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#DC2626]/10 flex items-center justify-center group-hover:bg-[#DC2626] transition-colors">
                        <Icon className="w-6 h-6 text-[#DC2626] group-hover:text-white transition-colors" />
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#6B7280] group-hover:text-[#DC2626] transition-colors transform group-hover:translate-x-1" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#DC2626] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#6B7280] group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <AllServicesSection />

    </main>
  )
}
