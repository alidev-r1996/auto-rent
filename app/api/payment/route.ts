import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const {
    start_date,
    start_time,
    end_date,
    end_time,
    receive_location,
    return_location,
    insurance,
    detail,
    total_price,
    user_id,
    car_id,
    active,
    discountPrice,
  } = await request.json();

  const { rent, delivery_price, return_price, insurance_price, guarranty, driver, tax } = detail;
  const totalPrice = active ? discountPrice : total_price;

  const user = await prisma.user.findUnique({ where: { id: user_id } });
  if (!user)
    return NextResponse.json({ status: 401, message: "please first login in to your account!" });

  const car = await prisma.car.findUnique({
    where: { id: car_id },
    include: {
      availaibility: {
        select: { isBlocked: true, start_date: true, end_date: true },
        take: 1,
        orderBy: { created_at: "desc" },
      },
    },
  });
  if (!car || car?.availaibility[0].isBlocked)
    return NextResponse.json({ status: 403, message: "this car is out of reach!" });

  try {
    const res = await fetch(`${process.env.ZARINPAL_REQUEST_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        callback_url: process.env.ZARINPAL_CALLBACK_URL,
        amount: totalPrice * 10, // Rials
        description: `جهت اجاره خودروی ${car.name}`,
        merchant_id: process.env.ZARINPAL_MERCHANT_ID,
        metadata: {
          email: user?.email ?? "test@example.com",
          mobile: user?.phoneNumber,
        },
      }),
    });
    const { data } = await res.json();

    if (data.message == "Success") {
      await prisma.$transaction(async tx => {
        const order = await tx.order.create({
          data: {
            user_id,
            car_id,
            start_date,
            end_date,
            start_time,
            end_time,
            receive_location,
            return_location,
            total_price: totalPrice,
          },
        });
        await tx.insurance.create({
          data: {
            order_id: order.id,
            type: insurance,
            price: insurance_price,
          },
        });
        const payment = await tx.payment.create({
          data: {
            user_id,
            order_id: order.id,
            amount: totalPrice,
            status: "Pending",
            authority: data.authority,
            method: "Website",
          },
        });
        await tx.paymentDetail.create({
          data: {
            rent,
            delivery: delivery_price,
            return: return_price,
            insurance: insurance_price,
            guarranty: guarranty,
            driver,
            tax,
            total_price,
            discount: Number(active ? totalPrice : 0),
            payment_id: payment.id,
          },
        });
        await tx.availability.create({
          data: {
            start_date,
            end_date,
            isBlocked: true,
            reason: "رزرو شده",
            car_id,
          },
        });
        revalidateTag("cars", "max");
      });
      return NextResponse.json({
        message: "order created successfully",
        url: `${process.env.ZARINPAL_GATEWAY_URL}/${data.authority}`,
        status: 201,
      });
    } else {
      return NextResponse.json({ status: 500, message: "INTERNAL SERVER ERROR" });
    }
  } catch (error) {
    return NextResponse.json({ status: 500, message: "INTERNAL SERVER ERROR", error });
  }
}
