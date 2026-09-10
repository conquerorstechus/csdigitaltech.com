'use client'

import { useEffect, useState } from 'react'

const MAX_FILE_MB = 5

const ACCEPTED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
]

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = String(reader.result || '')
      const base64 = result.includes(',') ? result.split(',')[1] : result
      resolve(base64)
    }
    reader.onerror = () => reject(new Error('Could not read file'))
    reader.readAsDataURL(file)
  })
}

export default function CareerApplyForm({ selectedRole = '', formId = '' }: { selectedRole?: string; formId?: string }) {
  const roles = selectedRole ? [selectedRole] : []

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: selectedRole || '',
    linkedin: '',
    portfolio: '',
    message: ''
  })
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [fileError, setFileError] = useState('')
  const [loading, setLoading] = useState(false)
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [captchaProblem, setCaptchaProblem] = useState('')
  const [captchaSolution, setCaptchaSolution] = useState(0)
  const [captchaError, setCaptchaError] = useState('')

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    const operators = ['+', '-', '×']
    const operator = operators[Math.floor(Math.random() * operators.length)]
    let solution = num1 + num2
    if (operator === '-') solution = num1 - num2
    if (operator === '×') solution = num1 * num2
    setCaptchaProblem(`${num1} ${operator} ${num2} = ?`)
    setCaptchaSolution(solution)
    setCaptchaAnswer('')
    setCaptchaError('')
  }

  useEffect(() => {
    generateCaptcha()
  }, [])

  useEffect(() => {
    if (selectedRole) {
      setFormData(prev => ({ ...prev, projectType: selectedRole }))
    }
  }, [selectedRole])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFileError('')

    if (!file) {
      setResumeFile(null)
      return
    }

    const isAcceptedType =
      ACCEPTED_TYPES.includes(file.type) ||
      /\.(pdf|doc|docx)$/i.test(file.name)

    if (!isAcceptedType) {
      setResumeFile(null)
      setFileError('Please upload a PDF, DOC, or DOCX file.')
      e.target.value = ''
      return
    }

    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setResumeFile(null)
      setFileError(`File must be ${MAX_FILE_MB}MB or smaller.`)
      e.target.value = ''
      return
    }

    setResumeFile(file)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (parseInt(captchaAnswer) !== captchaSolution) {
      setCaptchaError('Incorrect answer. Please try again.')
      generateCaptcha()
      return
    }

    if (!formData.portfolio.trim() && !resumeFile) {
      setFileError('Add a Google Drive / Dropbox / OneDrive link or upload your resume.')
      return
    }

    setLoading(true)
    setCaptchaError('')
    setSubmitError('')
    setFileError('')

    try {
      let resumeFileBase64 = ''
      let resumeFileName = ''
      let resumeFileMime = ''

      if (resumeFile) {
        resumeFileBase64 = await readFileAsBase64(resumeFile)
        resumeFileName = resumeFile.name
        resumeFileMime = resumeFile.type || 'application/octet-stream'
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          message: [
            formData.message,
            formData.linkedin ? `LinkedIn: ${formData.linkedin}` : '',
            formData.portfolio ? `Resume / Drive link: ${formData.portfolio}` : '',
            resumeFileName ? `Resume file uploaded: ${resumeFileName}` : ''
          ]
            .filter(Boolean)
            .join('\n'),
          resumeLink: formData.portfolio.trim() || undefined,
          resumeFileName: resumeFileName || undefined,
          resumeFileMime: resumeFileMime || undefined,
          resumeFileBase64: resumeFileBase64 || undefined,
          source: 'careers',
          formType: 'csdigitaltech-careers',
          formId: formId || formData.projectType.toLowerCase().replace(/\s+/g, '_')
        })
      })

      if (res.ok) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: selectedRole || '',
          linkedin: '',
          portfolio: '',
          message: ''
        })
        setResumeFile(null)
        generateCaptcha()
      } else {
        setSubmitError('Something went wrong. Please try again or email us at info@csdigitaltech.com.')
      }
    } catch {
      setSubmitError('Unable to send your application. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='bg-white rounded-xl border shadow-md p-6 sm:p-8 w-full'>
      <h3 className='text-2xl font-bold text-gray-800 mb-2'>Apply now</h3>
      <p className='text-gray-600 mb-6'>
        Share a short introduction and your resume via Google Drive, Dropbox, OneDrive, or file upload.
      </p>

      {submitted && (
        <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6'>
          Thank you. Your application has been sent. We will reach out if there is a match.
        </div>
      )}

      {submitError && (
        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6'>
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-5'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div>
            <label className='block text-gray-700 font-medium mb-1' htmlFor='career-name'>Full name</label>
            <input
              id='career-name'
              type='text'
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 outline-none bg-white'
              placeholder='Your name'
            />
          </div>
          <div>
            <label className='block text-gray-700 font-medium mb-1' htmlFor='career-email'>Email</label>
            <input
              id='career-email'
              type='email'
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 outline-none bg-white'
              placeholder='you@email.com'
            />
          </div>
          <div>
            <label className='block text-gray-700 font-medium mb-1' htmlFor='career-phone'>Phone</label>
            <input
              id='career-phone'
              type='tel'
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 outline-none bg-white'
              placeholder='Your phone number'
            />
          </div>
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-1' htmlFor='career-role'>Role</label>
          <select
            id='career-role'
            required
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 outline-none bg-white'
          >
            {roles.length === 0 ? (
              <option value=''>Select a role from Open positions</option>
            ) : (
              roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))
            )}
          </select>
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-1' htmlFor='career-linkedin'>LinkedIn</label>
          <input
            id='career-linkedin'
            type='text'
            value={formData.linkedin}
            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 outline-none bg-white'
            placeholder='https://linkedin.com/in/you'
          />
        </div>

        <div className='space-y-4 rounded-xl border border-gray-200 bg-gray-50 p-4'>
          <div>
            <p className='text-sm font-semibold text-gray-800 mb-1'>Resume access</p>
            <p className='text-sm text-gray-600'>
              Paste a shareable Google Drive, Dropbox, or OneDrive link (set to &quot;Anyone with the link&quot;),
              or upload your resume below. Either option works.
            </p>
          </div>

          <div>
            <label className='block text-gray-700 font-medium mb-1' htmlFor='career-portfolio'>
              Google Drive / Dropbox / OneDrive link
            </label>
            <input
              id='career-portfolio'
              type='text'
              value={formData.portfolio}
              onChange={(e) => {
                setFormData({ ...formData, portfolio: e.target.value })
                if (fileError) setFileError('')
              }}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 outline-none bg-white'
              placeholder='https://drive.google.com/... or Dropbox / OneDrive link'
            />
          </div>

          <div>
            <label className='block text-gray-700 font-medium mb-1' htmlFor='career-resume-file'>
              Or upload resume (PDF, DOC, DOCX — max {MAX_FILE_MB}MB)
            </label>
            <input
              id='career-resume-file'
              type='file'
              accept='.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
              onChange={handleFileChange}
              className='w-full text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-red-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-red-700'
            />
            {resumeFile && (
              <p className='text-sm text-gray-600 mt-2'>Selected: {resumeFile.name}</p>
            )}
          </div>

          {fileError && <p className='text-red-600 text-sm'>{fileError}</p>}
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-1' htmlFor='career-message'>Why Cornerstone?</label>
          <textarea
            id='career-message'
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 outline-none bg-white'
            placeholder='Tell us about your experience and what you want to work on.'
          />
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-1' htmlFor='career-captcha'>
            Security verification
          </label>
          <div className='flex items-center space-x-3'>
            <div className='bg-gray-100 px-4 py-2 rounded-md font-mono text-lg font-bold text-gray-800 min-w-[120px] text-center'>
              {captchaProblem}
            </div>
            <button
              type='button'
              onClick={generateCaptcha}
              aria-label='Refresh security verification question'
              className='text-red-600 hover:text-red-700 text-sm font-medium'
            >
              Refresh
            </button>
          </div>
          <input
            id='career-captcha'
            type='number'
            required
            value={captchaAnswer}
            onChange={(e) => setCaptchaAnswer(e.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 outline-none mt-2 bg-white'
            placeholder='Enter your answer'
          />
          {captchaError && <p className='text-red-600 text-sm mt-1'>{captchaError}</p>}
        </div>

        <button
          type='submit'
          disabled={loading}
          className='bg-red-600 hover:bg-red-700 disabled:opacity-70 text-white font-semibold py-3 px-6 rounded-md transition duration-200 w-full'
        >
          {loading ? 'Sending...' : 'Submit application'}
        </button>
      </form>
    </div>
  )
}
