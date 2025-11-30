// app/api/seed/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const blogs = await prisma.blog.findMany({
    select: {
      id: true,
      title: true,
      reading_time: true,
      content: true,
      cover_img: true,
      slug: true,
    },
    take: 3,
    orderBy: {
      created_at: "desc",
    },
  });

  return NextResponse.json({ code: 200, status: "success", blogs });
}
