import { User } from '../payload-types'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

export const getServerSideUser = async (
  cookies: NextRequest['cookies'] | ReadonlyRequestCookies,
) => {
  const token = cookies.get('payload-token')?.value

  if (!token) {
    return { user: null }
  }

  const meRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  })

  const { user } = (await meRes.json()) as {
    user: User | null
  }

  return { user }
}

export const currentUser = async () => {
  const nextCookies = await cookies()
  const { user } = await getServerSideUser(nextCookies)

  return { user }
}

export const isAdmin = async () => {
  const { user } = await currentUser()

  return ['super_admin', 'admin'].includes(user?.role || 'user')
}
