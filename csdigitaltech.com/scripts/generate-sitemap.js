const fs = require('fs');
const path = require('path');

// Base URL for your site
const BASE_URL = 'https://www.conquerorstech.com';

// Function to get all static routes from the app directory
function getStaticRoutes() {
  const appDir = path.join(__dirname, '../app');
  const routes = [];
  
  function scanDirectory(dir, baseRoute = '') {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip special directories
        if (item.startsWith('[') || item.startsWith('(') || item === 'api' || item === 'assets') {
          continue;
        }
        
        // Check if directory has a page.tsx file
        const pagePath = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pagePath)) {
          const route = baseRoute + '/' + item;
          routes.push(route);
        }
        
        // Recursively scan subdirectories
        scanDirectory(fullPath, baseRoute + '/' + item);
      }
    }
  }
  
  scanDirectory(appDir);
  return routes;
}

// Function to generate sitemap XML
function generateSitemapXML(routes) {
  const currentDate = new Date().toISOString();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
      // Add homepage
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>daily</changefreq>\n`;
    xml += `    <priority>1.00</priority>\n`;
    xml += `  </url>\n`;
  
  // Add all other routes
  for (const route of routes) {
    if (route === '/') continue; // Skip homepage as it's already added
    
    let priority = '0.7';
    let changefreq = 'weekly';
    
    // Set priorities based on route type (matching your actual sitemap)
    if (route.includes('/services/')) {
      priority = '0.80';
      changefreq = 'weekly';
    } else if (route.includes('/portfolio/') || route.includes('/blog/') || 
               route.includes('mobile-app-development') || route.includes('web-development')) {
      priority = '0.64';
      changefreq = 'monthly';
    } else if (route.includes('-company-in-florida')) {
      priority = '0.51';
      changefreq = 'monthly';
    } else if (route.includes('/about-us') || route.includes('/contact-us') || 
               route.includes('/portfolio') || route.includes('/blog')) {
      priority = '0.80';
      changefreq = 'monthly';
    }
    
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${route}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  }
  
  xml += '</urlset>';
  return xml;
}

// Function to generate robots.txt
function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Allow Next.js static assets (images, JS chunks, CSS)
Allow: /_next/static/media/
Allow: /_next/static/chunks/
Allow: /_next/static/css/

# Disallow admin and API routes
Disallow: /admin/
Disallow: /api/
# Disallow other Next.js internals (but allow static assets above)
Disallow: /_next/
Disallow: /404
Disallow: /500

# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml`;
}

// Main execution
function main() {
  try {
    console.log('Generating sitemap...');
    
    // Get all static routes
    const routes = getStaticRoutes();
    console.log(`Found ${routes.length} routes`);
    
    // Generate sitemap XML
    const sitemapXML = generateSitemapXML(routes);
    
    // Write sitemap.xml to public directory
    const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemapXML);
    console.log('Sitemap generated at:', sitemapPath);
    
    // Generate robots.txt
    const robotsTxt = generateRobotsTxt();
    const robotsPath = path.join(__dirname, '../public/robots.txt');
    fs.writeFileSync(robotsPath, robotsTxt);
    console.log('Robots.txt generated at:', robotsPath);
    
    console.log('Sitemap generation completed successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateSitemapXML, generateRobotsTxt, getStaticRoutes };
