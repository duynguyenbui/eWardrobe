'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { User } from '@/payload-types'
import { Mail, Calendar } from 'lucide-react'
import { useEffect, useState } from 'react'
import { date } from '@/lib/utils'
import { toast } from 'sonner'
import { GET_PROFILE_FAILURE_MESSAGE, GET_PROFILE_SUCCESS_MESSAGE } from '@/constants/message'

interface ProfileCardProps {
  user?: User
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  useEffect(() => {
    if (user) {
      toast.success(GET_PROFILE_SUCCESS_MESSAGE)
    } else {
      toast.error(GET_PROFILE_FAILURE_MESSAGE)
    }
  }, [user])

  if (!user) {
    return (
      <Card className="overflow-hidden shadow-md">
        <CardContent>
          <h1 className="text-2xl font-bold">Profile</h1>
          <p className="text-gray-500">No user found</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden shadow-md">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-32" />
      <CardContent className="relative pt-16 pb-8 px-6">
        <Avatar className="absolute -top-16 left-6 h-32 w-32 border-4">
          <AvatarImage
            src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.email}`}
            alt={user.email}
          />
          <AvatarFallback>{user.email.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold">{user.email}</h1>
            <Badge className={`mt-2`}>{user.role.toUpperCase()}</Badge>
          </div>
          <p className="text-sm text-gray-500">ID: {user.id}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-gray-400" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-400" />
              <span>Joined {date(user.createdAt)}</span>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Account Details</h3>
            <p className="text-sm text-gray-600">Last updated: {date(user.updatedAt)}</p>
            {user.loginAttempts !== null && (
              <p className="text-sm text-gray-600">Login attempts: {user.loginAttempts}</p>
            )}
            {user.lockUntil && (
              <p className="text-sm text-red-600">Account locked until: {date(user.lockUntil)}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
