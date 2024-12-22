import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const OrderDetails: CollectionConfig = {
  slug: 'order_details',
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  labels: {
    singular: 'Order Detail',
    plural: 'Order Details',
  },
  fields: [
    {
      name: 'quantity',
      label: 'Quantity',
      type: 'number',
      required: true,
    },
    {
      name: 'price',
      label: 'Price',
      type: 'number',
      required: true,
    },
    {
      name: 'discount',
      label: 'Discount',
      type: 'number',
    },
    {
      name: 'variant',
      label: 'Variant',
      type: 'relationship',
      relationTo: 'variants',
      hasMany: false,
    },
    {
      name: 'order',
      label: 'Order',
      type: 'relationship',
      relationTo: 'orders',
      hasMany: false,
    },
  ],
}
