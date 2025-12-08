"use server";
import prisma from "@/lib/prisma";
import { GetUserId } from "./user.action";

export async function GetUserPayment() {
  const user = await GetUserId();
  if (!user) throw new Error("User Not Found");
  return await prisma.payment.findMany({
    where: { order: { user_id: user.id } },
    include: {
      order: {
        select: {
          car: {
            select: { name: true, model: true, cover: true },
          },
          user: { select: { name: true, phoneNumber: true } },
          id: true,
          order_number: true,
        },
      },
      payment_detail: true,
    },
    orderBy: { created_at: "desc" },
  });
}
