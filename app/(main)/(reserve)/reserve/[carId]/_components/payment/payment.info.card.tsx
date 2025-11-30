import { PersianDigits } from "@/lib/utils";

const PaymentInfoCard = ({ label, value, children }) => {
  return (
    <div className="flex items-center gap-2 ">
      <p className="p-1 border border-slate-200 rounded">{children}</p>
      <div className="flex flex-col gap-0.5">
        <p className="text-slate-600 text-xs md:text-sm">{label}</p>
        <p className="text-slate-400 text-[10px] md:text-xs">{PersianDigits(value)}</p>
      </div>
    </div>
  );
};

export default PaymentInfoCard;
