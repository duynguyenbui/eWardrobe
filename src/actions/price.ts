'use server'

import { getPayloadClient } from '@/get-payload'
import { Price } from '@/payload-types'

export const getPrices = async (variantId: number) => {
  const payload = await getPayloadClient()
  const currentDate = new Date()

  const { docs: product_variants } = await payload.find({
    collection: 'product_variants',
    where: {
      id: {
        equals: variantId,
      },
      sku: {
        greater_than: 0,
      },
    },
    sort: ['prices.priority'],
  })

  if (!product_variants.length) {
    return []
  }

  const prices = product_variants[0].prices

  if (!Array.isArray(prices)) {
    return []
  }

  return prices
    .filter((price): price is Price => typeof price !== 'number' && price !== null)
    .filter((price: Price) => {
      return (
        price.start_date &&
        price.end_date &&
        new Date(price.start_date) <= currentDate &&
        new Date(price.end_date) >= currentDate
      )
    })
    .sort((a, b) => a.priority! - b.priority!)
}
