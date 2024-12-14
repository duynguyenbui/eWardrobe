import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const ProductTypes: CollectionConfig = {
  slug: 'product_types',
  labels: {
    singular: 'Product Type',
    plural: 'Product Types',
  },
  admin: {
    useAsTitle: 'value',
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'value',
      type: 'text',
      required: true,
    },
    {
      name: 'metadata',
      type: 'json',
      required: false,
    },
  ],
}
