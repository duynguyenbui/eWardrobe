import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const ProductDiscounts: CollectionConfig = {
  slug: 'product_discounts',
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  labels: {
    singular: 'Product Discount',
    plural: 'Product Discounts',
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
    {
      name: 'start_date',
      label: 'Start Date',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      required: true,
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
      required: true,
    },
    {
      name: 'discount_type',
      label: 'Discount Type',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'discount_value',
      label: 'Discount Value',
      type: 'number',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
