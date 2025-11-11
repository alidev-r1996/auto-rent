import { Button } from "@/components/ui/button";
import { PersianDigits } from "@/lib/utils";
import { insuranceItems, userInfo } from "./info.constant";
import Link from "next/link";

const Info = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col h-max gap-3 p-4 w-full ">
        <h2 className="font-bold text-slate-500 md:text-lg "> انتخاب بیمه </h2>
        <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
        <table className="w-full table-fixed text-sm">
          <thead>
            <tr className="border-b border-b-slate-200 [&>th]:p-4 text-xs md:text-sm">
              <th></th>
              <th>
                <label
                  htmlFor="basic"
                  className="flex items-center  cursor-pointer gap-2 justify-center"
                >
                  <input type="radio" name="insurance" id="basic" value={"basic"} />
                  <p>بیمه پایه</p>
                </label>
              </th>
              <th>
                <label
                  htmlFor="premium"
                  className="flex items-center cursor-pointer  gap-2 justify-center"
                >
                  <input type="radio" name="insurance" id="premium" value={"premium"} />
                  <p>بیمه کامل</p>
                </label>
              </th>
            </tr>
          </thead>
          <tbody>
            {insuranceItems.map((i, index) => {
              return (
                <tr
                  key={index}
                  className="border-b border-b-slate-200 last:border-none [&>th]:p-2 [&>td]:p-2 [&>td]:text-center text-[11px] md:text-sm text-slate-600"
                >
                  <th className="text-right!">{i.title}</th>
                  <td>{PersianDigits(i.basic)}</td>
                  <td>{PersianDigits(i.premium)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="rounded-lg shadow-xs border bg-white border-slate-100 flex flex-col gap-3 p-4 w-full h-full">
        <h2 className="font-bold text-slate-500 md:text-lg "> مشخصات کاربر </h2>
        <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0 mb-8"></p>
        <form className="grid md:grid-cols-2 gap-4 mb-2 w-full ">
          {userInfo.map((i, index) => {
            const Icon = i.icon;
            return (
              <label
                key={index}
                htmlFor={i.name}
                className="flex items-center gap-2 rounded-lg border border-slate-200 relative p-3 text-slate-400 text-xs md:text-sm flex-1"
              >
                <Icon className="size-5" />
                <p className="border-r border-r-slate-300">&nbsp;</p>
                <input
                  type="text"
                  name={i.name}
                  className="appearance-none outline-none flex-1 peer text-slate-500"
                  placeholder={i.title}
                />
                <p className="absolute hidden md:block peer-placeholder-shown:hidden text-[10px] bg-white px-1 py-1 -top-3 right-6">
                  {i.title}
                </p>
              </label>
            );
          })}
          <Link href='/reserve/payment'>
            <Button variant={"blue"} className="w-full md:w-1/2 md:mr-auto mt-3 md:col-start-2 py-5!">
            ادامه رزرو
          </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Info;
