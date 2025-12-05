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
    omit: {
      user_id: true,
      blog_id: true,
      car_id: true,
      parent_id: true,
      rating: true,
    },
    orderBy: { created_at: "desc" },
  });
}
