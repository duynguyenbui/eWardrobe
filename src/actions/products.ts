'use server'

import { getPayloadClient } from '@/get-payload'
import { Where } from 'payload'

export const getPaginatedProducts = async ({
  limit,
  category,
  type,
}: {
  limit?: number
  type: string | null
  category: string | null
}) => {
  const payload = await getPayloadClient()

  if (!category) category = 'all'
  if (!type) type = 'all'

  let where: Where = {}

  if (category !== 'all') {
    where = {
      'product_categories.name': {
        equals: category,
      },
    }
  }

  if (type !== 'all') {
    where = {
      ...where,
      'product_type.value': {
        equals: type,
      },
    }
  }

  const paginatedDocs = await payload.find({
    collection: 'products',
    where,
    pagination: true,
    limit: typeof limit === 'number' && !isNaN(limit) ? limit : 6,
  })

  return paginatedDocs
}
