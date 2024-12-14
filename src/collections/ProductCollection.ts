import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const ProductCollection: CollectionConfig = {
  slug: 'product_collection',
  labels: {
    singular: 'Product Collection',
    plural: 'Product Collections',
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
      type: 'text',
      required: true,
    },
    {
      name: 'desciption',
      type: 'textarea',
      required: false,
    },
    {
      name: 'metadata',
      type: 'json',
      required: false,
    },
  ],
}
