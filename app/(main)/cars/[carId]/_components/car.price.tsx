import { PersianCurrency } from "@/lib/utils";
import { FC } from "react";
import { CarPriceProps } from "./car.type";

const CarPrice: FC<CarPriceProps> = ({ day_price, month_price }) => {
  return (
    <div className="flex items-center gap-2 flex-col md:flex-row mb-2 w-full ">
      <div className="bg-slate-200/50 rounded-md p-2 flex w-full flex-1 text-sm items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-slate-500 text-sm">قیمت:</p>
          <p className="font-bold text-indigo-500">{PersianCurrency(`${day_price}`)} تومان</p>
        </div>
        <p className="text-slate-500 text-sm">روزانه</p>
      </div>
      <div className="bg-slate-200/50 rounded-md p-2 flex w-full flex-1 text-sm items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-slate-500 text-sm">قیمت:</p>
          <p className="font-bold text-indigo-500">{PersianCurrency(`${month_price}`)} تومان</p>
        </div>
        <p className="text-slate-500 text-sm">ماهانه</p>
      </div>
    </div>
  );
};

export default CarPrice;
