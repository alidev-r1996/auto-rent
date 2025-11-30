"use client";

import { CarFront, Check, CreditCard, FileCheck, IdCard } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

const stepItems = [
  {
    id: "select",
    label: "انتخاب خودرو",
    icon: Check,
    activeOn: [1, 2, 3, 4, 5],
  },
  {
    id: "reserve",
    label: "مشخصات رزرو",
    icon: FileCheck,
    activeOn: [2, 3, 4, 5],
  },
  { id: "info", label: "مشخصات فردی", icon: IdCard, activeOn: [3, 4, 5] },
  { id: "payment", label: "پرداخت", icon: CreditCard, activeOn: [4, 5] },
  { id: "receive", label: "دریافت خودرو", icon: CarFront, activeOn: [5] },
];

const isActive = (activeOn: number[], step) => activeOn.includes(step);

const getStepColor = (isLast: boolean, status: boolean, active: boolean) => {
  if (isLast)
    return status
      ? "bg-emerald-500 text-white border-emerald-500"
      : "bg-rose-500 text-white border-rose-500";
  if (active) return "bg-emerald-500 text-white border-emerald-500";
  return "border-slate-200 text-slate-500";
};

export default function Stepper({ steps }) {
  const searchParams = useSearchParams();
  const status = searchParams.get("status") === "success";

  return (
    <div className="bg-white border border-slate-200 shadow-xs rounded-lg flex items-center p-4">
      {stepItems.map((step, index) => {
        const active = isActive(step.activeOn, steps);
        const Icon = step.icon;
        const isLast = index === stepItems.length - 1;

        return (
          <div key={step.id} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1">
              <span
                className={`p-2 rounded-full border w-max transition-colors duration-200 ${getStepColor(
                  isLast,
                  status,
                  active
                )}`}
              >
                <Icon className="p-0.5 size-7" />
              </span>
              <p
                className={`${
                  active ? "text-emerald-600" : "text-slate-600"
                } text-xs sr-only md:not-sr-only`}
              >
                {step.label}
              </p>
            </div>

            {!isLast && (
              <span
                className={`flex-1 border-dotted border md:-translate-y-2 transition-colors duration-200 ${
                  active ? "border-emerald-500" : "border-slate-300"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
