import { Switch } from "@/components/ui/switch";

import { FC } from "react";
import { themeSwitch } from "../../comment/_constant/comment.constant";
import { BlogStatusProps } from "../_types/blog.types";
import { useUpdateBlogStatus } from "../_hooks/blog.hook";

const BlogStatus: FC<BlogStatusProps> = ({ status, id, theme = "dark" }) => {
  const { isError, isPending, mutateAsync } = useUpdateBlogStatus(id);
  return (
    <p className="flex items-center gap-2 mx-auto">
      <Switch
        checked={status}
        dir="ltr"
        onCheckedChange={() => mutateAsync()}
        className={`cursor-pointer ${themeSwitch[theme]}`}
      />
      {status ? "منتشر شده" : "آرشیو شده"}
    </p>
  );
};

export default BlogStatus;
