import { currentUser, getServerSideUser } from '@/lib/payload'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const StatisticsPage = async () => {
  const { user } = await currentUser()

  if (!(user?.role === 'admin')) {
    redirect('/listings')
  }

  return <div>StatisticsPage</div>
}

export default StatisticsPage
