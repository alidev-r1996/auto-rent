import { Button } from "@/components/ui/button";
import { PersianCurrency, PersianDate, PersianDigits } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

type PaymentCardProps = {
    id?: string;
    img?: string;
    title?: string;
    model?: string;
    price?: string;
    pay_date?: string;
    ref_id?: string;
    receive_date?: string;
    status: "success" | "failed";

}

const PaymentCard: FC<PaymentCardProps> = ({status}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 py-3 border-b border-dashed border-slate-300 last:border-none transition-all duration-300 hover:bg-slate-50 hover:shadow-sm">
      <p className="relative md:w-40 aspect-16/14 w-28">
        <Image
          src="/assets/images/order.png"
          alt="user-img"
          fill
          className=" rounded-lg border-3 border-slate-200 shadow"
        />
      </p>

      <div className="flex flex-col  md:flex-row justify-around gap-4 flex-1">
        <div className="flex flex-col gap-2 text-xs md:text-sm text-slate-600 w-full md:w-auto">
          <p className="font-medium text-slate-700">بنز جی-کلاس (Mercedes Benz G Class)</p>
          <p>
            <strong>مدل:‌ </strong>
            {PersianDigits("2016")}
          </p>
          <p>
            <strong>تاریخ پرداخت:‌ </strong>
            {PersianDate(new Date())}
          </p>
          <p>
            <strong>مقدار پرداختی:‌ </strong>
            {PersianCurrency("16000000")} تومان
          </p>
        </div>

        <div className="flex  flex-row md:items-center justify-between gap-3 md:gap-6 text-xs md:text-sm w-full md:w-auto px-2">
          <p className="text-center flex items-center whitespace-nowrap">
            <strong>شناسه پرداخت:‌ </strong>
            {PersianDigits("12345678")}
          </p>
          {status == "failed" && (
              <span className="px-4 py-1.5 w-max rounded-full text-rose-600 bg-rose-50 border border-rose-200 shadow-sm text-center whitespace-nowrap">
            پرداخت ناموفق
          </span>
          )}
          {status == "success" && (
              <span className="px-4 py-1.5 w-max rounded-full text-emerald-600 bg-emerald-50 border border-emerald-200 shadow-sm text-center whitespace-nowrap">
            پرداخت موفق
          </span>
          )}
          
        </div>
      </div>

      <div className="mt-3 md:mt-0 md:ml-4 w-full md:w-auto">
        <Button variant="outline_blue" className="w-full md:w-auto text-xs">
          مشاهده جزئیات
        </Button>
      </div>
    </div>
  );
};

export default PaymentCard;
