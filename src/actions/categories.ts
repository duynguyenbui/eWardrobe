'use server'

import { getPayloadClient } from '@/get-payload'

export const getCategories = async () => {
  const payload = await getPayloadClient()
  const categories = await payload.find({
    collection: 'product_categories',
    pagination: false,
  })

  return categories
}
