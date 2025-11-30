"use client";

import { FC, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, Search } from "lucide-react";
import { PersianDigits } from "@/lib/utils";

type BlogFilterProps = {
  title: string;
  options: { label: string; value: string }[];
  className?: string;
  icon?: React.ReactNode;
};

const BlogFilter: FC<BlogFilterProps> = ({ options, title, className, icon }) => {
  const [show, setShow] = useState(false);
  const [titleHead, setTitle] = useState(title);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") ?? "");

  const filterHandler = (value: string, label: string) => {
    setTitle(PersianDigits(label));
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`);
    setShow(false);
  };

  const searchHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    params.set("q", search);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-between gap-1 md:col-span-2 text-xs md:text-sm w-full">
      <form
        onSubmit={searchHandler}
        className="flex items-center bg-white border border-slate-200 shadow-xs rounded-lg gap-2 p-2 flex-1"
      >
        <Search className="size-5 text-slate-500" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="appearance-none outline-none flex-1 placeholder:text-slate-400 text-slate-600"
          placeholder="جستجو..."
        />
        <button className="hidden"></button>
      </form>
      <div className={`relative ${className}`}>
        <div
          onClick={() => setShow(!show)}
          className="bg-white rounded-lg text-[12px] cursor-pointer hover:bg-slate-50 transition-all duration-200 shadow-xs p-2.5 flex items-center justify-between text-slate-400 border border-slate-200"
        >
          <div className="flex items-center gap-">
            {icon}
            <p>{titleHead}</p>
          </div>
          <ChevronDown
            className={`size-4 transition-all duration-200 ${show ? "rotate-180" : ""}`}
          />
        </div>

        {show && (
          <div className="absolute z-10 left-0 top-[115%] w-full border border-slate-200 bg-white text-xs rounded-lg shadow-xs flex flex-col">
            {options.map((option, index) => (
              <p
                key={index}
                onClick={() => filterHandler(option.value, option.label)}
                className="p-2.5 text-center w-full cursor-pointer transition-colors duration-300 hover:bg-slate-100 last:border-none border-b border-dotted border-b-slate-300"
              >
                {PersianDigits(option.label)}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogFilter;
