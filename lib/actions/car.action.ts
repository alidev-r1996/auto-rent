"use server";
import prisma from "@/lib/prisma";

export async function GetCars({ page, limit }: { page: string; limit: string }) {
  const limitDefault = Number(limit) ?? 8;
  const skip = (Number(page) - 1) * limitDefault;
  return await prisma.$transaction(async tx => {
    const cars = await tx.car.findMany({
      skip,
      take: limitDefault,
      include: {
        discount: {
          include: {
            discount: {
              select: {
                percentage: true,
                endDate: true,
                active: true,
              },
            },
          },
        },
      },
      orderBy: { created_at: "desc" },
    });

    const count = await tx.car.count();

    return {
      cars,
      info: {
        limit: limitDefault,
        totalCars: count,
        totalPage: Math.ceil(count / limitDefault),
        currentPage: Number(page),
      },
    };
  });
}

export async function RemoveCarById(id: string) {
  const car = await prisma.car.findUnique({ where: { id } });
  if (!car) throw new Error("car not found");
  return await prisma.car.delete({
    where: { id },
  });
}

export async function CreateCar(car: any) {
  const {
    name,
    model,
    brand,
    type,
    description,
    mile_age,
    capacity,
    gear,
    steering,
    fuel,
    price_day,
    price_month,
    price_garranty,
    features,
    images,
    cover,
  } = car;
  try {
    return await prisma.car.create({
      data: {
        name,
        model: Number(model),
        brand,
        type,
        description,
        mile_age: Number(mile_age),
        capacity: Number(capacity),
        gear,
        steering,
        fuel,
        price_day,
        price_month,
        price_garranty,
        features,
        images,
        cover,
      },
    });
  } catch (error) {
    return error;
  }
}
