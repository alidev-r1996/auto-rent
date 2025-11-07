import { Button } from "@/components/ui/button";
import Map from "@/components/ui/map";
import { PersianDigits } from "@/lib/utils";
import ContactImg from "@/public/assets/images/contactus.png";
import FormImg from "@/public/assets/images/form.webp";
import Image from "next/image";
import { contactItems } from "./constant";

const Contact = () => {
  return (
    <section className="max-w-[1920px]">
      <div className="absolute  top-0 mx-auto max-w-screen w-[1905px] h-98 -z-5">
        <Image
          src={ContactImg}
          alt="Hero Section"
          fill
          placeholder="blur"
          className="object-cover brightness-70 contrast-110"
        />
      </div>
      <div className="p-4 md:p-0">
        <div className="max-w-[1690px] mx-auto bg-white mt-82 md:mt-87 shadow rounded-xl p-4 flex flex-col gap-4 md:flex-row items-center justify-between">
          <div className="flex flex-col gap-8 md:w-1/2 p-2 md:p-4">
            <h1 className="font-bold text-slate-500 text-2xl md:text-3xl">
              ارتباط با دفتـر مرکزی <strong className="text-amber-500">اُتورِنت</strong>
            </h1>
            <p className="border-b border-b-slate-300 md:w-1/2"></p>
            {contactItems.map(({ icon, title, text }, index) => {
              const Icon = icon;
              return (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <Icon className="text-slate-600 stroke-[1.3] shrink-0" />
                  <p className="text-slate-800">{title}:</p>
                  <p className="text-slate-600 leading-6">{PersianDigits(text)}</p>
                </div>
              );
            })}
          </div>
          <Map
            className=" md:w-1/3 w-full h-80 rounded-xl"
            latitude={35.70966008461624}
            longitude={51.36871213493081}
            scale={13}
          />
        </div>
        <div className="max-w-[1690px] mx-auto bg-white mt-8 mb-8 shadow rounded-xl p-4 flex flex-col gap-4 items-center justify-between">
          <h1 className="font-bold text-slate-500 text-xl md:text-2xl  p-2 md:p-4 md:ml-auto">
            ارسال پیام شما به مجموعه اتورنت
          </h1>
          <p className="border-b border-b-slate-300 md:w-1/3 ml-auto"></p>
          <div className="flex items-center w-full md:w-2/3 mx-auto md:border overflow-hidden border-slate-200  rounded-lg h-100 md:my-8">
            <form className="mt-4 flex flex-col gap-4 mx-auto w-full md:w-1/2 my-8 p-8  ">
              <label htmlFor="name" className="flex-1 flex flex-col gap-1  text-sm">
                <p className="p-1 text-slate-600">نام و نام خانوادگی</p>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className=" border border-slate-300 rounded-lg w-full p-2  outline-none"
                />
              </label>
              <label htmlFor="phone" className="flex-1 flex flex-col gap-1 text-sm">
                <p className="p-1 text-slate-600">شماره تماس </p>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className=" border border-slate-300 rounded-lg w-full p-2  outline-none"
                />
              </label>

              <label htmlFor="phone" className="flex-1 flex flex-col gap-1 text-sm">
                <p className="p-1 text-slate-600">پیام شما </p>
                <textarea
                  name="phone"
                  id="phone"
                  maxLength={80}
                  className=" border border-slate-300 rounded-lg w-full p-2  outline-none resize-none"
                />
              </label>
              <Button type="submit" variant="blue" className="w-full mt-4  bg-amber-500!">
                ارسال پیام
              </Button>
            </form>
            <div className="hidden md:block w-1/2 h-full relative  bg-slate-400">
              <Image
                src={FormImg}
                alt="Hero Section"
                fill
                placeholder="blur"
                className="object-cover brightness-75 contrast-115"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
