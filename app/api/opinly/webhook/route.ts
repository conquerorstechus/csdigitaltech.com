import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

const BLOG_PREFIX = process.env.OPINLY_BLOG_PREFIX || '/blog';
const SITE_URL = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://www.conquerorstech.com';

function normalizePath(pathname: string) {
  if (!pathname || pathname === '/') return '/';
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

function toBlogRoute(pathname: string) {
  const normalized = normalizePath(pathname);
  if (normalized === BLOG_PREFIX || normalized === `${BLOG_PREFIX}/`) {
    return BLOG_PREFIX;
  }
  return normalized;
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const paths = Array.isArray(body?.data?.paths) ? body.data.paths : [];

  if (!paths.length) {
    return NextResponse.json({ ok: true, revalidated: [] });
  }

  const revalidated: string[] = [];

  for (const rawPath of paths) {
    const pathname = normalizePath(rawPath);

    if (pathname === '/' || pathname === '/sitemap.xml') {
      revalidatePath(pathname);
      revalidated.push(pathname);
      continue;
    }

    if (pathname.startsWith(`${BLOG_PREFIX}/category/`)) {
      revalidatePath(pathname);
      revalidated.push(pathname);
      continue;
    }

    if (pathname.startsWith(`${BLOG_PREFIX}/authors/`)) {
      revalidatePath(pathname);
      revalidated.push(pathname);
      continue;
    }

    if (pathname.startsWith(`${BLOG_PREFIX}/tag/`)) {
      revalidatePath(pathname);
      revalidated.push(pathname);
      continue;
    }

    if (pathname.startsWith(`${BLOG_PREFIX}/`)) {
      revalidatePath(pathname);
      revalidated.push(pathname);
      continue;
    }

    if (pathname.startsWith('/')) {
      revalidatePath(pathname);
      revalidated.push(pathname);
    }
  }

  revalidatePath(BLOG_PREFIX);
  revalidatePath('/sitemap.xml');
  revalidated.push(BLOG_PREFIX, '/sitemap.xml');

  return NextResponse.json({ ok: true, revalidated: Array.from(new Set(revalidated)), siteUrl: SITE_URL });
}
