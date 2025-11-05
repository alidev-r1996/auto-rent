import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const iranSans = localFont({
  src: [
    {
      path: "../public/assets/font/IRANSansWeb_UltraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/assets/font/IRANSansWeb_Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/assets/font/IRANSansWeb.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/font/IRANSansWeb_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/font/IRANSansWeb_Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assets/font/IRANSansWeb_Black.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-iransans",
  display: "swap",
});

export function PersianDigits(number: number | string): string {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(number).replace(/\d/g, digit => farsiDigits[digit]);
}
