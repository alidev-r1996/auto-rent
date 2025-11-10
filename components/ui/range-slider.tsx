"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";
import { PersianCurrency, PersianDigits } from "@/lib/utils";

type RangeSliderProps = {
  min?: number;
  max?: number;
  step?: number;
  value?: [number, number];
  onValueChange?: (value: [number, number]) => void;
};

export function RangeSlider({
  min = 6000000,
  max =60000000,
  step = 1,
  value = [6000000, 60000000],
  onValueChange,
}: RangeSliderProps) {
  const [range, setRange] = React.useState<[number, number]>(value);

  const handleChange = (val: number[]) => {
    const newRange: [number, number] = [Math.min(val[0], val[1]), Math.max(val[0], val[1])];
    setRange(newRange);
    onValueChange?.(newRange);
  };

  return (
    <div  className="w-full space-y-2">
      <Slider min={min} max={max} step={step} value={range} onValueChange={handleChange} />
      <div className="flex justify-between text-xs text-muted-foreground">
        <p>از {PersianCurrency(`${range[1]}`)} تومان</p>
        <p>تا {PersianCurrency(`${range[0]}`)} تومان</p>
      </div>
    </div>
  );
}
