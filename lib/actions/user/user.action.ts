"use server";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function EditUser(user) {
  const { name, email, phoneNumber, national_id, card_number, birth, user_id } = user;
  if (!user_id) {
    throw new Error("شناسه کاربر معتبر نیست.");
  }
  try {
    return await prisma.$transaction([
      prisma.user.update({ where: { id: user_id }, data: { name, email, phoneNumber } }),
      prisma.profile.upsert({
        where: { user_id },
        update: { national_id, card_number, birth },
        create: {
          user_id,
          national_id,
          card_number,
          birth,
        },
      }),
    ]);
  } catch (err) {
    throw new Error("ویرایش اطلاعات کاربری با مشکل مواجه شد. لطفاً دوباره تلاش کنید.");
  }
}

export async function GetUserById(userId) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      profile: {
        select: {
          address: true,
          national_id: true,
          card_number: true,
          birth: true,
        },
      },
    },
  });
  if (!user) throw new Error("user not found");
  return user;
}

export async function GetUserId() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user.id) {
    throw new Error("user not logged In!");
  }
  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (!user) {
    throw new Error("user not logged In!");
  }
  return user;
}
