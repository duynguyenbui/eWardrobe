'use server'

import { getPayloadClient } from '@/get-payload'

export const getTypes = async () => {
  const payload = await getPayloadClient()
  const types = await payload.find({
    collection: 'product_types',
    pagination: false,
  })

  return types
}
