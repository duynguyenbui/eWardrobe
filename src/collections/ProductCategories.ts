import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const ProductCategories: CollectionConfig = {
  slug: 'product_categories',
  labels: {
    singular: 'Product Category',
    plural: 'Product Categories',
  },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'mpath',
      label: 'Mpath',
      type: 'text',
    },
    {
      name: 'is_active',
      label: 'Is Active',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'is_internal',
      label: 'Is Internal',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'rank',
      label: 'Rank',
      type: 'number',
    },
    {
      name: 'parent_category',
      label: 'Parent Category',
      type: 'relationship',
      relationTo: 'product_categories',
      hasMany: false,
      required: false,
    },
  ],
}
