"use client";

import UserHeader from "@/app/(admin)/_components/user-header";
import { useGetAllCars } from "../../../_hooks/car.hooks";
import Input from "@/components/ui/input";
import DropdownInput from "@/components/ui/input-option";
import BooleanRadioInput from "@/components/ui/input-radio";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DatePickerUi from "../../../_components/availaibility/date-picker";
import { useAddAvailaibility } from "../../../_hooks/availaibility.hook";
import {
  availaibilityFormInput,
  availaibilitySchema,
} from "@/app/(admin)/schema/availaibility.schema";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const AdminInventoryCar = () => {
  const { data, isLoading } = useGetAllCars();
  const { isPending, mutateAsync } = useAddAvailaibility();

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<availaibilityFormInput>({
    resolver: zodResolver(availaibilitySchema),
    mode: "onTouched",
    defaultValues: {
      car_id: "",
      isBlocked: false,
      reason: "",
      start_date: new Date(),
      end_date: new Date(),
    },
  });

  const registerInventoryHandler: SubmitHandler<availaibilityFormInput> = async values => {
    if (new Date(values.end_date).getTime() <= new Date(values.start_date).getTime()) {
      toast.error("تاریخ پایان باید بزرگتر از تاریخ شروع باشد");
      return;
    }
    await mutateAsync(values);
  };

  return (
    <div
      className={`${isLoading && "shadow-xs"} bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex flex-col h-max`}
    >
      <UserHeader title="افزودن وضعیت دسترسی جدید " />
      <form
        onSubmit={handleSubmit(registerInventoryHandler)}
        className="p-4 grid gap-7 md:grid-cols-3 mt-8"
      >
        <Controller
          name="car_id"
          control={control}
          render={({ field }) => (
            <DropdownInput
              {...field}
              value={field.value || ""}
              onChange={field.onChange}
              label="انتخاب خودرو"
              options={data || []}
              errors={errors.car_id}
            />
          )}
        />
        <Controller
          name="start_date"
          control={control}
          render={({ field }) => (
            <DatePickerUi date={field.value} setDate={field.onChange} label="تاریخ شروع" />
          )}
        />
        <Controller
          name="end_date"
          control={control}
          render={({ field }) => (
            <DatePickerUi date={field.value} setDate={field.onChange} label="تاریخ پایان" />
          )}
        />
        <Controller
          name="isBlocked"
          control={control}
          render={({ field }) => (
            <BooleanRadioInput
              {...field}
              value={field.value || false}
              onChange={field.onChange}
              label="وضعیت خودرو"
              falseLabel="موجود"
              trueLabel="بلاک"
            />
          )}
        />
        <Input label="توضیحات (اختیاری)" {...register("reason")} errors={errors.reason} />

        <p className="hidden md:block"></p>
        <div className="flex items-center gap-2 w-max mr-auto md:col-start-3 mt-8">
          <Link href={"/admin/availaibility"}>
            <Button type="button" variant={"outline"}>
              منصرف شدن
            </Button>
          </Link>
          <Button disabled={isPending} type="submit" className="px-8" variant={"blue"}>
            {isPending ? "در حال ثبت‌کردن" : " ثبت وضعیت "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminInventoryCar;
