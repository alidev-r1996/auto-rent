"use server";
import prisma from "@/lib/prisma";

export async function GetDiscounts({ page, limit }: { page: string; limit: string }) {
  const limitDefault = Number(limit) ?? 8;
  const skip = (Number(page) - 1) * limitDefault;
  return await prisma.$transaction(async tx => {
    const discounts = await tx.discount.findMany({
      skip,
      take: limitDefault,
      include: {
        cars: {
          include: {
            car: {
              select: { name: true, id: true },
            },
          },
        },
      },
      orderBy: { created_at: "desc" },
    });
    const count = await tx.discount.count();
    return {
      discounts,
      info: {
        limit: limitDefault,
        totalDiscounts: count,
        totalPage: Math.ceil(count / limitDefault),
        currentPage: Number(page),
      },
    };
  });
}

export async function RemoveDiscountById(id: string) {
  const discount = await prisma.discount.findUnique({ where: { id } });
  if (!discount) throw new Error("discount not found");
  return await prisma.discount.delete({
    where: { id },
  });
}

export async function CreateNewDiscount(discount) {
  const { title, percentage, startDate, endDate, cars } = discount;
  return await prisma.discount.create({
    data: {
      title,
      percentage: Number(percentage),
      startDate,
      endDate,
      cars: {
        create: cars.map(carId => ({
          car_id: carId,
        })),
      },
    },
  });
}

export async function UpdateDiscountStatus(id: string) {
  const discount = await prisma.discount.findUnique({ where: { id } });
  if (!discount) throw new Error("discount not found");
  return await prisma.discount.update({
    where: { id },
    data: { active: !discount.active },
  });
}
