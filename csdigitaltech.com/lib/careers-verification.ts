import crypto from 'crypto'
import { getCareersFieldErrors, isCareersApplicationValid } from '@/lib/careers-form-validation'

const CAPTCHA_TTL_MS = 10 * 60 * 1000

function getCaptchaSecret(): string {
  return process.env.CAREERS_CAPTCHA_SECRET || process.env.CAPTCHA_SECRET || 'csdigitaltech-careers-dev-secret'
}

export type CaptchaChallenge = {
  problem: string
  token: string
}

export function generateCaptchaChallenge(): CaptchaChallenge {
  const num1 = Math.floor(Math.random() * 10) + 1
  const num2 = Math.floor(Math.random() * 10) + 1
  const operators = ['+', '-', '×'] as const
  const operator = operators[Math.floor(Math.random() * operators.length)]

  let solution = num1 + num2
  if (operator === '-') solution = num1 - num2
  if (operator === '×') solution = num1 * num2

  const exp = Date.now() + CAPTCHA_TTL_MS
  const signature = crypto
    .createHmac('sha256', getCaptchaSecret())
    .update(`${solution}:${exp}`)
    .digest('hex')

  const token = Buffer.from(JSON.stringify({ exp, signature })).toString('base64url')

  return {
    problem: `${num1} ${operator} ${num2} = ?`,
    token
  }
}

export function validateCaptchaAnswer(token: string, answer: string): boolean {
  if (!token || answer === undefined || answer === null || String(answer).trim() === '') {
    return false
  }

  try {
    const { exp, signature } = JSON.parse(Buffer.from(token, 'base64url').toString('utf8')) as {
      exp: number
      signature: string
    }

    if (!exp || !signature || Date.now() > exp) {
      return false
    }

    const parsedAnswer = Number.parseInt(String(answer).trim(), 10)
    if (Number.isNaN(parsedAnswer)) {
      return false
    }

    const expectedSignature = crypto
      .createHmac('sha256', getCaptchaSecret())
      .update(`${parsedAnswer}:${exp}`)
      .digest('hex')

    return signature === expectedSignature
  } catch {
    return false
  }
}

export type CareersApplicationInput = {
  name?: string
  email?: string
  phone?: string
  projectType?: string
  whyCornerstone?: string
  message?: string
  linkedin?: string
  resumeLink?: string
  resumeFileName?: string
  captchaToken?: string
  captchaAnswer?: string
}

export type CareersValidationResult =
  | { valid: true }
  | { valid: false; error: string; field?: string }

export function validateCareersApplication(input: CareersApplicationInput): CareersValidationResult {
  const fieldErrors = getCareersFieldErrors({
    name: String(input.name || ''),
    email: String(input.email || ''),
    phone: String(input.phone || ''),
    projectType: String(input.projectType || ''),
    linkedin: String(input.linkedin || ''),
    portfolio: String(input.resumeLink || ''),
    message: String(input.whyCornerstone || input.message || ''),
    hasResumeFile: Boolean(String(input.resumeFileName || '').trim())
  })

  if (!isCareersApplicationValid(fieldErrors)) {
    const [field, error] = Object.entries(fieldErrors)[0]
    return { valid: false, error, field }
  }

  if (!validateCaptchaAnswer(String(input.captchaToken || ''), String(input.captchaAnswer || ''))) {
    return {
      valid: false,
      error: 'Security verification failed. Please check your answer and try again.',
      field: 'captcha'
    }
  }

  return { valid: true }
}
