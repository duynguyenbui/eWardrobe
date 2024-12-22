'use server'

import { getPayloadClient } from '@/get-payload'

export const getAllCategories = async ({ query }: { query?: Record<string, any> } = {}) => {
  try {
    const payload = await getPayloadClient()

    const { docs: categories } = await payload.find({
      collection: 'categories',
      where: query,
      pagination: false,
    })

    return categories
  } catch (error) {
    console.error(error)
    return []
  }
}
