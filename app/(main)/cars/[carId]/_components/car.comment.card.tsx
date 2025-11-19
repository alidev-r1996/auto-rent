"use client";

import { PersianDate } from "@/lib/utils";
import Image from "next/image";
import CarCommentForm from "./car.comment.form";
import { FC, useState } from "react";
import { CommentCardProps } from "./car.type";
import ReplyComment from "./car.comment.replay";

const CarCommentCard: FC<CommentCardProps> = ({
  car_id,
  created_at,
  id,
  user,
  author,
  text,
  replies,
}) => {
  const [openReply, setOpenReply] = useState(false);
  const [showReply, setShowReply] = useState(false);
  return (
    <div className="w-full border-dashed  border-b border-b-slate-300 py-4  flex flex-col items-start gap-2">
      <div className="flex items-center gap-2 text-xs">
        <Image
          src={user.image || "/assets/images/avatar.png"}
          alt="user"
          width={50}
          height={50}
          className="rounded-full aspect-square border-2 border-slate-200"
        />
        <div className="flex flex-col gap-1">
          <p className="font-bold text-slate-500">
            {/\d/gi.test(user.name) ? "بدون نام" : user.name}
          </p>
          <p className="text-slate-500">{PersianDate(created_at)}</p>
        </div>
      </div>
      <p className="text-xs  leading-6 text-slate-400">{text}</p>
      <div className="flex items-center w-max mr-auto gap-1 text-xs cursor-pointer">
        {replies.length > 0 && (
          <p
            role="button"
            aria-label="show reply related to this comment"
            onClick={() => setShowReply(!showReply)}
            className="text-slate-700 border border-slate-200 px-3 py-1 rounded transition-all duration-200 hover:scale-103 active:scale-95 hover:bg-slate-100"
          >
            {showReply ? "مخفی‌کردن پاسخ‌ها" : "نمایش پاسخ‌ها"}
          </p>
        )}
        <p
          role="button"
          aria-label="reply to comment"
          onClick={() => setOpenReply(!openReply)}
          className="px-3 py-1  bg-emerald-500 text-white rounded ml-3 hover:scale-103 transition-all duration-200 active:scale-95  hover:bg-emerald-600"
        >
          {openReply ? "منصرف‌شدن" : "پاسخ‌دادن"}
        </p>
      </div>
      {openReply && (
        <CarCommentForm
          title={`در حال پاسخ به ${/\d/gi.test(user.name) ? "بدون نام" : user.name}`}
          carId={car_id}
          parentId={id}
          userId={author}
          key={id}
        />
      )}
      {showReply && replies.length > 0 && (
        <div className="flex flex-col gap-1 pr-5 w-full">
          {replies
            .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
            .map(cm => (
              <ReplyComment key={cm.id} {...cm} />
            ))}
        </div>
      )}
    </div>
  );
};

export default CarCommentCard;
