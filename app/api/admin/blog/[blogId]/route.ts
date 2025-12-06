import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;
  try {
    const blog = await prisma.blog.findUnique({ where: { id: blogId } });
    return NextResponse.json({ status: 200, blog, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, blog: null });
  }
}
