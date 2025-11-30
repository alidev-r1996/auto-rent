import { Button } from "@/components/ui/button";
import {
  CalendarArrowDown,
  CalendarArrowUp,
  CarFront,
  Clock4,
  FileText,
  IdCard,
  MapPin,
  Phone,
  Shield,
  User,
} from "lucide-react";
import { PersianCurrency, PersianDate, PersianDigits } from "@/lib/utils";
import { useState } from "react";
import { useReservationStore } from "@/provider/zustand-store";
import PaymentInfoCard from "./payment.info.card";
import { TbSteeringWheelFilled } from "react-icons/tb";

const rentTypeMaker = rentType => {
  // "none" | "driver" | "funeral"
  if (rentType == "none") return "بدون راننده";
  if (rentType == "driver") return "با راننده";
  return "ماشین عروس";
};

const insuranceTypeMaker = insuranceType => {
  if (insuranceType == "basic") return "پایه";
  return "کامل";
};

const locationMaker = location => {
  if (location == "airport") return "فروگاه امام خمینی";
  if (location == "east-port") return "ترمینال شرق";
  return "ترمینال جنوب";
};

const Payment = ({ price_day, carName }) => {
  const { rentInfo, personalInfo } = useReservationStore();
  const [privacy, setPrivacy] = useState("rejected");
  return (
    <>
      <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col h-max gap-3 p-4 w-full ">
        <h2 className="font-bold text-slate-500 md:text-lg "> اطلاعات رزرو </h2>
        <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0 mb-8"></p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 gap-y-4 text-slate-500 text-xs md:text-sm">
          <PaymentInfoCard label="نام خودرو" value={carName}>
            <CarFront className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="نوع رزرو " value={rentTypeMaker(rentInfo.rent_type)}>
            <TbSteeringWheelFilled className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="نوع بیمه" value={insuranceTypeMaker(personalInfo.insurance)}>
            <Shield className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="محل تحویل" value={locationMaker(rentInfo.receive_location)}>
            <MapPin className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="تاریخ تحویل" value={PersianDate(rentInfo.receive_date)}>
            <CalendarArrowUp className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="ساعت تحویل" value={PersianDigits(rentInfo.receive_time)}>
            <Clock4 className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="محل بازگشت" value={locationMaker(rentInfo.return_location)}>
            <MapPin className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="تاریخ بازگشت" value={PersianDate(rentInfo.return_date)}>
            <CalendarArrowDown className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="ساعت بازگشت" value={PersianDigits(rentInfo.return_time)}>
            <Clock4 className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="نام و نام خانوادگی " value={personalInfo.name}>
            <User className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="شماره موبایل " value={PersianDigits(personalInfo.phone)}>
            <Phone className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label=" کدملی " value={PersianDigits(personalInfo.nationalId)}>
            <IdCard className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="آدرس " value={PersianDigits(personalInfo.address)}>
            <MapPin className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col  gap-3 p-4 w-full ">
          <h2 className="font-bold text-slate-500 md:text-lg "> محاسبه قیمت </h2>
          <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0 mb-4"></p>
          <table className="w-full table-fixed text-sm">
            <thead>
              <tr className="border-b border-b-slate-200  [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <th className="text-right!">هزینه روزانه</th>
                <td>{PersianCurrency(price_day)} تومان </td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <th className="text-right!">تحویل در محل مبدأ</th>
                <td>{PersianCurrency("598000")} تومان </td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <th className="text-right!">تحویل در محل بازگشت</th>
                <td>{PersianCurrency("598000")} تومان </td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <th className="text-right!">بیمه</th>
                <td>{PersianCurrency(price_day)} تومان </td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <th className="text-right!">ودیعه راهنمایی رانندگی</th>
                <td>{PersianCurrency("0")} تومان </td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <th className="text-right!">هزینه راننده</th>
                <td>{PersianCurrency(price_day)} تومان </td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <th className="text-right!">مالیات</th>
                <td>{PersianCurrency("3685510")} تومان </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col h-max gap-3 p-4 w-full ">
          <h2 className="font-bold text-slate-500 md:text-lg "> شروط و تعهدات طرفین </h2>
          <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0 mb-4"></p>
          <a
            href=""
            className="text-blue-400 font-bold flex items-center gap-1 text-xs hover:underline hover:text-blue-500 cursor-pointer"
            download
          >
            <FileText className="size-5" /> متن شروط و تعهدات طرفین
          </a>
          <label
            htmlFor="rule-accept"
            className="flex items-center cursor-pointer gap-2 pr-1 text-slate-500 text-xs md:text-sm"
          >
            <input
              type="checkbox"
              name="rule"
              id="rule-accept"
              value="accept"
              onChange={e => setPrivacy(e.target.checked ? "accept" : "rejected")}
              checked={privacy == "accept"}
              className="size-3.5 rounded-lg border border-slate-300 cursor-pointer"
            />
            <p>شروط و تعهدات طرفین قرارداد را قبول دارم.</p>
          </label>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 bg-slate-200 rounded-lg p-4 mt-4">
            <div className="flex items-center gap-2 text-sm">
              <h3>مبلغ قابل پرداخت :</h3>
              <p className="font-bold text-base text-slate-600">{PersianCurrency(`45800000`)}</p>
              <p>تومان</p>
            </div>

            <Button
              disabled={privacy == "rejected"}
              variant={"blue"}
              className="w-full md:w-1/7 mt-4 md:mt-0"
            >
              پرداخت
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
