'use client'

import { deleteAddress } from '@/actions/addresses'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useModalsState } from '@/hooks/use-modals'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

export function DeleteAddrModal() {
  const { type, close, isOpen, data } = useModalsState()
  const router = useRouter()

  const onDelete = async () => {
    const { addressId } = data

    deleteAddress(addressId).then((res) => {
      if (res.success) {
        toast.success(res.message)
        close()
        router.push('/profiles')
      } else {
        toast.error(res.message)
        router.push('/profiles')
      }
    })
  }

  return (
    <Dialog open={isOpen && type === 'delete-addr'} onOpenChange={close}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Address</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this address? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary" onClick={close}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={onDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
