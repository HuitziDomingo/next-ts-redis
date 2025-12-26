import { redis } from "@/app/lib/redis"
import { NextResponse } from "next/server"

export async function GET() {
    let count = await redis.get('page_view')
    return NextResponse.json({ count })
}

export async function POST() {
    let newCount = await redis.incr('page_view')
    return NextResponse.json({ count: newCount })
}