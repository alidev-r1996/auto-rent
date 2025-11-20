import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { content, reading_time, slug, title } = await req.json();

    await prisma.blog.create({
      data: {
        reading_time,
        title,
        slug,
        content: JSON.stringify(content),
        author_id: "wptQyUkNrTJkCW75edCxT5YIPGBLSoTl",
      },
    });

    return NextResponse.json({ status: 201, message: "success" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
}
