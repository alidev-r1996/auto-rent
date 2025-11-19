import { FC } from "react";
import Image from "next/image";
import { PersianDate } from "@/lib/utils";
import { ReplyCommentProps } from "./car.type";

const ReplyComment: FC<ReplyCommentProps> = ({ text, user, created_at }) => {
  return (
    <div className="w-full border-dashed bg-slate-100 border border-b-slate-200 py-4 px-2 pr-4  flex flex-col items-start gap-2 rounded-lg relative">
      <div className="flex items-center gap-2 text-xs">
        <Image
          src={user.image || "/assets/images/avatar.png"}
          alt="user"
          width={50}
          height={50}
          className="rounded-full aspect-square border-2 border-slate-200"
        />
        <div className="flex flex-col gap-1">
          <p className="font-bold text-slate-500">
            {/\d/gi.test(user.name) ? "بدون نام" : user.name}
          </p>
          <p className="text-slate-500">{PersianDate(created_at)}</p>
        </div>
      </div>
      <p className="text-xs  leading-6 text-slate-400">{text}</p>
    </div>
  );
};

export default ReplyComment;
