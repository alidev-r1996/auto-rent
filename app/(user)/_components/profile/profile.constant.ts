import {
  Calendar1,
  CreditCard,
  IdCard,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";

export const profileItems = [
  { label: "نام و نام خانوادگی", icon: UserRound, name: "name" },
  { label: "کدملی", icon: IdCard, name: "national_id" },
  { label: "شماره موبایل ", icon: Phone, name: "mobile" },
  { label: "ایمیل", icon: Mail, name: "email" },
  { label: "رمز عبور", icon: LockKeyhole, name: "password" },
  { label: "شماره شبا جهت بازگشت وجه", icon: CreditCard, name: "card_number" },
  { label: "تاریخ تولد", icon: Calendar1, name: "birth" },
  { label: "آدرس", icon: MapPin, name: "address" },
];