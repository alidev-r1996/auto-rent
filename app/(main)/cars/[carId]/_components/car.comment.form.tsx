"use client";

import { PersianDigits } from "@/lib/utils";
import { FC, useRef, useState } from "react";
import { CarCommentFormProps } from "./car.type";
import { toast } from "sonner";

const CarCommentForm: FC<CarCommentFormProps> = ({
  carId = null,
  userId,
  parentId = null,
  title,
  blogId = null,
}) => {
  const [loading, setLoading] = useState(false);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const commentHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const text = commentRef?.current?.value;
    if (text?.length === 0) {
      toast.error("لطفا دیدگاه خود را وارد کنید!");
      setLoading(false);
      return;
    }
    const comment = {
      text,
      user_id: userId,
      car_id: carId,
      parent_id: parentId,
      blog_id: blogId,
    };
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comment`, {
        method: "POST",
        body: JSON.stringify(comment),
      });
      const data = await res.json();
      if (data.status === 200) {
        toast.success(data.message);
      } else {
        toast.error(data.messsage);
      }
    } catch (error) {
      toast.error("خطایی رخ داده است، لطفا مجدداً تلاش کنید!");
    }
    if (commentRef?.current?.value) {
      commentRef.current.value = "";
    }
    setLoading(false);
  };

  return (
    <>
      <h3 className="text-xs pr-2 text-slate-600">{title}</h3>
      <form
        onSubmit={commentHandler}
        className="border border-slate-300 rounded-lg px-4 py-2 text-xs flex flex-col w-full"
      >
        <textarea
          name="comment"
          id="comment"
          maxLength={300}
          ref={commentRef}
          className="appearance-none resize-none w-full h-16 outline-none text-slate-700"
          placeholder={PersianDigits("دیدگاه خود را وارد کنید (حداکثر 300 کاراکتر)")}
        ></textarea>
        <p className="w-full border-b border-dotted border-slate-300 my-2"></p>
        <div className="flex items-center justify-between">
          <p className="text-slate-400 text-[10px] md:text-xs">
            دیدگاه شما پس از تأیید، منتشر خواهد شد!
          </p>
          <button
            disabled={loading}
            className="px-3 py-1.5 text-xs bg-blue-500 disabled:opacity-50 text-white rounded-sm  hover:scale-103 transition-all duration-200 active:scale-95 cursor-pointer hover:bg-blue-600"
          >
            {loading ? "در حال ارسال ..." : " ثبت نظر"}
          </button>
        </div>
      </form>
    </>
  );
};

export default CarCommentForm;
