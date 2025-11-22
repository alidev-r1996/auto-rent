"use server";
import prisma from "@/lib/prisma";

export async function GetBlogs({ page, limit }: { page: string; limit: string }) {
  const limitDefault = Number(limit) ?? 8;
  const skip = (Number(page) - 1) * limitDefault;
  return await prisma.$transaction(async tx => {
    const blogs = await tx.blog.findMany({
      skip,
      take: limitDefault,
      include: {
        author: {
          select: { name: true },
        },
      },
      orderBy: { created_at: "desc" },
    });

    const count = await tx.blog.count();

    return {
      blogs,
      info: {
        limit: limitDefault,
        totalBlogs: count,
        totalPage: Math.ceil(count / limitDefault),
        currentPage: Number(page),
      },
    };
  });
}

export async function UpdateBlogstatus(id: string) {
  const blog = await prisma.blog.findUnique({ where: { id } });
  if (!blog) throw new Error("blog not found");
  return await prisma.blog.update({
    where: { id },
    data: { status: !blog.status },
  });
}

export async function RemoveBlogById(id: string) {
  const blog = await prisma.blog.findUnique({ where: { id } });
  if (!blog) throw new Error("blog not found");
  return await prisma.blog.delete({
    where: { id },
  });
}
