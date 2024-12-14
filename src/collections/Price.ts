import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const Prices: CollectionConfig = {
  slug: 'prices',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'currency_code',
      label: 'Currency Code',
      type: 'relationship',
      relationTo: 'currency',
      hasMany: false,
    },
    {
      name: 'raw_amount',
      label: 'Raw Amount',
      type: 'json',
    },
    {
      name: 'amount',
      label: 'Amount',
      type: 'number',
      required: true,
    },
    {
      name: 'min_quantity',
      label: 'Min Quantity',
      type: 'number',
      min: 1,
      max: 200,
      required: true,
    },
    {
      name: 'max_quantity',
      label: 'Max Quantity',
      type: 'number',
      min: 1,
      max: 200,
      required: true,
    },
  ],
}
