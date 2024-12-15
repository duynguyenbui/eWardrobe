'use server'

import { getPayloadClient } from '@/get-payload'
import { ProductType } from '@/payload-types'
import { redis } from '@/redis'
import { PaginatedDocs } from 'payload'

export const getTypes = async () => {
  const client = redis

  if (client) {
    const types = await client.get('product_types')

    if (types) {
      console.log('Getting types from cache')

      return types as PaginatedDocs<ProductType>
    }
  }

  const payload = await getPayloadClient()
  const types = await payload.find({
    collection: 'product_types',
    pagination: false,
  })
  console.log('Gteting types from payload')
  if (client) {
    await client.set('product_types', JSON.stringify(types))
    await client.expire('product_types', 60)
  }

  return types
}
