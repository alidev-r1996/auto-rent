import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FC } from "react";

const themeRemove = {
  blue: "bg-sky-600 hover:bg-sky-700",
  rose: "bg-rose-500 hover:bg-rose-500",
  teal: "bg-teal-500 hover:bg-teal-600",
  orange: "bg-orange-500 hover:bg-orange-600",
  dark: "bg-slate-600 hover:bg-slate-700",
  emerald: "bg-emerald-500 hover:bg-emerald-600",
};

type CommentRemoveProps = {
  title: string;
  label: string;
  isPending: boolean;
  theme?: "blue" | "rose" | "teal" | "orange" | "dark" | "emerald";
  onRemove: () => void;
};

const RemoveModal: FC<CommentRemoveProps> = ({
  title,
  theme = "dark",
  isPending,
  onRemove,
  label,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          disabled={isPending}
          className={`${themeRemove[theme]} px-4 py-1 disabled:opacity-50 rounded transition-all duration-300 text-white cursor-pointer hover:scale-105 active:scale-95`}
        >
          {isPending ? "در حال حذف کردن..." : "حذف"}
        </button>
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-1 mb-4">
            حذف {label} {title}
          </DialogTitle>
          <DialogDescription dir="">
            این عمل غیرقابل بازگشت خواهد بود و دیگر به آن دسترسی نخواهید داشت!
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild className="flex items-center gap-1" dir="ltr">
          <div className="flex items-center gap mt-3">
            <Button onClick={onRemove} variant={"destructive"}>
              حذف
            </Button>
            <Button variant={"outline"}>منصرف شدم </Button>
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default RemoveModal;
