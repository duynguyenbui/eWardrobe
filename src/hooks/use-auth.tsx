import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import axios from 'axios'
import {
  INTERNAL_ERROR_MESSAGE,
  LOGIN_FAILURE_MESSAGE,
  LOGIN_SUCCESS_MESSAGE,
  LOGOUT_FAILURE_MESSAGE,
  LOGOUT_SUCCESS_MESSAGE,
} from '@/constants'

export const useAuth = () => {
  const router = useRouter()

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      if (res.status !== 200) {
        toast.error(LOGIN_FAILURE_MESSAGE)
      } else {
        toast.success(LOGIN_SUCCESS_MESSAGE)
        router.push('/')
      }
      router.refresh()
    } catch (error) {
      toast.error(INTERNAL_ERROR_MESSAGE)
    }
  }

  const logout = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`,
        {},
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      if (res.status !== 200) {
        toast.error(LOGOUT_FAILURE_MESSAGE)
      } else {
        toast.success(LOGOUT_SUCCESS_MESSAGE)
        router.push('/')
      }
      router.refresh()
    } catch (err) {
      toast.error(LOGOUT_FAILURE_MESSAGE)
    }
  }

  return { logout, login }
}
