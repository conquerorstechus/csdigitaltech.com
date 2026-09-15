export type CareersFieldErrors = {
  name?: string
  email?: string
  phone?: string
  projectType?: string
  linkedin?: string
  portfolio?: string
  message?: string
  resume?: string
}

const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const NAME_PATTERN = /^[a-zA-Z][a-zA-Z\s'.-]{1,99}$/
const LINKEDIN_PATTERN = /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub|company)\/[\w%-]+\/?$/i
const RESUME_LINK_PATTERN = /^https?:\/\/.+/i

export function isValidName(name: string): boolean {
  const value = name.trim()
  return value.length >= 2 && NAME_PATTERN.test(value)
}

export function isValidEmail(email: string): boolean {
  const value = email.trim()
  return value.length <= 254 && EMAIL_PATTERN.test(value)
}

export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 10 && digits.length <= 15
}

export function isValidLinkedIn(linkedin: string): boolean {
  const value = linkedin.trim()
  if (!value) return true
  return LINKEDIN_PATTERN.test(value) || RESUME_LINK_PATTERN.test(value)
}

export function isValidResumeLink(link: string): boolean {
  const value = link.trim()
  if (!value) return true

  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

export function isValidWhyCornerstone(message: string): boolean {
  const value = message.trim()
  return value.length >= 10
}

export function getCareersFieldErrors(input: {
  name: string
  email: string
  phone: string
  projectType: string
  linkedin: string
  portfolio: string
  message: string
  hasResumeFile: boolean
  fileError?: string
}): CareersFieldErrors {
  const errors: CareersFieldErrors = {}
  const name = input.name.trim()
  const email = input.email.trim()
  const phone = input.phone.trim()
  const projectType = input.projectType.trim()
  const linkedin = input.linkedin.trim()
  const portfolio = input.portfolio.trim()
  const message = input.message.trim()

  if (!name) {
    errors.name = 'Full name is required.'
  } else if (!isValidName(name)) {
    errors.name = 'Enter your full name using letters only (at least 2 characters).'
  }

  if (!email) {
    errors.email = 'Email is required.'
  } else if (!isValidEmail(email)) {
    errors.email = 'Enter a valid email address (example: you@email.com).'
  }

  if (!phone) {
    errors.phone = 'Phone number is required.'
  } else if (!isValidPhone(phone)) {
    errors.phone = 'Enter a valid phone number with at least 10 digits.'
  }

  if (!projectType) {
    errors.projectType = 'Please select a role.'
  }

  if (linkedin && !isValidLinkedIn(linkedin)) {
    errors.linkedin = 'Enter a valid LinkedIn profile URL (example: https://linkedin.com/in/yourname).'
  }

  if (!portfolio && !input.hasResumeFile) {
    errors.resume = 'Add a Google Drive / Dropbox / OneDrive link or upload your resume.'
  } else if (portfolio && !isValidResumeLink(portfolio)) {
    errors.portfolio = 'Enter a valid resume link starting with http:// or https://.'
  }

  if (input.fileError) {
    errors.resume = input.fileError
  }

  if (!message) {
    errors.message = 'Please tell us why you want to join Cornerstone.'
  } else if (!isValidWhyCornerstone(message)) {
    errors.message = 'Please write at least 10 characters about your experience and interests.'
  }

  return errors
}

export function isCareersApplicationValid(errors: CareersFieldErrors): boolean {
  return Object.keys(errors).length === 0
}

export type ResumeVerificationStatus = 'required' | 'failed' | 'verified'

export function getResumeVerificationStatus(input: {
  portfolio: string
  hasResumeFile: boolean
  resumeFileName?: string
  fileError?: string
}): { status: ResumeVerificationStatus; message: string } {
  if (input.fileError) {
    return { status: 'failed', message: input.fileError }
  }

  if (input.hasResumeFile) {
    const label = input.resumeFileName ? `Resume file attached: ${input.resumeFileName}` : 'Resume file attached'
    return { status: 'verified', message: label }
  }

  const portfolio = input.portfolio.trim()
  if (portfolio && isValidResumeLink(portfolio)) {
    return { status: 'verified', message: 'Resume link provided' }
  }

  if (portfolio) {
    return {
      status: 'failed',
      message: 'Enter a valid resume link starting with http:// or https://.'
    }
  }

  return {
    status: 'required',
    message: 'Upload a resume file or provide a Google Drive / Dropbox / OneDrive link.'
  }
}

export function getApplicationFieldErrorSummary(errors: CareersFieldErrors): string[] {
  const labels: Record<string, string> = {
    name: 'Full name',
    email: 'Email',
    phone: 'Phone',
    projectType: 'Role',
    linkedin: 'LinkedIn',
    portfolio: 'Resume link',
    message: 'Why Cornerstone?'
  }

  return Object.entries(errors)
    .filter(([field]) => field !== 'resume')
    .map(([field, error]) => `${labels[field] || field}: ${error}`)
}
