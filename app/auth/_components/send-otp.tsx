"use client";

import Image from "next/image";
import { EnglishDigits, PersianDigits } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FC, FormEvent, useState } from "react";
import { phoneNumber } from "@/lib/auth-client";

type SendOTPProps = {
  mobile: string;
  setMobile: React.Dispatch<React.SetStateAction<string>>;
  onBack: () => void;
};

const SendOTP: FC<SendOTPProps> = ({ mobile, onBack, setMobile }) => {
  const [check, setCheck] = useState(false);

  const mobileHandler = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (!/\d/gi.test(value) && /\w/gi.test(value)) {
      return;
    }
    if (!/\d/gi.test(value)) {
      setMobile(mobile.slice(0, -1));
    }
    if (value.length > 11) {
      return;
    }
    setMobile(PersianDigits(value));
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await phoneNumber.sendOtp({
      phoneNumber: EnglishDigits(mobile),
    });
    if (error) {
      console.log(error);
    }
    console.log(data);
    onBack();
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col items-center gap-4 mt-14">
      <h1 className="font-bold text-xl text-white mb-8">ورود یا ثبت‌نام</h1>
      <p className="text-slate-300 text-xs">
        کد تایید به شماره موبایلی که وارد می‌کنید، ارسال خواهد شد.
      </p>
      <div
        dir="ltr"
        className="flex items-center rounded-lg overflow-hidden border border-slate-500 shadow bg-slate-700/50 p-1 w-full "
      >
        <Image src="/assets/images/flag.png" alt="Logo" width={30} height={30} />
        <p className="text-sm text-slate-200 px-2">{PersianDigits(`+98`)}</p>
        <p className="px-2 text-slate-400">|</p>
        <input
          type="text"
          value={mobile}
          name="mobile"
          accept="number"
          id="mobile"
          onChange={mobileHandler}
          className="appearance-none outline-none placeholder:text-sm text-sm text-slate-200"
          placeholder={PersianDigits("09*********")}
        />
      </div>
      <label htmlFor="rule" className="flex items-center gap-1 mt-2 cursor-pointer">
        <input
          type="checkbox"
          name="rule"
          id="rule"
          value="accept"
          onChange={e => setCheck(e.target.checked)}
        />
        <p className="text-slate-400 text-xs">
          با ورود و ثبت‌نام در سایت، با قوانین{" "}
          <strong className="text-amber-500 px-0.5">اُتورنت</strong>
          موافقت می‌کنم.
        </p>
      </label>
      <Button
        disabled={mobile.length < 11 || (!check && true)}
        type="submit"
        variant={"amber"}
        className="w-full mt-8 bg-amber-500!"
      >
        تأیید و ادامه
      </Button>
    </form>
  );
};

export default SendOTP;
