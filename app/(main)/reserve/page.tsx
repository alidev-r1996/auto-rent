import LogoSlider from "@/components/main/logo-slider";
import { Button } from "@/components/ui/button";
import DropDown from "@/components/ui/dropdown";
import { PersianCurrency, PersianDigits } from "@/lib/utils";
import QuestionImg from "@/public/assets/images/contactus.png";
import {
  CalendarArrowUp,
  CarFront,
  Check,
  Clock4,
  Contact,
  CreditCard,
  FileCheck,
  FileText,
  IdCard,
  MapPin,
  Phone,
  ScrollText,
  Shield,
  User,
} from "lucide-react";
import Image from "next/image";
import DatePickerCar from "../reserve/date-picker";
import { AiOutlineDashboard } from "react-icons/ai";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { SiTicktick } from "react-icons/si";
import Link from "next/link";

const userInfo = [
  { id: 1, title: "نام و نام خانوادگی", icon: User, name: "name" },
  { id: 2, title: "شماره همراه", icon: Phone, name: "phone" },
  { id: 3, title: "کدملی", icon: IdCard, name: "IdCard" },
  { id: 4, title: "آدرس", icon: MapPin, name: "address" },
];

const orderFeatures = [
  { id: 1, title: "نام خودرو ", text: "بنز s500", icon: CarFront },
  { id: 2, title: "نوع رزرو ", text: "بدون راننده", icon: TbSteeringWheelFilled },
  { id: 3, title: "بیمه", text: "پایه", icon: Shield },
  { id: 4, title: "محل تحویل", text: "فرودگاه مهرآباد", icon: MapPin },
  { id: 5, title: "تاریخ تحویل", text: "2025/01/05", icon: CalendarArrowUp },
  { id: 6, title: "ساعت تحویل", text: "07:30", icon: Clock4 },
  { id: 7, title: "محل بازگشت", text: "فرودگاه مهرآباد", icon: MapPin },
  { id: 8, title: "تاریخ بازگشت", text: "2025/01/09", icon: CalendarArrowUp },
  { id: 9, title: "ساعت بازگشت", text: "12:00", icon: Clock4 },
];

const insuranceItems = [
  { id: 1, title: "قیمت", basic: "0", premium: "32,045,275" },
  { id: 2, title: "ودیعه", basic: "250,000,000", premium: "250,000,000" },
  { id: 3, title: "حداکثر تعهد خسارت جزیی", basic: "250,000,000", premium: "50,000,000" },
  { id: 4, title: "حداکثر تعهد خسارت کلی", basic: "1,500,000,000", premium: "500,000,000" },
  { id: 5, title: "اخذ افت خودرو در زمان تصادف", basic: "بطور کامل", premium: "اخذ نمی گردد" },
  {
    id: 6,
    title: "خواب خودرو",
    basic: "تمام روزهای خواب به قیمت اجاره",
    premium: "نصف قیمت اجاره حداکثر به مدت 30 روز",
  },
];

const paymentItems = [
  { id: 1, title: "هزینه روزانه", text: "25,500,000" },
  { id: 2, title: "تحویل در محل مبدأ", text: "585,000" },
  { id: 3, title: "تحویل در محل بازگشت", text: "585,000" },
  { id: 4, title: "بیمه", text: "0" },
  { id: 5, title: "ودیعه راهنمایی رانندگی", text: "0" },
  { id: 6, title: "هزینه راننده ", text: "0" },
  { id: 7, title: "مالیات", text: "3,685,510" },
];

const FaqPage = () => {
  return (
    <section className="max-w-[1920px]">
      <div className="absolute  top-0 mx-auto max-w-screen w-[1905px] h-60 md:h-98 -z-5">
        <Image
          src={QuestionImg}
          alt="Hero Section"
          fill
          placeholder="blur"
          className="object-cover brightness-70 contrast-110"
        />
      </div>
      <div className="mt-45 md:mt-87 p-2 md:p-0 flex flex-col gap-4 max-w-[1690px] mx-auto mb-6">
        <div className="bg-white border border-slate-200 shadow-xs rounded-lg flex items-center p-4 text-slate-500">
          <div className="flex flex-col items-center gap-1">
            <p className="p-2 rounded-full border border-slate-200 w-max">
              <Check className="p-0.5 size-7" />
            </p>
            <p className="text-xs text-slate-600 sr-only md:not-sr-only">انتخاب خودرو</p>
          </div>
          <p className="border-dashed border flex-1 border-slate-200 md:-translate-y-2"></p>
          <div className="flex flex-col gap-1 items-center">
            <p className="p-2 rounded-full border border-slate-200">
              <IdCard className="p-0.5 size-7" />
            </p>
            <p className="text-xs text-slate-600 sr-only md:not-sr-only">مشخصات </p>
          </div>
          <p className="border-dashed border flex-1 border-slate-200 md:-translate-y-2"></p>
          <div className="flex flex-col gap-1 items-center">
            <p className="p-2 rounded-full border border-slate-200">
              <FileCheck className="p-0.5 size-7" />
            </p>
            <p className="text-xs text-slate-600 sr-only md:not-sr-only">تأیید اطلاعات </p>
          </div>
          <p className="border-dashed border flex-1 border-slate-200 md:-translate-y-2"></p>
          <div className="flex flex-col gap-1 items-center">
            <p className="p-2 rounded-full border border-slate-200">
              <CreditCard className="p-0.5 size-7" />
            </p>
            <p className="text-xs text-slate-600 sr-only md:not-sr-only"> پرداخت </p>
          </div>
          <p className="border-dashed border flex-1 border-slate-200 md:-translate-y-2"></p>
          <div className="flex flex-col gap-1 items-center">
            <p className="p-2 rounded-full border border-slate-200">
              <CarFront className="p-0.5 size-7" />
            </p>
            <p className="text-xs text-slate-600 sr-only md:not-sr-only">دریافت خودرو </p>
          </div>
        </div>

        <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col h-max gap-3 p-4 w-full ">
          <h2 className="font-bold text-slate-500 md:text-lg "> مشخصات </h2>
          <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0 mb-8"></p>
          <div className="flex items-center gap-2 flex-col md:flex-row mb-2 w-full ">
            <div className="bg-slate-200/50 rounded-md p-2 flex w-full flex-1 text-sm items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-slate-500 text-sm">قیمت:</p>
                <p className="font-bold text-indigo-500">{PersianCurrency(`${12500000}`)} تومان</p>
              </div>
              <p className="text-slate-500 text-sm">روزانه</p>
            </div>
            <div className="bg-slate-200/50 rounded-md p-2 flex w-full flex-1 text-sm items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-slate-500 text-sm">قیمت:</p>
                <p className="font-bold text-indigo-500">{PersianCurrency(`${2500000}`)} تومان</p>
              </div>
              <p className="text-slate-500 text-sm">ماهانه</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-2 md:w-1/3">
            <Button variant={"outline_blue"} className="text-xs! rounded-full flex-1">
              اجاره خودرو بدون راننده
            </Button>
            <Button variant={"outline_blue"} className="text-xs! rounded-full flex-1">
              اجاره خودرو با راننده
            </Button>
            <Button variant={"outline_blue"} className="text-xs! rounded-full flex-1">
              اجاره ماشین عروس
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="w-full relative ">
              <DropDown
                title={"محل تحویل خودرو"}
                options={["فرودگاه امام خمینی", "ترمینال شرق", "ترمینال جنوب"]}
                className="min-w-full"
                icon={<MapPin className="size-5" />}
              />
            </div>
            <div className="w-full relative ">
              <DropDown
                title={"محل بازگشت خودرو"}
                options={["فرودگاه امام خمینی", "ترمینال شرق", "ترمینال جنوب"]}
                className="min-w-full"
                icon={<MapPin className="size-5" />}
              />
            </div>
            <DatePickerCar />
            <div className="w-full relative mt-2">
              <DropDown
                title={"07:00"}
                options={["07:00", "10:00", "13:00", "16:00", "19:00", "22:00"]}
                className="min-w-full"
                icon={<Clock4 className="size-5" />}
              />
              <p className="absolute -top-3 bg-white right-3 px-1 py-0.5 text-[10px] text-slate-400">
                ساعت تحویل
              </p>
            </div>
            <DatePickerCar />
            <div className="w-full relative mt-2">
              <DropDown
                title={"07:00"}
                options={["07:00", "10:00", "13:00", "16:00", "19:00", "22:00"]}
                className="min-w-full"
                icon={<Clock4 className="size-5" />}
              />
              <p className="absolute -top-3 bg-white right-3 px-1 py-0.5 text-[10px] text-slate-400">
                ساعت بازگشت
              </p>
            </div>
            <Button variant={"blue"} className="w-full mt-3 md:col-start-2 py-5!">
              ادامه رزرو{" "}
            </Button>
          </div>
        </div>

        <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col h-max gap-3 p-4 w-full ">
          <h2 className="font-bold text-slate-500 md:text-lg "> تأیید اطلاعات </h2>
          <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0 mb-8"></p>
          <form className="grid md:grid-cols-2 gap-4 mb-2 w-full ">
            {userInfo.map((i, index) => {
              const Icon = i.icon;
              return (
                <label
                  key={index}
                  htmlFor={i.name}
                  className="flex items-center gap-2 rounded-lg border border-slate-200 relative p-3 text-slate-400 text-xs md:text-sm flex-1"
                >
                  <Icon className="size-5" />
                  <p className="border-r border-r-slate-300">&nbsp;</p>
                  <input
                    type="text"
                    name={i.name}
                    className="appearance-none outline-none flex-1 peer text-slate-500"
                    placeholder={i.title}
                  />
                  <p className="absolute hidden md:block peer-placeholder-shown:hidden text-[10px] bg-white px-1 py-1 -top-3 right-6">
                    {i.title}
                  </p>
                </label>
              );
            })}
            <Button variant={"blue"} className="w-full mt-3 md:col-start-2 py-5!">
              ادامه رزرو
            </Button>
          </form>
        </div>

        <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col h-max gap-3 p-4 w-full ">
          <h2 className="font-bold text-slate-500 md:text-lg "> اطلاعات رزرو </h2>
          <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0 mb-8"></p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 gap-y-4 text-slate-500 text-xs md:text-sm">
            {orderFeatures.map((i, index) => {
              const Icon = i.icon;
              return (
                <div key={index} className="flex items-center gap-2 text-xs md:text-sm">
                  <p className="p-1 border border-slate-200 rounded">
                    <Icon className="size-6 text-slate-400 p-0.5" />
                  </p>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-slate-600">{i.title}</p>
                    <p className="text-slate-400 text-[10px] md:text-xs">{PersianDigits(i.text)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col h-max gap-3 p-4 w-full ">
            <h2 className="font-bold text-slate-500 md:text-lg "> انتخاب بیمه </h2>
            <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0 mb-8"></p>
            <table className="w-full table-fixed text-sm">
              <thead>
                <tr className="border-b border-b-slate-200 [&>th]:p-4 text-xs md:text-sm">
                  <th></th>
                  <th>
                    <label
                      htmlFor="basic"
                      className="flex items-center  cursor-pointer gap-2 justify-center"
                    >
                      <input type="radio" name="insurance" id="basic" value={"basic"} />{" "}
                      <p>بیمه پایه</p>
                    </label>
                  </th>
                  <th>
                    <label
                      htmlFor="premium"
                      className="flex items-center cursor-pointer  gap-2 justify-center"
                    >
                      <input type="radio" name="insurance" id="premium" value={"premium"} />{" "}
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

          <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col h-max gap-3 p-4 w-full ">
            <h2 className="font-bold text-slate-500 md:text-lg "> محاسبه قیمت </h2>
            <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0 mb-4"></p>
            <table className="w-full table-fixed text-sm">
              <thead>
                <tr className="border-b border-b-slate-200 [&>th]:p-4 text-xs md:text-sm">
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {paymentItems.map((i, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600"
                    >
                      <th className="text-right!">{i.title}</th>
                      <td>{PersianDigits(i.text)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col h-max gap-3 p-4 w-full ">
          <h2 className="font-bold text-slate-500 md:text-lg "> شروط و تعهدات طرفین </h2>
          <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0 mb-4"></p>
          <a
            href=""
            className="text-blue-400 font-bold flex items-center gap-1 text-xs hover:underline hover:text-blue-500 cursor-pointer"
            download
          >
            <FileText className="size-5" /> متن شروط و تعهدات طرفین
          </a>
          <label
            htmlFor="rule-accept"
            className="flex items-center cursor-pointer gap-2 pr-1 text-slate-500 text-xs md:text-sm"
          >
            <input
              type="checkbox"
              name="rule"
              id="rule-accept"
              className="size-3.5 rounded-lg border border-slate-300 cursor-pointer"
            />
            <p>شروط و تعدات طرفین قرارداد را قبول دارم.</p>
          </label>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 bg-slate-200 rounded-lg p-4 mt-4">
            <div className="flex items-center gap-2 text-sm">
              <h3>مبلغ قابل پرداخت :</h3>
              <p className="font-bold text-base text-slate-600">{PersianCurrency(`45800000`)}</p>
              <p>تومان</p>
            </div>
            <Button variant={"blue"} className="w-full md:w-1/7 mt-4 md:mt-0">
              پرداخت
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
