import { whyCardItems } from "@/components/main/why-us/why-us.constant";
import { PersianDigits } from "@/lib/utils";
import ContactImg from "@/public/assets/images/contactus.png";
import Image from "next/image";

const About = () => {
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
          <div className="flex flex-col gap-4 p-2 md:p-4">
            <h1 className="font-bold text-slate-500 text-2xl ">
              معرفی <strong className="text-amber-500">اُتورِنت</strong>
            </h1>
            <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
            <p className="text-slate-500 leading-7 text-sm">
              اتورنت با رویکرد اعتماد به مشتری، در ابتدا با ایجاد بزرگترین ناوگان خودرویی متشکل از
              انواع خودروهای صفر کیلومتر، اقتصادی تا تجاری در سراسر کشور ایران و در تمامی شهرهای
              اصلی کشور و تمامی فرودگاه های اصلی و با هدف ارتقاء واقعی خدمات خوب و خدماتی
              همانندکشورهای پیــــشرفته در مــیهن عزیزمان ایران سرمایه‌گذاری نموده و این مهم با جلب
              همکاری سایر شرکای تجاری و جذب سرمایه تا رسیدن به هدف ایجاد‌ شبکه ای بالغ بر صد هزار
              خودرو و گسترش شبکه به کلیه شهرستانهای کوچک ایران ادامه خواهد یافت.مدل تـجاری اتورنت ،
              با محوریت اعـتماد به مشتری، امـکان اجاره خودرو با استانداردهای روز دنیا و بدون دریافت
              تضامین سنتی همانند چک و سفته و اسناد ملکی را فراهم می سازد.
            </p>
          </div>
        </div>
        <div className="max-w-[1690px] mx-auto  my-8  grid md:grid-cols-3 gap-5 md:gap-10 items-center justify-between">
          {whyCardItems.map(({ icon, title, text }, index) => {
            const Icon = icon;
            return (
              <div key={index} className="bg-white p-4 flex flex-col gap-4 rounded-xl shadow">
                <p className="p-2 md:size-18 size-14 rounded-lg border border-indigo-400 bg-blue-500 mx-auto">
                  <Icon className="size-full text-white stroke-1 " />
                </p>
                <h3 className="font-bold text-indigo-400 text-center">{PersianDigits(title)} </h3>
                <p className="text-center text-slate-500 text-xs">{text}</p>
              </div>
            );
          })}
        </div>
        <div className="max-w-[1690px] mx-auto bg-white my-8 shadow rounded-xl p-4 flex flex-col gap-4 md:flex-row items-center justify-between">
          <div className="flex flex-col gap-4 p-2 md:p-4">
            <h1 className="font-bold text-slate-500 text-2xl">
              شبکه نمایندگان و شرکتهای اجاره خودروی همکار
            </h1>
            <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
            <p className="text-slate-500 leading-7 text-sm">
              توسط نمایندگان و شرکای تجاری نگهداری و مدیریت می‌گردند، افرادی که علاقمند به
              سرمایه‌گذاری و همکاری با ناواران می‌باشند می‌توانند بصورت نمایندگی یا همکار تجاری
              فعالیت نمایند ، در هر صورت این اشخاص می بایست دوره های آموزش را طبق استاندارد
              بین‌المللی گذرانده و تحت استاندارد و کیفیت مورد نیاز ناواران شروع به فعالیت نمایند.
            </p>
            <p className="text-slate-500 leading-7 text-sm">
              اتورنت دارای شبکه ای شامل ایستگاه های داخل شهری و فرودگاهی می باشد که این ایستگاه
              ها دارا بودن سرمایه مورد نیاز جهت خرید حداقل تعداد خودروهای صفر کیلومتر در محدوده تحت
              پوشش و قبل از هرچیز اهمیت به اصل خدمت به هموطنان و رضایت مشتریان از شرایط اصلی اعطای
              نمایندگی می با نمایندگان دارای اپلیکیشن موبایل و سیستم آنلاین مرتبط با سامانه مدیریت
              مرکزی می باشند، و تمامی امور رزرو و محاسبات مرتبط بصورت خودکار انجام پذیرفته و
              نمایندگان از پشتیبانی کامل شرکت مرکزی در تمامی مراحل برخوردار خواهند بود.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
