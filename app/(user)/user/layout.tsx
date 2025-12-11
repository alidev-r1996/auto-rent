"use client";

import ReactQueryProvider from "@/provider/react-query";
import { useState } from "react";
import SideBar from "../_components/sidebar/sideBar";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  return (
    <ReactQueryProvider>
      <div className="grid md:grid-cols-5 p-4 gap-4 mx-auto max-w-[1690px]">
        <SideBar show={open} setShow={() => setOpen(!open)} />
        <div
          className={`${open ? "hidden md:flex" : "flex"} md:col-span-4! flex-col gap-4 min-w-full! max-w-full!`}
        >
          <Button
            variant={"outline"}
            className="py-5! md:hidden group"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <ChevronRight className="group-hover:translate-x-4 transition-all duration-300" />
            بازگشت به منوی اصلی
          </Button>
          {children}
          <Toaster />
        </div>
      </div>
    </ReactQueryProvider>
  );
}
