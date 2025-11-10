import { Button } from "@/components/ui/button";
import { PersianDate } from "@/lib/utils";
import { CircleX, ClipboardCheck, Timer } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

type ReserveCardProps = {
  title?: string;
  img?: string;
  id?: string;
  receive_date?: string;
  type: "pending" | "accepted" | "rejected";
};

const ReserveCard: FC<ReserveCardProps> = ({ type, id, img, receive_date, title }) => {
  return (
    <div className="flex flex-wrap justify-between md:flex-nowrap items-center gap-1 gap-y-3 md:gap-4 py-3 md:p-2 border-b border-dashed border-b-slate-300 last:border-none pb-4  transition-all duration-300 hover:bg-slate-50 hover:shadow-xs">
      <p className="relative md:w-40 aspect-16/11 w-28">
        <Image
          src="/assets/images/order.png"
          alt="user-img"
          fill
          className=" rounded-lg border-3 border-slate-200 shadow"
        />
      </p>
      <div className="flex flex-col gap-3 md:flex-row justify-around flex-1">
        <div className="flex flex-col items-center gap-1 text-[11px] md:text-sm">
          <p>بنز جی-کلاس (Mercedes Benz G Class)</p>
          <p>
            <strong className="text-[10px]">تاریخ تحویل:‌ </strong> {PersianDate(new Date())}
          </p>
        </div>
        {type == "pending" && (
          <div className="flex h-max gap-1 text-xs px-4 py-1.5 md:py-2 w-max mx-auto md:mx-0 rounded-full shadow-xs border border-slate-200 bg-slate-100 items-center justify-center text-slate-700 ">
            <Timer className="size-4 " />
            <p>در حال بررسی...</p>
          </div>
        )}
        {type == "accepted" && (
          <div className="flex h-max gap-1 text-xs px-4 py-1.5 md:py-2 w-max mx-auto md:mx-0 rounded-full shadow-xs border border-emerald-300 bg-emerald-50 items-center justify-center text-emerald-600 ">
            <ClipboardCheck className="size-4 " />
            <p>انجام شده</p>
          </div>
        )}
        {type == "rejected" && (
          <div className="flex h-max gap-1 text-xs px-4 py-1.5 md:py-2 w-max mx-auto md:mx-0 rounded-full shadow-xs border border-rose-300 bg-rose-50 items-center justify-center text-rose-600 ">
            <CircleX className="size-4 " />
            <p>لغو شده</p>
          </div>
        )}
      </div>
      <Button variant={"outline_blue"} className="w-full md:w-auto text-xs!">
        مشاهده جزئیات
      </Button>
    </div>
  );
};

export default ReserveCard;
