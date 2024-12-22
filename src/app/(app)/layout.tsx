import { ReactNode } from 'react'
import { Toaster } from '@/components/ui/sonner'

type LayoutProps = {
  children: ReactNode
}

import '../global.css'
import { Navbar } from '@/components/nav-bar'
import { Metadata } from 'next'
import { ThemeProvider } from '@/components/provider/theme-provider'
import { ModalProvider } from '@/components/provider/modal-provider'

export const metadata: Metadata = {
  title: 'eWardrobe',
  description: 'eWardrobe is a clothing store for disable people',
  creator: 'eWardrobe',
  icons: {
    icon: '/favicon.png',
  },
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">{children}</div>
          </main>
          <Toaster position="top-right" theme="system" />
          <ModalProvider />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default Layout
