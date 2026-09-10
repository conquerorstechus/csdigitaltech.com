'use client'

import { useState } from 'react'
import { Briefcase, Clock, MapPin } from 'lucide-react'
import CareerApplyForm from './CareerApplyForm'

type Job = {
  id: string
  title: string
  team: string
  type: string
  location: string
  summary: string
  responsibilities: string[]
}

const jobs: Job[] = [
  {
    id: 'fullstack',
    title: 'Senior Full Stack Engineer',
    team: 'Engineering',
    type: 'Full-time',
    location: 'Tampa, FL / Remote',
    summary:
      'Build production web apps with Next.js, TypeScript, and cloud services for clients across healthcare, retail, and enterprise.',
    responsibilities: [
      'Ship features end to end across Next.js, APIs, and databases',
      'Review code, mentor teammates, and raise engineering standards',
      'Work with product and design to deliver measurable business outcomes'
    ]
  },
  {
    id: 'marketing',
    title: 'Digital Marketing Specialist',
    team: 'Growth',
    type: 'Full-time',
    location: 'Tampa, FL / Remote',
    summary:
      'Run SEO, paid ads, email, and social campaigns that generate qualified leads for growing businesses.',
    responsibilities: [
      'Plan and execute multi-channel campaigns',
      'Track performance and optimize for ROI',
      'Collaborate with developers on landing pages and analytics'
    ]
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    team: 'Delivery',
    type: 'Full-time',
    location: 'Tampa, FL / Remote',
    summary:
      'Lead software and digital projects from kickoff to delivery, keeping scope, timeline, and stakeholders aligned.',
    responsibilities: [
      'Plan sprints, milestones, and delivery schedules across client projects',
      'Coordinate engineers, designers, and clients to remove blockers',
      'Track risk, budget, and status so every release stays on track'
    ]
  }
]

function JobCard({
  job,
  onApply
}: {
  job: Job
  onApply: (title: string) => void
}) {
  return (
    <article className='bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow'>
      <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3'>
        <div>
          <p className='text-xs font-semibold uppercase tracking-wide text-red-600 mb-1'>{job.team}</p>
          <h3 className='text-xl font-bold text-gray-900'>{job.title}</h3>
        </div>
        <span className='inline-flex self-start rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700'>
          {job.type}
        </span>
      </div>
      <p className='text-gray-600 mb-4'>{job.summary}</p>
      <div className='flex flex-wrap gap-4 text-sm text-gray-600 mb-4'>
        <span className='inline-flex items-center gap-1.5'>
          <MapPin className='h-4 w-4 text-red-600' />
          {job.location}
        </span>
        <span className='inline-flex items-center gap-1.5'>
          <Clock className='h-4 w-4 text-red-600' />
          Rolling applications
        </span>
      </div>
      <ul className='list-disc pl-5 space-y-1 text-sm text-gray-700 mb-5'>
        {job.responsibilities.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button
        type='button'
        onClick={() => onApply(job.title)}
        className='inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors'
      >
        Apply for this role
      </button>
    </article>
  )
}

export default function CareersClient() {
  const [selectedRole, setSelectedRole] = useState('')

  const applyTo = (title: string) => {
    setSelectedRole(title)
   }

  return (
    <main className='bg-gray-50'>
      <section className="relative text-white lg:py-24 py-16 text-center bg-cover bg-center bg-no-repeat bg-[url('/bg-pheader.jpg')]">
        <div className='absolute inset-0 bg-[#FF1212] opacity-50' />
        <div className='relative z-10 px-4'>
          <p className='text-sm uppercase tracking-widest mb-3'>Join the team</p>
          <h1 className='lg:text-4xl text-2xl font-bold drop-shadow-md tracking-wider'>
            Careers
          </h1>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-16 py-10'>
        <div className='max-w-3xl mb-10'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Build with Cornerstone Digital Technologies
          </h2>
          <p className='text-gray-700 text-lg leading-relaxed'>
            We are a US-based software and digital growth company. If you care about shipping
            useful products — custom software, AI, mobile apps, cloud, and marketing that actually
            converts — we want to hear from you.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-16'>
          {jobs.map(job => (
            <JobCard key={job.id} job={job} onApply={applyTo} />
          ))}
        </div>

        {selectedRole && (
  <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
    <div className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl'>
      
      <button
        type='button'
        onClick={() => setSelectedRole('')}
        className='absolute right-4 top-3 text-2xl text-gray-500 hover:text-gray-800'
        aria-label='Close'
      >
        ×
      </button>

      <h2 className='mb-5 pr-8 text-xl font-semibold text-gray-900'>
        Apply for {selectedRole}
      </h2>

      <CareerApplyForm selectedRole={selectedRole} />

    </div>
  </div>
)}
      </section>
    </main>
  )
}
