import { NextResponse } from "next/server";
import { UpdateBlogstatus } from "@/lib/actions/blog.action";
import {
  CreateAvailaibility,
  GetAavailaibility,
  RemoveAvailaibilityById,
} from "@/lib/actions/availaibility.action";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") as string;
  const limit = searchParams.get("limit") as string;
  try {
    const availaibility = await GetAavailaibility({ page, limit });
    return NextResponse.json({ status: 200, availaibility, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, availaibility: null });
  }
}

export async function PATCH(req: Request) {
  const { id } = await req.json();
  try {
    const comment = await UpdateBlogstatus(id);
    return NextResponse.json({ status: 200, comment, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, comment: null });
  }
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  try {
    const availaibility = await RemoveAvailaibilityById(id);
    return NextResponse.json({ status: 200, availaibility, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, availaibility: null });
  }
}

export async function POST(req: Request) {
  const { inventory } = await req.json();
  try {
    const newStatus = await CreateAvailaibility(inventory);
    return NextResponse.json({ status: 201, message: "success", availaibility: newStatus });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
      availaibility: null,
    });
  }
}
