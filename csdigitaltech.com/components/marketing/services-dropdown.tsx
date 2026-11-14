'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Share2,
  Video,
  ImageIcon,
  Zap,
  BarChart3,
  Users,
  FileText,
  Link2,
  SearchCheck,
  TrendingUp,
  Mail,
  PieChart,
  ChevronRight,
} from 'lucide-react'

const serviceMenu = [
  {
    category: 'Ads',
    icon: BarChart3,
    items: [
      /* Temporarily disabled for future use
        { name: 'Static Ads', icon: ImageIcon, description: 'Professional ad creatives', link: '/marketing/static-ads' },
        { name: 'Video Ads', icon: Video, description: 'Engaging video advertisements', link: '/marketing/video-ads' },
      */
      { name: 'Meta Ads Management', icon: Share2, description: 'Facebook & Instagram ads', link: '/marketing/meta-ads' },
      { name: 'Google Ads Management', icon: PieChart, description: 'Google Ads optimization', link: '/marketing/google-ads' },
    ]
  },
  {
    category: 'SEO',
    link: '/marketing/seo',
    icon: SearchCheck,
    standalone: true,
  },
  {
    category: 'Videos',
    icon: Video,
    items: [
      { name: 'Videos', icon: Video, description: 'TikTok, Reels, Shorts content', link: '/marketing/videos' },
    
    ]
  },
  {
    category: 'Social Media Management',
    icon: Share2,
    items: [
      { name: 'Instagram Growth', icon: TrendingUp, description: 'Followers & engagement boost', link: '/marketing/instagram-growth' },
      { name: 'Email Design', icon: Mail, description: 'Professional email templates', link: '/marketing/email-design' },
    ]
  },
]

export function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-[#6B7280] hover:text-gray-900 transition-colors py-2"
      >
        <span>Services</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 py-2 px-2">
          <div className="space-y-1">
            {serviceMenu.map((menu) => {
              const MenuIcon = menu.icon
              
              if (menu.standalone) {
                return (
                  <Link
                    key={menu.category}
                    href={menu.link || '#'}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group/item w-full"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#DC2626]">
                        <MenuIcon className="w-5 h-5 text-[#DC2626] group-hover/item:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover/item:text-[#DC2626]">
                          {menu.category}
                        </p>
                      </div>
                    </div>
                  </Link>
                )
              }

              const isExpanded = expandedCategory === menu.category

              return (
                <div key={menu.category}>
                  <button
                    onClick={() => setExpandedCategory(isExpanded ? null : menu.category)}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group/item w-full"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#DC2626]">
                        <MenuIcon className="w-5 h-5 text-[#DC2626] group-hover/item:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover/item:text-[#DC2626]">
                          {menu.category}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-[#6B7280] transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>

                  {/* Submenu */}
                  {isExpanded && menu.items && (
                    <div className="pl-4 space-y-1">
                      {menu.items.map((item) => {
                        const ItemIcon = item.icon
                        return (
                          <Link
                            key={item.name}
                            href={item.link || '#'}
                            onClick={() => setIsOpen(false)}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/subitem"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover/subitem:bg-[#DC2626]">
                              <ItemIcon className="w-4 h-4 text-[#DC2626] group-hover/subitem:text-white transition-colors" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900 group-hover/subitem:text-[#DC2626]">
                                {item.name}
                              </p>
                              <p className="text-xs text-[#6B7280]">{item.description}</p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Close when clicking outside */}
          <div
            className="fixed inset-0 -z-10"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  )
}
