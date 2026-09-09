# Sitemap Setup for Cornerstone Digital Technologies Tech FD

This project has been configured with automatic sitemap generation. Here's how to use it:

## What's Been Set Up

1. **next-sitemap package** - Automatically generates sitemap.xml and robots.txt
2. **Custom sitemap generator** - A more comprehensive script that scans your app directory
3. **Build integration** - Sitemap is generated automatically after each build
4. **Manual generation** - You can generate sitemap manually when needed

## Configuration Files

- `next-sitemap.config.js` - Configuration for next-sitemap package
- `scripts/generate-sitemap.js` - Custom sitemap generation script
- `env.example` - Example environment configuration

## How to Use

### Automatic Generation (Recommended)
The sitemap will be generated automatically after each build:

```bash
npm run build
```

This will:
- Build your Next.js project
- Generate sitemap.xml in the public directory
- Generate robots.txt in the public directory

### Manual Generation
If you want to generate the sitemap without building:

```bash
npm run sitemap
```

### Development
For development, you can run the custom script directly:

```bash
node scripts/generate-sitemap.js
```

## Environment Configuration

1. Copy `env.example` to `.env.local`
2. Update `SITE_URL` with your actual domain:

```bash
SITE_URL=https://www.conquerorstech.com
```

## What Gets Included

The sitemap automatically includes:
- All static pages from your app directory
- Service pages (high priority)
- Blog and portfolio pages (medium priority)
- About and contact pages (medium-high priority)
- Homepage (highest priority)

## What Gets Excluded

The following are automatically excluded:
- Dynamic routes (like `[id]` or `[slug]`)
- API routes
- Admin routes
- Next.js internal routes
- Error pages

## Customization

### Priority Levels
- Homepage: 1.00 (daily updates)
- Service pages: 0.80 (weekly updates)
- About/Contact/Portfolio/Blog main: 0.80 (monthly updates)
- Portfolio/Blog items: 0.64 (monthly updates)
- Company-specific service pages: 0.51 (monthly updates)

### Update Frequencies
- Homepage: daily
- Service pages: weekly
- Blog/Portfolio: monthly
- Other pages: weekly

## File Locations

Generated files will be placed in:
- `public/sitemap.xml` - Your sitemap
- `public/robots.txt` - Robots file

## SEO Benefits

- Helps search engines discover all your pages
- Improves crawl efficiency
- Provides update frequency information
- Sets page priorities for search engines

## Troubleshooting

If the sitemap isn't generating:

1. Check that `next-sitemap` is installed
2. Verify your environment variables are set
3. Ensure the `scripts` directory exists
4. Check file permissions

## Next Steps

After setup:
1. Test the sitemap generation
2. Verify the generated files
3. Submit your sitemap to Google Search Console
4. Monitor crawl statistics

Your sitemap is now ready to help improve your site's SEO!
