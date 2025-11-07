import ContactImg from "@/public/assets/images/contactus.png";
import Image from "next/image";

export const ruleItems = [
  {
    id: 1,
    title: "مدارک لازم",
    options: [
      "کپی از گواهینامه رانندگی کشور محل سکونت و یا گواهینامه بین‌المللی فرد",
      "ارائه کارت ملی",
      "مدارک شغلی (هرگونه مدرکی که نشان دهنده شغل یا محل کار شما باشد)",
      "ارائه سفته (به ارزش خودرو برای ماشین‌های ایرانی و ارائه چک به ارزش خودرو برای ماشین‌های خارجی)",
      "پرداخت ضمانت نقدی که بسته به مدل خودرو متفاوت است.",
    ],
  },
  {
    id: 2,
    title: "مدارک لازم برای اجاره خودرو افراد خارجی",
    options: [
      "ارائه گواهینامه رانندگی با اعتبار حداقل 6 ماه",
      "کپی از پاسپورت برای خودروهای اقتصادی و اصل پاسپورت برای خودروهای لوکس",
      "ارائه بلیط برای تحویل خودرو در فرودگاه امام",
      "پرداخت ضمانت نقدی که بسته به مدل خودرو متفاوت است.",
    ],
  },
  {
    id: 3,
    title: "مدارک اجاره خودرو برای شرکت‌ها ",
    options: [
      "مدرک شناسایی مدیر شرکت",
      "ارائه اساسنامه شرکت",
      "دریافت چک شرکت",
      "پرداخت ضمانت نقدی که بسته به مدل خودرو متفاوت است.",
    ],
  },
];

export const insuransItems = [
  {
    id: 1,
    title: "بیمه پایه ",
    options: [
      "امداد جاده‌ای بصورت گسترده (ERA)",
      " ایمنی خودرو (SSP)",
      "پوشش کامل در برابر سرقت",
      "بیمه شخص ثالث (ALI) مبلغ بیمه پایه بصورت رایگان و روزانه است.",
    ],
  },
  {
    id: 2,
    title: "بیمه کامل ",
    options: [
      "امداد جاده‌ای گسترده (ERA)",
      "بیمه شخص ثالث (ALI)",
      "تعهد ایمنی خودرو (SSP)",
      "پوشش کامل ناشی از سرقت",
      "پرداخت خسارات جزئی (شیشه، لاستیک، بدنه)",
      "بیمه بدنه با حداقل مسئولیت (LDW)",
      "حداقل معافیت جهت افت قیمت مبلغ بیمه کامل بصورت روزانه حدود 35% کرایه خودرو است.",
    ],
  },
];

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
