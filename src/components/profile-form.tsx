'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useEffect } from 'react'
import { User } from '@/payload-types'
import { PayLoadProfileValidator, TPayLoadProfileValidator } from '@/validators'
import { updateUser } from '@/actions/auth'
import { UPDATE_PROFILE_FAILURE_MESSAGE, UPDATE_PROFILE_SUCCESS_MESSAGE } from '@/constants/message'
import { useRouter } from 'next/navigation'

export const ProfileForm = ({ user }: { user: User }) => {
  const router = useRouter()
  const form = useForm<TPayLoadProfileValidator>({
    resolver: zodResolver(PayLoadProfileValidator),
    defaultValues: {
      phoneNumber: '',
      email: '',
      dateOfBirth: '',
      role: 'user',
      password: '',
    },
    mode: 'onChange',
  })

  useEffect(() => {
    if (user) {
      form.reset({
        phoneNumber: user.phone_number!,
        email: user.email,
        dateOfBirth: new Date(user.date_of_birth!).toISOString().split('T')[0],
        role: user.role,
      })
    }
  }, [form, user])

  function onSubmit(data: TPayLoadProfileValidator) {
    updateUser(data)
      .then((res) => {
        if (!res.success) {
          toast.error(UPDATE_PROFILE_FAILURE_MESSAGE)
        }

        if (res.success) {
          toast.success(UPDATE_PROFILE_SUCCESS_MESSAGE)
        }
      })
      .catch((err) => toast.error(UPDATE_PROFILE_FAILURE_MESSAGE))
      .finally(() => {
        router.refresh()
      })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 border shadow-sm p-5 rounded-md"
      >
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Phone number" {...field} />
              </FormControl>
              <FormDescription>
                Your phone number is used for account recovery and notifications.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          disabled
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email address" {...field} />
              </FormControl>
              <FormDescription>
                Your email is used for account recovery and notifications.
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormDescription>Your date of birth is used for age verification.</FormDescription>
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
                <Input placeholder="*******" {...field} type="password" />
              </FormControl>
              <FormDescription>Your password must be at least 7 characters long.</FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={user.role}
                disabled={!['super_admin', 'admin'].includes(user.role)}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="super_admin">Super Admin</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Your role determines your access level within the system.
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  )
}
