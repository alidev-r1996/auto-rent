import { PersianDigits } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";

const FailPayment = ({ refId }) => {
  return (
    <div className="rounded-lg shadow-xs bg-radial items-center from-rose-400 to-rose-600 flex flex-col h-max gap-5 p-8 w-full mx-auto md:w-1/3 my-8">
      <p className="p-5 rounded-full drop-shadow-sm bg-white/10 backdrop-blur-xs flex w-max items-center justify-center">
        <span className="bg-white shadow-xs p-5 rounded-full flex items-center justify-center text-rose-700">
          <X className="stroke-4 size-8" />
        </span>
      </p>
      <h2 className="font-bold text-lg text-white">پرداخت شما با خطا مواجه شد!</h2>
      <div className="flex items-center gap-4 bg-slate-100 rounded-md p-3 mt-2">
        <p className="text-sm text-rose-600 text-center">کد پیگیری :</p>
        <p className="text-sm text-rose-600 text-center font-bold">{PersianDigits(refId)}</p>
      </div>

      <p className="text-sm text-slate-100 text-center leading-7 mt-3">
        لطفا لحظاتی بعد مجدداً تلاش کنید.
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

export default FailPayment;
