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
  },
  fields: [
    {
      name: 'code',
      label: 'Code',
      type: 'text',
      required: true,
    },
    {
      name: 'discount_type',
      label: 'Discount Type',
      type: 'text',
      required: true,
    },
    {
      name: 'total_discount',
      label: 'Total Discount',
      type: 'number',
      required: true,
    },
    {
      name: 'start_date',
      label: 'Start Date',
      type: 'date',
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
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
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
        position: 'sidebar',
      },
    },
    {
      name: 'current_use',
      label: 'Current Use',
      type: 'number',
      defaultValue: 0,
      admin: {
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
      name: 'created_at',
      label: 'Created At',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
        date: {
          displayFormat: 'd MMM yyy',
          pickerAppearance: 'dayAndTime',
        },
      },
      defaultValue: () => new Date(),
    },
    {
      name: 'updated_at',
      label: 'Updated At',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
        date: {
          displayFormat: 'd MMM yyy',
          pickerAppearance: 'dayAndTime',
        },
      },
      defaultValue: () => new Date(),
    },
  ],
}
