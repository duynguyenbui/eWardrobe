import { getServerSideUser } from '@/lib/payload'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const StatisticsPage = async () => {
  const nextCookies = await cookies()
  const { user } = await getServerSideUser(nextCookies)

  if (!(user?.role === 'admin')) {
    redirect('/listings')
  }

  return <div>StatisticsPage</div>
}

export default StatisticsPage
