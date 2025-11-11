"use client";

import { CarFront, Check, CreditCard, FileCheck, IdCard } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

const steps = [
  { id: "select", label: "انتخاب خودرو", icon: Check, activeOn: ["reserve", "info", "payment", "receive"] },
  { id: "reserve", label: "مشخصات رزرو", icon: FileCheck, activeOn: ["info", "payment", "receive"] },
  { id: "info", label: "مشخصات فردی", icon: IdCard, activeOn: ["payment", "receive"] },
  { id: "payment", label: "پرداخت", icon: CreditCard, activeOn: ["receive"] },
  { id: "receive", label: "دریافت خودرو", icon: CarFront, activeOn: [] },
];

const isActive = (activeOn: string[], pathname: string) =>
  activeOn.some((segment) => pathname.includes(segment));

const getStepColor = (isLast: boolean, status: boolean, active: boolean) => {
  if (isLast) return status
    ? "bg-emerald-500 text-white border-emerald-500"
    : "bg-rose-500 text-white border-rose-500";
  if (active) return "bg-emerald-500 text-white border-emerald-500";
  return "border-slate-200 text-slate-500";
};

export default function Stepper() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const status = searchParams.get("status") === "success";

  return (
    <div className="bg-white border border-slate-200 shadow-xs rounded-lg flex items-center p-4">
      {steps.map((step, index) => {
        const active = isActive(step.activeOn, pathname);
        const Icon = step.icon;
        const isLast = index === steps.length - 1;

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
