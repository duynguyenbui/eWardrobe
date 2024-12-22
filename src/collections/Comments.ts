import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const Comments: CollectionConfig = {
  slug: 'comments',
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: 'comment',
    description: 'Comments for products that are conducted by customers',
  },
  fields: [
    {
      name: 'comment',
      label: 'Comment',
      type: 'textarea',
      required: true,
    },
    {
      name: 'user',
      label: 'User',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
  ],
}
