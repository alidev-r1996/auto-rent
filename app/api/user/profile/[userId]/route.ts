import { GetUserById } from "@/lib/actions/user/user.action";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  const user = await GetUserById(userId);
  return NextResponse.json({ status: "success", message: "user created!", user });
}
