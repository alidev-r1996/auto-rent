import { Check } from "lucide-react";
import { FC } from "react";
import { CarOptionsProps } from "./car.type";

const CarOptions: FC<CarOptionsProps> = ({ options, className }) => {
  return (
    <div
      className={`${className} rounded-lg shadow-xs border border-slate-100  flex-col gap-4 p-4 bg-white`}
    >
      <h2 className="font-bold text-slate-500 text-lg ">امکانات </h2>
      <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 gap-y-4 text-slate-500 text-xs md:text-sm">
        {options.map((i, index) => (
          <div key={index} className="flex items-center gap-2 text-xs">
            <p className="p-1 border border-slate-200 rounded">
              <Check className="size-6 text-slate-500 p-0.5" />
            </p>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarOptions;
