"use server";

import { RemoveCommentById } from "@/lib/actions/comment.action";
import { GetUserComment } from "@/lib/actions/user/comment.action";
import { NextResponse } from "next/server";

export async function GET() {
  const comment = await GetUserComment();
  return NextResponse.json({ status: "success", message: "user created!", comment });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  try {
    const comment = await RemoveCommentById(id);
    return NextResponse.json({ status: 200, comment, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, comment: null });
  }
}
