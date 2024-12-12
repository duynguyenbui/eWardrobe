'use client'

import { LogIn, LogOut, UserMinus2, UserPlus2 } from 'lucide-react'
import { Button, buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'
import { Fragment } from 'react'

export const AuthenticationStatus = ({ isAuth }: { isAuth: boolean }) => {
  const { logout } = useAuth()

  return (
    <Fragment>
      {isAuth ? (
        <Button variant="ghost" onClick={logout}>
          <LogOut className="h-5 w-5 mr-2" />
          Logout
        </Button>
      ) : (
        <div className="space-x-2">
          <Link className={cn(buttonVariants({ variant: 'ghost' }))} href="/login">
            <LogIn className="h-5 w-5 mr-2" />
            Login
          </Link>
          <Link className={cn(buttonVariants())} href="/signup">
            <UserPlus2 className="h-5 w-5 mr-2" />
            Sign Up
          </Link>
        </div>
      )}
    </Fragment>
  )
}
