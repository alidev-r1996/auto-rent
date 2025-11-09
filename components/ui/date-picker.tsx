"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";
import { Calendar } from "@/components/ui/calendar";

type DatePickerProps = {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
  className?: string;
};

const DatePicker: FC<DatePickerProps> = ({ className , date, setDate }) => {
  return <Calendar mode="single" selected={date} onSelect={setDate} className={`${className} rounded-lg `} />;
};

export default DatePicker;
