"use client";

import { iranSans } from "@/lib/utils";
import { CheckIcon, InfoIcon, Loader2Icon, X, TriangleAlertIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      richColors
      className={`toaster group`}
      icons={{
        success: (
          <span className="flex items-center justify-center size-6 p-1 drop-shadow-lg rounded-full bg-emerald-600 text-white">
            <CheckIcon />
          </span>
        ),
        info: (
          <span className="flex items-center justify-center size-6 p-1 drop-shadow-lg rounded-full bg-blue-600 text-white">
            <InfoIcon />
          </span>
        ),
        warning: (
          <span className="flex items-center justify-center size-6 p-1 ml-2 drop-shadow-lg rounded-full bg-amber-500 text-white">
            <TriangleAlertIcon />
          </span>
        ),
        error: (
          <span className="flex items-center justify-center size-6 p-1 ml-2 drop-shadow-lg rounded-full bg-rose-600 text-white">
            <X />
          </span>
        ),
        loading: (
          <span className="flex items-center justify-center size-6 p-1 ml-2 drop-shadow-lg rounded-full bg-slate-500 text-white animate-spin">
            <Loader2Icon />
          </span>
        ),
      }}
      toastOptions={{
        classNames: {
          success: `${iranSans.className} bg-emerald-100 text-emerald-700 border border-emerald-600 shadow-xs dark:bg-emerald-900 dark:text-emerald-100 dark:border-emerald-700`,
          error: `${iranSans.className} bg-rose-100 text-rose-700 border border-rose-600 shadow-xs dark:bg-rose-900 dark:text-rose-100 dark:border-rose-700`,
          warning: `${iranSans.className} bg-amber-100 text-amber-700 border border-amber-600 shadow-xs dark:bg-amber-900 dark:text-amber-100 dark:border-amber-700`,
          info: `${iranSans.className} bg-blue-100 text-blue-700 border border-blue-600 shadow-xs dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700`,
          loading: `${iranSans.className} bg-slate-100 text-slate-700 border border-slate-600 shadow-xs dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700`,
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
