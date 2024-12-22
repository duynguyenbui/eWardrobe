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
    description:
      'The payment is not yet completed or is awaiting confirmation. This status usually indicates that the order has been received, but the payment process has not been finalized.',
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
