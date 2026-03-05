import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const loginCookie = request.cookies.get('ele_auth');
  const { pathname } = request.nextUrl;

  // 1. Allow access to /login page
  if (pathname.startsWith('/login')) {
    return NextResponse.next();
  }

  // 2. Allow static assets and internal next calls
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/images') || 
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt'
  ) {
    return NextResponse.next();
  }

  // 3. Check for auth cookie
  if (!loginCookie || loginCookie.value !== 'authenticated') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
