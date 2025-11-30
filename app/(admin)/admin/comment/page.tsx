"use client";

import Loading from "@/components/ui/loading";
import { useGetComment } from "./_hooks/comment.hook";
import UserHeader from "../../_components/user-header";
import Paginate from "@/components/ui/paginate";
import { useSearchParams } from "next/navigation";
import CommentTable from "./_components/comment.table";

const Comment = () => {
  const page = useSearchParams().get("page") || "1";
  const { data, isLoading, isError } = useGetComment(page);

  if (isLoading) {
    return (
      <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4">
        <UserHeader title="نظرات کاربران" />
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4 h-full">
      <UserHeader title="نظرات کاربران" />
      {!data || (data.comments?.length == 0 && <div>هیچ داده ای وجود ندارد</div>)}
      {isError && <div>خطایی رخ داده است</div>}
      {data && data.comments?.length > 0 && (
        <CommentTable comments={data.comments} info={data.info} />
      )}
      {data?.info?.totalPage > 1 && (
        <div className="flex items-center justify-center my-8">
          <Paginate shape="square" theme="blue" totalPage={data.info.totalPage} />
        </div>
      )}
    </div>
  );
};

export default Comment;
