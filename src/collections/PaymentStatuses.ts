import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const PaymentStatuses: CollectionConfig = {
  slug: 'payment_statuses',
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  labels: {
    singular: 'Payment Status',
    plural: 'Payment Statuses',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
  ],
}
