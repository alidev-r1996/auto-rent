"use client";

import { Button } from "@/components/ui/button";
import { CreditCard, IdCard, Mail, Phone, UserRound } from "lucide-react";
import React, { useEffect } from "react";
import Input from "@/components/ui/input";
import DatePickerCar from "@/app/(main)/(reserve)/reserve/[carId]/_components/date-picker";
import { EnglishDigits, PersianDigits } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";
import { useEditUser, useGetUserById } from "../_hook/user.hook";
import UserHeader from "../_components/user-header";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileFormInput, profileSchema } from "../schema/user.schema";

const Profile = () => {
  const { data: session, refetch } = authClient.useSession();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm<profileFormInput>({
    mode: "onTouched",
    resolver: zodResolver(profileSchema),
  });

  const { data, isLoading } = useGetUserById(session?.user?.id);
  const { mutateAsync, isPending: isSaving, initialized, setInitialized } = useEditUser();

  useEffect(() => {
    if (!data || initialized) return;
    reset({
      name: /\d/gi.test(data.name) ? "" : data.name,
      phoneNumber: PersianDigits(data.phoneNumber ?? ""),
      national_id: PersianDigits(data.profile?.national_id ?? ""),
      email: /@example.com/gi.test(data.email) ? "" : data.email,
      card_number: PersianDigits(data.profile?.card_number ?? ""),
      birth: data.profile?.birth ? new Date(data.profile.birth) : new Date(),
    });

    setInitialized(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, initialized]);

  const formHandler: SubmitHandler<profileFormInput> = async values => {
    const userProfile = {
      ...values,
      phoneNumber: EnglishDigits(values.phoneNumber),
      national_id: EnglishDigits(values.national_id),
      card_number: EnglishDigits(values.card_number),
      user_id: session!.user.id,
    };
    mutateAsync(userProfile);
    await refetch();
  };

  return (
    <div
      className={`${isLoading && "blur-xs"} bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex flex-col`}
    >
      <UserHeader title="حساب کاربری" />
      <form onSubmit={handleSubmit(formHandler)} className="grid md:grid-cols-2 gap-7 mt-8">
        <Input {...register("name")} label="نام و نام خانوادگی" errors={errors.name}>
          <UserRound className="size-4" />
        </Input>
        <Input
          {...register("phoneNumber", {
            onChange: e => {
              e.target.value = PersianDigits(e.target.value);
            },
          })}
          disabled
          label="تلفن همراه"
          errors={errors.phoneNumber}
        >
          <Phone className="size-4" />
        </Input>
        <Input
          {...register("national_id", {
            onChange: e => {
              e.target.value = PersianDigits(e.target.value);
            },
          })}
          label="کد ملی"
          errors={errors.national_id}
        >
          <IdCard className="size-4" />
        </Input>
        <Input {...register("email")} label="آدرس ایمیل" errors={errors.email}>
          <Mail className="size-4" />
        </Input>
        <Input
          {...register("card_number", {
            onChange: e => {
              e.target.value = PersianDigits(e.target.value);
            },
          })}
          label="شماره شبا جهت بازگشت وجه"
          errors={errors.card_number}
        >
          <CreditCard className="size-4" />
        </Input>
        <Controller
          control={control}
          name="birth"
          render={({ field }) => (
            <DatePickerCar
              label="تاریخ تولد"
              date={field.value}
              setDate={d => field.onChange(d)}
              dropDown
            />
          )}
        />
        <Button
          disabled={isSaving}
          variant={"blue"}
          className="h-full! md:col-start-2 w-max mr-auto"
        >
          {isSaving ? "در حال ذخیره‌کردن..." : "ویرایش حساب کاربری"}
        </Button>
      </form>
    </div>
  );
};

export default Profile;
