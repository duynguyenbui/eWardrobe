/*import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const TaxRates: CollectionConfig = {
  slug: 'tax_rates',
  admin: {
    useAsTitle: 'code',
  },
  labels: {
    singular: 'Tax Rate',
    plural: 'Tax Rates',
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'rate',
      label: 'Rate',
      type: 'number',
      required: true,
    },
    {
      name: 'code',
      label: 'Code',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      required: false,
    },
    {
      name: 'is_default',
      label: 'Is Default',
      type: 'checkbox',
      required: false,
    },
    {
      name: 'is_combinable',
      label: 'Is Combinable',
      type: 'checkbox',
      required: false,
    },
    {
      name: 'text_region',
      label: 'Tax Region',
      type: 'relationship',
      relationTo: 'tax_regions',
      hasMany: true,
    },
    {
      name: 'metadata',
      label: 'Metadata',
      type: 'json',
      required: false,
    },
  ],
}
*/
