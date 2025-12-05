"use client";

import Loading from "@/components/ui/loading";
import UserHeader from "../../_components/user-header";
import Paginate from "@/components/ui/paginate";
import { useSearchParams } from "next/navigation";
import { useGetPayment } from "../../_hooks/payment.hook";
import PaymentTable from "../../_components/payment/payment.table";

const Payment = () => {
  const page = useSearchParams().get("page") || "1";
  const { data, isLoading, isError } = useGetPayment(page);

  if (isLoading) {
    return (
      <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4">
        <UserHeader title=" مدیریت پرداختی‌ها" />
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4 h-full">
      <UserHeader title="مدیریت پرداختی‌ها " />
      {!data || (data.payments?.length == 0 && <div>هیچ داده ای وجود ندارد</div>)}
      {isError && <div>خطایی رخ داده است</div>}
      {data && data.payments?.length > 0 && (
        <PaymentTable payments={data.payments} info={data.info} theme={"dark"} />
      )}
      {data?.info?.totalPage > 1 && (
        <div className="flex items-center justify-center my-8">
          <Paginate shape="square" theme="blue" totalPage={data.info.totalPage} />
        </div>
      )}
    </div>
  );
};

export default Payment;
