"use server";
import prisma from "@/lib/prisma";
import { GetUserId } from "./user.action";

export async function GetUserReserve() {
  const user = await GetUserId();
  if (!user) throw new Error("User Not Found");
  return await prisma.order.findMany({
    where: { user_id: user.id },
    include: {
      receiverInfo: {
        select: {
          name: true,
          phoneNumber: true,
          address: true,
          national_id: true,
        },
      },
      user: { select: { phoneNumber: true } },
      car: {
        select: {
          name: true,
          model: true,
          cover: true,
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
}
