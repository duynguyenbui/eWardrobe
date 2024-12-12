import { ReactNode } from 'react'
import { Toaster } from '@/components/ui/sonner'
import { Inter as FontSans } from 'next/font/google'

type LayoutProps = {
  children: ReactNode
}

import '../globals.css'
import { Navbar } from '@/components/nav-bar'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Navbar />
        <main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">{children}</div>
        </main>
        <Toaster />
      </body>
    </html>
  )
}

export default Layout
