import Image from "next/image";
import { PersianCurrency, PersianDigits } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { FC } from "react";
import { ChevronLeft } from "lucide-react";

type CarCardProps = {
  discount: {
    percentage: string | string;
    active: boolean;
  };
  id: string;
  name: string;
  model: string;
  brand: string;
  cover: string;
  price_day: number | string;
  price_month: number | string;
  price_garranty: number | string;
  availaibility?: {
    isBlocked: boolean;
  }[];
};

const CarCard: FC<CarCardProps> = ({
  // brand,
  // discount,
  id,
  cover,
  model,
  name,
  price_day,
  price_garranty,
  price_month,
  availaibility,
}) => {
  return (
    <div className="rounded-xl flex flex-col gap-3 shadow border border-slate-200 p-4">
      <div className="relative rounded-lg h-70  p-4 overflow-hidden group">
        <Image src={cover} alt="car" fill />
        <Link
          href={`/cars/${id}`}
          className="group-hover:size-full absolute bg-slate-800/60 z-50 inset-0 flex justify-center items-center size-0 transition-all duration-300"
        >
          <p className="text-slate-100 flex items-center gap-3">
            اطلاعات بیشتر
            <ChevronLeft className="size-5 mt-0.5" />
          </p>
        </Link>
        <p className="bg-rose-500 text-white rounded-lg  px-3 py-1 text-xs w-max mr-auto">
          {PersianDigits(`20`)} %
        </p>
      </div>
      <h2 className="font-bold">{name}</h2>
      <p className="text-slate-400 text-sm">مدل: {PersianDigits(model)}</p>
      <div className="bg-slate-200/50 rounded-md p-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-slate-500 text-sm">قیمت:</p>
          <p className="font-bold text-indigo-500">{PersianCurrency(`${price_day}`)} تومان</p>
        </div>
        <p className="text-slate-500 text-sm">روزانه</p>
      </div>
      <div className="bg-slate-200/50 rounded-md p-2 flex items-center justify-between -mt-2">
        <div className="flex items-center gap-2">
          <p className="text-slate-500 text-sm">قیمت:</p>
          <p className="font-bold text-indigo-500">{PersianCurrency(`${price_month}`)} تومان</p>
        </div>
        <p className="text-slate-500 text-sm">ماهانه</p>
      </div>
      <p className="border-b border-dotted border-b-slate-500 h-1 w-full"></p>
      <div className="flex items-center justify-between text-sm px-1">
        <p>مبلغ ضمانت</p>
        <p className="font-bold">{PersianCurrency(`${price_garranty}`)} تومان</p>
      </div>

      {availaibility?.[0]?.isBlocked == true ? (
        <Button disabled variant={"blue"} className="w-full mt-4">
          در حال حاضر موجود نیست
        </Button>
      ) : (
        <Link href={`/reserve/${id}`}>
          <Button variant={"blue"} className="w-full mt-4">
            درخواست رزرو
          </Button>
        </Link>
      )}
    </div>
  );
};

export default CarCard;
