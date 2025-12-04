"use server";
import prisma from "@/lib/prisma";

export async function GetPayments({ page, limit }: { page: string; limit: string }) {
  const limitDefault = Number(limit) ?? 8;
  const skip = (Number(page) - 1) * limitDefault;
  return await prisma.$transaction(async tx => {
    const payments = await tx.payment.findMany({
      skip,
      take: limitDefault,
      include: {
        order: {
          select: {
            car: {
              select: { name: true },
            },
            user: { select: { name: true, phoneNumber: true } },
            id: true,
            order_number: true,
          },
        },
        payment_detail: true,
      },
      omit: { user_id: true, order_id: true, method: true },
      orderBy: { created_at: "desc" },
    });

    const count = await tx.payment.count();

    return {
      payments,
      info: {
        limit: limitDefault,
        totalPayments: count,
        totalPage: Math.ceil(count / limitDefault),
        currentPage: Number(page),
      },
    };
  });
}

export async function RemovePaymentById(id: string) {
  const payment = await prisma.payment.findUnique({ where: { id } });
  if (!payment) throw new Error("payment not found");
  return await prisma.comment.delete({
    where: { id },
  });
}
