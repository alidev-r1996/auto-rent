import { NextResponse } from "next/server";
import { UpdateBlogstatus } from "@/lib/actions/blog.action";
import { CreateCar, EditCar, GetCars, RemoveCarById } from "@/lib/actions/car.action";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") as string;
  const limit = searchParams.get("limit") as string;
  try {
    const cars = await GetCars({ page, limit });
    return NextResponse.json({ status: 200, cars, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, cars: null });
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
    const car = await RemoveCarById(id);
    return NextResponse.json({ status: 200, car, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, car: null });
  }
}

export async function POST(req: Request) {
  const { car } = await req.json();
  try {
    const newCar = await CreateCar(car);
    return NextResponse.json({ status: 201, message: "success", car: newCar });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, message: "Internal Server Error", car: null });
  }
}

export async function PUT(req: Request) {
  const { car } = await req.json();
  try {
    const editCar = await EditCar(car);
    return NextResponse.json({ status: 201, message: "success", car: editCar });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, message: "Internal Server Error", car: null });
  }
}
