import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const Variants: CollectionConfig = {
  slug: 'variants',
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  labels: {
    singular: 'Variant',
    plural: 'Variants',
  },
  fields: [
    {
      name: 'quantity',
      label: 'Quantity',
      type: 'number',
      required: true,
    },
    {
      name: 'size',
      label: 'Size',
      type: 'relationship',
      relationTo: 'sizes',
    },
    {
      name: 'color',
      label: 'Color',
      type: 'relationship',
      relationTo: 'colors',
    },
  ],
}
