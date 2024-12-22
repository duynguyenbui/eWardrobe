import { VIETNAM_PROVINCES } from '@/constants/constants'
import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const Addresses: CollectionConfig = {
  slug: 'addresses',
  access: {
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },
  labels: {
    singular: 'Address',
    plural: 'Addresses',
  },
  admin: {
    useAsTitle: 'id',
    defaultColumns: [
      'id',
      'name',
      'province',
      'district',
      'ward_code',
      'contact_name',
      'id_default',
      'is_deleted',
    ],
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'province',
      label: 'Province',
      type: 'select',
      options: VIETNAM_PROVINCES,
    },
    {
      name: 'district',
      label: 'District',
      type: 'text',
      required: true,
    },
    {
      name: 'ward_code',
      label: 'Ward Code',
      type: 'text',
      required: true,
    },
    {
      name: 'detail_address',
      label: 'Detail Address',
      type: 'textarea',
    },
    {
      name: 'contact_name',
      label: 'Contact Name',
      type: 'text',
      required: true,
    },
    {
      name: 'contact_phone',
      label: 'Contact Phone',
      type: 'text',
      required: true,
    },
    {
      name: 'id_default',
      label: 'Default Address',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'is_deleted',
      label: 'Is Deleted',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'user',
      label: 'User',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
      required: true,
    },
  ],
}
