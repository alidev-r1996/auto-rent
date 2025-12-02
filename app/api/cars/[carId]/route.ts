// app/api/seed/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request, { params }: { params: Promise<{ carId: string }> }) {
  const { carId } = await params;
  const car = await prisma.car.findUnique({
    where: { id: carId },
    include: {
      availaibility: {
        select: { isBlocked: true, start_date: true, end_date: true },
        take: 1,
        orderBy: { created_at: "desc" },
      },
      discount: {
        include: {
          discount: true,
        },
        take: 1,
        orderBy: { created_at: "desc" },
      },
    },
  });
  if (!car) {
    return NextResponse.json({ code: 404, status: "not-found", car: null });
  }
  return NextResponse.json({ code: 200, status: "success", car });
}
