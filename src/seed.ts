import { Payload } from 'payload'
import {
  CLOTHES_CATEGORIES,
  COLORS,
  COUPONS,
  PAYMENT_METHODS,
  PAYMENT_STATUSES,
  SIZES,
  USERS,
} from './constants/data'

export const seed = async (payload: Payload): Promise<void> => {
  payload.logger.info('Seeding data...')
  // ============== USERS ================= //
  const users = await payload.find({
    collection: 'users',
  })

  if (users.totalDocs === 0)
    await Promise.all(
      USERS.map((user) =>
        payload.create({
          collection: 'users',
          data: {
            email: user.email,
            date_of_birth: new Date(user.date_of_birth).toISOString(),
            password: user.password,
            phone_number: user.phone_number,
            role: user.role as 'admin' | 'user' | 'super_admin',
          },
        }),
      ),
    )

  // ============== PAYMENT_METHODS ================= //
  const paymentMethods = await payload.find({
    collection: 'payment_methods',
  })

  if (paymentMethods.totalDocs === 0) {
    await Promise.all(
      PAYMENT_METHODS.map((paymentMethod) =>
        payload.create({
          collection: 'payment_methods',
          data: {
            name: paymentMethod.name,
            active: paymentMethod.active,
          },
        }),
      ),
    )
  }
  // ============== COLORS ================= //
  const colors = await payload.find({
    collection: 'colors',
  })

  if (colors.totalDocs === 0)
    await Promise.all(
      COLORS.map((color) =>
        payload.create({
          collection: 'colors',
          data: {
            name: color.label,
            description: color.description,
          },
        }),
      ),
    )

  // ============== PAYMENT_STATUSES ================= //
  const paymentStatuses = await payload.find({
    collection: 'payment_statuses',
  })

  if (paymentStatuses.totalDocs === 0)
    await Promise.all(
      PAYMENT_STATUSES.map((status) =>
        payload.create({
          collection: 'payment_statuses',
          data: {
            name: status,
          },
        }),
      ),
    )

  // ============== CLOTHES_CATEGORIES ================= //
  const categories = await payload.find({
    collection: 'categories',
  })

  if (categories.totalDocs === 0)
    await Promise.all(
      CLOTHES_CATEGORIES.map((category) =>
        payload.create({
          collection: 'categories',
          data: {
            name: category.name,
            slug: category.slug,
            description: category.description,
          },
        }),
      ),
    )

  // ============== SIZES ================= //
  const sizes = await payload.find({
    collection: 'sizes',
  })

  if (sizes.totalDocs === 0)
    await Promise.all(
      SIZES.map((size) =>
        payload.create({
          collection: 'sizes',
          data: {
            name: size.label,
            description: size.description,
          },
        }),
      ),
    )

  const coupons = await payload.find({
    collection: 'coupons',
  })

  if (coupons.totalDocs === 0) {
    await Promise.all(
      COUPONS.map((coupon) =>
        payload.create({
          collection: 'coupons',
          data: {
            code: coupon.code,
            discount_type: coupon.discount_type as 'fixed_amount' | 'percentage',
            description: coupon.description,
            discount: coupon.discount,
            start_date: new Date(coupon.start_date).toISOString(),
            end_date: new Date(coupon.end_date).toISOString(),
            quantity: coupon.quantity,
            minimum_price_to_use: coupon.minimum_price_to_use,
            visible: true,
            collected_quantity: 0,
            current_use: 0,
          },
        }),
      ),
    )
  }
  payload.logger.info('Data seeding completed')
}
