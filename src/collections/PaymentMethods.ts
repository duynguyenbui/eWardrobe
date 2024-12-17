import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const PaymentMethods: CollectionConfig = {
  slug: 'payment_methods',
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  labels: {
    singular: 'Payment Method',
    plural: 'Payment Methods',
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
