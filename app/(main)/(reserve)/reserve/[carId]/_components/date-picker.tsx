"use client";

import { FC, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarDays } from "lucide-react";
import { PersianDate } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

type DatePickerCarProps = {
  minDate?: any;
  maxDate?: any;
  label: string;
  date: Date;
  setDate: any;
  className?: string;
  dropDown?: boolean;
};

const DatePickerCar: FC<DatePickerCarProps> = ({
  minDate,
  maxDate,
  label,
  date,
  setDate,
  className,
  dropDown,
}) => {
  const min = new Date(minDate);
  const max = new Date(maxDate);
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={`${className} w-full border border-slate-200 rounded-lg text-slate-400 relative p-3 shadow-xs text-sm mt-2`}
        >
          <p className="absolute -top-3 bg-white right-3 px-1 py-0.5 text-[10px]">{label} </p>
          <div className="flex items-center gap-2">
            <CalendarDays className="size-5" />
            <p>{PersianDate(date)}</p>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={d => {
            setDate(d);
            setOpen(false);
          }}
          className={`rounded-lg`}
          disabled={
            minDate || maxDate
              ? {
                  ...(minDate && { before: min }),
                  ...(maxDate && { after: max }),
                }
              : undefined
          }
          captionLayout={dropDown ? "dropdown" : undefined}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePickerCar;
