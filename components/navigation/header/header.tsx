"use client";

import Image from "next/image";

import Link from "next/link";
import DesktopHeader from "./header.desktop";
import MobileHeader from "./header.mobile";
import { useSession } from "@/lib/auth-client";
import { ChevronDown, IdCard, UserRound } from "lucide-react";
import { PersianDigits } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logout from "@/components/common/signout";
import { useState } from "react";

const Header = () => {
  const { data: session, isPending } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`${isPending && "blur-xs"} h-18 shadow-xs border-b border-b-slate-200 z-20 bg-white/95! backdrop-blur-sm" max-w-[1690px] mx-auto md:rounded-xl  sticky top-0 p-4 flex items-center justify-between`}
    >
      <MobileHeader />
      <Image src="/assets/logo/header-logo.svg" alt="Logo" width={100} height={100} />
      <DesktopHeader />
      {!session?.user && (
        <Link
          href="/auth"
          className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-md px-4 py-2 text-xs transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          ورود / ثبت‌نام
        </Link>
      )}

      {session?.user && (
        <DropdownMenu dir="rtl" open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <div className="bg-indigo-600 text-white hover:bg-indigo-700 rounded-md px-4 py-2 text-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1">
              <UserRound className="size-5" />
              <p>{PersianDigits(`${session?.user?.name}`)}</p>
              <ChevronDown className="size-4 md:mr-1" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-auto py-2 px-1">
            <Link
              onClick={() => setOpen(false)}
              href={"/user"}
              className="flex items-center gap-2 p-2 text-sm transition-colors duration-300 cursor-pointer hover:bg-slate-200 rounded-md"
            >
              <IdCard /> مشاهده پروفایل
            </Link>
            <DropdownMenuSeparator />
            <Logout className="text-xs! bg-transparent text-slate-800 hover:bg-rose-500 hover:text-white" />
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </nav>
  );
};

export default Header;
