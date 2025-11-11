import Image from "next/image";
import BlogImg from "@/public/assets/images/contactus.png";
import { PersianCurrency, PersianDate, PersianDigits } from "@/lib/utils";
import SingleImg from "@/public/assets/images/single.png";
import { AiOutlineDashboard } from "react-icons/ai";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { SiTicktick } from "react-icons/si";
import { Check, ChevronLeft, ChevronRight, MapPin, CalendarDays, Clock4 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import DropDown from "@/components/ui/dropdown";
import DatePickerCar from "../../reserve/date-picker";

const featureItems = [
  { id: 1, title: "مسافت پیموده", text: "۱۲ کیلومتر", icon: AiOutlineDashboard },
  { id: 2, title: "نوع دنده", text: "اتوماتیک", icon: GiGearStickPattern },
  { id: 3, title: "سوخت", text: "بنزین", icon: BsFillFuelPumpFill },
  { id: 4, title: "ظرفیت", text: "۴ نفر", icon: MdOutlineAirlineSeatReclineExtra },
  { id: 5, title: "فرمان", text: "هیدرولیک", icon: TbSteeringWheelFilled },
  { id: 6, title: "مدل", text: "۲۰۱۴", icon: SiTicktick },
];

const optionItems = [
  { id: 1, title: "گرمکن صندلی" },
  { id: 2, title: "سیستم PRE-SAFE Brake " },
  { id: 3, title: "گیربکس 7 سرعته اتوماتیک" },
  { id: 4, title: "گرمکن و تهویه مطبوع صندلی‌ها " },
  { id: 5, title: "استارت بدون کلید " },
  { id: 6, title: "تعلیق تمام الکترونیکی" },
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

const carImages = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

const CarDetailPage = () => {
  return (
    <section className="max-w-[1920px]">
      <div className="absolute  top-0 mx-auto max-w-screen w-[1920px] h-60 md:h-98 -z-5">
        <Image
          src={BlogImg}
          alt="Hero Section"
          fill
          placeholder="blur"
          className="object-cover brightness-70 contrast-110"
        />
      </div>
      <div className="mt-38 md:mt-89  p-4 md:p-0"></div>
      <div className="flex flex-col md:flex-row gap-4 max-w-[1690px] mx-auto mb-8 p-2 md:p-0">
        <div className=" w-full md:w-2/3 flex flex-col gap-4">
          <div className="rounded-lg shadow-xs border border-slate-100 flex flex-col gap-4 p-4 bg-white">
            <h2 className="font-bold text-slate-700 text-lg ">بنز s500 </h2>
            <p className="border-b border-b-slate-300 -mt-2 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
            <Carousel className="md:w-4/5 w-3/4 md:p-8 p-4 mx-auto" dir="ltr">
              <CarouselContent>
                {carImages.map(i => (
                  <CarouselItem
                    key={i}
                    className="flex items-center justify-center relative  md:min-w-full md:p-4 h-50 md:h-80 rounded-lg "
                  >
                    <Image src={`/assets/images/cars/${i}`} alt="car picture" fill />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="flex items-center gap-2 flex-col md:flex-row mb-2 w-full ">
              <div className="bg-slate-200/50 rounded-md p-2 flex w-full flex-1 text-sm items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-slate-500 text-sm">قیمت:</p>
                  <p className="font-bold text-indigo-500">
                    {PersianCurrency(`${12500000}`)} تومان
                  </p>
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
          </div>

          <div className="rounded-lg shadow-xs border border-slate-100 flex flex-col gap-4 p-4 bg-white">
            <h2 className="font-bold text-slate-500 text-lg ">پوشش بیمه</h2>
            <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
            <table className="w-full table-fixed text-sm">
              <thead>
                <tr className="border-b border-b-slate-200 [&>th]:p-4 text-xs md:text-sm">
                  <th></th>
                  <th>
                    <label
                      htmlFor="basic"
                      className="flex items-center  cursor-pointer gap-2 justify-center"
                    >
                      <p>بیمه پایه</p>
                    </label>
                  </th>
                  <th>
                    <label
                      htmlFor="premium"
                      className="flex items-center cursor-pointer  gap-2 justify-center"
                    >
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

          <div className="rounded-lg shadow-xs border border-slate-100 md:hidden flex flex-col gap-4 p-4 bg-white">
            <h2 className="font-bold text-slate-500 text-lg ">مشخصات </h2>
            <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 gap-y-4 text-slate-500 text-xs md:text-sm">
              {featureItems.map((i, index) => {
                const Icon = i.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-xs md:text-sm">
                    <p className="p-1 border border-slate-200 rounded">
                      <Icon className="size-7 text-slate-500" />
                    </p>
                    <div className="flex flex-col gap-0 5">
                      <p className="text-slate-600">{i.title}</p>
                      <p className="text-slate-400">{PersianDigits(i.text)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg shadow-xs border border-slate-100 md:hidden flex flex-col gap-4 p-4 bg-white">
            <h2 className="font-bold text-slate-500 text-lg ">امکانات </h2>
            <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 gap-y-4 text-slate-500 text-xs md:text-sm">
              {optionItems.map((i, index) => (
                <div key={index} className="flex items-center gap-2">
                  <p className="p-1 border border-slate-200 rounded">
                    <Check className="size-6 text-slate-500 p-0.5" />
                  </p>
                  {i.title}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg shadow-xs border border-slate-100 flex flex-col gap-4 p-4 bg-white">
            <h2 className="font-bold text-slate-500 text-lg ">درباره خودرو </h2>
            <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
            <p className="text-xs md:text-sm text-slate-500 leading-6 md:leading-7">
              اجاره خودرو بنز S500،  یک خودرو لوکس فول سایز و پرچم‌دار خودروهای سواری مرسدس بنز است.
              نسل اول S کلاس در سال 1972 معرفی شد. هر چند در سال های پیش از آن هم، کمپانی آلمانی
              مرسدس بنز، خودرو لوکس دیگری را در سبد محصولات خود با نام دیگری داشت. این نسل از S کلاس
              در نمایشگاه خودرو دیترویت 2006 به معرض دید عموم درآمد  در حال حاضر نیز مدل های از این
              خودرو در اختیار مجموعه اتورنت می‌باشد. سیستم تعلیق تمام الکترونیکی که در پی آن
              ناهمواری های جاده به فراموشی سپرده می شود از ویژگی‌های منحصر به فرد این خودروست. به
              همین دلیل یک خودروی بسیار مناسب برای مسافرت های خارج از شهر می باشد و به دلیل زیبایی
              این خودرو جز خودروهای تشریفاتی نیز به حساب می آید.
            </p>
          </div>

          <div className="rounded-lg shadow-xs border border-slate-100 flex flex-col gap-4 p-4 bg-white">
            <h2 className="font-bold text-slate-500 text-lg ">نظرات </h2>
            <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
            <form className="border border-slate-300 rounded-lg px-4 py-2 mt-6 text-xs flex flex-col">
              <textarea
                name="comment"
                id="comment"
                className="appearance-none resize-none w-full h-16 outline-none text-slate-700"
                placeholder="دیدگاه خود را وارد کنید..."
              ></textarea>
              <p className="w-full border-b border-dotted border-slate-300 my-2"></p>
              <div className="flex items-center justify-between">
                <p className="text-slate-400 text-[10px] md:text-xs">
                  دیدگاه شما پس از تأیید، منتشر خواهد شد!
                </p>
                <button className="px-3 py-1.5 text-xs bg-blue-500 text-white rounded-sm  hover:scale-103 transition-all duration-200 active:scale-95 cursor-pointer hover:bg-blue-600">
                  ثبت
                </button>
              </div>
            </form>
            {/* ----------------------------------------------comment */}
            <div className="w-full border-dashed  border-b last:border-none border-b-slate-300 py-4 mt-4 flex flex-col items-start gap-2">
              <div className="flex items-center gap-2 text-xs">
                <Image
                  src={SingleImg}
                  alt="user"
                  width={50}
                  height={50}
                  className="rounded-full aspect-square border-2 border-slate-200"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-slate-500">حسام شریفی </p>
                  <p className="text-slate-500">{PersianDate("2023-01-01")}</p>
                </div>
              </div>
              <p className="text-xs  leading-6 text-slate-400">
                اولین بار بود که برای مسافرت ماشین اجاره می‌کردم و به دنبال یک شرکت با سابقه و مطمئن
                می‌گشتم!بدون هیچ شکی میگم، اتو رنت تو کار خودش بهترینه!پشتیبانی عالی، هزینه بسیار
                مناسب، آسان بودن روند اجاره و رزرو؛ هرچی بگم کم گفتم!حتماً دفعه بعد هم برای اجاره
                ماشین به سراغشون میام.
              </p>
              <p className="px-3 py-1 text-xs bg-emerald-500 text-white rounded mr-auto ml-3 hover:scale-103 transition-all duration-200 active:scale-95 cursor-pointer hover:bg-emerald-600">
                پاسخ دادن
              </p>
            </div>
            <div className="w-full border-dashed  border-b last:border-none border-b-slate-300 py-4 mt-4 flex flex-col items-start gap-2">
              <div className="flex items-center gap-2 text-xs">
                <Image
                  src={SingleImg}
                  alt="user"
                  width={50}
                  height={50}
                  className="rounded-full aspect-square border-2 border-slate-200"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-slate-500">حسام شریفی </p>
                  <p className="text-slate-500">{PersianDate("2023-01-01")}</p>
                </div>
              </div>
              <p className="text-xs  leading-6 text-slate-400">
                اولین بار بود که برای مسافرت ماشین اجاره می‌کردم و به دنبال یک شرکت با سابقه و مطمئن
                می‌گشتم!بدون هیچ شکی میگم، اتو رنت تو کار خودش بهترینه!پشتیبانی عالی، هزینه بسیار
                مناسب، آسان بودن روند اجاره و رزرو؛ هرچی بگم کم گفتم!حتماً دفعه بعد هم برای اجاره
                ماشین به سراغشون میام.
              </p>
              <p className="px-3 py-1 text-xs bg-emerald-500 text-white rounded mr-auto ml-3 hover:scale-103 transition-all duration-200 active:scale-95 cursor-pointer hover:bg-emerald-600">
                پاسخ دادن
              </p>
            </div>
            <div className="w-full border-dashed  border-b last:border-none border-b-slate-300 py-4 mt-4 flex flex-col items-start gap-2">
              <div className="flex items-center gap-2 text-xs">
                <Image
                  src={SingleImg}
                  alt="user"
                  width={50}
                  height={50}
                  className="rounded-full aspect-square border-2 border-slate-200"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-slate-500">حسام شریفی </p>
                  <p className="text-slate-500">{PersianDate("2023-01-01")}</p>
                </div>
              </div>
              <p className="text-xs  leading-6 text-slate-400">
                اولین بار بود که برای مسافرت ماشین اجاره می‌کردم و به دنبال یک شرکت با سابقه و مطمئن
                می‌گشتم!بدون هیچ شکی میگم، اتو رنت تو کار خودش بهترینه!پشتیبانی عالی، هزینه بسیار
                مناسب، آسان بودن روند اجاره و رزرو؛ هرچی بگم کم گفتم!حتماً دفعه بعد هم برای اجاره
                ماشین به سراغشون میام.
              </p>
              <button className="px-3 py-1 text-xs bg-emerald-500 text-white rounded mr-auto ml-3 hover:scale-103 transition-all duration-200 active:scale-95 cursor-pointer hover:bg-emerald-600">
                پاسخ دادن
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-lg shadow-xs border border-slate-100 hidden md:flex flex-col gap-4 p-4 bg-white">
            <h2 className="font-bold text-slate-500 text-lg ">مشخصات </h2>
            <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-slate-500 text-xs md:text-sm">
              {featureItems.map((i, index) => {
                const Icon = i.icon;
                return (
                  <div key={index} className="flex items-center gap-2 text-xs md:text-sm">
                    <p className="p-1 border border-slate-200 rounded">
                      <Icon className="size-7 text-slate-500" />
                    </p>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-slate-600">{i.title}</p>
                      <p className="text-slate-400 text-[11px] md:text-xs">
                        {PersianDigits(i.text)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg shadow-xs border border-slate-100 hidden md:flex flex-col gap-4 p-4 bg-white">
            <h2 className="font-bold text-slate-500 text-lg ">امکانات </h2>
            <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-slate-500 text-xs md:text-sm">
              {optionItems.map((i, index) => (
                <div key={index} className="flex items-center gap-2">
                  <p className="p-1 border border-slate-200 rounded">
                    <Check className="size-6 text-slate-500 p-0.5" />
                  </p>
                  {i.title}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg shadow-xs border border-slate-200 md:border-slate-100 flex flex-col gap-4 p-8 bg-white/50 backdrop-blur-sm  md:bg-white md:static fixed bottom-0 z-10 w-screen mx-auto md:translate-x-0 md:w-full left-1/2 -translate-x-1/2">
            <Button variant={"blue"} className="py-5! ">
              درخواست رزرو
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetailPage;
