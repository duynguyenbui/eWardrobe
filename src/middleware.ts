import { NextRequest, NextResponse } from 'next/server'
import { getServerSideUser } from '@/lib/payload'

export async function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req
  const user = await getServerSideUser(cookies)
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
