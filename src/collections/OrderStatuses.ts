import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const OrderStatuses: CollectionConfig = {
  slug: 'order_statuses',
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  labels: {
    singular: 'Order Status',
    plural: 'Order Statuses',
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
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
  ],
}
