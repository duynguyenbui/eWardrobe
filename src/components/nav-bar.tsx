import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Menu, ShoppingCart } from 'lucide-react'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet'
import { getServerSideUser } from '@/lib/payload'
import { cookies } from 'next/headers'
import { getPayloadClient } from '@/get-payload'
import { AuthenticationStatus } from './authentication-status'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Listings', href: '/listings' },
  { name: 'New', href: '/new' },
  { name: 'Sales', href: '/sales' },
  { name: 'Orders', href: '/orders' },
]

export const Navbar = async () => {
  const nextCookies = await cookies()
  const { user } = await getServerSideUser(nextCookies)

  const client = await getPayloadClient()

  return (
    <nav className="border-b">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold mr-8">
            eWardrobe
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </Link>
          <AuthenticationStatus isAuth={Boolean(user)} />
          <Sheet>
            <SheetTitle className="hidden">Menu</SheetTitle>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
