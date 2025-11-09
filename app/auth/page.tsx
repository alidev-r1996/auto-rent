"use client";

import { useState } from "react";
import SendOTP from "./_components/send-otp";
import CheckOTP from "./_components/check-otp";
import Image from "next/image";
import LoginBg from "@/public/assets/images/login.webp";

const Auth = () => {
  const [mobile, setMobile] = useState("");
  const [isShow, setShow] = useState(false);

  return (
    <section className="relative flex-1 h-screen flex items-center md:items-start justify-center">
      <div className="w-screen h-screen left-0 top-0 fixed -z-10 ">
        <Image src={LoginBg} alt={"login bg"} fill placeholder="blur" className="brightness-75" />
      </div>
      <div className="md:w-100 w-screen items-center flex-col h-screen md:h-125! md:mt-40 bg-stone-900/50 drop-shadow-2xl backdrop-blur-xs rounded-2xl flex p-4">
        <Image
          src="/assets/logo/footer-logo.svg"
          alt="Logo"
          width={140}
          height={140}
          className="brightness-85 mt-10 md:mt-0"
        />
        {!isShow ? (
          <SendOTP mobile={mobile} setMobile={setMobile} onBack={() => setShow(!isShow)} />
        ) : (
          <CheckOTP mobile={mobile} onBack={() => setShow(!isShow)} />
        )}
      </div>
    </section>
  );
};

export default Auth;
