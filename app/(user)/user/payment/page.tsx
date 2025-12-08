"use client";

import UserHeader from "../../_components/user-header";
import PaymentCard from "../../_components/payment/payment-card";
import { useGetPayment } from "../../_hook/payment.hook";
import Loading from "@/components/ui/loading";

const Payment = () => {
  const { data, isLoading } = useGetPayment();

  if (isLoading) {
    return (
      <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4">
        <UserHeader title="رزروهای من" />
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4">
      <UserHeader title="پرداخت‌های من" />

      <div className="border border-slate-200 rounded-xl p-3 md:p-5">
        {data.map(i => (
          <PaymentCard {...i} key={i.id} />
        ))}
      </div>
    </div>
  );
};

export default Payment;
