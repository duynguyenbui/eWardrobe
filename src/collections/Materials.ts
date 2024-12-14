import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const Meterials: CollectionConfig = {
  slug: 'materials',
  admin: {
    useAsTitle: 'material',
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'material',
      label: 'Material',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}
