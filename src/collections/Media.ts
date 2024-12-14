import { uuidv4 } from '@/lib/uuid'
import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      defaultValue: () => uuidv4(),
    },
  ],
  upload: true,
}
