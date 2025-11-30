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
          discount: {
            select: {
              percentage: true,
              active: true,
            },
          },
        },
      },
    },
    omit: {
      description: true,
      mile_age: true,
      capacity: true,
      gear: true,
      steering: true,
      fuel: true,
      features: true,
      images: true,
      created_at: true,
      updated_at: true,
    },
    take: 6,
  });

  return NextResponse.json({ code: 200, status: "success", cars });
}
