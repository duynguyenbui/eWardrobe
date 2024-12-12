'use server'

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
    return { success: false, message: 'User already exists' }
  }

  await payload.create({
    collection: 'users',
    data: {
      email,
      password,
      role: 'user',
    },
  })

  return { success: true, message: 'User created' }
}
