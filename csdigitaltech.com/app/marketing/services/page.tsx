'use client'

import Link from 'next/link'
import {
  Mail,
  Search,
  Target,
  TrendingUp,
  Video,
  type LucideIcon,
} from 'lucide-react'

type ServiceGroup = 'Ads' | 'Videos' | 'Social Media Management'

type ExploreService = {
  id: string
  title: string
  description: string
  href: string
  group: ServiceGroup
  icon: LucideIcon
  featured?: boolean
}

const exploreServices: ExploreService[] = [
  {
    id: 'meta-ads',
    title: 'Meta Ads Management',
    description: 'Facebook & Instagram campaign management, testing, and optimization.',
    href: '/marketing/meta-ads',
    group: 'Ads',
    icon: Target,
    featured: true,
  },
  {
    id: 'google-ads',
    title: 'Google Ads Management',
    description: 'Search and performance campaigns managed for qualified leads.',
    href: '/marketing/google-ads',
    group: 'Ads',
    icon: Search,
    featured: true,
  },
  {
    id: 'short-form-videos',
    title: 'Short-form Videos',
    description: 'Vertical videos built for Reels, TikTok, and Shorts.',
    href: '/marketing/videos',
    group: 'Videos',
    icon: Video,
    featured: false,
  },
  {
    id: 'instagram-growth',
    title: 'Instagram Growth',
    description: 'Targeted follower growth with compliant, engagement-led strategy.',
    href: '/marketing/instagram-growth',
    group: 'Social Media Management',
    icon: TrendingUp,
    featured: true,
  },
  {
    id: 'email-design',
    title: 'Email Design',
    description: 'Custom, responsive email templates for campaigns and automations.',
    href: '/marketing/email-design',
    group: 'Social Media Management',
    icon: Mail,
    featured: false,
  },
]

function ExploreServiceCard({ service }: { service: ExploreService }) {
  const Icon = service.icon
  return (
    <Link href={service.href} className="block group">
      <div
        className={[
          'h-full rounded-2xl border p-5 transition-all',
          'bg-white hover:shadow-md hover:border-[#DC2626]/40',
          service.featured ? 'bg-[#DC2626]/5' : 'bg-white',
        ].join(' ')}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div
              className={[
                'w-12 h-12 rounded-xl flex items-center justify-center',
                'transition-colors',
                'bg-[#DC2626]/10 text-[#DC2626] group-hover:bg-[#DC2626] group-hover:text-white',
              ].join(' ')}
            >
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">{service.title}</h3>
              <p className="text-xs text-[#6B7280] mt-1 leading-relaxed line-clamp-3">
                {service.description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </Link>
  )
}

export default function ServicesPage() {
  const groups: ServiceGroup[] = ['Ads', 'Videos', 'Social Media Management']
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Explore Other Services (moved to the top) */}
      <section className="pt-14 pb-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Explore Other Services</h1>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Quickly find what you need and jump straight to the service details—no endless scrolling.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {groups.map((group) => (
              <div key={group}>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{group}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {exploreServices
                    .filter((s) => s.group === group)
                    .map((service) => (
                      <ExploreServiceCard key={service.id} service={service} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
