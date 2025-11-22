import { PersianDate } from "@/lib/utils";
import { ClipboardCheck, Timer } from "lucide-react";
import { FC } from "react";

type CommentCardProps = {
  id?: string;
  text?: string;
  status: "pending" | "success";
  date?: string;
};
const CommentCard: FC<CommentCardProps> = ({ status }) => {
  return (
    <div className="flex flex-col items-start gap-4 hover:bg-slate-50 p-4 border-b border-dashed border-b-slate-300 last:border-none">
      <div className="flex flex-col items-start gap-4">
        <p className="text-xs md:text-sm font-bold text-slate-700">
          ماشین موردعلاقم ناموجود بود. چرا خب؟
        </p>
        {status == "pending" && (
          <div className="flex h-max gap-1 text-xs px-4 py-1.5 md:py-2 w-max  rounded-full shadow-xs border border-slate-200 bg-slate-100 items-center justify-center text-slate-700 ">
            <Timer className="size-4 " />
            <p>در حال بررسی...</p>
          </div>
        )}
        {status == "success" && (
          <div className="flex h-max gap-1 text-xs px-4 py-1.5 md:py-2 w-max  rounded-full shadow-xs border border-emerald-300 bg-emerald-50 items-center justify-center text-emerald-600 ">
            <ClipboardCheck className="size-4 " />
            <p>تأیید شده</p>
          </div>
        )}
      </div>
      <p className="text-xs md:mr-auto">
        <strong className="text-xs">تاریخ ثبت نظر: </strong>
        {PersianDate(`2023-01-01`)}
      </p>
    </div>
  );
};

export default CommentCard;
