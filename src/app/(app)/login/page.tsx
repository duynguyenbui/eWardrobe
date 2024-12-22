'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PayloadUserLoginValidator, TPayloadUserLoginValidator } from '@/validators'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import Link from 'next/link'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/use-auth'

const LoginPage = () => {
  const router = useRouter()
  const { login } = useAuth()
  const form = useForm<TPayloadUserLoginValidator>({
    resolver: zodResolver(PayloadUserLoginValidator),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: TPayloadUserLoginValidator) => {
    try {
      const { email, password } = PayloadUserLoginValidator.parse(data)

      login(email, password)
      router.refresh()
      router.prefetch('/')
      router.push('/')
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      form.reset()
      router.refresh()
    }
  }

  return (
    <div className="flex justify-center items-center">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription className="text-start">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} type="email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your password" {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2 text-center">
          <p className="text-sm text-gray-600">
            Not having an account?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline font-medium">
              Sign Up Here
            </Link>
          </p>
          <p className="text-sm text-gray-600">
            Continue as sellers?{' '}
            <Link href="/admin" className="text-blue-600 hover:underline font-medium">
              Admin Dashboard
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default LoginPage
