"use client";

import UserHeader from "@/app/(admin)/_components/user-header";
import { useState } from "react";
import { useGetAllCars } from "../../../_hooks/car.hooks";
import Input from "@/components/ui/input";
import DropdownInput from "@/components/ui/input-option";
import BooleanRadioInput from "@/components/ui/input-radio";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DatePickerUi from "../../../_components/availaibility/date-picker";
import { useAddAvailaibility } from "../../../_hooks/availaibility.hook";

const AdminInventoryCar = () => {
  const [start_date, setStartDate] = useState(new Date());
  const [end_date, setEndDate] = useState(new Date());
  const [reason, setReason] = useState("");
  const [car_id, SetCarId] = useState("");
  const [isBlocked, setIsBlock] = useState(false);
  const { data } = useGetAllCars();
  const { isPending, mutateAsync } = useAddAvailaibility();

  const registerInventoryHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (new Date(end_date).getTime() <= new Date(start_date).getTime()) {
      console.log("invalide end_date, end_date should be greater than start_date");
    }
    const newStatus = {
      start_date,
      end_date,
      reason,
      car_id,
      isBlocked,
    };
    await mutateAsync(newStatus);
  };

  return (
    <div className="bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex flex-col h-max">
      <UserHeader title="افزودن وضعیت دسترسی جدید " />
      <form onSubmit={registerInventoryHandler} className="p-4 grid gap-4 md:grid-cols-3 mt-8">
        <DropdownInput
          name="car_id"
          label="انتخاب خودرو "
          value={car_id}
          onChange={SetCarId}
          options={data || []}
        />
        <DatePickerUi date={start_date} setDate={setStartDate} label="تاریخ شروع" />
        <DatePickerUi date={end_date} setDate={setEndDate} label="تاریخ پایان" />
        <BooleanRadioInput
          name="isBlocked"
          label="وضعیت خودرو"
          value={isBlocked}
          onChange={setIsBlock}
          falseLabel="موجود"
          trueLabel="بلاک"
        />
        <Input
          label="توضیحات (اختیاری) "
          name="reason"
          value={reason}
          onChange={e => setReason(e.target.value)}
        />
        <p className="hidden md:block"></p>
        <div className="flex items-center gap-2 w-max mr-auto md:col-start-3 mt-8">
          <Link href={"/admin/availaibility"}>
            <Button type="button" variant={"outline"}>
              منصرف شدن
            </Button>
          </Link>
          <Button disabled={isPending} type="submit" className="px-8" variant={"blue"}>
            {isPending ? "در حال ثبت‌کردن" : " ثبت وضعیت دسترسی"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminInventoryCar;
