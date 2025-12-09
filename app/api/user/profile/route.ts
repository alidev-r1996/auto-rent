import { EditUser } from "@/lib/actions/user/user.action";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const { user } = await req.json();
  try {
    const newUser = await EditUser(user);
    return NextResponse.json(
      {
        status: "success",
        message: "user created!",
        user: newUser,
        error: null,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        message: error.message || "خطای ناشناخته",
        user: null,
        error: error.stack || null,
      },
      { status: 400 }
    );
  }
}
