import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  labels: {
    singular: 'Order',
    plural: 'Orders',
  },
  fields: [
    {
      name: 'total_price',
      label: 'Total Price',
      type: 'number',
      required: true,
    },
    {
      name: 'total_discount',
      label: 'Total Discount',
      type: 'number',
      required: true,
    },
    {
      name: 'final_price',
      label: 'Final Price',
      type: 'number',
      required: true,
    },
    {
      name: 'shipping_fee',
      label: 'Shipping Fee',
      type: 'number',
      required: true,
    },
    {
      name: 'buyer',
      label: 'Buyer',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
      required: true,
    },
    {
      name: 'current_status',
      label: 'Current Status',
      type: 'relationship',
      relationTo: 'order_statuses',
      required: true,
    },
    {
      name: 'dilivery_address',
      label: 'Dilivery Address',
      type: 'relationship',
      relationTo: 'addresses',
      required: true,
    },
    {
      name: 'order_tracking',
      label: 'Order Tracking',
      type: 'relationship',
      relationTo: 'order_trackings',
      required: true,
    },
    {
      name: 'used_coupon',
      label: 'Used Coupon',
      type: 'relationship',
      relationTo: 'coupons',
    },
    {
      name: 'order_details',
      label: 'Order Details',
      type: 'relationship',
      relationTo: 'order_details',
      hasMany: true,
    },
    {
      name: 'order_trackings',
      label: 'Order Trackings',
      type: 'relationship',
      relationTo: 'order_trackings',
      hasMany: true,
    },
  ],
}
