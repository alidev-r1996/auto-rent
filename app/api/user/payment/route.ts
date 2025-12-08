"use server";
import { GetUserPayment } from "@/lib/actions/user/payment.action";
import { NextResponse } from "next/server";

export async function GET() {
  const payment = await GetUserPayment();
  return NextResponse.json({ status: "success", message: "user created!", payment });
}
