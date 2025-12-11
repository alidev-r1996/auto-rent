"use client";

import { Clock4, MapPin } from "lucide-react";
import DatePickerCar from "../date-picker";
import { Button } from "@/components/ui/button";
import { PersianCurrency } from "@/lib/utils";
import { FC, useState } from "react";
import DropDownInput from "../drop-down";
import { useReservationStore } from "@/provider/zustand-store";
import Link from "next/link";

type SelectFormProps = {
  price_day: string | number;
  price_month: string | number;
  min_Date: string;
  max_Date: string;
  name: string | null;
  setStep: (step) => void;
};

const SelectForm: FC<SelectFormProps> = ({
  price_day,
  price_month,
  min_Date,
  max_Date,
  name,
  setStep,
}) => {
  const { setRentInfo, rentInfo } = useReservationStore();
  const [rentType, setRentType] = useState<"driver" | "none">(rentInfo.rent_type);
  const [receiveLocation, setReceiveLocation] = useState<any>(rentInfo.receive_location);
  const [returnLocation, setReturnLocation] = useState<any>(rentInfo.return_location);
  const [receiveDate, setReceiveDate] = useState<Date>(
    rentInfo.receive_date ? new Date(rentInfo.receive_date) : new Date()
  );

  const [returnDate, setReturnDate] = useState<Date>(
    rentInfo.return_date ? new Date(rentInfo.return_date) : new Date()
  );

  const [receiveTime, setReceiveTime] = useState(rentInfo.receive_time);
  const [returnTime, setReturnTime] = useState(rentInfo.return_time);

  const selectFormHandler = () => {
    setRentInfo({
      receive_date: receiveDate,
      return_date: returnDate,
      receive_location: receiveLocation,
      receive_time: receiveTime,
      rent_type: rentType,
      return_location: returnLocation,
      return_time: returnTime,
    });
    setStep(2);
  };

  return (
    <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col h-max gap-3 p-4 w-full ">
      <h2 className="font-bold text-slate-500 md:text-lg "> مشخصات رزرو </h2>
      <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0 mb-8"></p>
      {/* -------------------------------price header-------------------------- */}
      <div className="flex items-center gap-2 flex-col md:flex-row mb-2 w-full ">
        <div className="bg-slate-200/50 rounded-md p-2 flex w-full flex-1 text-sm items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-slate-500 text-sm">قیمت:</p>
            <p className="font-bold text-indigo-500">{PersianCurrency(`${price_day}`)} تومان</p>
          </div>
          <p className="text-slate-500 text-sm">روزانه</p>
        </div>
        <div className="bg-slate-200/50 rounded-md p-2 flex w-full flex-1 text-sm items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-slate-500 text-sm">قیمت:</p>
            <p className="font-bold text-indigo-500">{PersianCurrency(`${price_month}`)} تومان</p>
          </div>
          <p className="text-slate-500 text-sm">ماهانه</p>
        </div>
      </div>
      {/* ---------------------------------driver Type------------------------- */}
      <div className="flex flex-wrap items-center gap-2 mb-2 md:w-1/5">
        <Button
          variant={"outline_blue"}
          onClick={() => setRentType("none")}
          className={`${rentType == "none" && "bg-blue-600 text-white hover:bg-blue-600"} text-xs! rounded-full flex-1`}
        >
          اجاره خودرو بدون راننده
        </Button>
        <Button
          variant={"outline_blue"}
          onClick={() => setRentType("driver")}
          className={`${rentType == "driver" && "bg-blue-600 text-white hover:bg-blue-600"} text-xs! rounded-full flex-1`}
        >
          اجاره خودرو با راننده
        </Button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="w-full relative ">
          <DropDownInput
            label="محل تحویل خودرو"
            value={receiveLocation}
            onChange={value => {
              setReceiveLocation(value);
            }}
            options={[
              { label: "فرودگاه امام خمینی", value: "airport" },
              { label: "ترمینال شرق", value: "east-port" },
              { label: "ترمینال جنوب", value: "south-port" },
            ]}
          >
            <MapPin className="size-5" />
          </DropDownInput>
        </div>
        <div className="w-full relative ">
          <DropDownInput
            label="محل بازگشت خودرو"
            value={returnLocation}
            onChange={value => {
              setReturnLocation(value);
            }}
            options={[
              { label: "فرودگاه امام خمینی", value: "airport" },
              { label: "ترمینال شرق", value: "east-port" },
              { label: "ترمینال جنوب", value: "south-port" },
            ]}
          >
            <MapPin className="size-5" />
          </DropDownInput>
        </div>
        <DatePickerCar
          date={receiveDate}
          setDate={setReceiveDate}
          label="تاریخ تحویل خودرو"
          minDate={min_Date}
          maxDate={new Date(new Date(max_Date).getTime() - 1000 * 60 * 60 * 24)}
        />
        <div className="w-full relative mt-2">
          <DropDownInput
            label="ساعت تحویل خودرو"
            value={receiveTime}
            onChange={value => {
              setReceiveTime(value);
            }}
            options={[
              { label: "10:00", value: "10:00" },
              { label: "12:00", value: "12:00" },
              { label: "14:00", value: "14:00" },
              { label: "16:00", value: "16:00" },
            ]}
          >
            <Clock4 className="size-4" />
          </DropDownInput>
        </div>
        <DatePickerCar
          date={returnDate}
          setDate={setReturnDate}
          minDate={new Date(receiveDate.getTime() + 1000 * 60 * 60 * 24)}
          maxDate={new Date(max_Date)}
          label="تاریخ بازگشت خودرو"
        />
        <div className="w-full relative mt-2">
          <DropDownInput
            label="ساعت بازگشت خودرو"
            value={returnTime}
            onChange={value => {
              setReturnTime(value);
            }}
            options={[
              { label: "10:00", value: "10:00" },
              { label: "12:00", value: "12:00" },
              { label: "14:00", value: "14:00" },
              { label: "16:00", value: "16:00" },
            ]}
          >
            <Clock4 className="size-4" />
          </DropDownInput>
        </div>
        <Button
          type="button"
          onClick={selectFormHandler}
          variant={"blue"}
          disabled={name && /\d/.test(name) ? true : false}
          className="w-full md:w-1/2 md:mr-auto mt-3 md:col-start-2 py-5!"
        >
          ادامه رزرو
        </Button>
      </div>
      {name && /\d/.test(name) && (
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row w-max md:mr-auto">
          <p className="text-rose-500 text-xs text-center ">
            {name && /\d/.test(name)
              ? "برای ادامه رزرو لطفا ابتدا اطلاعات خود را تکمیل کنید."
              : "برای ادامه رزرو لطفا وارد حساب کاربری خود شوید."}
          </p>
          <Link
            href={name ? "/user" : "/auth"}
            className="text-xs bg-blue-500 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer hover:bg-blue-600 w-max px-3 py-1 text-white rounded"
          >
            {name ? "تکمیل اطلاعات" : "ورود / ثبت‌نام"}
          </Link>
        </div>
      )}
    </div>
  );
};

export default SelectForm;
