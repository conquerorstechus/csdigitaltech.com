'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  getApplicationFieldErrorSummary,
  getCareersFieldErrors,
  getResumeVerificationStatus,
  isCareersApplicationValid
} from '@/lib/careers-form-validation'
import { formatCareersPhone, PHONE_COUNTRY_CODES } from '@/lib/careers-phone-countries'

const MAX_FILE_MB = 5

const ACCEPTED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
]

type VerificationStatus = 'required' | 'checking' | 'failed' | 'verified'

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

function VerificationStatusMessage({ status }: { status: VerificationStatus }) {
  if (status === 'checking') {
    return <p className='text-sm text-gray-600 mt-2'>Checking verification...</p>
  }

  if (status === 'verified') {
    return <p className='text-sm text-green-700 mt-2 font-medium'>✅ Verified</p>
  }

  if (status === 'failed') {
    return (
      <p className='text-sm text-red-600 mt-2 font-medium'>
        ❌ Verification failed. Please check your details and try again.
      </p>
    )
  }

  return <p className='text-sm text-amber-700 mt-2 font-medium'>Verification required</p>
}

export default function CareerApplyForm({ selectedRole = '', formId = '' }: { selectedRole?: string; formId?: string }) {
  const roles = selectedRole ? [selectedRole] : []

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phoneNumber: '',
    projectType: selectedRole || '',
    linkedin: '',
    portfolio: '',
    message: ''
  })
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [resumeFileName, setResumeFileName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [fileError, setFileError] = useState('')
  const [loading, setLoading] = useState(false)
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [captchaProblem, setCaptchaProblem] = useState('')
  const [captchaToken, setCaptchaToken] = useState('')
  const [captchaError, setCaptchaError] = useState('')
  const [securityStatus, setSecurityStatus] = useState<VerificationStatus>('required')
  const [captchaLoading, setCaptchaLoading] = useState(true)
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const loadCaptcha = useCallback(async () => {
    setCaptchaLoading(true)
    setCaptchaAnswer('')
    setCaptchaError('')
    setSecurityStatus('required')

    try {
      const res = await fetch('/api/careers/captcha')
      if (!res.ok) {
        throw new Error('Failed to load verification challenge')
      }

      const data = await res.json()
      setCaptchaProblem(data.problem)
      setCaptchaToken(data.token)
    } catch {
      setCaptchaError('Unable to load security verification. Please refresh the page.')
      setCaptchaProblem('')
      setCaptchaToken('')
    } finally {
      setCaptchaLoading(false)
    }
  }, [])

  useEffect(() => {
    loadCaptcha()
  }, [loadCaptcha])

  useEffect(() => {
    if (selectedRole) {
      setFormData(prev => ({ ...prev, projectType: selectedRole }))
    }
  }, [selectedRole])

  const fullPhone = formatCareersPhone(formData.countryCode, formData.phoneNumber)

  const fieldErrors = useMemo(
    () =>
      getCareersFieldErrors({
        name: formData.name,
        email: formData.email,
        phone: fullPhone,
        projectType: formData.projectType,
        linkedin: formData.linkedin,
        portfolio: formData.portfolio,
        message: formData.message,
        hasResumeFile: Boolean(resumeFile),
        fileError
      }),
    [formData, resumeFile, fileError, fullPhone]
  )

  const resumeVerification = useMemo(
    () =>
      getResumeVerificationStatus({
        portfolio: formData.portfolio,
        hasResumeFile: Boolean(resumeFile),
        resumeFileName: resumeFile?.name || resumeFileName,
        fileError
      }),
    [formData.portfolio, resumeFile, resumeFileName, fileError]
  )

  const applicationFieldErrors = useMemo(() => {
    const { resume, ...rest } = fieldErrors
    return rest
  }, [fieldErrors])

  const applicationReady = isCareersApplicationValid(fieldErrors)
  const applicationDetailsReady = Object.keys(applicationFieldErrors).length === 0

  const hasStartedApplicationDetails = Boolean(
    formData.name ||
      formData.email ||
      formData.phoneNumber ||
      formData.linkedin ||
      formData.message
  )

  const applicationStatus: VerificationStatus = applicationReady
    ? 'verified'
    : hasStartedApplicationDetails
      ? 'failed'
      : 'required'

  const applicationErrorSummary = getApplicationFieldErrorSummary(fieldErrors)

  const showFieldError = (field: keyof typeof fieldErrors, value = '') =>
    Boolean(fieldErrors[field] && (touched[field] || value.trim().length > 0))

  const markTouched = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }))
  }

  const invalidInputClass = (field: keyof typeof fieldErrors, value = '') =>
    showFieldError(field, value) ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-red-400'

  useEffect(() => {
    if (!captchaToken || !captchaAnswer.trim()) {
      setSecurityStatus('required')
      setCaptchaError('')
      return
    }

    const timer = window.setTimeout(async () => {
      setSecurityStatus('checking')
      setCaptchaError('')

      try {
        const res = await fetch('/api/careers/verify-captcha', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            token: captchaToken,
            answer: captchaAnswer
          })
        })

        const data = await res.json().catch(() => ({}))

        if (res.ok && data.verified) {
          setSecurityStatus('verified')
          setCaptchaError('')
          return
        }

        setSecurityStatus('failed')
        setCaptchaError(data.error || 'Verification failed. Please check your details and try again.')
      } catch {
        setSecurityStatus('failed')
        setCaptchaError('Unable to verify your answer. Please try again.')
      }
    }, 400)

    return () => window.clearTimeout(timer)
  }, [captchaAnswer, captchaToken])

  const canSubmit =
    applicationReady &&
    resumeVerification.status === 'verified' &&
    securityStatus === 'verified' &&
    !loading &&
    !captchaLoading

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFileError('')

    if (!file) {
      setResumeFile(null)
      setResumeFileName('')
      return
    }

    const isAcceptedType =
      ACCEPTED_TYPES.includes(file.type) ||
      /\.(pdf|doc|docx)$/i.test(file.name) ||
      (!file.type && /\.(pdf|doc|docx)$/i.test(file.name))

    if (!isAcceptedType) {
      setResumeFile(null)
      setResumeFileName('')
      setFileError('Please upload a PDF, DOC, or DOCX file.')
      e.target.value = ''
      return
    }

    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setResumeFile(null)
      setResumeFileName('')
      setFileError(`File must be ${MAX_FILE_MB}MB or smaller.`)
      e.target.value = ''
      return
    }

    setResumeFile(file)
    setResumeFileName(file.name)
    setFileError('')
    markTouched('resume')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setTouched({
      name: true,
      email: true,
      phone: true,
      projectType: true,
      linkedin: true,
      portfolio: true,
      message: true,
      resume: true
    })

    if (!applicationReady) {
      const firstError = Object.values(fieldErrors)[0]
      if (fieldErrors.resume) setFileError(fieldErrors.resume)
      if (firstError) setSubmitError(firstError)
      return
    }

    if (securityStatus !== 'verified') {
      setCaptchaError('Please complete security verification before submitting.')
      return
    }

    setLoading(true)
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
          phone: fullPhone,
          projectType: formData.projectType,
          whyCornerstone: formData.message,
          linkedin: formData.linkedin.trim() || undefined,
          resumeLink: formData.portfolio.trim() || undefined,
          resumeFileName: resumeFileName || undefined,
          resumeFileMime: resumeFileMime || undefined,
          resumeFileBase64: resumeFileBase64 || undefined,
          captchaToken,
          captchaAnswer,
          source: 'careers',
          formType: 'csdigitaltech-careers',
          formId: formId || formData.projectType.toLowerCase().replace(/\s+/g, '_')
        })
      })

      const data = await res.json().catch(() => ({}))

      if (res.ok) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          countryCode: '+1',
          phoneNumber: '',
          projectType: selectedRole || '',
          linkedin: '',
          portfolio: '',
          message: ''
        })
        setResumeFile(null)
        setResumeFileName('')
        await loadCaptcha()
      } else if (res.status === 400 && data.field === 'captcha') {
        setSecurityStatus('failed')
        setCaptchaError(data.error || 'Security verification failed. Please try again.')
        await loadCaptcha()
      } else if (res.status === 400 && data.field === 'resume') {
        setFileError(data.error || 'Add a Google Drive / Dropbox / OneDrive link or upload your resume.')
      } else {
        setSubmitError(data.error || 'Something went wrong. Please try again or email us at info@csdigitaltech.com.')
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

      {submitError && (
        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6'>
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-gray-700 font-medium mb-1' htmlFor='career-name'>Full name</label>
            <input
              id='career-name'
              type='text'
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onBlur={() => markTouched('name')}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 outline-none bg-white ${invalidInputClass('name', formData.name)}`}
              placeholder='Your name'
            />
            {showFieldError('name', formData.name) && (
              <p className='text-red-600 text-sm mt-1'>{fieldErrors.name}</p>
            )}
          </div>
          <div>
            <label className='block text-gray-700 font-medium mb-1' htmlFor='career-email'>Email</label>
            <input
              id='career-email'
              type='email'
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onBlur={() => markTouched('email')}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 outline-none bg-white ${invalidInputClass('email', formData.email)}`}
              placeholder='you@email.com'
            />
            {showFieldError('email', formData.email) && (
              <p className='text-red-600 text-sm mt-1'>{fieldErrors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-1' htmlFor='career-phone'>Phone</label>
          <div className='flex gap-2'>
            <select
              id='career-country-code'
              value={formData.countryCode}
              onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
              onBlur={() => markTouched('phone')}
              className={`w-[120px] shrink-0 px-2 py-2 border rounded-md focus:ring-2 outline-none bg-white ${invalidInputClass('phone', formData.phoneNumber)}`}
              aria-label='Country code'
            >
              {PHONE_COUNTRY_CODES.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
            <input
              id='career-phone'
              type='tel'
              inputMode='numeric'
              required
              maxLength={10}
              value={formData.phoneNumber}
              onChange={(e) => {
                const digits = e.target.value.replace(/\D/g, '').slice(0, 10)
                setFormData({ ...formData, phoneNumber: digits })
              }}
              onBlur={() => markTouched('phone')}
              className={`flex-1 w-full px-4 py-2 border rounded-md focus:ring-2 outline-none bg-white ${invalidInputClass('phone', formData.phoneNumber)}`}
              placeholder='10-digit number'
            />
          </div>
          {showFieldError('phone', formData.phoneNumber) && (
            <p className='text-red-600 text-sm mt-1'>{fieldErrors.phone}</p>
          )}
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
            onBlur={() => markTouched('linkedin')}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 outline-none bg-white ${invalidInputClass('linkedin', formData.linkedin)}`}
            placeholder='https://linkedin.com/in/you'
          />
          {showFieldError('linkedin', formData.linkedin) && (
            <p className='text-red-600 text-sm mt-1'>{fieldErrors.linkedin}</p>
          )}
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
              type='url'
              value={formData.portfolio}
              onChange={(e) => {
                setFormData({ ...formData, portfolio: e.target.value })
                if (fileError) setFileError('')
              }}
              onBlur={() => markTouched('portfolio')}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 outline-none bg-white ${invalidInputClass('portfolio', formData.portfolio)}`}
              placeholder='https://drive.google.com/... or Dropbox / OneDrive link'
            />
            {showFieldError('portfolio', formData.portfolio) && (
              <p className='text-red-600 text-sm mt-1'>{fieldErrors.portfolio}</p>
            )}
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
            {(resumeFile || resumeFileName) && (
              <p className='text-sm text-gray-600 mt-2'>Selected: {resumeFile?.name || resumeFileName}</p>
            )}
          </div>

          <div className='rounded-md border border-gray-200 bg-white px-3 py-2'>
            <p className='text-sm font-semibold text-gray-800'>Resume verification</p>
            <VerificationStatusMessage status={resumeVerification.status} />
            {resumeVerification.status === 'verified' && (
              <p className='text-sm text-green-700 mt-1'>{resumeVerification.message}</p>
            )}
            {resumeVerification.status === 'failed' && (
              <p className='text-sm text-red-600 mt-1'>{resumeVerification.message}</p>
            )}
            {resumeVerification.status === 'required' && (
              <p className='text-sm text-amber-700 mt-1'>{resumeVerification.message}</p>
            )}
          </div>

          {showFieldError('resume') && fieldErrors.resume && (
            <p className='text-red-600 text-sm'>{fieldErrors.resume}</p>
          )}
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-1' htmlFor='career-message'>Why Cornerstone?</label>
          <textarea
            id='career-message'
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            onBlur={() => markTouched('message')}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 outline-none bg-white ${invalidInputClass('message', formData.message)}`}
            placeholder='Tell us about your experience and what you want to work on.'
          />
          {showFieldError('message', formData.message) && (
            <p className='text-red-600 text-sm mt-1'>{fieldErrors.message}</p>
          )}
        </div>

        <div className='rounded-md border border-gray-200 bg-gray-50 px-3 py-3'>
          <p className='text-sm font-semibold text-gray-800'>Application verification</p>
          <VerificationStatusMessage status={applicationDetailsReady ? 'verified' : applicationStatus} />
          {!applicationDetailsReady && applicationErrorSummary.length > 0 && (
            <ul className='mt-2 space-y-1 text-sm text-red-600 list-disc pl-5'>
              {applicationErrorSummary.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {applicationDetailsReady && resumeVerification.status !== 'verified' && (
            <p className='text-sm text-amber-700 mt-2'>Attach your resume above to complete application verification.</p>
          )}
        </div>

        <div>
          <label className='block text-gray-700 font-medium mb-1' htmlFor='career-captcha'>
            Security verification
          </label>
          <div className='flex items-center space-x-3'>
            <div className='bg-gray-100 px-4 py-2 rounded-md font-mono text-lg font-bold text-gray-800 min-w-[120px] text-center'>
              {captchaLoading ? 'Loading...' : captchaProblem || 'Unavailable'}
            </div>
            <button
              type='button'
              onClick={loadCaptcha}
              disabled={captchaLoading}
              aria-label='Refresh security verification question'
              className='text-red-600 hover:text-red-700 disabled:opacity-60 text-sm font-medium'
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
            disabled={!captchaToken || captchaLoading}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 outline-none mt-2 bg-white disabled:bg-gray-100'
            placeholder='Enter your answer'
          />
          <VerificationStatusMessage status={securityStatus} />
          {captchaError && <p className='text-red-600 text-sm mt-1'>{captchaError}</p>}
        </div>

        <button
          type='submit'
          disabled={!canSubmit}
          className='bg-red-600 hover:bg-red-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-md transition duration-200 w-full'
        >
          {loading ? 'Sending...' : 'Submit application'}
        </button>

        {!canSubmit && !loading && (
          <p className='text-sm text-gray-600 text-center'>
            {resumeVerification.status !== 'verified'
              ? 'Upload your resume or add a shareable link to continue.'
              : applicationStatus === 'failed'
                ? 'Fix the highlighted fields and complete security verification to enable submission.'
                : 'Complete application and security verification to enable submission.'}
          </p>
        )}

        {submitted && (
          <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded'>
            Thank you. Your application has been sent. We will reach out if there is a match.
          </div>
        )}
      </form>
    </div>
  )
}
