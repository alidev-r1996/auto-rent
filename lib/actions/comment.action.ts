"use server";
import prisma from "@/lib/prisma";

export async function GetComments({ page, limit }: { page: string; limit: string }) {
  const limitDefault = Number(limit) ?? 8;
  const skip = (Number(page) - 1) * limitDefault;
  return await prisma.$transaction(async tx => {
    const comments = await tx.comment.findMany({
      skip,
      take: limitDefault,
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

    const count = await tx.comment.count();

    return {
      comments,
      info: {
        limit: limitDefault,
        totalComments: count,
        totalPage: Math.ceil(count / limitDefault),
        currentPage: Number(page),
      },
    };
  });
}

export async function UpdateCommentStatus(id: string) {
  const comment = await prisma.comment.findUnique({ where: { id } });
  if (!comment) throw new Error("comment not found");
  return await prisma.comment.update({
    where: { id },
    data: { verified: !comment.verified },
  });
}

export async function RemoveCommentById(id: string) {
  const comment = await prisma.comment.findUnique({ where: { id } });
  if (!comment) throw new Error("comment not found");
  return await prisma.comment.delete({
    where: { id },
  });
}
