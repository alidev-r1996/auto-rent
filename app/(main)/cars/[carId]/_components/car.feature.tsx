import { PersianDigits } from "@/lib/utils";
import { FC } from "react";
import { CarFeatureProps } from "./car.type";

const CarFeatureMobile: FC<CarFeatureProps> = ({ featureItems, className }) => {
  return (
    <div
      className={`${className} rounded-lg shadow-xs border border-slate-100 flex-col gap-4 p-4 bg-white`}
    >
      <h2 className="font-bold text-slate-500 text-lg ">مشخصات </h2>
      <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 gap-y-4 text-slate-500 text-xs md:text-sm">
        {featureItems.map((i, index) => {
          const Icon = i.icon;
          return (
            <div key={index} className="flex items-center gap-2 text-xs md:text-sm">
              <p className="p-1 border border-slate-200 rounded">
                <Icon className="size-7 text-slate-500" />
              </p>
              <div className="flex flex-col gap-0.5">
                <p className="text-slate-600">{i.title}</p>
                <p className="text-slate-400">{PersianDigits(i.text)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarFeatureMobile;
