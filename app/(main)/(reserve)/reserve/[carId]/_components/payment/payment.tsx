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
import {
  insuranceTypeMaker,
  locationMaker,
  PersianCurrency,
  PersianDate,
  PersianDigits,
  rentTypeMaker,
} from "@/lib/utils";
import { useState } from "react";
import { useReservationStore } from "@/provider/zustand-store";
import PaymentInfoCard from "./payment.info.card";
import { TbSteeringWheelFilled } from "react-icons/tb";

const Payment = ({ price_day, price_month, carName, guarranty, carId, userId }) => {
  const { rentInfo, personalInfo, reset } = useReservationStore();
  const {
    receive_date,
    receive_location,
    receive_time,
    rent_type,
    return_date,
    return_location,
    return_time,
  } = rentInfo;
  const { address, insurance, name, nationalId, phone } = personalInfo;

  const [privacy, setPrivacy] = useState("rejected");
  const insurancePrice = insurance == "Basic" ? "0" : "32000000";
  const driverPrice = rent_type == "driver" ? "5000000" : "0";
  const rentDay = Math.ceil(
    (return_date.getTime() - receive_date.getTime()) / (1000 * 60 * 60 * 24)
  );
  const carPrice = rentDay <= 30 ? price_day : price_month;
  const deliveryPrice = 598000;
  const price =
    Number(carPrice) +
    Number(guarranty) +
    deliveryPrice +
    deliveryPrice +
    Number(insurancePrice) +
    Number(driverPrice);
  const tax = price * 0.09;
  const total_price = price + tax;

  const paymentHandler = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/payment`, {
      method: "POST",
      body: JSON.stringify({
        start_date: receive_date,
        start_time: receive_time,
        end_date: return_date,
        end_time: return_time,
        receive_location,
        return_location,
        insurance,
        total_price,
        user_id: userId,
        car_id: carId,
        detail: {
          rent: carPrice,
          delivery_price: deliveryPrice,
          return_price: deliveryPrice,
          insurance_price: insurancePrice,
          guarranty,
          driver: driverPrice,
          tax,
        },
      }),
    });
    const data = await res.json();
    if (data.status == 201) {
      reset();
      window.location.href = data.url;
    }
  };

  return (
    <>
      <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col h-max gap-3 p-4 w-full ">
        <h2 className="font-bold text-slate-500 md:text-lg "> اطلاعات رزرو </h2>
        <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0 mb-8"></p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 gap-y-4 text-slate-500 text-xs md:text-sm">
          <PaymentInfoCard label="نام خودرو" value={carName}>
            <CarFront className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="نوع رزرو " value={rentTypeMaker(rent_type)}>
            <TbSteeringWheelFilled className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="نوع بیمه" value={insuranceTypeMaker(insurance)}>
            <Shield className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="محل تحویل" value={locationMaker(receive_location)}>
            <MapPin className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="تاریخ تحویل" value={PersianDate(receive_date)}>
            <CalendarArrowUp className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="ساعت تحویل" value={PersianDigits(receive_time)}>
            <Clock4 className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="محل بازگشت" value={locationMaker(return_location)}>
            <MapPin className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="تاریخ بازگشت" value={PersianDate(return_date)}>
            <CalendarArrowDown className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="ساعت بازگشت" value={PersianDigits(return_time)}>
            <Clock4 className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="نام و نام خانوادگی " value={name}>
            <User className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="شماره موبایل " value={PersianDigits(phone)}>
            <Phone className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label=" کدملی " value={PersianDigits(nationalId)}>
            <IdCard className="size-7 text-slate-400 p-0.5" />
          </PaymentInfoCard>
          <PaymentInfoCard label="آدرس " value={PersianDigits(address)}>
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
                <th className="text-right!">هزینه {rentDay >= 30 ? "ماهانه" : "روزانه"}</th>
                <td>{PersianCurrency(carPrice)} </td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <th className="text-right!">تحویل در محل مبدأ</th>
                <td>{PersianCurrency(`${deliveryPrice}`)} </td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <th className="text-right!">تحویل در محل بازگشت</th>
                <td>{PersianCurrency(`${deliveryPrice}`)} </td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <th className="text-right!">بیمه</th>
                <td>{PersianCurrency(insurancePrice)}</td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <th className="text-right!">ودیعه</th>
                <td>{PersianCurrency(guarranty)} </td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <th className="text-right!">
                  هزینه راننده{" "}
                  <span className="text-[9px] md:text-[11px] font-medium">(روزانه)</span>
                </th>
                <td>{PersianCurrency(driverPrice)}</td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <th className="text-right!">مالیات</th>
                <td>{PersianCurrency(`${tax}`)} </td>
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
              <p className="font-bold text-base text-slate-600">
                {PersianCurrency(`${total_price}`)}
              </p>
              <p>تومان</p>
            </div>

            <Button
              onClick={paymentHandler}
              type="button"
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
