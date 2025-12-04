"use server";
import prisma from "@/lib/prisma";

export async function GetOrders({ page, limit }: { page: string; limit: string }) {
  const limitDefault = Number(limit) ?? 8;
  const skip = (Number(page) - 1) * limitDefault;
  return await prisma.$transaction(async tx => {
    const reserves = await tx.order.findMany({
      skip,
      take: limitDefault,
      include: {
        receiverInfo: {
          select: {
            name: true,
            phoneNumber: true,
            address: true,
            national_id: true,
          },
        },
        user: {
          select: { name: true, phoneNumber: true },
        },
        car: {
          select: {
            name: true,
            model: true,
          },
        },
        insurance: {
          select: {
            type: true,
            price: true,
          },
        },
      },
      orderBy: { created_at: "desc" },
    });

    const count = await tx.order.count();

    return {
      reserves,
      info: {
        limit: limitDefault,
        totalReservess: count,
        totalPage: Math.ceil(count / limitDefault),
        currentPage: Number(page),
      },
    };
  });
}

export async function RemoveOrderById(id: string) {
  const order = await prisma.order.findUnique({ where: { id } });
  if (!order) throw new Error("order not found");
  return await prisma.order.delete({
    where: { id },
  });
}
