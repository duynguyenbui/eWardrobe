import { isAdmin } from '@/payload-roles'
import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'product_categories', 'product_collection', 'product_type'],
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
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Product details',
    },
    {
      name: 'textEmbedding',
      label: 'Text Embedding',
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
      type: 'text',
      admin: {
        hidden: true,
      },
    },
    {
      name: 'imgEmbedding',
      label: 'Image Embedding',
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
      type: 'text',
      admin: {
        hidden: true,
      },
    },
    {
      name: 'product_categories',
      type: 'relationship',
      label: 'Product Categories',
      relationTo: 'product_categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    {
      name: 'product_collection',
      label: 'Product Collection',
      type: 'relationship',
      relationTo: 'product_collection',
      hasMany: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'materials',
      type: 'relationship',
      relationTo: 'materials',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    {
      name: 'product_type',
      label: 'Product Type',
      type: 'relationship',
      relationTo: 'product_types',
      hasMany: false,
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    {
      name: 'product_variants',
      label: 'Product Variants',
      type: 'relationship',
      relationTo: 'product_variants',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'origin_country',
      label: 'Origin Country',
      type: 'text',
      defaultValue: 'Viet Nam',
      required: false,
    },
    {
      name: 'metadata',
      label: 'Metadata',
      type: 'json',
      required: false,
    },
    {
      name: 'discountable',
      label: 'Discountable',
      type: 'checkbox',
      defaultValue: false,
      required: true,
    },
    {
      name: 'id_giftcard',
      label: 'Gift Card',
      type: 'checkbox',
      defaultValue: false,
      required: true,
    },
    {
      name: 'images',
      type: 'array',
      label: 'Product images',
      minRows: 1,
      maxRows: 4,
      required: true,
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
