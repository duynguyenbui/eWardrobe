'use client'

import { getAddressesOfUser } from '@/actions/addresses'
import { Address, User } from '@/payload-types'
import { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { CheckCheckIcon, PlusCircle, Trash2 } from 'lucide-react'
import { useModalsState } from '@/hooks/use-modals'

export const AddressForm = ({ user }: { user: User }) => {
  const [addresses, setAddresses] = useState<Address[]>([])
  const { open } = useModalsState()

  useEffect(() => {
    if (user) {
      getAddressesOfUser(user.id)
        .then((adds) => setAddresses(adds))
        .catch((error) => console.error(error))
    }
  }, [user])

  return (
    <div className="p-6 bg-white border shadow-lg rounded-lg">
      <div className="flex space-x-2">
        <h2 className="text-2xl font-bold mb-4">Your Addresses</h2>
        <Button
          variant="secondary"
          className="flex space-x-2 items-center"
          onClick={() => open({ modal: 'create-addr', data: {} })}
        >
          Create
          <PlusCircle className="w-4 h-4" />
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Default</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {addresses.map((address) => (
            <TableRow key={address.id}>
              <TableCell className="font-medium">
                {address.name}
                {address.id_default && (
                  <span className="ml-2 text-xs text-green-600">(Default)</span>
                )}
              </TableCell>
              <TableCell>
                {address.detail_address}, {address.ward_code}, {address.district},{' '}
                {address.province}
              </TableCell>
              <TableCell>
                {address.contact_name} - {address.contact_phone}
              </TableCell>
              <TableCell className="text-center">
                {address.id_default ? <CheckCheckIcon className="w-4 h-4" /> : null}
              </TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => open({ modal: 'delete-addr', data: { addressId: address.id } })}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCaption>You have {addresses.length} saved addresses.</TableCaption>
      </Table>
    </div>
  )
}
