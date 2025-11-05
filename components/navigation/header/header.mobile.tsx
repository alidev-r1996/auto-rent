import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search, TextAlignJustify } from "lucide-react";
import { headerMenu } from "./header.constant";
import Link from "next/link";
import Image from "next/image";

const MobileHeader = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant={"ghost"} className="!p-2 size-9 rounded md:hidden">
          <TextAlignJustify className="size-full" />
        </Button>
      </SheetTrigger>
      <SheetContent className="max-h-screen">
        <SheetHeader>
          <SheetTitle className="mx-auto">
            <Image src="/assets/logo/header-logo.svg" alt="Logo" width={100} height={100} />
          </SheetTitle>
          <SheetDescription asChild>
            <ul className="flex flex-col md:hidden w-full bg-white gap-4 pt-8">
              <div className="flex items-center bg-white border border-slate-200 shadow-xs rounded gap-2 p-2">
                <Search className="size-5 text-slate-600" />
                <input
                  type="text"
                  className="appearance-none outline-none"
                  placeholder="جستجو..."
                />
              </div>
              {headerMenu.map(({ id, title, path }) => (
                <li
                  key={id}
                  className=" hover:text-blue-600 p-2 text-base hover:font-bold transition-all duration-300"
                >
                  <Link href={path}>{title}</Link>
                </li>
              ))}
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileHeader;
