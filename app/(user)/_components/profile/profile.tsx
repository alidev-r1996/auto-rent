import { Button } from "@/components/ui/button";
import { profileItems } from "./profile.constant";
import UserHeader from "../user-header";
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
import { useState } from "react";
import Input from "@/components/ui/input";
import DatePickerCar from "@/app/(main)/(reserve)/reserve/[carId]/_components/date-picker";

const Profile = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [birth, setBirth] = useState(new Date());

  return (
    <div className="bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex flex-col">
      <UserHeader title="حساب کاربری" />
      <form className="grid md:grid-cols-2 gap-5 mt-8">
        <Input
          value={name}
          name="name"
          onChange={e => setName(e.target.value)}
          label="نام و نام خانوادگی"
        >
          <UserRound className="size-4" />
        </Input>
        <Input
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          label="تلفن همراه"
        >
          <Phone className="size-4" />
        </Input>
        <Input
          name="nationalId"
          value={nationalId}
          onChange={e => setNationalId(e.target.value)}
          label="کد ملی"
        >
          <IdCard className="size-4" />
        </Input>
        <Input
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          label="آدرس ایمیل"
        >
          <Mail className="size-4" />
        </Input>
        <Input
          name="cardNumber"
          value={cardNumber}
          onChange={e => setCardNumber(e.target.value)}
          label="شماره شبا جهت بازگشت وجه"
        >
          <CreditCard className="size-4" />
        </Input>
        <DatePickerCar label="تاریخ تولد" date={birth} setDate={setBirth} />
        <Button variant={"blue"} className="h-full! md:col-start-2">
          ویرایش حساب کاربری
        </Button>
      </form>
    </div>
  );
};

export default Profile;
