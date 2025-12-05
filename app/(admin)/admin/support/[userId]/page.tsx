import { Button } from "@/components/ui/button";
import { PersianDigits } from "@/lib/utils";
import { Send } from "lucide-react";
import SupportCardMsg from "../../../_components/support/support.chat.card";
import UserHeader from "@/app/(admin)/_components/user-header";

const Support = () => {
  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4">
      <UserHeader title="پشتیبانی" />

      <div className="border border-slate-200 rounded-xl p-3 md:p-5 h-[70vh] max-h-[70vh] relative ">
        <div className="flex flex-col gap-4 w-full  h-[90%] max-h-[85%] overflow-y-auto  scroll-none">
          <SupportCardMsg text="سلام پشتیبان هستم، چطور میتونم کمکتون کنم؟" isYou={false} />
          <SupportCardMsg
            text="سلام وقت بخیر میخواستم بدونم امکان کنسل کردن رزروی هست؟"
            isYou={true}
          />

          <SupportCardMsg
            text={`سلام دوست عزیز بله امکان کنسل کردن رزرو وجود داره. لطفا به بخش رزروهای من مراجعه کنید و رزروی که میخواید کنسل کنید رو انتخاب کنید.`}
            isYou={false}
          />
        </div>
        <form className="flex items-center md:gap-2 gap-1 absolute bottom-2 md:w-[96%] mx-auto w-[93%]">
          <input
            type="text"
            name="messages"
            placeholder="پیام خود را بنویسید"
            className="flex items-center outline-none gap-2 rounded-lg border border-slate-200 relative p-2 text-slate-400 text-xs md:text-sm flex-1"
          />
          <Button type="submit" variant={"blue"}>
            <p className="sr-only md:not-sr-only">ارسال پیام </p> <Send size={5} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Support;
