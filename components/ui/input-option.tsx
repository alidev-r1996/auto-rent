"use client";

import { useState, FC } from "react";
import { cn, PersianDigits } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type DropdownProps = {
  name: string;
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  labelStyle?: string;
  inputStyle?: string;
  children?: React.ReactNode;
  errors?: any;
};

const DropdownInput: FC<DropdownProps> = ({
  name,
  label,
  value,
  onChange,
  options,
  labelStyle,
  children,
  errors,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex-1">
      <label
        htmlFor={name}
        className={cn(
          labelStyle,
          "flex items-center gap-2 rounded-lg border border-slate-200 relative p-3 text-slate-400 text-xs md:text-sm w-full cursor-pointer"
        )}
        onClick={() => setOpen(prev => !prev)}
      >
        {children}
        {children && <p className="border-r border-r-slate-300">&nbsp;</p>}

        <div className="flex-1">
          <p className={cn("text-slate-500", !value && "text-slate-400/70")}>
            {value ? options.find(o => o.value === value)?.label : label}
          </p>
        </div>

        <ChevronDown
          size={16}
          className={`transition-all duration-300 ${open ? "rotate-180" : "rotate-0"}`}
        />

        {value && (
          <p className="absolute hidden md:block text-[10px] bg-white px-1 py-1 -top-3 right-6">
            {label}
          </p>
        )}
      </label>

      {open && (
        <ul className="absolute z-20 w-full bg-white border border-slate-200 rounded-lg shadow-md mt-2 overflow-hidden">
          {options.map(opt => (
            <li
              key={opt.value}
              className={cn(
                "p-3 text-sm hover:bg-slate-100 cursor-pointer",
                value === opt.value && "bg-slate-100 text-slate-700 font-medium"
              )}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
      {errors && (
        <p className="text-red-500 text-xs absolute -bottom-4.5  right-2">
          {PersianDigits(errors?.message)}
        </p>
      )}
    </div>
  );
};

export default DropdownInput;
