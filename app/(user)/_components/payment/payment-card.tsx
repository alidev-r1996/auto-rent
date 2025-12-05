import { PersianCurrency, PersianDate, PersianDigits } from "@/lib/utils";
import Image from "next/image";
import PaymentDetail from "./payment.detail";

const PaymentCard = payment => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 py-3 border-b border-dashed border-slate-300 last:border-none transition-all duration-300 hover:bg-slate-50 hover:shadow-sm">
      <p className="relative md:w-40 aspect-16/14 w-28">
        <Image
          src={payment.order.car.cover}
          alt={payment.order.car.name}
          fill
          className=" rounded-lg border-3 border-slate-200 shadow"
        />
      </p>

      <div className="flex flex-col  md:flex-row justify-around gap-4 flex-1">
        <div className="flex flex-col gap-2 text-xs md:text-sm text-slate-600 w-full md:w-auto">
          <p className="font-medium text-slate-700">{PersianDigits(payment.order.car.name)} </p>
          <p>
            <strong>مدل:‌ </strong>
            {PersianDigits(payment.order.car.model)}
          </p>
          <p>
            <strong>تاریخ پرداخت:‌ </strong>
            {PersianDate(payment.created_at)}
          </p>
          <p>
            <strong>مقدار پرداختی:‌ </strong>
            {PersianCurrency(payment.amount)} تومان
          </p>
        </div>

        <div className="flex  flex-row md:items-center justify-between gap-3 md:gap-6 text-xs md:text-sm w-full md:w-auto px-2">
          <p className="text-center flex items-center whitespace-nowrap">
            <strong>شناسه پرداخت:‌ </strong>
            {PersianDigits("12345678")}
          </p>

          {payment.status == "Pending" && (
            <span className="px-4 py-1.5 w-max rounded-full text-slate-600 bg-slate-50 border border-slate-200 shadow-sm text-center whitespace-nowrap">
              در حال عملیات
            </span>
          )}

          {payment.status == "Failed" && (
            <span className="px-4 py-1.5 w-max rounded-full text-rose-600 bg-rose-50 border border-rose-200 shadow-sm text-center whitespace-nowrap">
              پرداخت ناموفق
            </span>
          )}
          {payment.status == "Success" && (
            <span className="px-4 py-1.5 w-max rounded-full text-emerald-600 bg-emerald-50 border border-emerald-200 shadow-sm text-center whitespace-nowrap">
              پرداخت موفق
            </span>
          )}
        </div>
      </div>

      <div className="mt-3 md:mt-0 md:ml-4 w-full md:w-auto">
        <PaymentDetail details={payment.payment_detail} title={payment.order.user.phoneNumber} />
      </div>
    </div>
  );
};

export default PaymentCard;
