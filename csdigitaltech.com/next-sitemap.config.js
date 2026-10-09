const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

function blogPostPaths() {
  const dir = path.join(__dirname, 'content', 'blog')
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const { data } = matter(fs.readFileSync(path.join(dir, file), 'utf8'))
      const slug = typeof data.slug === 'string' && data.slug.trim() ? data.slug.trim() : file.replace(/\.md$/, '')
      const lastmod = data.updated || data.date
      return { slug, lastmod }
    })
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.conquerorstech.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/admin/*',
    '/api/*',
    '/_next/*',
    '/404',
    '/500',
    '/sitemap.xml',
    '/robots.txt'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: ['/', '/_next/static/media/', '/_next/static/chunks/', '/_next/static/css/'],
        disallow: ['/admin/*', '/api/*', '/_next/*']
      }
    ],
         additionalSitemaps: [
       'https://www.conquerorstech.com/sitemap.xml'
     ]
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  additionalPaths: async (config) => {
    const posts = blogPostPaths()
    const entries = []

    for (const post of posts) {
      const transformed = await config.transform(config, `/blog/${post.slug}`)
      if (!transformed) continue
      let lastmod = transformed.lastmod
      if (post.lastmod) {
        const parsed = new Date(post.lastmod)
        if (!Number.isNaN(parsed.getTime())) lastmod = parsed.toISOString()
      }
      entries.push({ ...transformed, lastmod })
    }

    return entries
  },
  transform: async (config, path) => {
    // Custom transformation for different page types
    let priority = config.priority;
    let changefreq = config.changefreq;

    // Homepage gets highest priority
    if (path === '/') {
      priority = 1.00;
      changefreq = 'daily';
    }
    
    // Service pages get high priority
    if (path.includes('/services/')) {
      priority = 0.80;
      changefreq = 'weekly';
    }
    
    // Portfolio and blog pages get medium priority
    if (path.includes('/portfolio/') || path.includes('/blog/') || 
        path.includes('mobile-app-development') || path.includes('web-development')) {
      priority = 0.64;
      changefreq = 'monthly';
    }
    
    // Company-specific service pages get lower priority
    if (path.includes('-company-in-florida')) {
      priority = 0.51;
      changefreq = 'monthly';
    }
    
    // About, contact, portfolio, and blog main pages get medium-high priority
    if (path.includes('/about-us') || path.includes('/contact-us') || 
        path.includes('/careers') ||
        path === '/portfolio' || path === '/blog') {
      priority = 0.80;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
}
