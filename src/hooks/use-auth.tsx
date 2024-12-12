import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import axios from 'axios'

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
        toast.error("Couldn't sign in, please try again.")
      } else {
        toast.success('Signed in successfully')
        router.push('/')
      }
      router.refresh()
    } catch (error) {
      toast.error('Something went wrong while logging in')
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
        toast.error("Couldn't sign out, please try again.")
      } else {
        toast.success('Signed out successfully')
        router.push('/')
      }
      router.refresh()
    } catch (err) {
      toast.error("Couldn't sign out, please try again.")
    }
  }

  return { logout, login }
}
