import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const CustomerAddress: CollectionConfig = {
  slug: 'customer_address',
  labels: {
    singular: 'Customer Address',
    plural: 'Customer Addresses',
  },
  admin: {
    useAsTitle: 'address_name',
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'address_name',
      label: 'Address Name',
      type: 'text',
      required: true,
    },
    {
      name: 'is_default_shipping',
      label: 'Is Default Shipping',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'is_default_billing',
      label: 'Is Default Billing',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'company',
      label: 'Company',
      type: 'text',
      required: false,
    },
    {
      name: 'first_name',
      label: 'First Name',
      type: 'text',
      required: true,
    },
    {
      name: 'last_name',
      label: 'Last Name',
      type: 'text',
      required: true,
    },
    {
      name: 'address_1',
      label: 'Address 1',
      type: 'text',
      required: true,
    },
    {
      name: 'address_2',
      label: 'Address 2',
      type: 'text',
      required: false,
    },
    {
      name: 'city',
      label: 'City',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'country_code',
      label: 'Country Code',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'province',
      label: 'Province',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'postal_code',
      label: 'Postal Code',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'metadata',
      type: 'json',
      required: false,
    },
  ],
}
