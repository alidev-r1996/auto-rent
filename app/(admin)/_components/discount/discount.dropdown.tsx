"use client";

import { FC, useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type Option = {
  label: string;
  value: string;
};

type Props = {
  name: string;
  label: string;
  options: Option[];
  value: string[]; // selected values
  onChange: (newValues: string[]) => void;
  labelStyle?: string;
  inputStyle?: string;
};

const DropDownMultiSelect: FC<Props> = ({ name, label, options, value, onChange, labelStyle }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: any) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const toggleValue = (v: string) => {
    if (value.includes(v)) {
      onChange(value.filter(item => item !== v));
    } else {
      onChange([...value, v]);
    }
  };

  return (
    <div className="relative flex-1" ref={ref}>
      <label
        htmlFor={name}
        onClick={() => setOpen(!open)}
        className={cn(
          labelStyle,
          "flex items-center gap-2 rounded-lg border border-slate-200 hover:bg-slate-50 relative p-3 text-slate-400 text-xs md:text-sm cursor-pointer"
        )}
      >
        {/* Selected Labels */}
        <div className="flex-1 text-slate-400/70">
          {value.length > 0 ? (
            options
              .filter(o => value.includes(o.value))
              .map(o => o.label)
              .join(", ")
          ) : (
            <div className="flex items-center justify-between">
              {label} <ChevronDown className="size-4" />
            </div>
          )}
        </div>

        {/* Floating Label */}
        {value.length > 0 && (
          <p className="absolute hidden md:block text-[10px] bg-white px-1 py-1 -top-3 right-6">
            {label}
          </p>
        )}
      </label>

      {open && (
        <div className="absolute left-0 right-0 z-30 mt-1 bg-white border border-slate-200 shadow-md rounded-lg p-2 max-h-60 overflow-y-auto">
          {options.map(option => (
            <label
              key={option.value}
              className="flex items-center gap-2 p-2 rounded hover:bg-slate-100 cursor-pointer text-sm"
            >
              <input
                type="checkbox"
                checked={value.includes(option.value)}
                onChange={() => toggleValue(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownMultiSelect;
