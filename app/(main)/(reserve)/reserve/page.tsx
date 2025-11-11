import { Button } from "@/components/ui/button";
import DropDown from "@/components/ui/dropdown";
import { PersianCurrency } from "@/lib/utils";
import { Clock4, MapPin } from "lucide-react";
import DatePickerCar from "../date-picker";
import Link from "next/link";

const FaqPage = async () => {
  return (
    <>
      <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col h-max gap-3 p-4 w-full ">
        <h2 className="font-bold text-slate-500 md:text-lg "> مشخصات رزرو </h2>
        <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0 mb-8"></p>
        <div className="flex items-center gap-2 flex-col md:flex-row mb-2 w-full ">
          <div className="bg-slate-200/50 rounded-md p-2 flex w-full flex-1 text-sm items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-slate-500 text-sm">قیمت:</p>
              <p className="font-bold text-indigo-500">{PersianCurrency(`${12500000}`)} تومان</p>
            </div>
            <p className="text-slate-500 text-sm">روزانه</p>
          </div>
          <div className="bg-slate-200/50 rounded-md p-2 flex w-full flex-1 text-sm items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-slate-500 text-sm">قیمت:</p>
              <p className="font-bold text-indigo-500">{PersianCurrency(`${2500000}`)} تومان</p>
            </div>
            <p className="text-slate-500 text-sm">ماهانه</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 mb-2 md:w-1/3">
          <Button variant={"outline_blue"} className="text-xs! rounded-full flex-1">
            اجاره خودرو بدون راننده
          </Button>
          <Button variant={"outline_blue"} className="text-xs! rounded-full flex-1">
            اجاره خودرو با راننده
          </Button>
          <Button variant={"outline_blue"} className="text-xs! rounded-full flex-1">
            اجاره ماشین عروس
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="w-full relative ">
            <DropDown
              title={"محل تحویل خودرو"}
              options={["فرودگاه امام خمینی", "ترمینال شرق", "ترمینال جنوب"]}
              className="min-w-full"
              icon={<MapPin className="size-5" />}
            />
          </div>
          <div className="w-full relative ">
            <DropDown
              title={"محل بازگشت خودرو"}
              options={["فرودگاه امام خمینی", "ترمینال شرق", "ترمینال جنوب"]}
              className="min-w-full"
              icon={<MapPin className="size-5" />}
            />
          </div>
          <DatePickerCar />
          <div className="w-full relative mt-2">
            <DropDown
              title={"07:00"}
              options={["07:00", "10:00", "13:00", "16:00", "19:00", "22:00"]}
              className="min-w-full"
              icon={<Clock4 className="size-5" />}
            />
            <p className="absolute -top-3 bg-white right-3 px-1 py-0.5 text-[10px] text-slate-400">
              ساعت تحویل
            </p>
          </div>
          <DatePickerCar />
          <div className="w-full relative mt-2">
            <DropDown
              title={"07:00"}
              options={["07:00", "10:00", "13:00", "16:00", "19:00", "22:00"]}
              className="min-w-full"
              icon={<Clock4 className="size-5" />}
            />
            <p className="absolute -top-3 bg-white right-3 px-1 py-0.5 text-[10px] text-slate-400">
              ساعت بازگشت
            </p>
          </div>
          <Link href='/reserve/info'>
            <Button variant={"blue"} className="w-full md:w-1/2 md:mr-auto mt-3 md:col-start-2 py-5!">
            ادامه رزرو
          </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
