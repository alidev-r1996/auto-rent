"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarDays } from "lucide-react";
import { PersianDate } from "@/lib/utils";
import DatePicker from "@/components/ui/date-picker";

const DatePickerUi = ({ date, setDate, label }: { date: any; setDate: any; label: string }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-full border border-slate-200 rounded-lg text-slate-400 relative p-3 shadow-xs text-sm mt-2">
          <p className="absolute -top-3 bg-white right-3 px-1 py-0.5 text-[10px]">{label} </p>
          <div className="flex items-center gap-2">
            <CalendarDays className="size-5" />
            <p>{PersianDate(date)}</p>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <DatePicker date={date} setDate={setDate} />
      </PopoverContent>
    </Popover>
  );
};

export default DatePickerUi;
