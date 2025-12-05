import { PersianDate, PersianDigits } from "@/lib/utils";
import { CircleX, ClipboardCheck, Timer } from "lucide-react";
import Image from "next/image";
import ReserveDetail from "./reserve.detail";

const ReserveCard = order => {
  return (
    <div className="flex flex-wrap justify-between md:flex-nowrap items-center gap-1 gap-y-3 md:gap-4 py-3 md:p-2 border-b border-dashed border-b-slate-300 last:border-none pb-4  transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
      <p className="relative md:w-40 aspect-16/11 w-28">
        <Image
          src={order.car.cover}
          alt={order.car.name}
          fill
          className=" rounded-lg border-3 border-slate-200 shadow"
        />
      </p>
      <div className="flex flex-col gap-3 md:flex-row justify-around flex-1">
        <div className="flex flex-col items-center gap-1 text-[11px] md:text-sm">
          <p className="flex items-center gap-1">
            <span>{PersianDigits(order.car.name)}</span>
            <span>-</span>
            <span> مدل{PersianDigits(order.car.model)} </span>
          </p>
          <div className="flex items-center gap-2 text-[11px]">
            <strong>تاریخ تحویل:‌ </strong>
            <div>
              <span>{PersianDate(order.start_date)}</span>
              <span className="px-1">تا</span>
              <span>{PersianDate(order.end_date)}</span>
            </div>
          </div>
        </div>

        {order.status == "Pending" && (
          <div className="flex h-max gap-1 text-xs px-4 py-1.5 md:py-2 w-max mx-auto md:mx-0 rounded-full shadow-xs border border-slate-200 bg-slate-100 items-center justify-center text-slate-700 ">
            <Timer className="size-4 " />
            <p>در حال بررسی...</p>
          </div>
        )}
        {order.status == "Success" && (
          <div className="flex h-max gap-1 text-xs px-4 py-1.5 md:py-2 w-max mx-auto md:mx-0 rounded-full shadow-xs border border-emerald-300 bg-emerald-50 items-center justify-center text-emerald-600 ">
            <ClipboardCheck className="size-4 " />
            <p>انجام شده</p>
          </div>
        )}
        {order.status == "Failed" ||
          (order.status == "Cancelled" && (
            <div className="flex h-max gap-1 text-xs px-4 py-1.5 md:py-2 w-max mx-auto md:mx-0 rounded-full shadow-xs border border-rose-300 bg-rose-50 items-center justify-center text-rose-600 ">
              <CircleX className="size-4 " />
              <p> ناموفق</p>
            </div>
          ))}
      </div>
      <ReserveDetail
        title={order.user.phoneNumber}
        insurance={order.insurance}
        details={{
          start_time: order.start_time,
          end_time: order.end_time,
          receive_location: order.receive_location,
          return_location: order.return_location,
        }}
        receiverInfo={order.receiverInfo}
      />
    </div>
  );
};

export default ReserveCard;
