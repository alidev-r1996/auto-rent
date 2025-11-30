import { GetBlogsWithFilter } from "@/lib/actions/blog.action";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") ?? "1";
  const sort = searchParams.get("sort") ?? "desc";
  const q = searchParams.get("search") ?? "";
  const limit = searchParams.get("limit") ?? "4";
  const { blogs, info } = await GetBlogsWithFilter({ page, limit, sort, q });
  return NextResponse.json({ code: 200, status: "success", blogs, info });
}
