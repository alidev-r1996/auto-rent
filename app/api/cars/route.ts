import { GetCarsWithFilter } from "@/lib/actions/car.action";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") ?? "1";
  const sort = searchParams.get("sort") ?? "desc";
  const q = searchParams.get("search") ?? "";
  const limit = searchParams.get("limit") ?? "6";
  const min = searchParams.get("min") ?? "";
  const max = searchParams.get("max") ?? "";
  const type = searchParams.getAll("type").join().split(",").filter(Boolean) ?? [];
  const brand = searchParams.getAll("brand").join().split(",").filter(Boolean) ?? [];
  const { cars, info } = await GetCarsWithFilter({ page, limit, sort, q, min, max, type, brand });
  return NextResponse.json({ code: 200, status: "success", cars, info });
}
