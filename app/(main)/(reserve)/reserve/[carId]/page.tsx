import { notFound, redirect } from "next/navigation";
import { CarType } from "@/app/(main)/cars/[carId]/_components/car.type";
import { headers } from "next/headers";
import CheckoutForm from "./_components/checkout-form";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

const FaqPage = async ({ params }: { params: Promise<{ [index: string]: string }> }) => {
  const { carId } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cars/${carId}`, {
    next: { revalidate: 36000 },
  });
  const data = await res.json();
  if (data.code == 404) return notFound();
  const car: CarType = data.car;
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = await prisma.user.findUnique({
    where: { id: session?.user.id },
    include: {
      profile: {
        select: {
          address: true,
          national_id: true,
        },
      },
    },
  });

  // if (!user?.profile){
  //   redirect("/user")
  // }

  return (
    <CheckoutForm
      price_day={car.price_day}
      price_month={car.price_month}
      guarranty={car.price_garranty}
      min_Date={car.availaibility[0].start_date}
      max_Date={car.availaibility[0].end_date}
      carName={car.name}
      carId={car.id}
      userId={session?.user.id || ""}
      // discount={car.}
    />
  );
};

export default FaqPage;
