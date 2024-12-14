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
    },
    {
      name: 'upc',
      type: 'text',
      label: 'UPC',
    },
    {
      name: 'price_set',
      label: 'Price Set',
      type: 'relationship',
      relationTo: 'price_sets',
      required: true,
      hasMany: false,
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
      name: 'allow_backorder',
      type: 'checkbox',
      label: 'Allow Backorder',
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
      name: 'metadata',
      label: 'Metadata',
      type: 'json',
      defaultValue: {},
      required: false,
    },
  ],
}
