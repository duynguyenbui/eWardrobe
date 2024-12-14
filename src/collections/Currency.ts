import { getPayloadClient } from '@/get-payload'
import { currencyIsActive, isAdmin } from '@/payload-roles'
import type { Access, CollectionConfig } from 'payload'

export const Currency: CollectionConfig = {
  slug: 'currency',
  admin: {
    useAsTitle: 'code',
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: currencyIsActive,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'code',
      label: 'Code',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'symbol',
      label: 'Symbol',
      type: 'text',
      required: true,
    },
    {
      name: 'symbol_native',
      label: 'Native Symbol',
      type: 'text',
      required: true,
    },
    {
      name: 'decimal_digits',
      label: 'Decimal Digits',
      type: 'number',
      required: true,
    },
    {
      name: 'rounding',
      label: 'Rounding',
      type: 'number',
      required: true,
    },
    {
      name: 'raw_rounding',
      label: 'Raw Rounding',
      type: 'json',
      required: false,
    },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Inactive',
          value: 'inactive',
        },
      ],
      required: true,
    },
  ],
}
