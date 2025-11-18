import { PersianDigits } from "@/lib/utils";
import { insuranceItems } from "./car.constant";

const CarInsurance = () => {
  return (
    <div className="rounded-lg shadow-xs border border-slate-100 flex flex-col gap-4 p-4 bg-white">
      <h2 className="font-bold text-slate-500 text-lg ">پوشش بیمه</h2>
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
                <p>بیمه پایه</p>
              </label>
            </th>
            <th>
              <label
                htmlFor="premium"
                className="flex items-center cursor-pointer  gap-2 justify-center"
              >
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
  );
};

export default CarInsurance;
