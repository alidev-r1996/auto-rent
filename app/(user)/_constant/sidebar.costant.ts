import { CreditCard, IdCard, LogOut, MessageSquareMore, ShoppingCart } from "lucide-react";

export const profileMenuItems = [
  { title: "پروفایل من", englishTitle: "user", icon: IdCard, href: "" },
  { title: "رزروهای من", englishTitle: "reserve", icon: ShoppingCart, href: "reserve" },
  { title: "پرداخت‌های من", englishTitle: "payment", icon: CreditCard, href: "payment" },
  { title: "نظرات من", englishTitle: "comment", icon: MessageSquareMore, href: "comment" },
  // { title: " پشتیبانی", englishTitle: "support", icon: Headset, href: "support" },
  { title: " خروج از حساب کاربری", englishTitle: "logout", icon: LogOut, href: "logout" },
];
