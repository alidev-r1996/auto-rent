import { NextResponse } from "next/server";
import { UpdateBlogstatus } from "@/lib/actions/blog.action";
import { CreateCar, RemoveCarById } from "@/lib/actions/car.action";
import { CreateNewDiscount, GetDiscounts, RemoveDiscountById } from "@/lib/actions/discount.action";

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
    const car = await RemoveDiscountById(id);
    return NextResponse.json({ status: 200, car, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, car: null });
  }
}

export async function POST(req: Request) {
  const {discount} = await req.json();
  try {
    const newDiscount = await CreateNewDiscount(discount);
    return NextResponse.json({ status: 201, message: "success", discount: newDiscount });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, message: "Internal Server Error", discount: null });
  }
}
