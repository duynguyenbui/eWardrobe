import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  labels: {
    singular: 'Blog',
    plural: 'Blogs',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'textarea',
      required: true,
    },
    {
      name: 'published',
      label: 'Published',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'published_at',
      label: 'Published At',
      type: 'date',
      admin: {
        readOnly: true,
        date: {
          displayFormat: 'd MMM yyy',
        },
      },
    },
  ],
}
