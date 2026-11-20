import { AboutHero } from '@/components/marketing/about/about-hero'
import { AboutMission } from '@/components/marketing/about/about-mission'
import { AboutTeam } from '@/components/marketing/about/about-team'
import { AboutValues } from '@/components/marketing/about/about-values'
import { AboutCta } from '@/components/marketing/about/about-cta'
import { marketingMeta } from '@/lib/marketing-metadata'

export const metadata = marketingMeta('/marketing/about', {
  title: 'About Cornerstone Digital Technologies | Affordable Social Media Management',
  description:
    'Learn about Cornerstone Digital Technologies, our mission, team, and values. We make professional social media management affordable for all businesses.',
})

export default function AboutPage() {
  return (
    <>
      <main>
        <AboutHero />
        <AboutMission />
        <AboutTeam />
        <AboutValues />
        <AboutCta />
      </main>
    </>
  )
}
