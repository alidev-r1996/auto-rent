import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PersianCurrency, PersianDigits } from "@/lib/utils";

const PaymentDetail = ({ details, title }) => {
  const {
    delivery,
    discount,
    driver,
    guarranty,
    insurance,
    rent,
    return: returnPrice,
    tax,
    total_price,
  } = details;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline_blue" className="w-full md:w-auto text-xs">
          مشاهده جزئیات
        </Button>
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-1 mb-4">
            ‌ جزئیات پرداخت {PersianDigits(title)}
          </DialogTitle>
          <table className="w-full table-fixed text-sm">
            <tbody>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <td className="text-right!">هزینه محل تحویل</td>
                <td className="text-left!">{PersianCurrency(delivery)}</td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <td className="text-right!">هزینه محل بازگشت</td>
                <td className="text-left!">{PersianCurrency(returnPrice)}</td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <td className="text-right!">ودیعه</td>
                <td className="text-left!">{PersianCurrency(guarranty)}</td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <td className="text-right!">بیمه </td>
                <td className="text-left!">{PersianCurrency(insurance)}</td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <td className="text-right!">هزینه راننده </td>
                <td className="text-left!">{PersianCurrency(driver)}</td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <td className="text-right!">مبلغ اجاره </td>
                <td className="text-left!">{PersianCurrency(rent)}</td>
              </tr>
              {!discount && (
                <tr className="border-b-2 border-dotted border-b-slate-400 last:border-none [&>th]:p-2 [&>th]:pb-4 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                  <td className="text-right!">تخفیف </td>
                  <td className="text-left!">{PersianCurrency("0")}</td>
                </tr>
              )}
              <tr className="border-b-2 border-dotted border-b-slate-400 last:border-none [&>th]:p-2 [&>th]:pb-4 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <td className="text-right!">مالیات </td>
                <td className="text-left!">{PersianCurrency(tax)}</td>
              </tr>
              <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                <th className="text-right! pt-4">قیمت کل </th>
                <td
                  className={`${discount && discount > 0 && "font-mono! line-through text-xs text-rose-500"} text-left! pt-4 font-semibold`}
                >
                  {PersianCurrency(total_price)} تومان
                </td>
              </tr>
              {discount && discount > 0 && (
                <tr className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600">
                  <th className="text-right! pt-4">قیمت با تخفیف </th>
                  <td className={`text-left! pt-4 font-semibold`}>
                    {PersianCurrency(discount)} تومان
                  </td>
                </tr>
              )}
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
