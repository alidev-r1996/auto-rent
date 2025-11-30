import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const authority = searchParams.get("Authority");
  const status = searchParams.get("Status");
  return NextResponse.json({ status: 201 });
}
