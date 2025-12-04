import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { revalidateTag } from "next/cache";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const authority = searchParams.get("Authority");
  const status = searchParams.get("Status");

  if (!authority) {
    return NextResponse.redirect(
      `${process.env.BETTER_AUTH_URL}/reserve/payment?status=failed&reason=no_authority`
    );
  }

  const payment = await prisma.payment.findUnique({ where: { authority: authority } });

  if (!payment) {
    return NextResponse.redirect(
      `${process.env.BETTER_AUTH_URL}/reserve/payment?status=failed&reason=not_found`
    );
  }
  const order = await prisma.order.findUnique({ where: { id: payment.order_id } });

  if (payment.status == "Success") return;

  if (status != "OK") {
    await prisma.$transaction([
      prisma.payment.update({
        where: { id: payment.id },
        data: { status: "Failed" },
      }),
      prisma.order.update({
        where: { id: payment.order_id },
        data: { status: "Cancelled" },
      }),
      prisma.availability.deleteMany({
        where: { car_id: order?.car_id, start_date: order?.start_date },
      }),
    ]);
    revalidateTag("cars", "max");
    return NextResponse.redirect(
      `${process.env.BETTER_AUTH_URL}/reserve/payment?status=failed&reason=user_cancelled&authority=${authority}&orderId=${order?.order_number}`
    );
  }

  try {
    const response = await fetch(process.env.ZARINPAL_VERIFY_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        merchant_id: process.env.ZARINPAL_MERCHANT_ID,
        amount: Number(payment.amount) * 10,
        authority,
      }),
    });
    const { data } = await response.json();
    if (data.code === 100 || data.code === 101) {
      await prisma.$transaction([
        prisma.payment.update({
          where: { id: payment.id },
          data: { status: "Success", ref_id: String(data.ref_id) },
        }),
        prisma.order.update({
          where: { id: payment.order_id },
          data: { status: "Success" },
        }),
      ]);
      return NextResponse.redirect(
        `${process.env.BETTER_AUTH_URL}/reserve/payment?status=success&refId=${data.ref_id}&orderId=${order?.order_number}`
      );
    } else {
      await prisma.$transaction([
        prisma.payment.update({
          where: { id: payment.id },
          data: { status: "Failed" },
        }),
        prisma.order.update({
          where: { id: payment.order_id },
          data: { status: "Failed" },
        }),
        prisma.availability.deleteMany({
          where: { car_id: order?.car_id, start_date: order?.start_date },
        }),
      ]);
      revalidateTag("cars", "max");
      return NextResponse.redirect(
        `${process.env.BETTER_AUTH_URL}/reserve/payment?status=failed&reason=verify_failed&authority=${authority}&orderId=${order?.order_number}`
      );
    }
  } catch (error) {
    return NextResponse.redirect(
      `${process.env.BETTER_AUTH_URL}/reserve/payment?status=failed&reason=server_error&authority=${authority}&orderId=${order?.order_number}`
    );
  }
}
