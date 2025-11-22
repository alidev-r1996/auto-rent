import { Switch } from "@/components/ui/switch";
import { useCommentStatus } from "../_hooks/comment.hook";
import { FC } from "react";
import { CommentStatusProps } from "../_types/comment.type";
import { themeSwitch } from "../_constant/comment.constant";

const CommentStatus: FC<CommentStatusProps> = ({ verified, id, theme = "dark" }) => {
  const { isError, isPending, mutateAsync } = useCommentStatus(id);
  return (
    <p className="flex items-center gap-2 mx-auto">
      <Switch
        checked={verified}
        dir="ltr"
        onCheckedChange={() => mutateAsync()}
        className={`cursor-pointer ${themeSwitch[theme]}`}
      />
      {verified ? "تأیید شده" : "در انتظار تأیید "}
    </p>
  );
};

export default CommentStatus;
