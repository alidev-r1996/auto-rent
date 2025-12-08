import { PersianDigits } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";

const SuccessPayment = ({ refId, orderId }) => {
  return (
    <div className="rounded-lg shadow-xs bg-radial items-center from-emerald-500 to-emerald-800 flex flex-col h-max gap-5 p-8 w-full mx-auto md:w-1/3 my-8">
      <p className="p-5 rounded-full drop-shadow-sm bg-white/10 backdrop-blur-xs flex w-max items-center justify-center">
        <span className="bg-white shadow-xs p-5 rounded-full flex items-center justify-center text-emerald-700">
          <Check className="stroke-4 size-8" />
        </span>
      </p>
      <h2 className="font-bold text-lg text-white">پرداخت شما با موفقیت انجام شد!</h2>
      <div className="flex flex-col items-center gap-4 bg-slate-100 rounded-md p-3 mt-2">
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
          <p className="text-sm text-emerald-600 text-center"> شناسه پرداخت :</p>
          <p className="text-sm text-emerald-600 text-center font-bold">{PersianDigits(refId)}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
          <p className="text-sm text-emerald-600 text-center"> شماره سفارش :</p>
          <p className="text-sm text-emerald-600 text-center font-bold">{PersianDigits(orderId)}</p>
        </div>
      </div>

      <p className="text-sm text-slate-100 text-center leading-7 mt-3">
        خودروی شما آماده تحویل می‌باشد، کارشناسان ما در سریعترین زمان ممکن جهت پیگیری سفارش با شما
        تماس خواهند گرفت.
      </p>

      <Link
        href={"/"}
        className="mt-5 border border-slate-100 rounded-lg px-6 py-2 text-slate-100 hover:bg-slate-100 hover:text-slate-700 cursor-pointer hover:scale-103 active:scale-95 transition-all duration-300"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export default SuccessPayment;
