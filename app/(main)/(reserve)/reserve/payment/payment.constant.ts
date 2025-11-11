import {
  CalendarArrowDown,
  CalendarArrowUp,
  CarFront,
  Clock4,
  IdCard,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";

import { TbSteeringWheelFilled } from "react-icons/tb";

export const orderFeatures = [
  { id: 1, title: "نام خودرو ", text: "بنز s500", icon: CarFront },
  { id: 2, title: "نوع رزرو ", text: "بدون راننده", icon: TbSteeringWheelFilled },
  { id: 3, title: "نوع بیمه", text: "پایه", icon: Shield },
  { id: 4, title: "محل تحویل", text: "فرودگاه مهرآباد", icon: MapPin },
  { id: 5, title: "تاریخ تحویل", text: "2025/01/05", icon: CalendarArrowUp },
  { id: 6, title: "ساعت تحویل", text: "07:30", icon: Clock4 },
  { id: 7, title: "محل بازگشت", text: "فرودگاه مهرآباد", icon: MapPin },
  { id: 8, title: "تاریخ بازگشت", text: "2025/01/09", icon: CalendarArrowDown },
  { id: 9, title: "ساعت بازگشت", text: "12:00", icon: Clock4 },
  { id: 10, title: "نام و نام خانوادگی ", text: "علی رحیمی", icon: IdCard },
  { id: 11, title: "شماره موبایل ", text: "09358865344", icon: Phone },
  { id: 12, title: " ایمیل ", text: "alidev_r1996@gmail.com", icon: Mail },
  { id: 13, title: "آدرس ", text: "قزوین، بوئین‌زهرا، خیابان ولیعصر غربی، پلاک 11", icon: MapPin },
];

export const paymentItems = [
  { id: 1, title: "هزینه روزانه", text: "25,500,000" },
  { id: 2, title: "تحویل در محل مبدأ", text: "585,000" },
  { id: 3, title: "تحویل در محل بازگشت", text: "585,000" },
  { id: 4, title: "بیمه", text: "0" },
  { id: 5, title: "ودیعه راهنمایی رانندگی", text: "0" },
  { id: 6, title: "هزینه راننده ", text: "0" },
  { id: 7, title: "مالیات", text: "3,685,510" },
];
