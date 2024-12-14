import { Access } from 'payload'
import { getPayloadClient } from './get-payload'

export const isAdmin: Access = ({ req }) => {
  return req.user?.role === 'admin' || req.user?.role === 'super_admin'
}

export const currencyIsActive: Access = async ({ data, id: currencyId, req: { user } }) => {
  if (user?.role !== 'admin') return false

  const payload = await getPayloadClient()

  const { docs: currencies } = await payload.find({
    collection: 'currency',
    where: {
      id: {
        equals: currencyId,
      },
    },
  })

  if (!currencies.length) return false

  return user.role === 'admin' || currencies[0].status === 'active'
}

export const productCategoriesIsActive: Access = async ({
  data,
  id: categoryId,
  req: { user },
}) => {
  if (user?.role !== 'admin') return false

  const payload = await getPayloadClient()

  const { docs: currencies } = await payload.find({
    collection: 'product_categories',
    where: {
      id: {
        equals: categoryId,
      },
    },
  })

  if (!currencies.length) return false

  return user.role === 'admin' || currencies[0].is_active || false
}
