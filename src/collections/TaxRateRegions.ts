/*import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const TaxRateRegions: CollectionConfig = {
  slug: 'tax_regions',
  labels: {
    singular: 'Tax Region',
    plural: 'Tax Regions',
  },
  admin: {
    defaultColumns: ['id', 'country_code', 'metadata'],
    useAsTitle: 'country_code',
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'country_code',
      label: 'Country Code',
      type: 'text',
      defaultValue: 'VN',
      unique: true,
    },
    {
      name: 'parent_id',
      label: 'Parent ID',
      type: 'relationship',
      relationTo: 'tax_regions',
      required: false,
    },
    {
      name: 'metadata',
      label: 'Metadata',
      type: 'json',
      required: false,
    },
  ],
}*/
