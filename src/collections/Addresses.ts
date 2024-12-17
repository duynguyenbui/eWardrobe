import { VIETNAM_PROVINCES } from '@/constants/constant'
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
      required: true,
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
      defaultValue: true,
    },
    {
      name: 'is_deleted',
      label: 'Is Deleted',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        readOnly: true,
      },
    },
  ],
}
