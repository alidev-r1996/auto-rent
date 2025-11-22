"use client";

import UserHeader from "@/app/(admin)/_components/user-header";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import DropdownInput from "@/components/ui/input-option";
import UploadFile from "@/components/ui/uploader";
import { PersianCurrency, PersianDigits } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const CarGearOptions = [
  { label: "اتوماتیک", value: "Automatic" },
  { label: "دنده‌ای", value: "Manual" },
];

const CarTypeOptions = [
  { label: "شاسی بلند", value: "SUV" },
  { label: "سدان", value: "Sedan" },
  { label: "کوپه", value: "Coupe" },
  { label: "کروک", value: "Crook" },
  { label: "هاچبک", value: "Hatchback" },
  { label: "اسپرت", value: "Sport" },
];

const CarFuelOptions = [
  { label: "بنزین", value: "Gasoline" },
  { label: "برقی", value: "Electric" },
];

const CarSteeringOptions = [
  { label: "هیدرولیک", value: "Hydraulic" },
  { label: "برقی", value: "Electric" },
];

const AdminCarEditor = () => {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [mile_age, setMileAge] = useState("");
  const [capacity, setCapacity] = useState("");
  const [gear, setGear] = useState("");
  const [steering, setSteering] = useState("");
  const [fuel, setFuel] = useState("");
  const [price_day, setPriceDay] = useState("");
  const [price_month, setPriceMonth] = useState("");
  const [price_garranty, setPriceGarranty] = useState("");
  const [cover, setCover] = useState("");
  const [slider1, setSlider1] = useState("");
  const [slider2, setSlider2] = useState("");
  const [slider3, setSlider3] = useState("");
  const [slider4, setSlider4] = useState("");

  const registerCarHandler = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex flex-col h-full">
      <UserHeader title="  افزودن خودروی جدید " />
      <form onSubmit={registerCarHandler} className="p-4 grid gap-4 md:grid-cols-3 mt-8">
        <Input name="name" label="نام" value={name} onChange={e => setName(e.target.value)} />
        <Input name="model" label="مدل" value={model} onChange={e => setModel(e.target.value)} />
        <Input
          name="mile_age"
          label="کارکرد (کیلومتر) "
          value={mile_age}
          onChange={e => setMileAge(e.target.value)}
        />
        <Input
          name="capacity"
          label=" ظرفیت "
          value={capacity}
          onChange={e => setCapacity(e.target.value)}
        />
        <Input
          name="price_day"
          label=" مبلغ اجاره روزانه "
          value={price_day}
          onChange={e => setPriceDay(PersianDigits(e.target.value))}
        />
        <Input
          name="price_month"
          label=" مبلغ اجاره ماهیانه "
          value={price_month}
          onChange={e => setPriceMonth(PersianDigits(e.target.value))}
        />
        <Input
          name="price_garranty"
          label=" مبلغ ضمانت "
          value={price_garranty}
          onChange={e => setPriceGarranty(PersianDigits(e.target.value))}
        />
        <DropdownInput
          name="gear"
          label="نوع گیربکس"
          value={gear}
          onChange={setGear}
          options={[
            { label: "اتوماتیک", value: "automatic" },
            { label: "دنده‌ای", value: "manual" },
          ]}
        />
        <DropdownInput
          name="type"
          label="نوع خودرو"
          value={type}
          onChange={setType}
          options={CarTypeOptions}
        />
        <DropdownInput
          name="fuel"
          label="نوع سوخت"
          value={fuel}
          onChange={setFuel}
          options={CarFuelOptions}
        />
        <DropdownInput
          name="steering"
          label="نوع فرمان"
          value={steering}
          onChange={setSteering}
          options={CarSteeringOptions}
        />
        <UploadFile img={cover} onChange={setCover} label="عکس کاور اصلی" />
        <UploadFile img={slider1} onChange={setSlider1} label="عکس اسلایدر " />
        <UploadFile img={slider2} onChange={setSlider2} label="عکس اسلایدر " />
        <UploadFile img={slider3} onChange={setSlider3} label="عکس اسلایدر " />
        <UploadFile img={slider4} onChange={setSlider4} label="عکس اسلایدر " />
        <Input
          name="description"
          label=" توضیحات "
          value={description}
          onChange={e => setDescription(e.target.value)}
          labelStyle="md:col-span-2"
        />
        <div className="flex items-center gap-2 w-max mr-auto md:col-start-3 mt-8">
          <Link href={"/admin/car"}>
            <Button type="button" variant={"outline"}>
              منصرف شدن
            </Button>
          </Link>
          <Button type="submit" className="px-8" variant={"blue"}>
            ثبت خودرو
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminCarEditor;
