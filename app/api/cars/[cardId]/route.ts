// app/api/seed/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const carId = req.url.substring(req.url.lastIndexOf("/") + 1);
  const car = await prisma.car.findUnique({ where: { id: carId } });
  if (!car) {
    return NextResponse.json({ code: 404, status: "not-found" });
  }
  return NextResponse.json({ code: 200, status: "success", car });
}
