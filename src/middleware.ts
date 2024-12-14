import { NextRequest, NextResponse } from 'next/server'
import { getServerSideUser } from './lib/payload'
import { cookies } from 'next/headers'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const nextCookies = await cookies()
  const { user } = await getServerSideUser(nextCookies)

  if (pathname.includes('/admin') && !['super_admin', 'admin'].includes(user?.role || 'user')) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SERVER_URL}/`)
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
