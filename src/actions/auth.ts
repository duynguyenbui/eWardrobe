'use server'

import {
  SIGNUP_FAILURE_MESSAGE,
  SIGNUP_SUCCESS_MESSAGE,
  UPDATE_PROFILE_FAILURE_MESSAGE,
  UPDATE_PROFILE_SUCCESS_MESSAGE,
  USER_ALREADY_EXISTS_MESSAGE,
} from '@/constants/message'
import { getPayloadClient } from '@/get-payload'
import {
  PayLoadProfileValidator,
  PayloadUserSignUpValidator,
  TPayLoadProfileValidator,
  TPayloadUserSignUpValidator,
} from '@/validators'

export const updateUser = async (input: TPayLoadProfileValidator) => {
  const { email, password, phoneNumber, dateOfBirth, role } = PayLoadProfileValidator.parse(input)

  if (!email || !phoneNumber || !dateOfBirth || !role) {
    return { success: false, message: UPDATE_PROFILE_FAILURE_MESSAGE }
  }

  if (password && password.length < 8) {
    return { success: false, message: UPDATE_PROFILE_FAILURE_MESSAGE }
  }

  const payload = await getPayloadClient()

  const { docs: users } = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: email,
      },
    },
  })

  if (users.length === 0) {
    return { success: false, message: UPDATE_PROFILE_FAILURE_MESSAGE }
  }

  try {
    const user = users[0]

    await payload.update({
      collection: 'users',
      id: user.id,
      data: {
        phone_number: phoneNumber,
        date_of_birth: new Date(dateOfBirth!).toISOString(),
        role,
        ...(password && { password }),
      },
    })

    return { success: true, message: UPDATE_PROFILE_SUCCESS_MESSAGE }
  } catch (error) {
    console.error(error)
    return { success: false, message: UPDATE_PROFILE_FAILURE_MESSAGE }
  }
}

export const createUser = async (input: TPayloadUserSignUpValidator) => {
  const { email, password, phoneNumber, dateOfBirth } = PayloadUserSignUpValidator.parse(input)

  if (!email || !password || !phoneNumber || !dateOfBirth) {
    return { success: false, message: SIGNUP_FAILURE_MESSAGE }
  }

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
      phone_number: phoneNumber,
      date_of_birth: new Date(dateOfBirth!).toISOString(),
      role: 'user',
    },
  })

  return { success: true, message: SIGNUP_SUCCESS_MESSAGE }
}
