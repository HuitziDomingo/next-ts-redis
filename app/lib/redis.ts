import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis"
import 'dotenv/config';

if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    throw new Error('Las variables de entorno de Redis no están configuradas. Revisa tu archivo .env.local')
}

export const redis = Redis.fromEnv()

export const ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(5, "10 s")
})