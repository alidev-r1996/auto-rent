import RemoveModal from "@/components/common/remove.modal";
import { Button } from "@/components/ui/button";
import { PersianDate, TruncateText } from "@/lib/utils";
import { ClipboardCheck, Timer, Trash2 } from "lucide-react";
import { useRemoveComment } from "../../_hook/comment.hook";

const CommentCard = comment => {
  const { mutateAsync, isPending } = useRemoveComment();

  return (
    <div className="flex flex-col items-start gap-4 hover:bg-slate-50 p-4 border-b border-dashed border-b-slate-300 last:border-none">
      <div className="flex flex-col items-start gap-4">
        <p className="text-xs md:text-sm font-bold text-slate-700">
          {TruncateText(comment.text, 100)}
        </p>

        {!comment.verified && (
          <div className="flex h-max gap-1 text-xs px-4 py-1.5 md:py-2 w-max rounded-full shadow-xs border border-slate-200 bg-slate-100 items-center text-slate-700">
            <Timer className="size-4" />
            <p>در حال بررسی...</p>
          </div>
        )}

        {comment.verified && (
          <div className="flex h-max gap-1 text-xs px-4 py-1.5 md:py-2 w-max rounded-full shadow-xs border border-emerald-300 bg-emerald-50 items-center text-emerald-600">
            <ClipboardCheck className="size-4" />
            <p>تأیید شده</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between w-full">
        <p className="text-xs">
          <strong className="text-xs">تاریخ ثبت نظر: </strong>
          {PersianDate(comment.created_at)}
        </p>
        <RemoveModal
          title={comment?.car?.name || comment?.blog?.title}
          label="دیدگاه در مورد "
          isPending={isPending}
          onRemove={() => mutateAsync(comment.id)}
        >
          <Button className="bg-white border border-rose-300 text-xs! h-8 hover:border-none text-rose-500 hover:text-white px-5 rounded hover:bg-rose-600">
            <span className="md:block hidden">حذف دیدگاه</span>
            <Trash2 className="block md:hidden"/>
          </Button>
        </RemoveModal>
      </div>
    </div>
  );
};

export default CommentCard;
