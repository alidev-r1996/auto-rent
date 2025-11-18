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

export const EnglishDigits = (str: string): string => {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return str.replace(/[۰-۹]/g, d => String(persianNumbers.indexOf(d)));
};

export function PersianDate(date) {
  return new Date(date).toLocaleDateString("fa-IR");
}

export function PersianTime(date) {
  return new Date(date).toLocaleTimeString("fa-IR", { hour: "2-digit", minute: "2-digit" });
}

export function PersianCurrency(currency: string) {
  return parseInt(currency).toLocaleString("fa-IR");
}

export function TruncateText(text, length = 25) {
  return text.length > length ? text.slice(0, length) + "..." : text;
}

export function PaginateMaker(total_Page: number, current_page: number) {
  if (total_Page <= 5) return Array.from({ length: total_Page }, (_, i) => i + 1);

  if (total_Page > 3 && current_page > 3) {
    if (current_page == total_Page - 2)
      return [1, "...", total_Page - 3, total_Page - 2, total_Page - 1, total_Page];
    if (current_page < total_Page - 1) {
      if (current_page + 1 == total_Page - 1) {
        return [1, "...", current_page - 1, current_page, current_page + 1, total_Page];
      } else {
        return [1, "...", current_page - 1, current_page, current_page + 1, "...", total_Page];
      }
    } else {
      return [1, "...", total_Page - 3, total_Page - 2, total_Page - 1, total_Page];
    }
  }
  return [1, 2, 3, 4, "...", total_Page];
}

export function carGearConveter(gear: string) {
  if (gear == "Automatic") {
    return "اتوماتیک";
  }
  if (gear == "Manual") {
    return "دنده‌ای";
  }
  return gear;
}

export function carSteeringConveter(steering: string) {
  if (steering == "Electric") {
    return "برقی";
  }
  if (steering == "Hydraulic") {
    return "هیدرولیک";
  }
  return steering;
}

export function carFuelConveter(fuel: string) {
  if (fuel == "Gasoline") {
    return "بنزین";
  }
  if (fuel == "Electric") {
    return "برقی";
  }
  return fuel;
}
