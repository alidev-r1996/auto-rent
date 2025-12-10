"use client";

import UserHeader from "@/app/(admin)/_components/user-header";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import DropdownInput from "@/components/ui/input-option";
import UploadFile from "@/components/ui/uploader";
import TagInput from "@/components/ui/input.tag";

import { EnglishDigits, PersianDigits } from "@/lib/utils";
import Link from "next/link";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect } from "react";
import { useEditCar, useGetCar } from "../../../_hooks/car.hooks";

import {
  CarFuelOptions,
  CarGearOptions,
  CarSteeringOptions,
  CarTypeOptions,
} from "../../../_constant/car.constant";

import { carFormInputs, carSchema } from "@/app/(admin)/schema/car.schema";

const AdminCarEditor = ({ id }) => {
  const { isPending, mutateAsync, initialized, setInitialized } = useEditCar();
  const { isLoading, data } = useGetCar(id);

  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<carFormInputs>({
    resolver: zodResolver(carSchema),
    mode: "onTouched",
  });

  /* ---------------------- Prefill: قرار دادن داده داخل فرم ---------------------- */
  useEffect(() => {
    if (!data || initialized) return;

    setValue("name", data.name);
    setValue("brand", data.brand);
    setValue("model", PersianDigits(data.model));
    setValue("mile_age", PersianDigits(data.mile_age));
    setValue("capacity", PersianDigits(data.capacity));
    setValue("gear", data.gear);
    setValue("fuel", data.fuel);
    setValue("steering", data.steering);
    setValue("type", data.type);
    setValue("description", data.description);
    setValue("price_day", PersianDigits(data.price_day));
    setValue("price_month", PersianDigits(data.price_month));
    setValue("price_garranty", PersianDigits(data.price_garranty));
    setValue("features", data.features || []);

    // 4 اسلایدر
    setValue("slider1", data.images?.[0] || "");
    setValue("slider2", data.images?.[1] || "");
    setValue("slider3", data.images?.[2] || "");
    setValue("slider4", data.images?.[3] || "");
    setValue("cover", data.cover || "");

    setInitialized(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, initialized]);

  /* ---------------------- Submit Handler ---------------------- */
  const submitHandler = async (values: carFormInputs) => {
    const newCar = {
      ...values,
      model: EnglishDigits(values.model),
      mile_age: EnglishDigits(values.mile_age),
      capacity: EnglishDigits(values.capacity),
      price_day: EnglishDigits(values.price_day),
      price_month: EnglishDigits(values.price_month),
      price_garranty: EnglishDigits(values.price_garranty),
      images: [values.slider1, values.slider2, values.slider3, values.slider4],
      id,
    };

    mutateAsync(newCar);
  };

  return (
    <div
      className={`${isLoading && "blur-xs"} bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex flex-col h-full`}
    >
      <UserHeader title="ویرایش خودرو" />

      <form onSubmit={handleSubmit(submitHandler)} className="p-4 grid gap-6 md:grid-cols-3 mt-8">
        {/* نام */}
        <Input label="نام" {...register("name")} errors={errors.name} />

        <Input label="برند" {...register("brand")} errors={errors.brand} />

        <Input
          label="مدل"
          {...register("model", {
            onChange: e => (e.target.value = PersianDigits(e.target.value)),
          })}
          errors={errors.model}
        />

        <Input
          label="کارکرد (کیلومتر)"
          {...register("mile_age", {
            onChange: e => (e.target.value = PersianDigits(e.target.value)),
          })}
          errors={errors.mile_age}
        />

        <Input
          label="ظرفیت"
          {...register("capacity", {
            onChange: e => (e.target.value = PersianDigits(e.target.value)),
          })}
          errors={errors.capacity}
        />

        <Input
          label="اجاره روزانه"
          {...register("price_day", {
            onChange: e => (e.target.value = PersianDigits(e.target.value)),
          })}
          errors={errors.price_day}
        />

        <Input
          label="اجاره ماهانه"
          {...register("price_month", {
            onChange: e => (e.target.value = PersianDigits(e.target.value)),
          })}
          errors={errors.price_month}
        />

        <Input
          label="مبلغ ضمانت"
          {...register("price_garranty", {
            onChange: e => (e.target.value = PersianDigits(e.target.value)),
          })}
          errors={errors.price_garranty}
        />

        <Controller
          name="gear"
          control={control}
          render={({ field }) => (
            <DropdownInput
              label="نوع گیربکس"
              name={field.name}
              value={field.value || ""}
              onChange={field.onChange}
              options={CarGearOptions}
              errors={errors.gear}
            />
          )}
        />

        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <DropdownInput
              label="نوع خودرو"
              name={field.name}
              value={field.value || ""}
              onChange={field.onChange}
              options={CarTypeOptions}
              errors={errors.type}
            />
          )}
        />

        <Controller
          name="fuel"
          control={control}
          render={({ field }) => (
            <DropdownInput
              label="نوع سوخت"
              name={field.name}
              value={field.value || ""}
              onChange={field.onChange}
              options={CarFuelOptions}
              errors={errors.fuel}
            />
          )}
        />

        <Controller
          name="steering"
          control={control}
          render={({ field }) => (
            <DropdownInput
              label="نوع فرمان"
              name={field.name}
              value={field.value || ""}
              onChange={field.onChange}
              options={CarSteeringOptions}
              errors={errors.steering}
            />
          )}
        />

        <Controller
          name="features"
          control={control}
          render={({ field }) => (
            <TagInput
              name={field.name}
              label="ویژگی‌های خودرو"
              value={field.value ?? []}
              onChange={field.onChange}
              placeholder="ویژگی جدید ..."
              errors={errors.features}
            />
          )}
        />

        <div className="md:col-span-2">
          <Input label="توضیحات" {...register("description")} errors={errors.description} />
        </div>

        <div className="relative mb-2">
          <Controller
            name="cover"
            control={control}
            render={({ field }) => (
              <UploadFile img={field.value || ""} onChange={field.onChange} label="عکس کاور اصلی" />
            )}
          />
          {errors && (
            <p className="text-red-500 text-xs absolute -bottom-4.5  right-2">
              {PersianDigits(errors?.cover?.message || "")}
            </p>
          )}
        </div>

        <div className="relative mb-2">
          <Controller
            name="slider1"
            control={control}
            render={({ field }) => (
              <UploadFile img={field.value || ""} onChange={field.onChange} label="عکس اسلایدر 1" />
            )}
          />
          {errors && (
            <p className="text-red-500 text-xs absolute -bottom-4.5  right-2">
              {PersianDigits(errors?.slider1?.message || "")}
            </p>
          )}
        </div>

        <div className="relative mb-2">
          <Controller
            name="slider2"
            control={control}
            render={({ field }) => (
              <UploadFile img={field.value || ""} onChange={field.onChange} label="عکس اسلایدر 2" />
            )}
          />
          {errors && (
            <p className="text-red-500 text-xs absolute -bottom-4.5  right-2">
              {PersianDigits(errors?.slider2?.message || "")}
            </p>
          )}
        </div>

        <div className="relative mb-2">
          <Controller
            name="slider3"
            control={control}
            render={({ field }) => (
              <UploadFile img={field.value || ""} onChange={field.onChange} label="عکس اسلایدر 3" />
            )}
          />

          {errors && (
            <p className="text-red-500 text-xs absolute -bottom-4.5  right-2">
              {PersianDigits(errors?.slider3?.message || "")}
            </p>
          )}
        </div>

        <div className="relative mb-2">
          <Controller
            name="slider4"
            control={control}
            render={({ field }) => (
              <UploadFile img={field.value || ""} onChange={field.onChange} label="عکس اسلایدر 4" />
            )}
          />
          {errors && (
            <p className="text-red-500 text-xs absolute -bottom-4.5  right-2">
              {PersianDigits(errors?.slider4?.message || "")}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 w-max mr-auto md:col-start-3 mt-8">
          <Link href={"/admin/car"}>
            <Button type="button" variant={"outline"}>
              منصرف شدن
            </Button>
          </Link>

          <Button disabled={isPending} type="submit" className="px-8" variant={"blue"}>
            {isPending ? "در حال ویرایش خودرو" : "ثبت تغییرات"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminCarEditor;
