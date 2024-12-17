import { isSuperAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const ProductEmbeddings: CollectionConfig = {
  slug: 'product_embeddings',
  labels: {
    singular: 'Product Embedding',
    plural: 'Product Embeddings',
  },
  access: {
    create: isSuperAdmin,
    read: () => true,
    update: isSuperAdmin,
    delete: isSuperAdmin,
  },
  admin: {
    useAsTitle: 'product_id',
  },
  fields: [
    {
      name: 'product_id',
      label: 'Product Id',
      type: 'text',
      required: true,
    },
    {
      name: 'product_embedding',
      label: 'Product Embedding',
      type: 'text',
      required: true,
    },
  ],
}
