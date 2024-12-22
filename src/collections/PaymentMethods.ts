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
    description: 'Payment methods for orders that are used to group orders together',
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'active',
      label: 'Active',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
