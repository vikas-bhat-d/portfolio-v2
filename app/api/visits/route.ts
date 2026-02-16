import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { Redis } from "@upstash/redis"

const redis= Redis.fromEnv();
const key=process.env.visterKey||"local_visiter_count"

export async function GET() {
    const cookieStore=cookies();
    const visited= (await cookieStore).get("visited");

    if(!visited){
        redis.incr(key);
    }

    const count=await redis.get(key);
    const response=NextResponse.json({
        count: count,
        unique: true,
    })

        response.cookies.set("visited", "true", {
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
      sameSite: "lax",
    });

    return response;
}