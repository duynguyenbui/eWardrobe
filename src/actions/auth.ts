'use server'

import { SIGNUP_SUCCESS_MESSAGE, USER_ALREADY_EXISTS_MESSAGE } from '@/constants/message'
import { getPayloadClient } from '@/get-payload'
import { PayloadUserValidator, TPayloadUserValidator } from '@/validators'

export const createUser = async (input: TPayloadUserValidator) => {
  const { email, password } = PayloadUserValidator.parse(input)

  const payload = await getPayloadClient()

  const { docs: users } = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: email,
      },
    },
  })

  if (users.length !== 0) {
    return { success: false, message: USER_ALREADY_EXISTS_MESSAGE }
  }

  await payload.create({
    collection: 'users',
    data: {
      email,
      password,
      role: 'user',
    },
  })

  return { success: true, message: SIGNUP_SUCCESS_MESSAGE }
}
