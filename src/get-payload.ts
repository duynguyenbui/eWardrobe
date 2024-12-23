import { getPayload, Payload } from 'payload'
import config from './payload.config'
import { PAYLOAD_SECRET_MISSING_MESSAGE } from './constants/message'

let cached = (global as any).payload

if (!cached) {
  cached = (global as any).payload = {
    client: null,
  }
}

export const getPayloadClient = async (): Promise<Payload> => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error(PAYLOAD_SECRET_MISSING_MESSAGE)
  }

  if (cached.client) {
    return cached.client
  }

  if (!cached.promise) {
    cached.promise = await getPayload({ config })
  }

  try {
    cached.client = await cached.promise
  } catch (e: unknown) {
    cached.promise = null
    throw e
  }

  return cached.client
}
