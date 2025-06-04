// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'es'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const localeToRedirect = defaultLocale; 
  request.nextUrl.pathname = `/${localeToRedirect}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and static files (images, assets, favicon.ico)
    '/((?!_next|api|images|assets|favicon.ico).*)',
    // Optional: only run on root (/) URL if you want to redirect only the homepage
    // '/' 
  ],
};
