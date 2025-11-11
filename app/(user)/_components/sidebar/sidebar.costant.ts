import { CreditCard, Headset, IdCard, LogOut, MessageSquareMore, ShoppingCart } from "lucide-react";

export const profileMenuItems = [
  { title: "پروفایل من", englishTitle: "profile", icon: IdCard },
  { title: "رزروهای من", englishTitle: "reserve", icon: ShoppingCart },
  { title: "پرداخت‌های من", englishTitle: "payment", icon: CreditCard },
  { title: "نظرات من", englishTitle: "comment", icon: MessageSquareMore },
  { title: " پشتیبانی", englishTitle: "support", icon: Headset },
  { title: " خروج از حساب کاربری", englishTitle: "logout", icon: LogOut },
];
