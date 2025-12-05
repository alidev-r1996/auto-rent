"use client";

import { Button } from "@/components/ui/button";
import { CreditCard, IdCard, Mail, Phone, UserRound } from "lucide-react";
import React, { useEffect, useState } from "react";
import Input from "@/components/ui/input";
import DatePickerCar from "@/app/(main)/(reserve)/reserve/[carId]/_components/date-picker";
import { EnglishDigits, PersianDigits } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";
import { useEditUser, useGetUserById } from "../_hook/user.hook";
import UserHeader from "../_components/user-header";

const Profile = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [birth, setBirth] = useState(new Date());
  const { data: session } = authClient.useSession();

  const { data, isLoading } = useGetUserById(session?.user?.id);
  const { mutateAsync, isPending: isSaving, initialized, setInitialized } = useEditUser();

  useEffect(() => {
    if (!data || initialized) return;
    setName(/\d/gi.test(data.name) ? "" : data.name);
    setPhone(PersianDigits(data.phoneNumber ?? ""));
    setNationalId(PersianDigits(data.profile?.national_id ?? ""));
    setEmail(data.email ?? "");
    setCardNumber(PersianDigits(data.profile?.card_number ?? ""));
    setBirth(data.profile?.birth ? new Date(data.profile.birth) : new Date());

    setInitialized(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, initialized]);

  const formHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      name,
      email,
      phoneNumber: EnglishDigits(phone),
      national_id: EnglishDigits(nationalId),
      card_number: EnglishDigits(cardNumber),
      birth,
      user_id: session!.user.id,
    };
    await mutateAsync(user);
  };

  return (
    <div
      className={`${isLoading && "blur-xs"} bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex flex-col`}
    >
      <UserHeader title="حساب کاربری" />
      <form onSubmit={formHandler} className="grid md:grid-cols-2 gap-5 mt-8">
        <Input
          value={name}
          name="name"
          onChange={e => setName(e.target.value)}
          label="نام و نام خانوادگی"
        >
          <UserRound className="size-4" />
        </Input>
        <Input
          name="phone"
          value={phone}
          onChange={e => setPhone(PersianDigits(e.target.value))}
          label="تلفن همراه"
        >
          <Phone className="size-4" />
        </Input>
        <Input
          name="nationalId"
          value={nationalId}
          onChange={e => setNationalId(PersianDigits(e.target.value))}
          label="کد ملی"
        >
          <IdCard className="size-4" />
        </Input>
        <Input
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          label="آدرس ایمیل"
        >
          <Mail className="size-4" />
        </Input>
        <Input
          name="cardNumber"
          value={cardNumber}
          onChange={e => setCardNumber(PersianDigits(e.target.value))}
          label="شماره شبا جهت بازگشت وجه"
        >
          <CreditCard className="size-4" />
        </Input>
        <DatePickerCar label="تاریخ تولد" date={birth} setDate={setBirth} dropDown />
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
