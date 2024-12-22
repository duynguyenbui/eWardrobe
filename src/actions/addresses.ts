'use server'

import { PROVINCE_ABREVIATIONS } from '@/constants/constants'
import {
  ADDRESS_REACHED_LIMIT_MESSAGE_MIN,
  ADDRESS_REACHED_LIMIT_MESSAGE_MAX,
  CREATE_ADDRESS_FAILURE_MESSAGE,
  CREATE_ADDRESS_SUCCESS_MESSAGE,
  DELETE_ADDRESS_FAILURE_MESSAGE,
  DELETE_ADDRESS_SUCCESS_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
} from '@/constants/message'
import { getPayloadClient } from '@/get-payload'
import { currentUser } from '@/lib/payload'
import { PayLoadAddressValidator, TPayLoadAddressValidator } from '@/validators'

export const createAddress = async (input: TPayLoadAddressValidator) => {
  let { name, province, district, wardCode, detailAddress, contactName, contactPhone, idDefault } =
    PayLoadAddressValidator.parse(input)

  if (
    !name ||
    !province ||
    !district ||
    !wardCode ||
    !detailAddress ||
    !contactName ||
    !contactPhone
  ) {
    return { success: false, message: CREATE_ADDRESS_FAILURE_MESSAGE }
  }

  const { user } = await currentUser()

  if (!user) {
    return { success: false, message: USER_NOT_FOUND_MESSAGE }
  }

  const payload = await getPayloadClient()

  const { docs: addresses } = await payload.find({
    collection: 'addresses',
    where: {
      'user.id': {
        equals: user.id,
      },
      is_deleted: {
        equals: false,
      },
    },
  })

  if (addresses.length >= 5) {
    return { success: false, message: ADDRESS_REACHED_LIMIT_MESSAGE_MAX }
  }

  if (addresses.length === 0) {
    idDefault = true
  }

  const addr = await payload.create({
    collection: 'addresses',
    data: {
      name: name,
      contact_name: contactName,
      contact_phone: contactPhone,
      province: province as PROVINCE_ABREVIATIONS,
      district: district,
      ward_code: wardCode,
      detail_address: detailAddress,
      id_default: idDefault,
      user: user.id,
    },
  })

  return addr
    ? { success: true, message: CREATE_ADDRESS_SUCCESS_MESSAGE }
    : { success: false, message: CREATE_ADDRESS_FAILURE_MESSAGE }
}

export const deleteAddress = async (addressId: number) => {
  try {
    const payload = await getPayloadClient()
    const { user } = await currentUser()

    if (!user) {
      return { success: false, message: DELETE_ADDRESS_FAILURE_MESSAGE }
    }

    const { docs: addresses } = await payload.find({
      collection: 'addresses',
      where: {
        'user.id': {
          equals: user.id,
        },
        is_deleted: {
          equals: false,
        },
      },
    })

    if (addresses.length <= 1) {
      return { success: false, message: ADDRESS_REACHED_LIMIT_MESSAGE_MIN }
    }

    for (const address of addresses) {
      if (typeof address.user !== 'object' || address.user.id !== user.id) {
        return { success: false, message: DELETE_ADDRESS_FAILURE_MESSAGE }
      }
    }

    await payload.update({
      collection: 'addresses',
      where: {
        id: {
          equals: addressId,
        },
      },
      data: {
        is_deleted: true,
      },
    })

    return { success: true, message: DELETE_ADDRESS_SUCCESS_MESSAGE }
  } catch (error) {
    console.error(error)
    return { success: false, message: DELETE_ADDRESS_FAILURE_MESSAGE }
  }
}

export const getAddressesOfUser = async (userId: number) => {
  const payload = await getPayloadClient()

  const { docs: addresses } = await payload.find({
    collection: 'addresses',
    where: {
      'user.id': {
        equals: userId,
      },
      is_deleted: {
        equals: false,
      },
    },
  })

  return addresses.length > 0 ? addresses : []
}
