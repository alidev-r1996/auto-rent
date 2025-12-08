"use server";
import { GetUserReserve } from "@/lib/actions/user/reserve.action";
import { NextResponse } from "next/server";

export async function GET() {
  const reserve = await GetUserReserve();
  return NextResponse.json({ status: "success", message: "user created!", reserve });
}
