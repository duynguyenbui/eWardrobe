'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { useModalsState } from '@/hooks/use-modals'
import { PayLoadAddressValidator, TPayLoadAddressValidator } from '@/validators'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { VIETNAM_PROVINCES } from '@/constants/constants'
import { Checkbox } from '../ui/checkbox'
import { createAddress } from '@/actions/addresses'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export function CreateAddrModal() {
  const { type, close, isOpen } = useModalsState()
  const router = useRouter()

  const form = useForm<TPayLoadAddressValidator>({
    resolver: zodResolver(PayLoadAddressValidator),
    defaultValues: {
      name: '',
      province: '',
      district: '',
      wardCode: '',
      detailAddress: '',
      contactName: '',
      contactPhone: '',
      idDefault: false,
    },
  })

  function onSubmit(data: TPayLoadAddressValidator) {
    createAddress(data).then((res) => {
      if (res.success) {
        toast.success(res.message)
        router.refresh()
        close()
      } else {
        toast.error(res.message)
        router.refresh()
      }
    })
  }

  return (
    <Dialog open={isOpen && type === 'create-addr'} onOpenChange={() => close()}>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Create Your Address</DialogTitle>
              <DialogDescription>
                Your address will be used for shipping and billing purposes.
              </DialogDescription>
            </DialogHeader>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="province"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Province</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a province" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {VIETNAM_PROVINCES.map((province) => (
                        <SelectItem key={province.value} value={province.value}>
                          {province.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="district"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>District</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter district" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="wardCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ward Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter ward code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="detailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Detailed Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter detailed address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter contact name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter contact phone" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="idDefault"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Set as default address</FormLabel>
                    <FormDescription>
                      This address will be used as the default for shipping.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
