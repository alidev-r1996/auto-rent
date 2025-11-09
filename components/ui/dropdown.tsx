"use client";

import { PersianDigits } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Activity, FC, useState } from "react";

type DropDownProps = {
  title: string;
  options: Array<any>;
  className?: string;
  icon?: any;
};

const DropDown: FC<DropDownProps> = ({ options, title, className, icon }) => {
  const [show, setShow] = useState(false);
  const [titleHead, setTitle] = useState(title);

  return (
    <div
      onClick={() => setShow(!show)}
      className={`${className} bg-white relative rounded-lg text-[13px] cursor-pointer hover:bg-slate-50 transition-all duration-200 shadow-xs p-[11px] flex items-center md:w-1/4 w-1/3 justify-between  text-slate-400 border border-slate-200`}
    >
      <div className="flex items-center gap-1">
        {icon}
        <p>{PersianDigits(`${titleHead}`)} </p>
      </div>
      <ChevronDown className={`${show && "rotate-180"} size-4 transition-all duration-200`} />
      <Activity mode={show ? "visible" : "hidden"}>
        <div className="flex flex-col items-center w-full absolute z-10 left-0 top-[115%] border border-slate-200 bg-white text-xs rounded-lg shadow-xs">
          {options.map((i, index) => (
            <p
              key={index}
              onClick={() => setTitle(PersianDigits(i))}
              className="p-2.5 text-center w-full transition-colors duration-300 cursor-pointer hover:bg-slate-100 last:border-none border-b border-dotted border-b-slate-300"
            >
              {PersianDigits(i)}
            </p>
          ))}
        </div>
      </Activity>
    </div>
  );
};

export default DropDown;
