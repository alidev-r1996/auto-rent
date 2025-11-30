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
        availaibility: {
          orderBy: {
            created_at: "desc",
          },
          take: 1,
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

export async function GetAllCar() {
  const cars = await prisma.car.findMany({
    select: {
      name: true,
      id: true,
    },
  });
  const carOptions = cars.map(({ name, id }) => {
    return { label: name, value: id };
  });
  return carOptions;
}

export async function GetCarsWithFilter({
  page,
  limit,
  sort,
  q,
  min,
  max,
  type,
  brand,
}: {
  page: string;
  limit: string;
  sort: string;
  q?: string;
  min?: string;
  max?: string;
  type: any[];
  brand: any[];
}) {
  const limitDefault = Number(limit) || 8;
  const skip = (Number(page) - 1) * limitDefault;
  const sortOrder: "asc" | "desc" = sort === "asc" ? "asc" : "desc";
  const carType = type ;
  return await prisma.$transaction(async tx => {
    const cars = await tx.car.findMany({
      where: {
        AND: [
          q ? { name: { contains: q, mode: "insensitive" } } : {},
          min ? { price_day: { gte: Number(min) } } : {},
          max ? { price_day: { lte: Number(max) } } : {},
          carType && carType.length > 0 ? { type: { in: carType } } : {},
          brand && brand.length > 0 ? { brand: { in: brand } } : {},
        ],
      },
      skip,
      take: limitDefault,
      include: {
        availaibility: {
          select: { isBlocked: true },
        },
        discount: {
          include: {
            discount: {
              select: {
                percentage: true,
                active: true,
              },
            },
          },
        },
      },
      orderBy: { created_at: sortOrder },
    });

    const count = await tx.car.count({
      where: {
        AND: [
          q ? { name: { contains: q, mode: "insensitive" } } : {},
          min ? { price_day: { gte: Number(min) } } : {},
          max ? { price_day: { lte: Number(max) } } : {},
          carType && carType.length > 0 ? { type: { in: carType } } : {},
          brand && brand.length > 0 ? { brand: { in: brand } } : {},
        ],
      },
    });

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
