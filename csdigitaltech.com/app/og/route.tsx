import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { OG_IMAGE_SIZE } from '@/lib/og'

export const runtime = 'nodejs'

const DEFAULT_TITLE = 'Software, AI & Digital Marketing for Growing Businesses'
const DEFAULT_DESC =
  'Websites, custom software, cloud, AI automation, CRM and digital marketing from a Tampa, Florida team.'
const CHIPS = ['Web & Software', 'AI & Automation', 'Cloud', 'Digital Marketing']

function clamp(value: string | null, max: number, fallback: string) {
  const text = (value ?? '').replace(/\s+/g, ' ').trim() || fallback
  return text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text
}

function titleSize(title: string) {
  if (title.length <= 28) return 80
  if (title.length <= 50) return 66
  if (title.length <= 75) return 56
  return 48
}

async function asset(file: string) {
  return readFile(path.join(process.cwd(), file))
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = clamp(searchParams.get('title'), 110, DEFAULT_TITLE)
  const desc = clamp(searchParams.get('desc'), 150, DEFAULT_DESC)

  const [bold, medium, logo] = await Promise.all([
    asset('assets/fonts/inter-latin-800-normal.woff'),
    asset('assets/fonts/inter-latin-500-normal.woff'),
    asset('public/cornerstone-logo.png'),
  ])
  const logoSrc = `data:image/jpeg;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '48px 72px',
          background: 'linear-gradient(135deg, #262152 0%, #1a1a2e 70%, #12121f 100%)',
          fontFamily: 'Inter',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        {/* accents */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 18, background: '#dc2626', display: 'flex' }} />
        <div
          style={{
            position: 'absolute',
            right: -140,
            top: -160,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: 'rgba(220,38,38,0.22)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 120,
            bottom: -220,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: 'rgba(255,187,27,0.10)',
            display: 'flex',
          }}
        />

        {/* top: logo */}
        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              background: '#ffffff',
              borderRadius: 18,
              padding: '10px 22px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.35)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={297} height={100} alt="" />
          </div>
        </div>

        {/* middle: headline + description */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 1000 }}>
          <div
            style={{
              display: 'flex',
              fontSize: titleSize(title),
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>
          <div style={{ display: 'flex', width: 110, height: 8, background: '#FFBB1B', borderRadius: 4, margin: '24px 0 20px' }} />
          <div style={{ display: 'flex', fontSize: 30, fontWeight: 500, lineHeight: 1.35, color: '#d9d6ef' }}>{desc}</div>
        </div>

        {/* bottom: chips + domain */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 12 }}>
            {CHIPS.map((chip) => (
              <div
                key={chip}
                style={{
                  display: 'flex',
                  fontSize: 20,
                  fontWeight: 500,
                  padding: '8px 18px',
                  borderRadius: 9999,
                  border: '2px solid rgba(255,255,255,0.28)',
                  color: '#ffffff',
                }}
              >
                {chip}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', fontSize: 28, fontWeight: 800, color: '#FFBB1B' }}>csdigitaltech.com</div>
        </div>
      </div>
    ),
    {
      ...OG_IMAGE_SIZE,
      fonts: [
        { name: 'Inter', data: bold, weight: 800, style: 'normal' },
        { name: 'Inter', data: medium, weight: 500, style: 'normal' },
      ],
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
      },
    },
  )
}
