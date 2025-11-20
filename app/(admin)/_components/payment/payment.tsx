import UserHeader from "../user-header";
import PaymentCard from "./payment-card";

const Payment = () => {
  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4">
      <UserHeader title="پرداخت‌های من" />

      <div className="border border-slate-200 rounded-xl p-3 md:p-5">
        <PaymentCard status="failed" />
        <PaymentCard status="success" />
        <PaymentCard status="failed" />
      </div>
    </div>
  );
};

export default Payment;
