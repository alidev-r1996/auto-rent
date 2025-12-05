import { EditUser } from "@/lib/actions/user/user.action";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const { user } = await req.json();
  const newUser = await EditUser(user);
  return NextResponse.json({ status: "success", message: "user created!", user: newUser });
}
