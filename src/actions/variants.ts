'use server'

import { getPayloadClient } from '@/get-payload'

export const getProductVariants = async (productId: string) => {
  const payload = await getPayloadClient()

  const productVariants = await payload.find({
    collection: 'product_variants',
    where: {
      'product.id': {
        equals: productId,
      },
    },
    pagination: false,
  })

  return productVariants
}
