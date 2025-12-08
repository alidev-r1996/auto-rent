"use client";
import Link from "next/link";
import UserHeader from "../../_components/user-header";
import { useGetBlogs } from "../../_hooks/blog.hook";
import Loading from "@/components/ui/loading";
import { useSearchParams } from "next/navigation";
import BlogTable from "../../_components/blog/blog.table";
import Paginate from "@/components/ui/paginate";

const AdminBlog = () => {
  const page = useSearchParams().get("page") || "1";
  const { data, isLoading, isError } = useGetBlogs(page);

  if (isLoading) {
    return (
      <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4">
        <UserHeader title="نظرات کاربران" />
        <Loading />
      </div>
    );
  }
  return (
    <div className="bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex flex-col h-full">
      <UserHeader title="مدیریت وبلاگ‌ها " />
      <div className="flex items-center my-4 mt-6 mr-auto">
        <Link
          href={"/admin/blog/create"}
          className="bg-slate-800 text-white text-sm px-4 py-2 rounded hover:bg-slate-900 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
        >
          ایجاد بلاگ جدید
        </Link>
      </div>
      {!data || (data.blogs?.length == 0 && <div>هیچ داده ای وجود ندارد</div>)}
      {isError && <div>خطایی رخ داده است</div>}
      {data && data.blogs?.length > 0 && <BlogTable blogs={data.blogs} info={data.info} />}
      {data?.info?.totalPage > 1 && (
        <div className="flex items-center justify-center my-8">
          <Paginate shape="square" theme="blue" totalPage={data.info.totalPage} />
        </div>
      )}
    </div>
  );
};

export default AdminBlog;
