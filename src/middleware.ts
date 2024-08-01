import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('authjs.session-token')
  const pathname = request.nextUrl.pathname

  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL(getUrl('/app')))
  }

  if (pathname.includes('/app') && !token) {
    return NextResponse.redirect(new URL(getUrl('/login')))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

function getUrl(path?: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || ''
  const normalizedPath = path && !path.startsWith('/') ? `/${path}` : path || ''
  return `${baseUrl}${normalizedPath}`
}