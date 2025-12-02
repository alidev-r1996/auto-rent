"use client";
import Link from "next/link";
import UserHeader from "../../_components/user-header";
import Loading from "@/components/ui/loading";
import { useSearchParams } from "next/navigation";
import Paginate from "@/components/ui/paginate";
import CarTable from "./_components/discount.table";
import { useGetDiscount } from "./_hooks/discount.hooks";

const AdminDiscount = () => {
  const page = useSearchParams().get("page") || "1";
  const { data, isLoading, isError } = useGetDiscount(page);

  if (isLoading) {
    return (
      <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4">
        <UserHeader title=" لیست خودروهای مجموعه" />
        <Loading />
      </div>
    );
  }
  console.log(data);
  return (
    <div className="bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex flex-col h-full">
      <UserHeader title="لیست خودروهای مجموعه " />
      <div className="flex items-center my-4 mt-6 mr-auto">
        <Link
          href={"/admin/discount/create"}
          className="bg-slate-800 text-white text-sm px-4 py-2 rounded hover:bg-slate-900 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
        >
          افزودن تخفیف جدید
        </Link>
      </div>
      {!data || (data.discounts?.length == 0 && <div>هیچ داده ای وجود ندارد</div>)}
      {isError && <div>خطایی رخ داده است</div>}
      {data && data.discounts?.length > 0 && (
        <CarTable discounts={data.discounts} info={data.info} />
      )}
      {data?.info?.totalPage > 1 && (
        <div className="flex items-center justify-center my-8">
          <Paginate shape="square" theme="blue" totalPage={data.info.totalPage} />
        </div>
      )}
    </div>
  );
};

export default AdminDiscount;
