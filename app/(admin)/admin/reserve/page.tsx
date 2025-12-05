"use client";

import Loading from "@/components/ui/loading";
import UserHeader from "../../_components/user-header";
import Paginate from "@/components/ui/paginate";
import ReserveTable from "../../_components/reserve/reserve.table";

import { useSearchParams } from "next/navigation";
import { useGetReserve } from "../../_hooks/reserve.hook";

const Reserve = () => {
  const page = useSearchParams().get("page") || "1";
  const { data, isLoading, isError } = useGetReserve(page);

  if (isLoading) {
    return (
      <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4">
        <UserHeader title=" مدیریت رزروها" />
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4 h-full">
      <UserHeader title="مدیریت رزروها " />
      {!data || (data.reserves?.length == 0 && <div>هیچ داده ای وجود ندارد</div>)}
      {isError && <div>خطایی رخ داده است</div>}
      {data && data.reserves?.length > 0 && (
        <ReserveTable reserves={data.reserves} info={data.info} theme={"dark"} />
      )}
      {data?.info?.totalPage > 1 && (
        <div className="flex items-center justify-center my-8">
          <Paginate shape="square" theme="blue" totalPage={data.info.totalPage} />
        </div>
      )}
    </div>
  );
};

export default Reserve;
