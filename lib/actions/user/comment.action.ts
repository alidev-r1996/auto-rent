"use server";
import prisma from "@/lib/prisma";
import { GetUserId } from "./user.action";

export async function GetUserComment() {
  const user = await GetUserId();
  if (!user) throw new Error("User Not Found");
  return await prisma.comment.findMany({
    where: { user_id: user.id },
    include: {
      car: {
        select: {
          name: true,
        },
      },
      blog: {
        select: {
          title: true,
        },
      },
      user: {
        select: {
          name: true,
          phoneNumber: true,
        },
      },
    },
    orderBy: { created_at: "desc" },
  });
}
