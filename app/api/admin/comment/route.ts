import { GetComments, RemoveCommentById, UpdateCommentStatus } from "@/lib/actions/comment.action";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") as string;
  const limit = searchParams.get("limit") as string;
  try {
    const comments = await GetComments({ page, limit });
    return NextResponse.json({ status: 200, comments, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, comments: null });
  }
}

export async function PATCH(req: Request) {
  const { id } = await req.json();
  try {
    const comment = await UpdateCommentStatus(id);
    return NextResponse.json({ status: 200, comment, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, comment: null });
  }
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
