"use server";
import { GetUserReserve } from "@/lib/actions/user/reserve.action";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const reserve = await GetUserReserve();
  return NextResponse.json({ status: "success", message: "user created!", reserve });
}
