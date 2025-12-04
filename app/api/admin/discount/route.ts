import { NextResponse } from "next/server";
import {
  CreateNewDiscount,
  GetDiscounts,
  RemoveDiscountById,
  UpdateDiscountStatus,
} from "@/lib/actions/discount.action";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") as string;
  const limit = searchParams.get("limit") as string;
  try {
    const discounts = await GetDiscounts({ page, limit });
    return NextResponse.json({ status: 200, discounts, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, discounts: null });
  }
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  try {
    const car = await RemoveDiscountById(id);
    return NextResponse.json({ status: 200, car, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, car: null });
  }
}

export async function PATCH(req: Request) {
  const { id } = await req.json();
  try {
    const discount = await UpdateDiscountStatus(id);
    return NextResponse.json({ status: 200, discount, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, discount: null });
  }
}

export async function POST(req: Request) {
  const { discount } = await req.json();
  try {
    const newDiscount = await CreateNewDiscount(discount);
    return NextResponse.json({ status: 201, message: "success", discount: newDiscount });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, message: "Internal Server Error", discount: null });
  }
}
