import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const Payments: CollectionConfig = {
  slug: 'payments',
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  labels: {
    singular: 'Payment',
    plural: 'Payments',
  },
  fields: [
    {
      name: 'amount',
      label: 'Amount',
      type: 'number',
      required: true,
    },
    {
      name: 'payment_method',
      label: 'Payment Method',
      type: 'relationship',
      relationTo: 'payment_methods',
      required: true,
      hasMany: false,
    },
    {
      name: 'payment_status',
      label: 'Payment Status',
      type: 'relationship',
      relationTo: 'payment_statuses',
      hasMany: false,
      required: true,
    },
    {
      name: 'order',
      label: 'Order',
      type: 'relationship',
      relationTo: 'orders',
      required: true,
      hasMany: false,
    },
  ],
}
