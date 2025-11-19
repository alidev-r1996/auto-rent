import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { car_id = "", user_id, parent_id = "", text, blog_id = "" } = await req.json();
  console.log(user_id, "author comment")
  try {
    const comment = await prisma.comment.create({
      data: {
        car_id,
        user_id,
        parent_id,
        blog_id,
        text,
      },
    });
    return NextResponse.json({
      status: "success",
      message: "پیام شما با موفقیت ثبت شد، پس از بررسی و تأیید نمایش داده خواهد شد!",
    });
  } catch (err) {
    return NextResponse.json({
      status: "failed",
      message: "خطایی رخ داده است، لطفا مجدداً تلاش کنید!",
    });
  }
}
