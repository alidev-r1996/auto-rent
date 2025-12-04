import { GetOrders, RemoveOrderById } from "@/lib/actions/order.action";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") as string;
  const limit = searchParams.get("limit") as string;
  try {
    const reserves = await GetOrders({ page, limit });
    return NextResponse.json({ status: 200, reserves, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, reserves: null });
  }
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  try {
    const comment = await RemoveOrderById(id);
    return NextResponse.json({ status: 200, comment, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, comment: null });
  }
}
