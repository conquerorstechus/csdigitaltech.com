import { NextResponse } from 'next/server'
import { validateCaptchaAnswer } from '@/lib/careers-verification'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { token, answer } = body

    const verified = validateCaptchaAnswer(String(token || ''), String(answer ?? ''))

    if (!verified) {
      return NextResponse.json(
        { verified: false, error: 'Verification failed. Please check your details and try again.' },
        { status: 400 }
      )
    }

    return NextResponse.json({ verified: true })
  } catch (err) {
    console.error('Careers captcha verification error:', err)
    return NextResponse.json({ verified: false, error: 'Unable to verify security challenge' }, { status: 500 })
  }
}
