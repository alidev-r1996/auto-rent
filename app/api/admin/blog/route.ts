import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { GetBlogs, RemoveBlogById, UpdateBlogstatus } from "@/lib/actions/blog.action";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") as string;
  const limit = searchParams.get("limit") as string;
  try {
    const blogs = await GetBlogs({ page, limit });
    return NextResponse.json({ status: 200, blogs, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, blogs: null });
  }
}

export async function PATCH(req: Request) {
  const { id } = await req.json();
  try {
    const blog = await UpdateBlogstatus(id);
    return NextResponse.json({ status: 200, blog, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, blog: null });
  }
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  try {
    const blog = await RemoveBlogById(id);
    return NextResponse.json({ status: 200, blog, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, blog: null });
  }
}

export async function POST(req: Request) {
  try {
    const {
      blog: { content, reading_time, slug, title, cover_img },
    } = await req.json();

    await prisma.blog.create({
      data: {
        reading_time,
        title,
        slug,
        cover_img,
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
