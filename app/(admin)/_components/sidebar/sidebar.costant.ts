import {
  CreditCard,
  Headset,
  IdCard,
  LogOut,
  MessageSquareMore,
  ShoppingCart,
  Rss,
  CarFront,
  CalendarCog,
} from "lucide-react";

export const profileMenuItems = [
  { title: "پروفایل من", englishTitle: "admin", icon: IdCard, href: "" },
  { title: "رزروها ", englishTitle: "reserve", icon: ShoppingCart, href: "reserve" },
  { title: "پرداخت‌ها ", englishTitle: "payment", icon: CreditCard, href: "payment" },
  { title: "لیست خودروها ", englishTitle: "car", icon: CarFront, href: "car" },
  {
    title: "مدیریت خودروها ",
    englishTitle: "availaibility",
    icon: CalendarCog,
    href: "availaibility",
  },
  { title: "تخفیف‌ها ", englishTitle: "discount", icon: MessageSquareMore, href: "discount" },
  { title: "نظرات ", englishTitle: "comment", icon: MessageSquareMore, href: "comment" },
  { title: " بلاگ", englishTitle: "blog", icon: Rss, href: "blog" },
  { title: " پشتیبانی", englishTitle: "support", icon: Headset, href: "support" },
  { title: " خروج از حساب کاربری", englishTitle: "logout", icon: LogOut, href: "logout" },
];
