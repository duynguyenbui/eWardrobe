/*import { isAdmin } from '@/payload-roles'
import type { CollectionConfig } from 'payload'

export const TaxRateRules: CollectionConfig = {
  slug: 'tax_rate_rules',
  labels: {
    singular: 'Tax Rate Rule',
    plural: 'Tax Rate Rules',
  },
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'tax_rate',
      label: 'Tax Rate',
      type: 'relationship',
      relationTo: 'tax_rates',
      required: false,
    },
    {
      name: 'reference_id',
      label: 'Reference ID',
      type: 'text',
      required: true,
    },
    {
      name: 'reference',
      label: 'Reference',
      type: 'text',
      required: true,
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
