'use server'

import {
  COLLECT_COUPON_FAILURE_MESSAGE,
  COLLECT_COUPON_SUCCESS_MESSAGE,
  COUPON_NOT_FOUND_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
} from '@/constants/message'
import { getPayloadClient } from '@/get-payload'
import { currentUser } from '@/lib/payload'

export const collectCoupon = async (couponId: number) => {
  const payload = await getPayloadClient()
  const current_date = new Date()
  const { user } = await currentUser()

  if (!user) {
    return { success: false, message: USER_NOT_FOUND_MESSAGE }
  }

  const { docs: coupons } = await payload.find({
    collection: 'coupons',
    where: {
      and: [
        {
          end_date: {
            greater_than_equal: current_date,
          },
        },
        {
          start_date: {
            less_than_equal: current_date,
          },
        },
        {
          visible: {
            equals: true,
          },
        },
        {
          collected_users: {
            not_in: [user.id],
          },
        },
        {
          used_users: {
            not_in: [user.id],
          },
        },
        {
          id: {
            equals: couponId,
          },
        },
      ],
    },
  })

  coupons.filter((coupon) => coupon.collected_quantity < coupon.quantity)

  if (coupons.length === 0) {
    return { success: false, message: COUPON_NOT_FOUND_MESSAGE }
  }

  const coupon = coupons[0]

  try {
    await payload.update({
      collection: 'coupons',
      where: {
        id: {
          equals: coupon.id,
        },
      },
      data: {
        collected_quantity: coupon.collected_quantity + 1,
        collected_users: coupon.collected_users?.concat(user.id),
      },
    })

    return { success: true, message: COLLECT_COUPON_SUCCESS_MESSAGE }
  } catch (error) {
    console.error(error)
    return { success: false, message: COLLECT_COUPON_FAILURE_MESSAGE }
  }
}

export const getUserCoupons = async () => {
  const payload = await getPayloadClient()
  const current_date = new Date()

  const { user } = await currentUser()

  if (!user) {
    return []
  }

  const { docs: coupons } = await payload.find({
    collection: 'coupons',
    where: {
      and: [
        {
          end_date: {
            greater_than_equal: current_date,
          },
        },
        {
          start_date: {
            less_than_equal: current_date,
          },
        },
        {
          visible: {
            equals: true,
          },
        },
        {
          collected_users: {
            in: [user!.id],
          },
        },
        {
          used_users: {
            not_in: [user!.id],
          },
        },
      ],
    },
  })

  return coupons
}

export const getNotCollectedCoupons = async () => {
  const payload = await getPayloadClient()
  const current_date = new Date()

  const { user } = await currentUser()

  const { docs: coupons } = await payload.find({
    collection: 'coupons',
    where: {
      and: [
        {
          end_date: {
            greater_than_equal: current_date,
          },
        },
        {
          start_date: {
            less_than_equal: current_date,
          },
        },
        {
          visible: {
            equals: true,
          },
        },
      ],
    },
  })

  const filteredCoupons = coupons.filter((coupon) => {
    const belowQuantityLimit = coupon.collected_quantity < coupon.quantity

    if (!user) return belowQuantityLimit

    if (!coupon.collected_users) return belowQuantityLimit

    const notCollectedByUser = !coupon.collected_users.some((collectedUser) => {
      if (typeof collectedUser === 'number') {
        return collectedUser === user.id
      }
      return collectedUser.id === user.id
    })

    return belowQuantityLimit && notCollectedByUser
  })

  return filteredCoupons
}
