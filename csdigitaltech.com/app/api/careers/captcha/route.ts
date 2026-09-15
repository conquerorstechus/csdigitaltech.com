import { NextResponse } from 'next/server'
import { generateCaptchaChallenge } from '@/lib/careers-verification'

export async function GET() {
  try {
    const challenge = generateCaptchaChallenge()
    return NextResponse.json(challenge)
  } catch (err) {
    console.error('Careers captcha generation error:', err)
    return NextResponse.json({ error: 'Unable to generate verification challenge' }, { status: 500 })
  }
}
