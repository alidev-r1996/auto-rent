import { PersianTime } from "@/lib/utils";
import { FC } from "react";
import { SupportCardMsgProps } from "../_types/support.type";

const SupportCardMsg: FC<SupportCardMsgProps> = ({ text, id, date, isYou }) => {
  return (
    <div
      className={`${isYou ? "ml-auto border-blue-500 bg-blue-500 text-white rounded-tr-none!" : "mr-auto rounded-tl-none!  border-slate-300 bg-slate-200 text-slate-800"} border  shadow-xs p-2 rounded-xl text-xs w-max md:max-w-1/3 max-w-full   flex flex-col gap-1`}
    >
      <p>{text}</p>
      <p className={`${isYou && "mr-auto"}`}>{PersianTime(new Date())}</p>
    </div>
  );
};

export default SupportCardMsg;
