// app/api/seed/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { seed } from "@/lib/seed";

export async function GET() {
  try {
    await seed();

    return NextResponse.json({ status: "success", message: "Seed completed" });
  } catch (error: any) {
    console.error("Seed error:", error);

    return NextResponse.json(
      { status: "error", message: error.message || "Unknown error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
