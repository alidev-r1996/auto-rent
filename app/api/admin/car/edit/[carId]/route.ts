import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: Promise<{ carId: string }> }) {
  const { carId } = await params;
  try {
    const car = await prisma.car.findUnique({ where: { id: carId } });
    return NextResponse.json({ status: 200, car, message: "success" });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error, car: null });
  }
}
