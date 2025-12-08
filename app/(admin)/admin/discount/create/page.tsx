"use client";

import UserHeader from "@/app/(admin)/_components/user-header";
import DatePickerCar from "@/app/(main)/(reserve)/reserve/[carId]/_components/date-picker";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { EnglishDigits, PersianDigits } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import DropDownMultiSelect from "../../../_components/discount/discount.dropdown";
import { useAddDiscount, useGetAllCars } from "../../../_hooks/discount.hooks";

const AdminDiscount = () => {
  const [title, setTitle] = useState("");
  const [percentage, setPercentage] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [cars, setCars] = useState<any>([]);
  const { isPending, mutateAsync} = useAddDiscount();
  const { data} = useGetAllCars();

  const registerCarHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const newDiscount = {
      title,
      percentage: EnglishDigits(percentage),
      startDate,
      endDate,
      cars,
    };
    mutateAsync(newDiscount);
  };

  return (
    <div className="bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex flex-col h-full">
      <UserHeader title="  افزودن تخفیف جدید " />
      <form onSubmit={registerCarHandler} className="p-4 grid gap-4 md:grid-cols-3 mt-8">
        <Input name="title" label="عنوان" value={title} onChange={e => setTitle(e.target.value)} />
        <Input
          name="percentage"
          label="درصد تخفیف"
          value={percentage}
          onChange={e => setPercentage(PersianDigits(e.target.value))}
        />
        <DatePickerCar
          date={startDate}
          setDate={setStartDate}
          label="تاریخ شروع "
          className="mt-0!"
        />
        <DatePickerCar date={endDate} setDate={setEndDate} label="تاریخ پایان " className="mt-0!" />
        <DropDownMultiSelect
          name="cars"
          value={cars}
          label="انتخاب خودرو"
          onChange={v => setCars(v)}
          options={data || []}
        />
        <div className="flex items-center gap-2 w-max mr-auto md:col-span-3 mt-8">
          <Link href={"/admin/car"}>
            <Button type="button" variant={"outline"}>
              منصرف شدن
            </Button>
          </Link>
          <Button disabled={isPending} type="submit" className="px-8" variant={"blue"}>
            {isPending ? "در حال ثبت تخفیف" : "ثبت تخفیف"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminDiscount;
