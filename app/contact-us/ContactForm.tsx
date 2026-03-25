'use client'

import { useState, useEffect } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [captchaProblem, setCaptchaProblem] = useState('')
  const [captchaSolution, setCaptchaSolution] = useState(0)
  const [captchaError, setCaptchaError] = useState('')

  // Generate a new captcha problem
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    const operators = ['+', '-', '×']
    const operator = operators[Math.floor(Math.random() * operators.length)]
    
    let solution
    switch (operator) {
      case '+':
        solution = num1 + num2
        break
      case '-':
        solution = num1 - num2
        break
      case '×':
        solution = num1 * num2
        break
      default:
        solution = num1 + num2
    }
    
    setCaptchaProblem(`${num1} ${operator} ${num2} = ?`)
    setCaptchaSolution(solution)
    setCaptchaAnswer('')
    setCaptchaError('')
  }

  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate captcha
    if (parseInt(captchaAnswer) !== captchaSolution) {
      setCaptchaError('Incorrect answer. Please try again.')
      generateCaptcha()
      return
    }

    setLoading(true)
    setCaptchaError('')

    try {
    //   const res = await fetch('https://formsubmit.co/ajax/g.kondappagari@conquerorstech.net', {
      const res = await fetch('https://www.formbackend.com/f/f1bbf8059228e273', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
        generateCaptcha() // Generate new captcha after successful submission
      }
    } catch (err) {
      console.error('Submission error', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='bg-white rounded-xl border shadow-md p-8 w-full'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6'>Send Us a Message</h2>

      {submitted && (
        <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6'>
          ✅ Thank you! Your message has been sent.
        </div>
      )}

             <form onSubmit={handleSubmit} className='space-y-6'>
         {/* Personal Information - Side by Side */}
         <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
           {/* Name */}
           <div>
             <label className='block text-gray-700 font-medium mb-1'>Full Name</label>
             <input
               type='text'
               name='name'
               required
               value={formData.name}
               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
               className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none'
               placeholder='Your Name'
             />
           </div>

           {/* Email */}
           <div>
             <label className='block text-gray-700 font-medium mb-1'>Email</label>
             <input
               type='email'
               name='email'
               required
               value={formData.email}
               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
               className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none'
               placeholder='Your Email'
             />
           </div>

           {/* Phone */}
           <div>
             <label className='block text-gray-700 font-medium mb-1'>Phone</label>
             <input
               type='tel'
               name='phone'
               required
               value={formData.phone}
               onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
               className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none'
               placeholder='Your Phone Number'
             />
           </div>
         </div>

        {/* Project Type */}
        <div>
          <label className='block text-gray-700 font-medium mb-3'>Project Type</label>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            <label className='flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-green-300 hover:bg-green-50 transition-all duration-200'>
              <input
                type='radio'
                name='projectType'
                value='web-application'
                checked={formData.projectType === 'web-application'}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className='w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 mr-3'
              />
              <span className='text-gray-700 font-medium'>Web Application</span>
            </label>
            <label className='flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-green-300 hover:bg-green-50 transition-all duration-200'>
              <input
                type='radio'
                name='projectType'
                value='mobile-application'
                checked={formData.projectType === 'mobile-application'}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className='w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 mr-3'
              />
              <span className='text-gray-700 font-medium'>Mobile Application</span>
            </label>
            <label className='flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-green-300 hover:bg-green-50 transition-all duration-200'>
              <input
                type='radio'
                name='projectType'
                value='others'
                checked={formData.projectType === 'others'}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className='w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 mr-3'
              />
              <span className='text-gray-700 font-medium'>Others</span>
            </label>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className='block text-gray-700 font-medium mb-1'>Message</label>
          <textarea
            name='message'
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none'
            placeholder='Your Message'
          ></textarea>
        </div>

        {/* Captcha */}
        <div>
          <label className='block text-gray-700 font-medium mb-1'>
            Security Verification
          </label>
          <div className='flex items-center space-x-3'>
            <div className='bg-gray-100 px-4 py-2 rounded-md font-mono text-lg font-bold text-gray-800 min-w-[120px] text-center'>
              {captchaProblem}
            </div>
            <button
              type='button'
              onClick={generateCaptcha}
              aria-label='Refresh security verification question'
              className='text-green-600 hover:text-green-700 text-sm font-medium'
            >
              ↻ Refresh
            </button>
          </div>
          <input
            type='number'
            name='captcha'
            required
            value={captchaAnswer}
            onChange={(e) => setCaptchaAnswer(e.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none mt-2'
            placeholder='Enter your answer'
          />
          {captchaError && (
            <p className='text-red-600 text-sm mt-1'>{captchaError}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          disabled={loading}
          className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200 w-full'
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
