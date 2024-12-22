'use server'

import { getPayloadClient } from '@/get-payload'
import { Category } from '@/payload-types'
import { redis } from '@/redis'

export const getAllCategories = async ({ query }: { query?: Record<string, any> } = {}) => {
  try {
    const payload = await getPayloadClient()

    const cachedCategories = await redis?.get('categories')
    if (cachedCategories) {
      return cachedCategories as Category[]
    }

    const { docs: categories } = await payload.find({
      collection: 'categories',
      where: query,
      pagination: false,
    })

    if (redis) {
      await redis.set('categories', categories)
      await redis.expire('categories', 60)
    }

    return categories
  } catch (error) {
    console.error(error)
    return []
  }
}
