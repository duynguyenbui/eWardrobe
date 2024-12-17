import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const Sizes: CollectionConfig = {
  slug: 'sizes',
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  labels: {
    singular: 'Size',
    plural: 'Sizes',
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
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
  ],
}
