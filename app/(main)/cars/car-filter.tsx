"use client";

import { Button } from "@/components/ui/button";
import { RangeSlider } from "@/components/ui/range-slider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const carFilterItems = [
  { id: 1, title: "پژو", query: "pegouet" },
  { id: 2, title: "بی‌ام‌و", query: "bmw" },
  { id: 3, title: "مرسدس", query: "mercedes" },
  { id: 4, title: "پورش", query: "porche" },
  { id: 5, title: "کیا", query: "kia" },
  { id: 6, title: "هیوندا", query: "hyunda" },
];

const carTypeFilterItems = [
  { id: 1, title: "شاسی بلند", query: "SUV" },
  { id: 2, title: "سدان", query: "Sedan" },
  { id: 3, title: "کوپه", query: "Coupe" },
  { id: 4, title: "کروک", query: "Crook" },
  { id: 5, title: "هاچبک", query: "Hatchback" },
  { id: 6, title: "اسپرت", query: "Sport" },
];

const CarFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [carType, setCarType] = useState<string[]>([]);
  const [brandType, setBrandType] = useState<string[]>([]);
  const [carPrice, setCarPrice] = useState<[number, number]>([2000000, 60000000]);

  const CarTypeHandler = (e: React.ChangeEvent<HTMLInputElement>, label: string, query: string) => {
    const { checked, value } = e.target;

    if (label === "type") {
      setCarType((prev: any) => (checked ? [...prev, value] : prev.filter(i => i !== value)));
    }

    if (label === "brand") {
      setBrandType((prev: any) => (checked ? [...prev, value] : prev.filter(i => i !== value)));
    }
  };

  const handlePriceChange = (val: number[]) => {
    const newRange: [number, number] = [Math.min(val[0], val[1]), Math.max(val[0], val[1])];
    setCarPrice(newRange);
  };

  const carFilterHandler = () => {
    const params = new URLSearchParams(searchParams);
    if (carType.length > 0) {
      params.set("type", carType.toString());
    } else {
      params.delete("type");
    }
    if (brandType.length > 0) {
      params.set("brand", brandType.toString());
    } else {
      params.delete("brand");
    }
    params.set("min", carPrice[0].toString());
    params.set("max", carPrice[1].toString());
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full md:w-1/6 md:flex flex-col gap-5 hidden">
      <div className="bg-white rounded-xl shadow border border-slate-100 p-4 flex flex-col gap-3">
        <h2 className="font-bold text-slate-500 text-lg ">فیلتر جستجو </h2>
        <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
        <div className="flex flex-col text-sm mt-5 gap-2">
          <h3 className="font-bold text-slate-700 mb-1">انتخاب برند خودرو</h3>
          {carFilterItems.map((i, index) => {
            return (
              <label
                key={index}
                htmlFor={i.query}
                className="flex items-center gap-2 text-slate-600 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id={i.query}
                  name="carType"
                  value={i.query}
                  onChange={e => CarTypeHandler(e, "brand", i.query)}
                  className="cursor-pointer"
                />
                <p>{i.title}</p>
              </label>
            );
          })}
        </div>
        <div className="flex flex-col text-sm mt-6 gap-2">
          <h3 className="font-bold text-slate-700 mb-1">انتخاب نوع خودرو</h3>
          {carTypeFilterItems.map((i, index) => {
            return (
              <label
                key={index}
                htmlFor={i.query}
                className="flex items-center gap-2 text-slate-600 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id={i.query}
                  name="brandType"
                  value={i.query}
                  onChange={e => CarTypeHandler(e, "type", i.query)}
                  className="cursor-pointer"
                />
                <p>{i.title}</p>
              </label>
            );
          })}
        </div>
        <div className="flex flex-col text-sm mt-6 gap-2">
          <h3 className="font-bold text-slate-700 mb-1">انتخاب بازه قیمتی </h3>
          <RangeSlider
            min={2000000}
            max={60000000}
            step={1}
            value={carPrice}
            onValueChange={handlePriceChange}
          />
        </div>
        <Button onClick={carFilterHandler} className="mt-8">
          اعمال کردن فیلتر
        </Button>
      </div>
    </div>
  );
};

export default CarFilter;
