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
        readOnly: true,
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'end_at',
      label: 'End At',
      type: 'date',
      admin: {
        readOnly: true,
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
  ],
}
