'use client'

import { FaLinkedin, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import { useState } from 'react'

export default function OurTeamClient() {
  // CEO - Featured separately
  const ceo = {
    name: 'Samson Sudhakar P',
    role: 'Founder & CEO',
    image: '/About/Artboard-–-21.webp',
    linkedin: 'https://www.linkedin.com/in/samson-sudhakar-77817423/',
    bio: [
      'He strongly believed in the equation, "Innovation is a point where Human or Business Needs Meeting Technology", which reaped him initial success to reach the break even and gradually stabilize the business and eventually grow from a one-man army to join the revolutionary thought process of more than 100 creative brains contributing to the mission in this journey of 10 years of business excellence.',
      'Not to deviate from the calling, his business model always focused on a human-centric approach where he valued the customer needs and delivered qualitative and customized solutions and hence, Agility. Thereby, in order to grow, the business model also focused to develop and retain every possible relationship with clients over a greater stint of a decade and currently has a fastest grown network of more than 3850 clients and in over 146 countries. Now, we operate our business model by means of applying Design Thinking Principles to provide the utmost fulfillment to our clients.'
    ]
  }


  // Leadership Team - Displayed in grid
  const leadershipTeam = [
    {
      name: 'Sam Kasimalla',
      role: 'CTO',
      image: '/About/CTOpic.jpg',
      linkedin: 'https://www.linkedin.com/in/skasimalla/',
      bio: 'With a deep-rooted passion for technology as an enabler of progress, our CTO believes, "Innovation isn\'t just about creating technology — it\'s about creating technology that matters." Over the years, he has driven the organization\'s technical direction, ensuring that every innovation aligns with our mission of empowering people, solving real-world problems, and delivering measurable impact. From building scalable architectures to integrating emerging technologies like AI, automation, and advanced analytics, he has consistently led the charge in transforming ambitious ideas into dependable solutions. His leadership fosters a culture where engineering excellence, agility, and security are not just goals but standards. Under his guidance, the technology team has evolved from a small group of developers into a dynamic force of over 100+ engineers, data scientists, and innovators collaborating across borders. His philosophy is rooted in Design Thinking, ensuring every technical solution begins with empathy for the user, evolves through iteration, and culminates in sustainable innovation. By bridging the gap between visionary strategy and hands-on execution, our CTO ensures that technology is not just a backbone but a growth catalyst — helping us serve over 3,850 clients in more than 146 countries with resilience, adaptability, and future-ready solutions.'
    },
    {
      name: 'Adiyya Tadikamalla',
      role: 'Senior Technical Manager',
      image: '/About/adi.jpeg',
      linkedin: 'https://www.linkedin.com/in/adiyya-tadikamalla-68705714/',
      bio: 'Adiyya Tadikamalla is a Senior Technical Manager at Conquerors Software Technologies, where he leads full-cycle software development and delivery across diverse enterprise and web application projects. With more than 15 years of experience in software engineering, Adiyya brings deep technical insight, a hands-on leadership style, and a strong focus on performance, usability, and scalability. Adiyya manages end-to-end project execution — from requirement analysis and architecture design to implementation and delivery — ensuring every solution aligns with client goals and quality standards. His technical proficiency spans modern web technologies across the full stack — including backend languages and frameworks such as PHP, Python, and Laravel; server-side runtime environments such as Node.js, ExpressJS, NestJS, AdonisJS; frontend frameworks such as React, Vue.js, and Inertia.js, NextJS; and database systems including MySQL and PostgreSQL. Since joining Conquerors over a decade ago, Adiyya has played a pivotal role in building high-impact digital platforms and mentoring development teams to deliver world-ready, future-focused software solutions. His leadership in Agile practices and commitment to technical excellence continue to drive the company\'s success in creating scalable, high-performance applications for clients worldwide. Before joining Conquerors, Adiyya worked with several technology and software firms, contributing to solutions across industries, including nonprofit, education, and enterprise digital transformation. He holds a Bachelor\'s degree in Computer Science from Andhra University.'
    },
    {
      name: 'Pradeep Kumar K',
      role: 'Senior Delivery Manager',
      image: '/About/pradeep.png',
      linkedin: 'https://www.linkedin.com/in/pradeep-kumar-k-42a9a715/',
      bio: 'Pradeep Kumar K serves as Senior Delivery Manager at Conquerors Software Technologies, where he oversees the company\'s global project execution, delivery excellence, and operational strategy. With over 18 years of experience across the technology and software services sectors, his core expertise spans Delivery and Program Management, Agile Leadership, Digital and Cloud Strategy, and Strategic Execution. Pradeep also plays a key role in pre-sales engagement, client collaboration, and talent recruitment — building high-performing teams that drive innovation, operational excellence, and customer success. Since his onboarding, he has been instrumental in reinforcing delivery excellence by adopting agile practices to build web and mobile applications using the latest technologies. He has also driven synergy among Development, QA, DevOps, and Consulting teams to maintain high service standards and ensure customer satisfaction. Prior to Conquerors, Pradeep held leadership and technical roles at Wipro, Aricent (now Capgemini Engineering), and healthcare technology organizations, contributing to R&D initiatives and enterprise transformation programs for global clients, including Nokia, Intel, Microsoft, and Qualcomm. Pradeep holds a Bachelor\'s degree in Computer Science and Engineering from Jawaharlal Nehru Technological University, Hyderabad.'
    },
  ]

  // Stephen and Ranith - Special Section
  const stephenAndRanith = [
    {
      name: 'Stefen Rangaiah',
      role: 'Digital Marketing Manager',
      image: '/About/stephen-VmSGxqgA.png',
      linkedin: 'https://www.linkedin.com/in/stefen-rangaiah-m-9b930366/',
      bio: 'Stephen is a valued member of our team, contributing expertise and dedication to our projects.'
    },
    {
      name: 'Ranith Rao',
      role: 'Digital Marketing Lead',
      image: '/About/Ranith.png',
      linkedin: 'https://www.linkedin.com/in/ranith-rao-8a6986260/',
      bio: 'Ranith brings technical expertise and innovation to our development team.'
    }
  ]

  // Advisory Board
  const advisoryBoard = [
    {
      name: 'Praveen Ummadi',
      role: 'Director Global Partnership',
      image: '/About/Praveen-Ummadi.jpg',
      linkedin: 'https://www.linkedin.com/in/praveen-ummadi-pmp-947b283/',
      bio: 'Praveen Ummadi is a key member of our Advisory Board, providing strategic guidance and expertise to drive organizational growth.'
    },
    {
      name: 'Sunil Robert',
      role: 'Advisory Board Member',
      image: '/About/Sunil-Robert.jpg',
      linkedin: 'https://www.linkedin.com/in/awardwinningmarketerandstoryteller/',
      bio: 'Sunil Robert serves as Director of Global Partnership, driving strategic partnerships and business development initiatives worldwide.'
    }
  ]

  // C.S. Walter - Separate Section
  const csWalter = {
    name: 'C.S. Walter',
    role: 'Human Resources Manager',
    image: '/About/walter.png',
    linkedin: 'https://www.linkedin.com/in/cs-walter-78664861/',
    bio: 'C.S. Walter is an experienced HR professional dedicated to building strong teams, fostering employee engagement, and ensuring a positive workplace culture.'
  }

  // Developers
  const developers = [
    {
        name: 'Nishanth Reddy B',
        role: 'Technical Lead',
        image: '/About/Nishanth-new.jpg',
        linkedin: 'https://www.linkedin.com/in/nishanthreddyb/',
        bio: 'Nishanth brings expertise and passion to our development team.'
      },
      {
        name: 'Harshavardhan Goud K',
        role: 'Senior QA Engineer',
        image: '/About/Harsha.jpeg',
        linkedin: 'https://www.linkedin.com/in/k-harshavardhan-goud/',
        bio: 'Harsha is a dedicated developer working on cutting-edge solutions.'
      },
    {
      name: 'Gangadhar Reddy K',
      role: 'Senior Frontend Developer',
      image: '/About/Gangadhar-fn.jpeg',
      linkedin: 'https://www.linkedin.com/in/gangadhar-reddy-kondappagari-49b209269/',
      bio: 'Gangadhar is a skilled developer contributing to our technical excellence.'
    },
    {
      name: 'Devika K',
      role: 'Senior Full Stack Developer',
      image: '/About/devikanew.png',
      linkedin: 'https://www.linkedin.com/in/devika-karri-895579223/',
      bio: 'Davika contributes technical skills and creativity to our development projects.'
    },
    
   
  ]

  type TeamMember = {
    name: string
    role: string
    image: string
    linkedin: string
    bio: string
  }

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <main className='bg-gray-50'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-[#211f3b] via-[#2a2750] to-[#211f3b] py-12 lg:py-16 overflow-hidden'>
        {/* Decorative Background Elements */}
        <div className='absolute top-0 left-0 w-32 md:w-48 lg:w-64 opacity-20'>
          <Image
            src='/Digitalcloud/bg-art-5.webp'
            alt='Background decoration'
            width={256}
            height={256}
            className='w-full h-auto'
          />
        </div>
        <div className='absolute bottom-0 right-0 w-32 md:w-48 lg:w-64 opacity-20'>
          <Image
            src='/Digitalcloud/bg-art-5.webp'
            alt='Background decoration'
            width={256}
            height={256}
            className='w-full h-auto'
          />
        </div>

        <div className='w-full mx-auto px-4 relative z-10'>
          <div className='text-center text-white'>
            <p className='text-sm uppercase tracking-wider text-gray-300 mb-3 font-medium'>
              Meet Our Team
            </p>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight'>
              The People Behind
              <span className='block text-red-400 mt-1'>Our Success</span>
            </h1>
            <p className='text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              We are a team of passionate innovators, experienced professionals, and creative thinkers
              dedicated to delivering exceptional technology solutions that drive business growth.
            </p>
          </div>
        </div>
      </section>


      {/* CEO Featured Section */}
      <section className='py-16 lg:py-20 bg-white'>
        <div className='w-full mx-auto'>
          
          <section className=''>
        <div className='max-w-7xl mx-auto px-4 '>
          {/* Left Text Content */}
          <div className='flex flex-col lg:flex-row items-center lg:items-start gap-12'>
            <div className='lg:w-2/3 text-gray-800 space-y-5 text-lg text-justify leading-8'>
              <p>
                He strongly believed in the equation,{' '}
                <strong>
                  “Innovation is a point where Human or Business Needs Meeting
                  Technology”
                </strong>
                , which reaped him initial success to reach the break even and
                gradually stabilize the business and eventually grow from a
                one-man army to join the revolutionary thought process of more
                than 100 creative brains contributing to the mission in this
                journey of 10 years of business excellence.
              </p>
              <p>
                Not to deviate from the calling, his business model always
                focused on a human-centric approach where he valued the customer
                needs and delivered qualitative and customized solutions and
                hence, Agility. Thereby, in order to grow, the business model
                also focused to develop and retain every possible relationship
                with clients over a greater stint of a decade and currently has
                a fastest grown network of more than 3850 clients and in over
                146 countries. Now, we operate our business model by means of
                applying Design Thinking Principles to provide the utmost
                fulfillment to our clients.
              </p>
            </div>

            {/* Right Profile */}
            <div className='lg:w-1/3 flex flex-col items-center text-center w-full lg:sticky lg:top-8 lg:self-start'>
              <div className='relative w-64 h-64 lg:w-80 lg:h-80 mb-6 group'>
                <div className='absolute inset-0 bg-gradient-to-br from-red-500 via-purple-600 to-blue-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300'></div>
                <div className='relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300 ring-4 ring-red-100'>
                  <Image
                    src={ceo.image}
                    alt={ceo.name}
                    title={`${ceo.name} - ${ceo.role} of Conquerors Technologies`}
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
              <h3 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-3'>{ceo.name}</h3>
              <p className='text-xl lg:text-2xl text-red-600 font-semibold mb-6'>{ceo.role}</p>
              <a
                href={ceo.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`Visit ${ceo.name} LinkedIn Profile`}
                className='inline-flex items-center justify-center w-14 h-14 text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md'
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>
         
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className=' bg-white pb-10'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center'>
            Leadership Team
          </h2>
          {/* Grid Layout for Leadership Team - Simple Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center'>
            {leadershipTeam.map((member, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center group cursor-pointer'
                onClick={() => setSelectedMember(member)}
              >
                {/* Profile Image */}
                <div className='relative w-64 h-64 lg:w-72 lg:h-72 mb-6 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 active:scale-95'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    title={`Click to view ${member.name}'s profile - ${member.role} of Conquerors Technologies`}
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  {/* Click Indicator */}
                  <div className='absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900 shadow-lg'>
                      Click to View Details
                    </div>
                  </div>
                </div>

                {/* Name, Role and LinkedIn */}
                <div className='space-y-3'>
                  <h3 className='text-2xl font-bold text-gray-900'>{member.name}</h3>
                  <p className='text-lg text-red-600 font-semibold'>{member.role}</p>
                  <a
                    href={member.linkedin === '#' ? '#' : member.linkedin}
                    target={member.linkedin === '#' ? '_self' : '_blank'}
                    rel='noopener noreferrer'
                    aria-label={`Visit ${member.name} LinkedIn Profile`}
                    className={`inline-flex items-center justify-center w-12 h-12 text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md ${
                      member.linkedin === '#' ? 'opacity-50 cursor-default' : ''
                    }`}
                    onClick={(e) => {
                      if (member.linkedin === '#') e.preventDefault()
                    }}
                  >
                    <FaLinkedin size={22} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Advisory Board Section */}
      <section className='bg-gray-50 pb-10 pt-16'>
        <div className='max-w-4xl mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center'>
            Advisory Board
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center'>
            {advisoryBoard.map((member, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center group'
              >
                <div className='relative w-64 h-64 lg:w-72 lg:h-72 mb-6 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    title={`${member.name} - ${member.role} of Conquerors Technologies`}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='space-y-3'>
                  <h3 className='text-2xl font-bold text-gray-900'>{member.name}</h3>
                  <p className='text-lg text-red-600 font-semibold'>{member.role}</p>
                  <a
                    href={member.linkedin === '#' ? '#' : member.linkedin}
                    target={member.linkedin === '#' ? '_self' : '_blank'}
                    rel='noopener noreferrer'
                    aria-label={`Visit ${member.name} LinkedIn Profile`}
                    className={`inline-flex items-center justify-center w-12 h-12 text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md ${
                      member.linkedin === '#' ? 'opacity-50 cursor-default' : ''
                    }`}
                    onClick={(e) => {
                      if (member.linkedin === '#') e.preventDefault()
                    }}
                  >
                    <FaLinkedin size={22} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stephen and Ranith Section */}
      <section className='bg-white pb-10 pt-16'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center'>
            Digital Marketing Team
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center max-w-4xl mx-auto'>
            {stephenAndRanith.map((member, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center group w-full'
              >
                {/* Profile Image */}
                <div className='relative w-64 h-64 lg:w-72 lg:h-72 mb-6 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    title={`${member.name} - ${member.role} of Conquerors Technologies`}
                    fill
                    className='object-cover'
                  />
                </div>

                {/* Name, Role and LinkedIn */}
                <div className='space-y-3'>
                  <h3 className='text-2xl font-bold text-gray-900'>{member.name}</h3>
                  <p className='text-lg text-red-600 font-semibold'>{member.role}</p>
                  <a
                    href={member.linkedin === '#' ? '#' : member.linkedin}
                    target={member.linkedin === '#' ? '_self' : '_blank'}
                    rel='noopener noreferrer'
                    aria-label={`Visit ${member.name} LinkedIn Profile`}
                    className={`inline-flex items-center justify-center w-12 h-12 text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md ${
                      member.linkedin === '#' ? 'opacity-50 cursor-default' : ''
                    }`}
                    onClick={(e) => {
                      if (member.linkedin === '#') e.preventDefault()
                    }}
                  >
                    <FaLinkedin size={22} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Developers Section */}
      <section className='bg-gray-50 pb-10 pt-16'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center'>
          Our Core Team
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 justify-items-center'>
            {developers.map((member, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center group'
              >
                <div className='relative w-full h-40 aspect-square md:w-48 md:h-48 lg:w-52 lg:h-52 mb-6 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    title={`${member.name} - ${member.role} of Conquerors Technologies`}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='space-y-2'>
                  <h3 className='lg:text-lg text-sm font-bold text-gray-900'>{member.name}</h3>
                  <p className='lg:text-base text-sm text-red-600 font-semibold'>{member.role}</p>
                  <a
                    href={member.linkedin === '#' ? '#' : member.linkedin}
                    target={member.linkedin === '#' ? '_self' : '_blank'}
                    rel='noopener noreferrer'
                    aria-label={`Visit ${member.name} LinkedIn Profile`}
                    className={`inline-flex items-center justify-center w-10 h-10 text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md ${
                      member.linkedin === '#' ? 'opacity-50 cursor-default' : ''
                    }`}
                    onClick={(e) => {
                      if (member.linkedin === '#') e.preventDefault()
                    }}
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C.S. Walter Section */}
      <section className='bg-white pb-10 pt-16'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex flex-col items-center text-center max-w-2xl mx-auto group'>
            <div className='relative w-64 h-64 lg:w-72 lg:h-72 mb-6 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105'>
              <Image
                src={csWalter.image}
                alt={csWalter.name}
                title={`${csWalter.name} - ${csWalter.role} of Conquerors Technologies`}
                fill
                className='object-cover'
              />
            </div>
            <div className='space-y-3'>
              <h3 className='text-2xl font-bold text-gray-900'>{csWalter.name}</h3>
              <p className='text-lg text-red-600 font-semibold'>{csWalter.role}</p>
              <a
                href={csWalter.linkedin === '#' ? '#' : csWalter.linkedin}
                target={csWalter.linkedin === '#' ? '_self' : '_blank'}
                rel='noopener noreferrer'
                aria-label={`Visit ${csWalter.name} LinkedIn Profile`}
                className={`inline-flex items-center justify-center w-12 h-12 text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md ${
                  csWalter.linkedin === '#' ? 'opacity-50 cursor-default' : ''
                }`}
                onClick={(e) => {
                  if (csWalter.linkedin === '#') e.preventDefault()
                }}
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Team Member Details */}
      {selectedMember && (
  <div
    className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm'
    style={{ animation: 'fadeIn 0.3s ease-out' }}
    onClick={() => setSelectedMember(null)}
  >
    <div
      className='bg-white rounded-2xl shadow-2xl max-w-7xl w-full h-[85vh] overflow-hidden transform transition-all duration-300 scale-100 flex flex-col p-6 lg:p-10 relative'
      style={{ animation: 'scaleIn 0.3s ease-out' }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedMember(null)}
        className='absolute top-4 right-4 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300 transform hover:scale-110'
        aria-label='Close modal'
      >
        <FaTimes size={20} />
      </button>

      {/* Top Section: Image + Heading */}
      <div className='flex flex-col lg:flex-row items-center lg:items-start gap-6'>
        {/* Image */}
        <div className='flex-shrink-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg'>
          <div className='relative w-[100px] h-[100px] rounded-2xl overflow-hidden'>
            <Image
              src={selectedMember.image}
              alt={selectedMember.name}
              fill
              className='object-cover'
            />
          </div>
        </div>

        {/* Heading + LinkedIn */}
        <div className='flex-1'>
          <div className='flex items-center gap-4 mb-3'>
            <h3 className='text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900'>
              {selectedMember.name}
            </h3>
            <a
              href={selectedMember.linkedin === '#' ? '#' : selectedMember.linkedin}
              target={selectedMember.linkedin === '#' ? '_self' : '_blank'}
              rel='noopener noreferrer'
              aria-label={`Visit ${selectedMember.name} LinkedIn Profile`}
              className={`inline-flex items-center justify-center w-12 h-12 text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300 transform hover:scale-110 shadow-md ${
                selectedMember.linkedin === '#' ? 'opacity-50 cursor-default' : ''
              }`}
              onClick={(e) => {
                if (selectedMember.linkedin === '#') e.preventDefault()
              }}
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className='text-lg lg:text-xl text-red-600 font-semibold'>
            {selectedMember.role}
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className='mt-8 border-t border-gray-200 pt-6 overflow-y-auto'>
        <p className='text-gray-700 text-base lg:text-lg leading-relaxed'>
          {selectedMember.bio}
        </p>
      </div>
    </div>
  </div>
)}


      {/* Stats Section */}
      <section className='bg-gradient-to-r from-cyan-400 to-purple-600 text-white py-16'>
  <div className='max-w-7xl mx-auto px-4'>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
      {/* Years of Experience */}
      <div className='transform hover:scale-105 transition-transform duration-300'>
        <h3 className='text-4xl md:text-5xl font-bold mb-2'>15+</h3>
        <p className='text-sm md:text-base font-semibold tracking-wide'>
          Years of Experience
        </p>
      </div>

      {/* Countries Served */}
      <div className='transform hover:scale-105 transition-transform duration-300'>
        <h3 className='text-4xl md:text-5xl font-bold mb-2'>45+</h3>
        <p className='text-sm md:text-base font-semibold tracking-wide'>
          Countries Served
        </p>
      </div>

      {/* Client Satisfaction */}
      <div className='transform hover:scale-105 transition-transform duration-300'>
        <h3 className='text-4xl md:text-5xl font-bold mb-2'>98%</h3>
        <p className='text-sm md:text-base font-semibold tracking-wide'>
          Client Satisfaction
        </p>
      </div>

      {/* Support */}
      <div className='transform hover:scale-105 transition-transform duration-300'>
        <h3 className='text-4xl md:text-5xl font-bold mb-2'>24/7</h3>
        <p className='text-sm md:text-base font-semibold tracking-wide'>
          Support Available
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Call to Action Section */}
      <section className='bg-white py-16 lg:py-20'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
            Join Our Growing Team
          </h2>
          <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
            Are you passionate about technology and innovation? We're always looking for talented
            individuals to join our team and help shape the future of digital solutions.
          </p>
          <a
            href='/contact-us'
            className='inline-block px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 transform hover:scale-105 shadow-lg'
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
}

