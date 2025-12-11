import { PersianCurrency, PersianDigits } from "@/lib/utils";
import {
  BellRing,
  ClipboardList,
  CircleDollarSign,
  NotebookPen,
  ShoppingCart,
  Receipt,
} from "lucide-react";
import Link from "next/link";
import { FC } from "react";

type StatProps = {
  title: string;
  value: string | number;
  desc: string;
  className?: string;
  icon: string;
  href: string;
  alarm?: boolean;
  theme?: "blue" | "emerald" | "rose" | "orange";
};

const shadow = {
  blue: "shadow-[2px_2px_6px_rgba(37,99,235,0.3)] absolute left-4 -top-3 bg-gradient-to-r from-blue-600 to-blue-400",
  emerald:
    "shadow-[2px_2px_6px_rgba(5,150,105,0.3)] absolute left-4 -top-3 bg-gradient-to-r from-emerald-600 to-emerald-400",
  rose: "shadow-[2px_2px_6px_rgba(244,63,94,0.3)] absolute left-4 -top-3 bg-gradient-to-r from-rose-600 to-rose-400",
  orange:
    "shadow-[2px_2px_6px_rgba(249,115,22,0.3)] absolute left-4 -top-3 bg-gradient-to-r from-orange-600 to-orange-400",
};

const descBg = {
  blue: "bg-gradient-to-l from-blue-50 rounded-b-lg text-blue-500 to-white",
  emerald: "bg-gradient-to-l from-emerald-50 rounded-b-lg text-emerald-500 to-white",
  rose: "bg-gradient-to-l from-rose-50 rounded-b-lg text-rose-500 to-white",
  orange: "bg-gradient-to-l from-orange-50 rounded-b-lg text-orange-500 to-white",
};

const icons = {
  money: <CircleDollarSign />,
  bell: <BellRing />,
  order: <ShoppingCart />,
  note: <NotebookPen />,
  product: <ClipboardList />,
  cheque: <Receipt />,
};

const Stat: FC<StatProps> = props => {
  const { title, value, desc, className, icon, href } = props;

  return (
    <Link
      href={href}
      className={`${className}  col-span-4  md:col-span-1 cursor-pointer transition-all duration-300 hover:scale-[102%] grid rounded-lg text-sm shadow-xs border border-slate-200 bg-white relative`}
    >
      <div className="flex flex-col gap-2 p-4">
        <p>{title}</p>
        <p className="font-bold" id="state_users">
          {icon == "money" ? PersianCurrency(String(value)) : PersianDigits(Number(value))}{" "}
          {icon == "money" ? "تومان" : "عدد"}
        </p>
      </div>
      <p
        className={`border-t border-t-slate-100 whitespace-nowrap p-3 flex flex-1 gap-2 text-[10px] ${descBg[props.theme || "blue"]}`}
      >
        {desc}
      </p>
      <p className={`p-2 rounded-lg text-white ${shadow[props.theme || "blue"]} [&>svg]:size-8`}>
        {icons[icon]}
      </p>
    </Link>
  );
};

export default Stat;
