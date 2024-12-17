import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: 'Category',
    plural: 'Categories',
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
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
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
    },
    {
      name: 'created_at',
      label: 'Created At',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),
      admin: {
        readOnly: true,
        date: {
          displayFormat: 'd MMM yyy',
        },
      },
    },
    {
      name: 'updated_at',
      label: 'Updated At',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),
      admin: {
        readOnly: true,
        date: {
          displayFormat: 'd MMM yyy',
        },
      },
    },
    {
      name: 'category_parent',
      label: 'Category Parent',
      type: 'relationship',
      hasMany: true,
      relationTo: 'categories',
    },
  ],
}
