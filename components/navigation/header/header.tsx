"use client";

import Image from "next/image";

import Link from "next/link";
import DesktopHeader from "./header.desktop";
import MobileHeader from "./header.mobile";

const Header = () => {
  return (
    <nav
      className={`shadow-xs border-b border-b-slate-200 z-20 !bg-white/95 backdrop-blur-sm" max-w-[1690px] mx-auto md:rounded-xl  sticky top-0 p-4 flex items-center justify-between`}
    >
      <MobileHeader />
      <Image src="/assets/logo/header-logo.svg" alt="Logo" width={100} height={100} />
      <DesktopHeader />
      <Link
        href="/auth/signin"
        className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-md px-4 py-2 text-xs transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        ورود / ثبت‌نام
      </Link>
    </nav>
  );
};

export default Header;
