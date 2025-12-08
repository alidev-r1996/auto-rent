"use client";
import { EnglishDigits, PersianDigits } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FC, FormEvent, useEffect, useRef, useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Clock4 } from "lucide-react";
import { useRouter } from "next/navigation";
import { phoneNumber } from "@/lib/auth-client";

type checkOTPProps = {
  mobile: string;
  onBack: () => void;
};

const CheckOTP: FC<checkOTPProps> = ({ mobile, onBack }) => {
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);
  const [retry, setRetry] = useState(false);
  const otpRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (otp.length < 6) return;
    const { data, error } = await phoneNumber.verify({
      code: EnglishDigits(otp),
      phoneNumber: EnglishDigits(mobile),
    });
    if (error) {
      console.log(error);
    }
    console.log(data);
    router.push("/");
  };

  const retryCodeHandler = async () => {
    setMinutes(1);
    setSeconds(59);
    setRetry(false);
    const { data, error } = await phoneNumber.sendOtp({
      phoneNumber: EnglishDigits(mobile),
    });
    if (error) {
      console.log(error, "error");
    }
    console.log(data, "data");
  };

  useEffect(() => {
    if (otpRef.current) {
      otpRef.current.focus();
    }
  }, [retry]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          setRetry(true);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 100);
    return () => clearInterval(timer);
  }, [seconds, minutes]);

  return (
    <form onSubmit={submitHandler} className="flex flex-col items-center gap-4 mt-14">
      <h1 className="font-bold text-xl text-white mb-8">ورود یا ثبت‌نام</h1>
      <p className="text-slate-300 text-xs">
        لطفا کد تأیید ارسال شده به <strong className="text-amber-500">{mobile}</strong> را وارد کنید
      </p>
      <div dir="ltr">
        <InputOTP
          maxLength={6}
          value={otp}
          ref={otpRef}
          onChange={value => setOtp(PersianDigits(value))}
        >
          <InputOTPGroup>
            <InputOTPSlot
              index={0}
              className="text-slate-100 font-bold border border-slate-500 shadow"
            />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot
              index={1}
              className="text-slate-100 font-bold border border-slate-500 shadow"
            />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot
              index={2}
              className="text-slate-100 font-bold border border-slate-500 shadow"
            />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot
              index={3}
              className="text-slate-100 font-bold border border-slate-500 shadow"
            />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot
              index={4}
              className="text-slate-100 font-bold border border-slate-500 shadow"
            />
          </InputOTPGroup>
          <InputOTPGroup>
            <InputOTPSlot
              index={5}
              className="text-slate-100 font-bold border border-slate-500 shadow"
            />
          </InputOTPGroup>
        </InputOTP>
      </div>
        <div className={`${!retry ? "flex": "hidden"}  items-center gap-1  text-slate-400 ml-auto text-xs`}>
          <Clock4 className="size-4" />
          <p>
            {PersianDigits(String(minutes).padStart(2, "0"))}:
            {PersianDigits(String(seconds).padStart(2, "0"))}
          </p>
          <p>تا دریافت کد مجدد</p>
        </div>

        <div className={`${retry ? "flex": "hidden"} flex items-center justify-between p-1 w-full`}>
          <button
            type="button"
            onClick={retryCodeHandler}
            className="text-[11px] px-2 py-1 bg-indigo-500 text-white rounded cursor-pointer hover:bg-indigo-600 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            درخواست مجدد کد
          </button>
          <button
            type="button"
            onClick={() => onBack()}
            className="text-[11px] px-2 py-1 text-slate-300 rounded hover:scale-105 active:scale-95 transition-all duration-300 hover:bg-amber-600 hover:text-white cursor-pointer"
          >
            ویرایش شماره
          </button>
        </div>

      <Button
        type="submit"
        disabled={otp.length !== 6 ? true : false}
        variant={"amber"}
        className="w-full mt-8 bg-amber-500!"
      >
        ارسال کد تأیید
      </Button>
    </form>
  );
};

export default CheckOTP;
