// app/api/seed/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const cars = await prisma.car.findMany({
    include: {
      availaibility: {
        select: { isBlocked: true },
        orderBy: { created_at: "desc" },
        take: 1,
      },
      discount: {
        include: {
          discount: true,
        },
        take: 1,
        orderBy: { created_at: "desc" },
      },
    },
    take: 6,
  });

  return NextResponse.json({ code: 200, status: "success", cars });
}
