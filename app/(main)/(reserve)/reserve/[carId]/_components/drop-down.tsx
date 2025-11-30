import { PersianDigits } from "@/lib/utils";
import { ChevronDown, MapPin } from "lucide-react";
import React, { Activity, FC, useState } from "react";

type DropDownInputProps = {
  label: string;
  value: string;
  onChange: (value) => void;
  options: { label: string; value: string }[];
  children: React.ReactNode
};

const DropDownInput: FC<DropDownInputProps> = ({ label, value, onChange, options , children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      onClick={() => setShow(!show)}
      className="flex items-center gap-2 justify-between rounded-lg border hover:bg-slate-50 border-slate-200 relative p-3 text-xs md:text-sm text-slate-400 cursor-pointer select-none"
    >
      <p className="flex items-center gap-2">
        {children}
        <span>{PersianDigits(options.find(i => i.value == value)?.label || "")}</span>
      </p>
      <ChevronDown
        className={`transition-all duration-300 size-4 ${show ? "rotate-180" : "rotate-0"}`}
      />
      <p className="absolute peer-placeholder-shown:hidden text-[10px] bg-white px-1 py-1 -top-3 right-8">
        {label}
      </p>
      <Activity mode={show ? "visible" : "hidden"}>
        <div className="flex flex-col items-center w-full absolute z-10 left-0 top-[115%] border border-slate-200 bg-white text-xs rounded-lg shadow-xs">
          {options.map((i, index) => (
            <p
              key={index}
              onClick={() => onChange(i.value)}
              className="p-2.5 text-center w-full transition-colors duration-300 cursor-pointer hover:bg-slate-100 last:border-none border-b border-dotted border-b-slate-300"
            >
              {PersianDigits(i.label)}
            </p>
          ))}
        </div>
      </Activity>
    </div>
  );
};

export default DropDownInput;
