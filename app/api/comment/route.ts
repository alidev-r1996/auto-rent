import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { car_id = "", user_id, parent_id = "", text, blog_id = "" } = await req.json();

  try {
    await prisma.comment.create({
      data: {
        car_id,
        user_id,
        parent_id,
        blog_id,
        text,
      },
    });
    return NextResponse.json({
      status: 200,
      message: "پیام شما با موفقیت ثبت شد، پس از تأیید نمایش داده خواهد شد!",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: 500,
      message: "خطایی رخ داده است، لطفا مجدداً تلاش کنید!",
    });
  }
}
