import { Button } from "@/components/ui/button";
import { EnglishDigits, PersianDigits } from "@/lib/utils";
import { insuranceItems } from "./info.constant";
import { useState } from "react";
import Input from "@/components/ui/input";
import { IdCard, MapPin, Phone, User } from "lucide-react";
import { useReservationStore } from "@/provider/zustand-store";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { infoFormInput, infoSchema } from "./info.schema";

const Info = ({ setStep }) => {
  const { personalInfo, setPersonalInfo } = useReservationStore();
  const [insurance, setInsurance] = useState<"Basic" | "Premium">(personalInfo.insurance);
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm<infoFormInput>({
    mode: "onTouched",
    resolver: zodResolver(infoSchema),
  });

  const infoFormHandler: SubmitHandler<infoFormInput> = values => {
    setPersonalInfo({
      ...values,
      nationalId: EnglishDigits(values.nationalId),
      phone: EnglishDigits(values.phone),
      insurance,
    });
    setStep(3);
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col h-max gap-3 p-4 w-full ">
        <h2 className="font-bold text-slate-500 md:text-lg "> انتخاب بیمه </h2>
        <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
        <table className="w-full table-fixed text-sm">
          <thead>
            <tr className="border-b border-b-slate-200 [&>th]:p-4 text-xs md:text-sm">
              <th></th>
              <th>
                <label
                  htmlFor="Basic"
                  className="flex items-center  cursor-pointer gap-2 justify-center"
                >
                  <input
                    type="radio"
                    name="insurance"
                    id="Basic"
                    value={"Basic"}
                    onChange={() => setInsurance("Basic")}
                    checked={insurance == "Basic"}
                  />
                  <p>بیمه پایه</p>
                </label>
              </th>
              <th>
                <label
                  htmlFor="Premium"
                  className="flex items-center cursor-pointer  gap-2 justify-center"
                >
                  <input
                    type="radio"
                    name="insurance"
                    id="Premium"
                    value={"Premium"}
                    onChange={() => setInsurance("Premium")}
                    checked={insurance == "Premium"}
                  />
                  <p>بیمه کامل</p>
                </label>
              </th>
            </tr>
          </thead>
          <tbody>
            {insuranceItems.map((i, index) => {
              return (
                <tr
                  key={index}
                  className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600"
                >
                  <th className="text-right!">{i.title}</th>
                  <td>{PersianDigits(i.basic)}</td>
                  <td>{PersianDigits(i.premium)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col gap-3 p-4 w-full h-full">
        <h2 className="font-bold text-slate-500 md:text-lg "> مشخصات تحویل گیرنده </h2>
        <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0 mb-8"></p>
        <form className="grid md:grid-cols-2 gap-6 mb-2 w-full ">
          <Input {...register("name")} label="نام و نام خانوادگی" errors={errors.name}>
            <User className="size-4" />
          </Input>
          <Input
            {...register("phone", {
              onChange: e => {
                e.target.value = PersianDigits(e.target.value);
              },
            })}
            label="تلفن همراه"
            errors={errors.phone}
          >
            <Phone className="size-4" />
          </Input>
          <Input
            {...register("nationalId", {
              onChange: e => {
                e.target.value = PersianDigits(e.target.value);
              },
            })}
            label="کد ملی"
            errors={errors.nationalId}
          >
            <IdCard className="size-4" />
          </Input>
          <Input {...register("address")} label="آدرس" errors={errors.address}>
            <MapPin className="size-4" />
          </Input>

          <Button
            onClick={handleSubmit(infoFormHandler)}
            variant={"blue"}
            className="w-full  md:mr-auto mt-3 md:col-start-2 py-5!"
          >
            ادامه رزرو
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Info;
