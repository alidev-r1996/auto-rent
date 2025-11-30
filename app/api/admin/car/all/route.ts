import { GetAllCar } from "@/lib/actions/car.action";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const cars = await GetAllCar();
    return NextResponse.json({ status: 200, cars, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, cars: null });
  }
}