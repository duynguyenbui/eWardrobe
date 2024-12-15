import { uuidv4 } from '@/lib/uuid'
import { isAdmin } from '@/payload-roles'
import { CollectionConfig } from 'payload'

export const ProductVariants: CollectionConfig = {
  slug: 'product_variants',
  labels: {
    singular: 'Product Variant',
    plural: 'Product Variants',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'sku', 'barcode', 'upc', 'prices', 'product'],
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
      name: 'sku',
      type: 'number',
      label: 'SKU',
    },
    {
      name: 'barcode',
      type: 'text',
      label: 'Barcode',
      defaultValue: () => uuidv4(),
    },
    {
      name: 'upc',
      type: 'text',
      label: 'UPC',
      defaultValue: () => uuidv4(),
    },
    {
      name: 'prices',
      label: 'Prices',
      type: 'relationship',
      relationTo: 'prices',
      required: true,
      hasMany: true,
    },
    {
      name: 'priceId',
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
      name: 'stripeId',
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
      name: 'weight',
      type: 'number',
      label: 'Weight',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'length',
      type: 'number',
      label: 'Length',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'height',
      type: 'number',
      label: 'Height',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'width',
      type: 'number',
      label: 'Width',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'material',
      type: 'relationship',
      relationTo: 'materials',
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
      name: 'variant_rank',
      type: 'number',
      label: 'Variant Rank',
    },
    {
      name: 'product',
      type: 'relationship',
      label: 'Product',
      relationTo: 'products',
      hasMany: false,
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
    {
      name: 'metadata',
      label: 'Metadata',
      type: 'json',
      defaultValue: {},
      required: false,
    },
  ],
}
