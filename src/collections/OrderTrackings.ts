import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const OrderTrackings: CollectionConfig = {
  slug: 'order_trackings',
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  labels: {
    singular: 'Order Tracking',
    plural: 'Order Trackings',
  },
  fields: [
    {
      name: 'begin_at',
      label: 'Begin At',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      required: true,
    },
    {
      name: 'end_at',
      label: 'End At',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      required: true,
    },
    {
      name: 'order_status',
      label: 'Order Status',
      type: 'relationship',
      relationTo: 'order_statuses',
      hasMany: false,
      required: true,
    },
    {
      name: 'order',
      label: 'Order',
      type: 'relationship',
      relationTo: 'orders',
      hasMany: false,
      admin: {
        readOnly: true,
      },
      required: true,
    },
  ],
}
