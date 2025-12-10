"use client";

import UserHeader from "@/app/(admin)/_components/user-header";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { EnglishDigits, PersianDigits } from "@/lib/utils";
import Link from "next/link";
import DropDownMultiSelect from "../../../_components/discount/discount.dropdown";
import { useAddDiscount, useGetAllCars } from "../../../_hooks/discount.hooks";
import { discountFormInput, discountSchema } from "@/app/(admin)/schema/discount.schema";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import DatePickerUi from "@/app/(admin)/_components/availaibility/date-picker";
import { toast } from "sonner";

const AdminDiscount = () => {
  const { isPending, mutateAsync } = useAddDiscount();
  const { data, isLoading } = useGetAllCars();

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<discountFormInput>({
    resolver: zodResolver(discountSchema),
    mode: "onTouched",
    defaultValues: {
      title: "",
      percentage: "",
      start_date: new Date(),
      end_date: new Date(),
      cars: [],
    },
  });

  const onSubmit: SubmitHandler<discountFormInput> = async values => {
    if (new Date(values.end_date).getTime() <= new Date(values.start_date).getTime()) {
      toast.error("تاریخ پایان باید بزرگتر از تاریخ شروع باشد");
      return;
    }
    const discountPayload = {
      ...values,
      percentage: EnglishDigits(values.percentage),
    };
    await mutateAsync(discountPayload);
  };

  return (
    <div className="bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex flex-col h-full">
      <UserHeader title="  افزودن تخفیف جدید " />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${isLoading && "blur-xs"} p-4 grid gap-7 md:grid-cols-3 mt-8`}
      >
        <Input label="عنوان" {...register("title")} errors={errors.title} />
        <Input
          label="درصد تخفیف"
          {...register("percentage", {
            onChange: e => (e.target.value = PersianDigits(e.target.value)),
          })}
          errors={errors.percentage}
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
        <div className="relative">
          <Controller
            name="cars"
            control={control}
            render={({ field }) => (
              <DropDownMultiSelect
                label="انتخاب خودرو"
                value={field.value || []}
                onChange={field.onChange}
                options={data || []}
              />
            )}
          />
          {errors && (
            <p className="text-red-500 text-xs absolute -bottom-4.5  right-2">
              {PersianDigits(errors?.cars?.message || "")}
            </p>
          )}
        </div>
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
