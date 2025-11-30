import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  if (body) {
    return NextResponse.json({
      message: "Appointment created successfully",
      role: "PATIENT",
      url: `${process.env.ZARINPAL_GATEWAY_URL}/${"data.authority"}`,
      status: 201,
    });
  }
}
