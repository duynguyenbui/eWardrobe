import { Redis } from '@upstash/redis'

declare global {
  var redis: Redis | undefined
}

if (!global.redis) {
  if (true || !process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    global.redis = undefined
  } else {
    global.redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    })
  }
}

export const redis = global.redis
