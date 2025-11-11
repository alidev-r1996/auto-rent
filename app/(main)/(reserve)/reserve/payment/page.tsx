import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { orderFeatures, paymentItems } from "./payment.constant";
import { PersianCurrency, PersianDigits } from "@/lib/utils";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col h-max gap-3 p-4 w-full ">
        <h2 className="font-bold text-slate-500 md:text-lg "> اطلاعات رزرو </h2>
        <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0 mb-8"></p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 gap-y-4 text-slate-500 text-xs md:text-sm">
          {orderFeatures.map((i, index) => {
            const Icon = i.icon;
            return (
              <div key={index} className="flex items-center gap-2 text-xs md:text-sm">
                <p className="p-1 border border-slate-200 rounded">
                  <Icon className="size-6 text-slate-400 p-0.5" />
                </p>
                <div className="flex flex-col gap-0.5">
                  <p className="text-slate-600">{i.title}</p>
                  <p className="text-slate-400 text-[10px] md:text-xs">{PersianDigits(i.text)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col  gap-3 p-4 w-full ">
          <h2 className="font-bold text-slate-500 md:text-lg "> محاسبه قیمت </h2>
          <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0 mb-4"></p>
          <table className="w-full table-fixed text-sm">
            <thead>
              <tr className="border-b border-b-slate-200 [&>th]:p-4 text-xs md:text-sm">
                <th></th>
              </tr>
            </thead>
            <tbody>
              {paymentItems.map((i, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600"
                  >
                    <th className="text-right!">{i.title}</th>
                    <td>{PersianDigits(i.text)}</td>
                  </tr>
                );
              })}
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
              className="size-3.5 rounded-lg border border-slate-300 cursor-pointer"
            />
            <p>شروط و تعدات طرفین قرارداد را قبول دارم.</p>
          </label>
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 bg-slate-200 rounded-lg p-4 mt-4">
            <div className="flex items-center gap-2 text-sm">
              <h3>مبلغ قابل پرداخت :</h3>
              <p className="font-bold text-base text-slate-600">{PersianCurrency(`45800000`)}</p>
              <p>تومان</p>
            </div>
            <Link href="/reserve/receive/?status=success">
              <Button variant={"blue"} className="w-full md:w-1/7 mt-4 md:mt-0">
                پرداخت
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
