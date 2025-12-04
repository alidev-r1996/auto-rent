import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { insuranceTypeMaker, locationMaker, PersianCurrency, PersianDigits } from "@/lib/utils";
import { FC } from "react";

const PaymentDetail = ({ details, title, receiverInfo, insurance }) => {
  const { start_time, end_time, receive_location, return_location } = details;
  const { type, price } = insurance;
  const { name, phoneNumber, address, national_id } = receiverInfo;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-3 py-1  rounded bg-slate-100 border hover:bg-slate-200  border-slate-700 text-slate-700 cursor-pointer transition-all duration-300 active:scale-95 hover:scale-103">
          جزئیات
        </button>
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-1 mb-4">
            ‌ جزئیات سفارش {PersianDigits(title)}
          </DialogTitle>
          <table className="w-full table-fixed text-sm">
            <tbody>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <td className="text-right!"> نام تحویل‌گیرنده</td>
                <td className="text-left!">{name}</td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <td className="text-right!"> موبایل تحویل‌گیرنده </td>
                <td className="text-left!">{PersianDigits(phoneNumber)}</td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <td className="text-right!">کدملی تحویل‌گیرنده</td>
                <td className="text-left!">{PersianDigits(national_id)}</td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <td className="text-right!">آدرس تحویل‌گیرنده</td>
                <td className="text-left! text-[11px]!">{address}</td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <td className="text-right!">محل تحویل</td>
                <td className="text-left!">{locationMaker(receive_location)}</td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <td className="text-right!">ساعت تحویل</td>
                <td className="text-left!">{PersianDigits(start_time)}</td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <td className="text-right!">محل برگشت</td>
                <td className="text-left!">{locationMaker(return_location)}</td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <td className="text-right!">ساعت برگشت</td>
                <td className="text-left!">{PersianDigits(end_time)}</td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <td className="text-right!"> نوع بیمه</td>
                <td className="text-left!">{insuranceTypeMaker(type)}</td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <td className="text-right!"> مبلغ بیمه</td>
                <td className="text-left!">{PersianCurrency(price)} تومان </td>
              </tr>
            </tbody>
          </table>
        </DialogHeader>
        <DialogClose asChild className="flex items-center gap-1" dir="ltr">
          <Button>تأیید</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDetail;
