'use client'

import { useState, useEffect } from 'react'
// Using a custom top overlay instead of dialog/modal
import { Input } from '@/components/ui/input'
import { Search, FileText, Briefcase, Code, Cloud, Smartphone, Brain, Database, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

// Quick suggestions shown initially
const quickSuggestions = [
  { title: 'AI & ML Services', icon: Brain, type: 'category' },
  { title: 'Software Development', icon: Code, type: 'category' },
  { title: 'Data Analytics', icon: Database, type: 'category' },
  { title: 'Cloud Services', icon: Cloud, type: 'category' },
  { title: 'Mobile App Development', icon: Smartphone, type: 'category' },
]

// Complete website search data
const searchData = [
  // AI & ML Services
  { title: 'AI & IT Consulting', href: '/services/it-consulting-in-Florida', type: 'service', keywords: ['ai', 'artificial intelligence', 'consulting', 'it'] },
  { title: 'AI & ML Services', href: '/services/ai-ml-services-in-Florida', type: 'service', keywords: ['ai', 'ml', 'machine learning', 'artificial intelligence'] },
  { title: 'Custom LLMs', href: '/services/custom-llms-in-Florida', type: 'service', keywords: ['llm', 'language model', 'ai', 'gpt', 'chatbot'] },
  { title: 'AI Learning Solutions', href: '/services/ai-learning-in-Florida', type: 'service', keywords: ['ai', 'learning', 'education', 'training'] },
  { title: 'AI-Powered MMRAG Services', href: '/ai-powered-mmrag-services-florida', type: 'service', keywords: ['ai', 'mmrag', 'rag', 'retrieval'] },
  
  // Data Services
  { title: 'Data Analytics & BI', href: '/services/data-analytics-bi-in-Florida', type: 'service', keywords: ['data', 'analytics', 'bi', 'business intelligence', 'reporting'] },
  { title: 'Data Science', href: '/services/data-science', type: 'service', keywords: ['data', 'science', 'analytics', 'statistics', 'ml'] },
  { title: 'Data Science Services Florida', href: '/data-science-services-florida', type: 'service', keywords: ['data', 'science', 'analytics', 'florida'] },
  { title: 'Business Intelligence', href: '/business-intelligence', type: 'service', keywords: ['bi', 'business intelligence', 'data', 'analytics', 'reporting'] },
  { title: 'Business Intelligence Development Florida', href: '/business-intelligence-development-company-in-florida', type: 'service', keywords: ['bi', 'business intelligence', 'florida'] },
  
  // Software Development
  { title: 'Software Development', href: '/services/software-development-in-florida', type: 'service', keywords: ['software', 'development', 'custom', 'application'] },
  { title: 'Custom Software Development Florida', href: '/custom-software-development-company-in-florida', type: 'service', keywords: ['custom', 'software', 'development', 'florida'] },
  { title: 'Fullstack Development Florida', href: '/fullstack-development-company-florida', type: 'service', keywords: ['fullstack', 'full stack', 'development', 'web', 'backend', 'frontend'] },
  { title: 'Microservices Development Florida', href: '/microservices-development-company-in-florida', type: 'service', keywords: ['microservices', 'architecture', 'api', 'cloud'] },
  
  // Cloud Services
  { title: 'Digital & Cloud Solutions', href: '/services/digital-cloud-solutions-in-Florida', type: 'service', keywords: ['cloud', 'digital', 'solutions', 'aws', 'azure'] },
  { title: 'Cloud Services', href: '/services/cloud-services-in-Florida', type: 'service', keywords: ['cloud', 'aws', 'azure', 'gcp', 'hosting'] },
  { title: 'Cloud Development Company Florida', href: '/cloud-development-company-in-florida', type: 'service', keywords: ['cloud', 'development', 'florida', 'aws', 'azure'] },
  { title: 'DevOps Development Florida', href: '/devops-development-company-in-florida', type: 'service', keywords: ['devops', 'ci/cd', 'automation', 'deployment'] },
  
  // Mobile Development
  { title: 'Mobile App Development', href: '/mobile-app-development', type: 'service', keywords: ['mobile', 'app', 'ios', 'android', 'application'] },
  { title: 'iOS App Development Florida', href: '/ios-app-development-florida', type: 'service', keywords: ['ios', 'iphone', 'ipad', 'apple', 'mobile'] },
  { title: 'Android App Development Florida', href: '/android-app-development-florida', type: 'service', keywords: ['android', 'mobile', 'app', 'google'] },
  { title: 'Flutter App Development Florida', href: '/flutter-app-development-company-in-florida', type: 'service', keywords: ['flutter', 'mobile', 'cross-platform', 'app'] },
  { title: 'React Native Application Development Florida', href: '/react-native-application-development-company-in-florida', type: 'service', keywords: ['react native', 'mobile', 'cross-platform', 'app'] },
  { title: 'Ionic Application Development Florida', href: '/ionic-application-development-company-in-florida', type: 'service', keywords: ['ionic', 'mobile', 'hybrid', 'app'] },
  
  // Web Development
  { title: 'Web Design', href: '/web-design', type: 'service', keywords: ['web', 'design', 'ui', 'ux', 'website'] },
  { title: 'Web Development', href: '/web-development', type: 'service', keywords: ['web', 'development', 'website', 'application'] },
  { title: 'HTML5 Development Florida', href: '/html5-development-company-in-florida', type: 'service', keywords: ['html5', 'web', 'development', 'frontend'] },
  { title: 'Progressive Web Application Development Florida', href: '/progressive-web-application-development-company-in-florida', type: 'service', keywords: ['pwa', 'progressive', 'web', 'app'] },
  
  // CMS & Frameworks
  { title: 'WordPress Development Company', href: '/wordpress-development-company', type: 'service', keywords: ['wordpress', 'cms', 'website', 'blog'] },
  { title: 'Drupal Development Florida', href: '/drupal-development-company-in-florida', type: 'service', keywords: ['drupal', 'cms', 'web', 'development'] },
  { title: 'Laravel Development Florida', href: '/laravel-development-company-in-florida', type: 'service', keywords: ['laravel', 'php', 'framework', 'web'] },
  { title: 'Content Management Services Florida', href: '/content-management-services-florida', type: 'service', keywords: ['cms', 'content', 'management', 'website'] },
  
  // Other Services
  { title: 'QA / Testing Services', href: '/services/testing-services-in-Florida', type: 'service', keywords: ['qa', 'testing', 'quality', 'assurance', 'automation'] },
  { title: 'Digital Marketing', href: '/services/branding-agency', type: 'service', keywords: ['marketing', 'digital', 'seo', 'branding', 'social media'] },
  { title: 'Digital Strategy Services Florida', href: '/digital-strategy-services-florida', type: 'service', keywords: ['strategy', 'digital', 'transformation', 'consulting'] },
  { title: 'IoT Development Services Florida', href: '/iot-development-services-florida', type: 'service', keywords: ['iot', 'internet of things', 'devices', 'sensors'] },
  { title: 'Managed Services Florida', href: '/managed-services-florida', type: 'service', keywords: ['managed', 'services', 'support', 'maintenance'] },
  
  // Pages
  { title: 'Home', href: '/', type: 'page', keywords: ['home', 'main', 'index'] },
  { title: 'About Us', href: '/about-us', type: 'page', keywords: ['about', 'company', 'team', 'who we are'] },
  { title: 'Portfolio', href: '/portfolio', type: 'page', keywords: ['portfolio', 'projects', 'work', 'case studies'] },
  { title: 'Contact Us', href: '/contact-us', type: 'page', keywords: ['contact', 'get in touch', 'reach us'] },
  { title: 'Blog', href: '/blog', type: 'blog', keywords: ['blog', 'articles', 'news', 'posts'] },
]

interface SearchModalProps {
  open: boolean
  onClose: () => void
}

// Rotating placeholders
const placeholders = [
  'Search for AI &ML Services...',
  'Search for Software Development...',
  'Search for Mobile App Development...',
  'Search for Cloud Services...',
  'Search for Data Analytics...',
  'Search for Web Development...',
  'Search for Digital Marketing...',
  'Search for IoT Services...',
  'Search for DevOps...',
]

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([])
      setIsSearching(false)
    } else {
      setIsSearching(true)
      const query = searchQuery.toLowerCase().trim()
      
      // Comprehensive search - check title and keywords
      const filtered = searchData.filter(item => {
        const lowerTitle = item.title.toLowerCase()
        const allKeywords = item.keywords.join(' ').toLowerCase()
        const combinedText = `${lowerTitle} ${allKeywords}`
        
        // Direct match in title or any keyword
        if (lowerTitle.includes(query)) return true
        if (item.keywords.some(k => k.toLowerCase().includes(query))) return true
        
        // Multi-word search: ALL words must be present in the combined text
        const queryWords = query.split(' ').filter(w => w.length > 0)
        if (queryWords.length > 1) {
          return queryWords.every(word => combinedText.includes(word))
        }
        
        return false
      })
      
      setSearchResults(filtered)
    }
  }, [searchQuery])

  // True infinite loop placeholder effect
  useEffect(() => {
    if (!open) {
      setCurrentPlaceholder(0)
      return
    }
    
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => prev + 1)
    }, 2500)
    
    return () => clearInterval(interval)
  }, [open])

  // Seamless reset when reaching the duplicated section
  useEffect(() => {
    if (currentPlaceholder >= placeholders.length) {
      // Disable transition before reset
      setIsTransitioning(false)
      
      // Reset to 0 immediately without transition
      const timeout = setTimeout(() => {
        setCurrentPlaceholder(0)
        // Re-enable transition after reset
        setTimeout(() => setIsTransitioning(true), 50)
      }, 0)
      
      return () => clearTimeout(timeout)
    }
  }, [currentPlaceholder])

  const handleSelect = (href: string) => {
    router.push(href)
    onClose()
    setSearchQuery('')
  }

  const handleQuickSelect = (query: string) => {
    setSearchQuery(query)
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'service':
        return <Briefcase className="h-4 w-4 text-red-600" />
      case 'blog':
        return <FileText className="h-4 w-4 text-blue-600" />
      default:
        return <FileText className="h-4 w-4 text-gray-600" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'service':
        return 'Service'
      case 'blog':
        return 'Blog'
      default:
        return 'Page'
    }
  }

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-x-0 top-0 z-[60]">
      <div className="w-full shadow-2xl border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        {/* Search Input Section with Gradient Background */}
        <div className="bg-gradient-to-br from-red-50 via-orange-50 to-white px-4 sm:px-8 py-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Search</h2>
            <button onClick={onClose} className="text-sm font-semibold text-gray-700 hover:text-red-600">Close ×</button>
          </div>
          
          <div className="relative">
            <Input
              type="text"
              placeholder=""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-14 pl-6 pr-36 w-full text-2xl bg-gray-100 border-0 rounded-full shadow-sm focus:shadow-lg transition-all duration-200 font-medium focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400"
              autoFocus
            />
            {/* Right search action button */}
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-12 px-5 rounded-full bg-cyan-400 text-black font-semibold flex items-center gap-2 shadow hover:bg-cyan-500 active:scale-[0.98]"
              onClick={() => {}}
            >
              <span className="hidden sm:inline">Search</span>
              <Search className="h-5 w-5" />
            </button>
            {/* Animated Placeholder */}
            {!searchQuery && (
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 pointer-events-none overflow-hidden h-8">
                <div 
                  className={`${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                  style={{ transform: `translateY(-${currentPlaceholder * 32}px)` }}
                >
                  {/* Duplicate placeholders twice for seamless loop */}
                  {[...placeholders, ...placeholders].map((placeholder, index) => (
                    <div 
                      key={index} 
                      className="text-gray-400 text-xl h-8 flex items-center font-medium"
                    >
                      {placeholder}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        <div className="px-4 sm:px-8 py-6 max-h-[60vh] overflow-y-auto bg-white">
          {!isSearching ? (
            // Show quick suggestions when not searching
            <div className="space-y-3">
              <div className="flex items-center flex-wrap gap-x-6 gap-y-2 text-sm">
                <span className="text-gray-500">Most searched:</span>
                {quickSuggestions.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickSelect(item.title)}
                    className="underline underline-offset-4 decoration-2 hover:text-red-600 font-semibold"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length > 0 ? (
            // Show comprehensive search results
            <div className="space-y-1">
              <p className="text-xs text-gray-500 px-2 py-1 font-medium">
                Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
              </p>
              {searchResults.map((item, index) => (
                <div key={index} className="border-b last:border-b-0">
                  <button
                    onClick={() => handleSelect(item.href)}
                    className="w-full text-left px-2 py-5 transition-colors hover:bg-gray-50"
                  >
                    <p className="text-xs font-semibold text-gray-500 mb-1">{getTypeLabel(item.type)}</p>
                    <p className="text-2xl font-semibold leading-snug text-gray-900">
                      {item.title}
                    </p>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            // No results found
            <div className="text-center py-8">
              <Search className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No results found for "{searchQuery}"</p>
              <p className="text-sm text-gray-400 mt-1">Try a different search term</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-gray-50 border-t">
          <p className="text-xs text-gray-500 text-center">
            Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">ESC</kbd> to close
          </p>
        </div>
      </div>
    </div>
  )
}

