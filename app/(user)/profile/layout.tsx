import { PersianCurrency, PersianDate, PersianDigits } from "@/lib/utils";
import Image from "next/image";
import SideBar from "../_components/sideBar";
import {
  Calendar1,
  CreditCard,
  IdCard,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Send,
  Timer,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReserveCard from "../_components/reserves/reserve-card";
import PaymentCard from "../_components/payment/payment-card";
import CommentCard from "../_components/comment/comment-card";

const profileItems = [
  { label: "نام و نام خانوادگی", icon: UserRound, name: "name" },
  { label: "کدملی", icon: IdCard, name: "national_id" },
  { label: "شماره موبایل ", icon: Phone, name: "mobile" },
  { label: "ایمیل", icon: Mail, name: "email" },
  { label: "رمز عبور", icon: LockKeyhole, name: "password" },
  { label: "شماره شبا جهت بازگشت وجه", icon: CreditCard, name: "card_number" },
  { label: "تاریخ تولد", icon: Calendar1, name: "birth" },
  { label: "آدرس", icon: MapPin, name: "address" },
];

const Layout = () => {
  return (
    <div className="grid md:grid-cols-5 p-4 gap-4 mx-auto max-w-[1690px]">
      <SideBar />
      <div className="md:col-span-4!  flex-col gap-4 flex min-w-full! max-w-full!">
        <div className="bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex flex-col">
          <h2 className="font-bold text-slate-600 md:text-lg ">مشخصات کاربری</h2>
          <p className="border-b mt-1 border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
          <form className="grid md:grid-cols-2 gap-5 mt-8">
            {profileItems.map((i, index) => {
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
                    placeholder={i.label}
                  />
                  <p className="absolute hidden md:block peer-placeholder-shown:hidden text-[10px] bg-white px-1 py-1 -top-3 right-6">
                    {i.label}
                  </p>
                </label>
              );
            })}
            <Button variant={"blue"} className="h-full! md:col-start-2">
              ویرایش حساب کاربری
            </Button>
          </form>
        </div>
        <div className="bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex flex-col">
          <h2 className="font-bold text-slate-600 md:text-lg ">رزروهای من </h2>
          <p className="border-b mt-1 border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
          <Tabs dir="rtl" defaultValue="current" className="w-full! mt-9">
            <TabsList className="p-1.5 h-max! shadow-xs border border-slate-200 w-full">
              <TabsTrigger
                value="current"
                className="w-30 py-1.5 text-slate-500 rounded-md! md:py-3 border data-[state=active]:border-blue-500 data-[state=active]:shadow-xs data-[state=active]:bg-blue-500 data-[state=active]:text-white cursor-pointer transition-colors duration-200"
              >
                جاری
              </TabsTrigger>
              <TabsTrigger
                value="done"
                className="w-30 py-1.5 text-slate-500 rounded-md! md:py-3 border data-[state=active]:border-emerald-500 data-[state=active]:shadow-xs data-[state=active]:bg-emerald-500 data-[state=active]:text-white cursor-pointer transition-colors duration-200"
              >
                انجام شده
              </TabsTrigger>
              <TabsTrigger
                value="cancelled"
                className="w-30 py-1.5 text-slate-500 rounded-md! md:py-3 border data-[state=active]:border-rose-500 data-[state=active]:shadow-xs data-[state=active]:bg-rose-500 data-[state=active]:text-white cursor-pointer transition-colors duration-200"
              >
                لغو شده
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="current"
              className="border border-slate-200 rounded-xl flex flex-col p-2 md:p-4"
            >
              <ReserveCard type="pending" />
              <ReserveCard type="pending" />
              <ReserveCard type="pending" />
            </TabsContent>
            <TabsContent
              value="done"
              className="border border-slate-200 rounded-xl flex flex-col p-2 md:p-4"
            >
              <ReserveCard type="accepted" />
              <ReserveCard type="accepted" />
              <ReserveCard type="accepted" />
            </TabsContent>
            <TabsContent
              value="cancelled"
              className="border border-slate-200 rounded-xl flex flex-col p-2 md:p-4"
            >
              <ReserveCard type="rejected" />
              <ReserveCard type="rejected" />
              <ReserveCard type="rejected" />
            </TabsContent>
          </Tabs>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4">
          <div>
            <h2 className="font-bold text-slate-700 text-base md:text-lg">پرداخت‌های من</h2>
            <div className="mt-1 border-b border-slate-200 relative after:absolute after:right-0 after:top-0 after:h-0.5 after:w-20 after:bg-amber-500" />
          </div>

          <div className="border border-slate-200 rounded-xl p-3 md:p-5">
            <PaymentCard status="failed" />
            <PaymentCard status="success" />
            <PaymentCard status="failed" />
          </div>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4">
          <div>
            <h2 className="font-bold text-slate-700 text-base md:text-lg">نظرات من</h2>
            <div className="mt-1 border-b border-slate-200 relative after:absolute after:right-0 after:top-0 after:h-0.5 after:w-20 after:bg-amber-500" />
          </div>
          <Tabs dir="rtl" defaultValue="all" className="w-full! mt-9">
            <TabsList className="p-1.5 h-max! shadow-xs border border-slate-200 w-full">
              <TabsTrigger
                value="all"
                className="w-30 py-1.5 text-slate-500 rounded-md! md:py-3 border data-[state=active]:border-blue-500 data-[state=active]:shadow-xs data-[state=active]:bg-blue-500 data-[state=active]:text-white cursor-pointer transition-colors duration-200"
              >
                همه نظرات
              </TabsTrigger>
              <TabsTrigger
                value="confirm"
                className="w-30 py-1.5 text-slate-500 rounded-md! md:py-3 border data-[state=active]:border-emerald-500 data-[state=active]:shadow-xs data-[state=active]:bg-emerald-500 data-[state=active]:text-white cursor-pointer transition-colors duration-200"
              >
                تأیید شده
              </TabsTrigger>
              <TabsTrigger
                value="pending"
                className="w-30 py-1.5 text-slate-500 rounded-md! md:py-3 border data-[state=active]:border-rose-500 data-[state=active]:shadow-xs data-[state=active]:bg-rose-500 data-[state=active]:text-white cursor-pointer transition-colors duration-200"
              >
                در حال بررسی
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="all"
              className="border border-slate-200 rounded-xl flex flex-col p-2 md:p-4"
            >
              <CommentCard status="pending" />
              <CommentCard status="success" />
              <CommentCard status="pending" />
            </TabsContent>
            <TabsContent
              value="confirm"
              className="border border-slate-200 rounded-xl flex flex-col p-2 md:p-4"
            >
              <CommentCard status="success" />
              <CommentCard status="success" />
              <CommentCard status="success" />
            </TabsContent>
            <TabsContent
              value="pending"
              className="border border-slate-200 rounded-xl flex flex-col p-2 md:p-4"
            >
              <CommentCard status="pending" />
              <CommentCard status="pending" />
              <CommentCard status="pending" />
            </TabsContent>
          </Tabs>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4">
          <div>
            <h2 className="font-bold text-slate-700 text-base md:text-lg"> ارتباط با پشتیبانی</h2>
            <div className="mt-1 border-b border-slate-200 relative after:absolute after:right-0 after:top-0 after:h-0.5 after:w-20 after:bg-amber-500" />
          </div>

          <div className="border border-slate-200 rounded-xl p-3 md:p-5 h-[50vh] max-h-[50vh] md:h-[70vh] md:max-h-[70vh] overflow-y-auto relative ">
            <div
              className={`${false ? "ml-auto border-blue-500 bg-blue-500 text-white" : "mr-auto border-slate-300 bg-slate-300 text-slate-800"} border  shadow-xs p-2 rounded-lg text-xs w-max md:max-w-1/3   flex flex-col gap-2`}
            >
              <p>سلام چطور میتونم کمکتون کنم؟</p>
              <p className={`${false && "mr-auto"}`}>{PersianDigits(`${`14:15`}`)}</p>
            </div>
            <div
              className={`${true ? "ml-auto border-blue-500 bg-blue-500 text-white" : "mr-auto border-slate-300 bg-slate-300 text-slate-800"} border  shadow-xs p-2 rounded-lg text-xs w-max md:max-w-1/3   flex flex-col gap-2`}
            >
              <p>سلام وقت بخیر میخواستم بدونم امکان کنسل کردن رزروی هست؟</p>
              <p className={`${true && "mr-auto"}`}>{PersianDigits(`${`14:15`}`)}</p>
            </div>
            <form className="flex items-center md:gap-2 gap-1 absolute bottom-2 md:w-[96%] mx-auto w-[93%]">
              <input
                type="text"
                name="messages"
                placeholder="پیام خود را بنویسید"
                className="flex items-center outline-none gap-2 rounded-lg border border-slate-200 relative p-2 text-slate-400 text-xs md:text-sm flex-1"
              />
              <Button type="submit" variant={"blue"}>
                {" "}
                <p className="sr-only md:not-sr-only">ارسال پیام </p> <Send size={5} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
