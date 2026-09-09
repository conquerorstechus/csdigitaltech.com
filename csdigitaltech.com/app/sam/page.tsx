import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sam Kasimalla | Cornerstone Digital Technologies',
  description:
    'Learn about Sam Kasimalla, founder of Cornerstone Digital Technologies, and how the company delivers high-quality technology solutions with a large offshore team in Hyderabad, India.',
  alternates: {
    canonical: '/sam'
  }
}

const services = [
  'Fractional CTO services',
  'Enterprise and solution architecture',
  'Custom software development',
  'Website and mobile application development',
  'AI automation and systems integration',
  'Cloud infrastructure and DevOps',
  'CRM and ERP implementation',
  'IT staffing and staff augmentation',
  'Technology consulting',
  'Digital marketing and technology-enabled business solutions'
]

export default function SamPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:px-10 lg:flex-row lg:items-start lg:py-24">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Cornerstone Digital Technologies
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Hi, I’m Sam Kasimalla.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              I’m the founder of Cornerstone Digital Technologies. We help businesses and investors grow by combining enterprise technology, artificial intelligence, automation, data analytics, and practical business experience.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-950/30">
            <p className="text-lg leading-8 text-slate-300">
              I am an ex-FAANG, ex-Wall Street, and ex-Big Four engineer with a bachelor’s degree in Electrical Engineering and a master’s degree in Computer Science. Throughout my career, I have written hundreds of thousands of lines of production code, reviewed millions of lines of code, designed enterprise solutions for hundreds of companies, managed dozens of technology professionals, and built teams, platforms, and companies from the ground up.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              I have also implemented cloud infrastructure and DevOps solutions for dozens of companies, including Raytheon while working with AWS, and built solutions for one of the most prominent AI companies in the world.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              What we do
            </h2>
            <ul className="grid gap-3 text-base text-slate-300 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service} className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 rounded-3xl border border-cyan-900/40 bg-cyan-950/20 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Why our model works
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              We have a large offshore team in Hyderabad, India, which allows us to deliver high-quality work at a fraction of the cost of most traditional U.S.-based pricing. This approach is especially valuable for smaller companies generating over $100,000 in revenue that need reliable delivery without the cost burden of enterprise-level consulting fees.
            </p>
            <p className="text-lg leading-8 text-slate-300">
              We also operate our own office and development team in Hyderabad, giving clients access to experienced technology professionals and enterprise-quality delivery while benefiting from meaningful operational cost savings.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Real estate technology
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              On the real estate side, we have built proprietary systems that process thousands of investment properties every week. Our technology uses data, automation, and investment criteria to narrow large listings into a curated selection of promising investment opportunities in Central Florida.
            </p>
            <p className="text-lg leading-8 text-slate-300">
              Subscribe to our real estate newsletter to receive our curated investment-property list, analysis, insights, and new opportunities.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <p className="text-lg leading-8 text-slate-300">
              Would any of these services be helpful to you or your business? Please reply to this email or text, and I would be happy to connect.
            </p>
          </div>
        </div>

        <div className="w-full max-w-md flex-shrink-0">
          <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/70 p-3 shadow-2xl shadow-slate-950/50">
            <Image
              src="/Sam Kasimalla.png"
              alt="Sam Kasimalla"
              width={800}
              height={1000}
              priority
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
