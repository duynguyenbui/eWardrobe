'use server'

import { getPayloadClient } from '@/get-payload'
import { ProductCategory } from '@/payload-types'
import { PaginatedDocs } from 'payload'

export const getCategories = async () => {
  const client = redis

  if (client) {
    const redisCategories = await client.get('product_categories')

    if (redisCategories) {
      console.log('Getting categories from cache')
      return redisCategories as PaginatedDocs<ProductCategory>
    }
  }

  const payload = await getPayloadClient()
  const categories = await payload.find({
    collection: 'product_categories',
    pagination: false,
  })

  console.log('Geting categories from payload')
  if (client) {
    await client.set('product_categories', JSON.stringify(categories))
    await client.expire('product_categories', 60)
  }

  return categories
}
