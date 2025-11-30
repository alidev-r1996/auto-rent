// app/api/seed/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;

  const comments = await prisma.comment.findMany({
    where: {
      blog_id: blogId,
      verified: true,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });

  if (!comments) {
    return NextResponse.json({ code: 404, status: "not-found", comments: null });
  }
  return NextResponse.json({ code: 200, status: "success", comments });
}
