"use server";
import prisma from "@/lib/prisma";
import { revalidateTag } from "next/cache";

export async function GetAavailaibility({ page, limit }: { page: string; limit: string }) {
  const limitDefault = Number(limit) ?? 8;
  const skip = (Number(page) - 1) * limitDefault;
  return await prisma.$transaction(async tx => {
    const availaibility = await tx.availability.findMany({
      skip,
      take: limitDefault,
      include: {
        car: {
          select: {
            name: true,
            model: true,
            brand: true,
          },
        },
      },
      orderBy: { created_at: "desc" },
    });

    const count = await tx.availability.count();

    return {
      availaibility,
      info: {
        limit: limitDefault,
        totalAvailaibility: count,
        totalPage: Math.ceil(count / limitDefault),
        currentPage: Number(page),
      },
    };
  });
}

export async function RemoveAvailaibilityById(id: string) {
  const availaibility = await prisma.availability.findUnique({ where: { id } });
  if (!availaibility) throw new Error("availaibility not found");
  revalidateTag("cars", "max");
  return await prisma.availability.delete({
    where: { id },
  });
}

export async function CreateAvailaibility(availaibility: any) {
  const { start_date, end_date, reason, car_id, isBlocked } = availaibility;
  try {
    return await prisma.availability.create({
      data: {
        start_date,
        end_date,
        reason,
        car_id,
        isBlocked,
      },
    });
    revalidateTag("cars", "max");
  } catch (error) {
    return error;
  }
}
