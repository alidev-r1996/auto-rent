import { IdCard, MapPin, Phone, User } from "lucide-react";

export const userInfo = [
  { id: 1, title: "نام و نام خانوادگی", icon: User, name: "name" },
  { id: 2, title: "شماره همراه", icon: Phone, name: "phone" },
  { id: 3, title: "کدملی", icon: IdCard, name: "IdCard" },
  { id: 4, title: "آدرس", icon: MapPin, name: "address" },
];
export const insuranceItems = [
  { id: 1, title: "قیمت", basic: "0", premium: "32,045,275" },
  { id: 2, title: "ودیعه", basic: "250,000,000", premium: "250,000,000" },
  { id: 3, title: "حداکثر تعهد خسارت جزیی", basic: "250,000,000", premium: "50,000,000" },
  { id: 4, title: "حداکثر تعهد خسارت کلی", basic: "1,500,000,000", premium: "500,000,000" },
  { id: 5, title: "اخذ افت خودرو در زمان تصادف", basic: "بطور کامل", premium: "اخذ نمی گردد" },
  {
    id: 6,
    title: "خواب خودرو",
    basic: "تمام روزهای خواب به قیمت اجاره",
    premium: "نصف قیمت اجاره حداکثر به مدت 30 روز",
  },
];
