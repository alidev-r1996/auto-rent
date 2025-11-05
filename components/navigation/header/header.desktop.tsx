"use client";

import { Search, X } from "lucide-react";
import Link from "next/link";
import { headerMenu } from "./header.constant";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const DesktopHeader = () => {
  const [searchBar, setSearchBar] = useState(false);
  return (
    <ul className="hidden md:flex items-center gap-8 left-0 w-auto">
      {headerMenu.map(({ id, title, path }) => (
        <li key={id} className=" hover:text-blue-600 transition-colors">
          <Link href={path}>{title}</Link>
        </li>
      ))}

      <Button
        onClick={() => setSearchBar(!searchBar)}
        variant={"ghost"}
        className={"!p-2 size-9 rounded-full"}
      >
        <Search className="size-full" />
      </Button>

      <div
        className={`${searchBar ? "w-200" : "w-0 !bg-transparent border-none -z-10"} overflow-hidden translate-x-1/3 transition-all duration-300 absolute flex items-center h-[70%] bg-white border border-slate-100 rounded-full gap-2 p-2`}
      >
        <Search className="size-5 text-slate-600" />
        <input
          type="text"
          className="appearance-none outline-none flex-1 placeholder:text-sm"
          placeholder="جستجو..."
        />
        <Button variant={"ghost"} onClick={() => setSearchBar(!searchBar)}>
          <X className="size-5 text-slate-600" />
        </Button>
      </div>
    </ul>
  );
};

export default DesktopHeader;
