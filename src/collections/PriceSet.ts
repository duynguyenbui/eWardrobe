import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const PriceSets: CollectionConfig = {
  slug: 'price_sets',
  labels: {
    singular: 'Price Set',
    plural: 'Price Sets',
  },
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
      name: 'prices',
      label: 'Prices',
      type: 'relationship',
      relationTo: 'prices',
      hasMany: true,
    },
  ],
}
