import Image from "next/image";
import Coupe from "@/public/assets/images/category/coupe.png";
import { PersianCurrency, PersianDigits } from "@/lib/utils";
import { Button } from "../ui/button";

const CarCard = () => {
  return (
    <div className="rounded-xl flex flex-col gap-3 shadow border border-slate-200 p-4">
      <div className="relative border border-slate-200 rounded-lg h-70 bg-radial p-4 from-slate-50 from-30% to-slate-300">
        <Image src={Coupe} alt="car" fill />
        <p className="bg-rose-500 text-white rounded-md px-3 py-1 text-xs w-max mr-auto">
          {" "}
          {PersianDigits(`20`)} %
        </p>
      </div>
      <h2 className="font-bold">تویوتا</h2>
      <p className="text-slate-400 text-sm">مدل: {PersianDigits(2016)}</p>
      <div className="bg-slate-200/50 rounded-md p-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-slate-500 text-sm">قیمت:</p>
          <p className="font-bold text-indigo-500">{PersianCurrency(`${45000000}`)} تومان</p>
        </div>
        <p className="text-slate-500 text-sm">روزانه</p>
      </div>
      <div className="bg-slate-200/50 rounded-md p-2 flex items-center justify-between -mt-2">
        <div className="flex items-center gap-2">
          <p className="text-slate-500 text-sm">قیمت:</p>
          <p className="font-bold text-indigo-500">{PersianCurrency(`${45000000}`)} تومان</p>
        </div>
        <p className="text-slate-500 text-sm">ماهانه</p>
      </div>
      <p className="border-b border-dotted border-b-slate-500 h-1 w-full"></p>
      <div className="flex items-center justify-between text-sm px-1">
        <p>مبلغ ضمانت</p>
        <p className="font-bold">{PersianCurrency(`${45000000}`)} تومان</p>
      </div>
      <Button variant={"blue"}>درخواست رزرو</Button>
    </div>
  );
};

export default CarCard;
