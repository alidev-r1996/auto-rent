// app/api/seed/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const cars = await prisma.car.findMany({
    select: {
      id: true,
      name: true,
      model: true,
      type: true,
      brand: true,
      price_day: true,
      price_garranty: true,
      price_month: true,
      cover: true,
    },
    take: 6,
  });

  return NextResponse.json({ code: 200, status: "success", cars });
}
