import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const Coupons: CollectionConfig = {
  slug: 'coupons',
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  labels: {
    singular: 'Coupon',
    plural: 'Coupons',
  },
  admin: {
    useAsTitle: 'code',
    defaultColumns: [
      'code',
      'discount_type',
      'discount',
      'start_date',
      'end_date',
      'visible',
      'quantity',
      'current_use',
      'minimum_price_to_use',
    ],
  },
  fields: [
    {
      name: 'code',
      label: 'Code',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'discount_type',
      label: 'Discount Type',
      type: 'select',
      options: [
        { label: 'Fixed Amount', value: 'fixed_amount' },
        { label: 'Percentage', value: 'percentage' },
      ],
      required: true,
    },
    {
      name: 'discount',
      label: 'Discount',
      type: 'number',
      required: true,
    },
    {
      name: 'start_date',
      label: 'Start Date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'end_date',
      label: 'End Date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'quantity',
      label: 'Quantity',
      type: 'number',
      required: true,
    },
    {
      name: 'visible',
      label: 'Visible',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'collected_quantity',
      label: 'Collected Quantity',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'current_use',
      label: 'Current Use',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'minimum_price_to_use',
      label: 'Minimum Price To Use',
      type: 'number',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'collected_users',
      label: 'Collected Users',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
    },
    {
      name: 'used_users',
      label: 'Used Users',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
    },
  ],
}
