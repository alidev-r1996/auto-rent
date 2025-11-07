import ContactImg from "@/public/assets/images/contactus.png";
import Image from "next/image";
import { insuransItems, ruleItems } from "./constant";

const Rules = () => {
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
      <div className="mt-82 md:mt-87 flex flex-col gap-8">
        {ruleItems.map(({ id, title, options }) => (
          <div
            key={id}
            className="bg-white max-w-[1690px] w-full mx-auto rounded-xl shadow p-4 flex flex-col gap-4"
          >
            <h1 className="font-bold text-slate-600 text-xl ">{title}</h1>
            <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
            <ul className="flex flex-col gap-3 text-xs md:text-sm text-slate-500 pr-6 ">
              {options.map((i, index) => (
                <li key={index} className="list-disc">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="bg-white max-w-[1690px] w-full mx-auto rounded-xl shadow p-4 flex flex-col gap-4">
          <h1 className="font-bold text-slate-600 text-xl ">انواع بیمه برای انواع خودرو</h1>
          <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
          <p className="text-xs md:text-sm text-slate-500 pr-6 leading-6 md:leading-7">
            شرکت اتورنت برای منطبق شدن با نیازهای مختلف مشتریان دو نوع بیمه پایه و بیمه کامل را برای
            اجاره خودرو ارائه می‌دهد. هر کدام از این بیمه‌ها باتوجه‌به بوجه و نیاز مشتری، هزینه
            خسارات را پوشش می‌دهند. بیمه پایه اجاره خودرو در این نوع بیمه که بصورت پیش فرض بر روی
            تمامی خودروهای اجاره شده دراتورنت وجود دارد، در این نوع بیمه مسئولیت تمامی خسارات و
            زیان‌ها بر عهده اجاره کننده است.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row max-w-[1690px] mx-auto w-full mb-8">
          {insuransItems.map(({ id, title, options }) => (
            <div
              key={id}
              className="bg-white  w-full mx-auto rounded-xl shadow p-4 flex flex-col gap-4"
            >
              <h1 className="font-bold text-slate-600 text-xl ">{title}</h1>
              <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
              <ul className="flex flex-col gap-3 text-xs md:text-sm text-slate-500 pr-6 ">
                {options.map((i, index) => (
                  <li key={index} className="list-disc">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rules;
