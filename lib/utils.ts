import axios from "axios";
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

export function PersianCurrencyToDigit(currency: string) {
  return currency.replace("", "");
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

export function MarkdownToText(md: string): string {
  if (!md) return "";

  return (
    md
      // Convert escaped newlines \\n into space
      .replace(/\\n/g, " ")
      .replace(/\\r/g, " ")
      // Convert actual newlines to space
      .replace(/\n+/g, " ")
      .replace(/\r+/g, " ")
      // Remove quotes
      .replace(/"/g, "")
      // Remove image markdown ![]( )
      .replace(/!\[.*?\]\(.*?\)/g, "")
      // Remove links [text](url) -> text
      .replace(/\[([^\]]+)\]\((.*?)\)/g, "$1")
      // Remove headings ### ##
      .replace(/^#+\s+/gm, "")
      // Remove bold/italic markdown
      .replace(/(\*\*|__)(.*?)\1/g, "$2")
      .replace(/(\*|_)(.*?)\1/g, "$2")
      // Remove inline code ``
      .replace(/`([^`]+)`/g, "$1")
      // Remove blockquotes >
      .replace(/^\s*>+\s?/gm, "")
      // Remove HR ---
      .replace(/^(-\s?){3,}$/gm, "")
      // Remove list bullets
      .replace(/^\s*([-*+]|\d+\.)\s+/gm, "")
      // Remove overload symbols
      .replace(/[\\#>*_`~\-]/g, "")
      // Collapse multiple spaces
      .replace(/\s\s+/g, " ")
      .trim()
  );
}

export const uploadToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME as string);
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string;

  const res = await axios.post(
    `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: false,
    }
  );
  return res.data.secure_url as string;
};
