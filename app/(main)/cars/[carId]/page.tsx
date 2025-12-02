import Image from "next/image";
import BlogImg from "@/public/assets/images/contactus.png";
import { Button } from "@/components/ui/button";
import CarInsurance from "./_components/car.insurance";
import CarFeatureMobile from "./_components/car.feature";
import CarOptions from "./_components/car.options";
import CarComment from "./_components/car.comment";
import Link from "next/link";
import CarCarousel from "./_components/car.carousel";
import { getCarInfo } from "./_components/car.request";

const CarDetailPage = async ({ params }: { params: Promise<{ [index: string]: string }> }) => {
  const { carId } = await params;
  const { car, featureItems } = await getCarInfo(carId);
  return (
    <section className="max-w-[1920px]">
      <div className="absolute  top-0 mx-auto max-w-screen w-[1920px] h-60 md:h-98 -z-5">
        <Image
          src={BlogImg}
          alt="Hero Section"
          fill
          placeholder="blur"
          className="object-cover brightness-70 contrast-110"
        />
      </div>
      <div className="mt-38 md:mt-89  p-4 md:p-0"></div>
      <div className="flex flex-col md:flex-row gap-4 max-w-[1690px] mx-auto mb-8 p-2 md:p-0">
        <div className=" w-full md:w-2/3 flex flex-col gap-4">
          <CarCarousel
            images={[car.cover, ...car.images]}
            name={car.name}
            day_price={car.price_day}
            month_price={car.price_month}
          />
          <CarInsurance />

          {/* ----------------------------Mobile----------------------- */}
          <CarFeatureMobile featureItems={featureItems} className="md:hidden flex" />
          <CarOptions options={car.features} className="md:hidden flex" />

          <div className="rounded-lg shadow-xs border border-slate-100 flex flex-col gap-4 p-4 bg-white">
            <h2 className="font-bold text-slate-500 text-lg ">درباره خودرو </h2>
            <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
            <p className="text-xs md:text-sm text-slate-500 leading-6 md:leading-7">
              {car.description}
            </p>
          </div>

          <CarComment carId={car.id} />
        </div>
        {/* ----------------------------Desktop----------------------- */}
        <div className="flex flex-col gap-4">
          <CarFeatureMobile featureItems={featureItems} className="hidden md:flex" />
          <CarOptions options={car.features} className="hidden md:flex" />
          {car?.availaibility?.[0]?.isBlocked == true ? (
            <Button disabled variant={"blue"} className="w-full mt-4">
              در حال حاضر موجود نیست
            </Button>
          ) : (
            <Link href={`/reserve/${car.id}`}>
              <Button variant={"blue"} className="w-full mt-4">
                درخواست رزرو
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CarDetailPage;
