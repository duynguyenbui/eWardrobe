import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const Prices: CollectionConfig = {
  slug: 'prices',
  admin: {
    useAsTitle: 'title',
    defaultColumns: [
      'title',
      'currency_code',
      'priority',
      'amount',
      'min_quantity',
      'max_quantity',
    ],
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
      name: 'priority',
      label: 'Priority',
      type: 'number',
      defaultValue: 99,
    },
    {
      name: 'start_date',
      label: 'Start Date',
      type: 'date',
      defaultValue: () => new Date(),
    },
    {
      name: 'end_date',
      label: 'End Date',
      type: 'date',
      defaultValue: () => new Date('2999-12-31'),
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
      defaultValue: 1,
      min: 1,
      max: 200,
      required: true,
    },
    {
      name: 'max_quantity',
      label: 'Max Quantity',
      type: 'number',
      defaultValue: 999,
      min: 1,
      max: 999,
      required: true,
    },
    {
      name: 'is_active',
      label: 'Is Active',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
