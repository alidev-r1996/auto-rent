import { PersianDate } from "@/lib/utils";
import SingleImg from "@/public/assets/images/single.png";
import Image from "next/image";

const CommentCardSingle = () => {
  return (
    <div className="w-full border-dashed  border-b last:border-none border-b-slate-300 py-4 mt-4 flex flex-col items-start gap-2">
      <div className="flex items-center gap-2 text-xs">
        <Image
          src={SingleImg}
          alt="user"
          width={50}
          height={50}
          className="rounded-full aspect-square border-2 border-slate-200"
        />
        <div className="flex flex-col gap-1">
          <p className="font-bold text-slate-500">حسام شریفی </p>
          <p className="text-slate-500">{PersianDate("2023-01-01")}</p>
        </div>
      </div>
      <p className="text-xs  leading-6 text-slate-400">
        اولین بار بود که برای مسافرت ماشین اجاره می‌کردم و به دنبال یک شرکت با سابقه و مطمئن
        می‌گشتم!بدون هیچ شکی میگم، اتو رنت تو کار خودش بهترینه!پشتیبانی عالی، هزینه بسیار مناسب،
        آسان بودن روند اجاره و رزرو؛ هرچی بگم کم گفتم!حتماً دفعه بعد هم برای اجاره ماشین به سراغشون
        میام.
      </p>
      <p className="px-3 py-1 text-xs bg-emerald-500 text-white rounded mr-auto ml-3 hover:scale-103 transition-all duration-200 active:scale-95 cursor-pointer hover:bg-emerald-600">
        پاسخ دادن
      </p>
      
    </div>
  );
};

export default CommentCardSingle;
