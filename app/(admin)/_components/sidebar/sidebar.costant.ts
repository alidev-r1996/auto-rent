import {
  CreditCard,
  Headset,
  IdCard,
  LogOut,
  MessageSquareMore,
  ShoppingCart,
  Rss,
} from "lucide-react";

export const profileMenuItems = [
  { title: "پروفایل من", englishTitle: "profile", icon: IdCard },
  { title: "رزروها ", englishTitle: "reserve", icon: ShoppingCart },
  { title: "پرداخت‌ها ", englishTitle: "payment", icon: CreditCard },
  { title: "نظرات ", englishTitle: "comment", icon: MessageSquareMore },
  { title: " بلاگ", englishTitle: "blog", icon: Rss },
  { title: " پشتیبانی", englishTitle: "support", icon: Headset },
  { title: " خروج از حساب کاربری", englishTitle: "logout", icon: LogOut },
];
