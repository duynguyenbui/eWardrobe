import { getPayloadClient } from '@/get-payload'
import { embedding } from '../embeddings'
import { index } from '../vector'
import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {
    afterChange: [
      async ({ collection, context, req, operation, previousDoc, doc }) => {
        if (embedding || index) {
          console.log(doc)
          console.log('embedding is enabled')
          const payload = await getPayloadClient()
        } else {
          console.log('embedding is disabled')
        }
      },
    ],
    afterDelete: [
      async ({ collection, context, id }) => {
        if (embedding || index) {
          console.log(id)
          console.log('embedding is enabled')
          const payload = await getPayloadClient()
        } else {
          console.log('embedding is disabled')
        }
      },
    ],
  },
  labels: {
    singular: 'Products',
    plural: 'Products',
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
      name: 'description',
      label: 'Description',
      type: 'textarea',
    },
    {
      name: 'visible',
      label: 'Visible',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'price',
      label: 'Price',
      type: 'number',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'overview',
      label: 'Overview',
      type: 'richText',
    },
    {
      name: 'material',
      label: 'Material',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'instruction',
      label: 'Instruction',
      type: 'textarea',
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'sold_number',
      label: 'Sold Number',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      label: 'Category',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: false,
    },
    {
      name: 'variants',
      label: 'Variants',
      type: 'relationship',
      relationTo: 'variants',
      hasMany: true,
    },
    {
      name: 'colors',
      label: 'Colors',
      type: 'relationship',
      relationTo: 'colors',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'images',
      type: 'array',
      label: 'Product Images',
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
    {
      name: 'product_discounts',
      label: 'Product Discounts',
      type: 'relationship',
      relationTo: 'product_discounts',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'product_reviews',
      label: 'Product Reviews',
      type: 'relationship',
      relationTo: 'comments',
      required: false,
      minRows: 0,
      maxRows: 200,
      hasMany: true,
    },
    {
      name: 'product_embedding',
      label: 'Product Embedding',
      type: 'relationship',
      relationTo: 'product_embeddings',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'product_image_embeddings',
      label: 'Product Image Embeddings',
      type: 'relationship',
      relationTo: 'image_embeddings',
      hasMany: true,
      admin: {
        readOnly: true,
      },
    },
  ],
}
