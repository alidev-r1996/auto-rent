import { Button } from "@/components/ui/button";
import { PersianDigits } from "@/lib/utils";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const footerIcons = [
  { id: 1, icon: PhoneCall, label: "شماره تماس", info: "0912-21326545" },
  { id: 2, icon: Mail, label: "ایمیل", info: "autorent@info.com" },
  { id: 3, icon: MapPin, label: "آدرس", info: "تهران، خیابان شادمان" },
];

const Footer = () => {
  return (
    <footer className="bg-stone-800 rounded-2xl z-10 flex flex-col md:grid md:grid-cols-5 p-4 gap-y-8 md:gap-4 mb-6 max-w-[1690px] mx-auto">
      <div className="md:col-span-5 md:w-4/5 md:mx-auto col-span-2 flex md:my-5 flex-wrap md:flex-row  gap-4 md:items-center md:justify-around md:py-5  p-3 border border-slate-500 rounded-lg text-slate-300">
        {footerIcons.map(({ id, icon, label, info }) => {
          const Icon = icon;
          return (
            <div key={id} className="flex flex-row items-center gap-3">
              <span className="md:p-3 p-1 rounded-md border border-slate-500">
                <Icon className="md:size-9 size-6 stroke-1" />
              </span>
              <div className="flex flex-col gap-1 md:text-sm text-xs">
                <p>{label}</p>
                <p>{PersianDigits(info)}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 col-span-2 md:px-8">
        <Image src="/assets/logo/footer-logo.svg" alt="Logo" width={140} height={140} />
        <p className="text-sm text-slate-100 leading-7">
          اتورنت با رویکرد اعتماد به مشتری، با در اختیار داشتن بزرگترین ناوگان خودرویی متشکل از
          انواع خودروهای صفر کیلومتر، اقتصادی تا تجاری در سراسر کشور ایران آماده خدمت‌رسانی به
          مشتریان است.
        </p>
      </div>
      <div className="flex flex-row md:flex-col items-center md:gap-2 gap-4 text-slate-300 md:text-sm text-xs">
        <h3 className="md:text-base text-sm font-semibold text-slate-100 ml-3 md:pb-2">
          دسترسی سریع
        </h3>
        <Link href="/faq"> سوالات متداول</Link>
        <Link href="/contact"> تماس با ما </Link>
        <Link href="/about"> درباره ما</Link>
      </div>
      <div className="flex flex-col gap-2 mx-auto justify-center text-slate-100 md:col-span-2 md:w-2/3 w-full">
        <h3 className="text-sm pr-1">عضویت در خبرنامه</h3>
        <div className="flex items-center border border-slate-500 outline-none rounded-lg text-slate-200 p-1 pr-3">
          <input
            type="text"
            className="appearance-none outline-none text-sm flex-1 text-slate-300 placeholder:text-xs"
            placeholder="ایمیل خود را وارد کنید"
          />
          <Button variant={"amber"} className="text-xs !important">
            ارسال
          </Button>
        </div>
      </div>
      <div className="py-4 border-t border-t-slate-500 col-span-2 md:col-span-5 mx-auto md:w-4/5 w-full mt-4 flex items-center justify-center text-slate-400 text-sm">
        تمامی حقوقی این سایت متعلق به <strong className="text-amber-400 px-2">اُتورنت</strong>{" "}
        می‌باشد
      </div>
    </footer>
  );
};

export default Footer;
