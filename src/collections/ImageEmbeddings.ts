import { isSuperAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const ImageEmbeddings: CollectionConfig = {
  slug: 'image_embeddings',
  labels: {
    singular: 'Image Embedding',
    plural: 'Image Embeddings',
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
      label: 'Image Id',
      type: 'text',
      required: true,
    },
    {
      name: 'image_embedding',
      label: 'Image Embedding',
      type: 'text',
      required: true,
    },
  ],
}
