import { Redis } from '@upstash/redis'

declare global {
  var redis: Redis | undefined
}

if (!global.redis) {
  global.redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  })
}

export const redis = global.redis
