import { Switch } from "@/components/ui/switch";
import { FC } from "react";
import { DiscountStatusProps } from "../_types/discount.types";
import { themeSwitch } from "../../comment/_constant/comment.constant";
import { useDiscountStatus } from "../_hooks/discount.hooks";

const DiscountStatus: FC<DiscountStatusProps> = ({ status, id, theme = "dark" }) => {
  const { isError, isPending, mutateAsync } = useDiscountStatus(id);
  return (
    <p className="flex items-center gap-2 mx-auto">
      <Switch
        checked={status}
        dir="ltr"
        onCheckedChange={() => mutateAsync()}
        className={`cursor-pointer ${themeSwitch[theme]}`}
      />
      {status ? " فعال" : "غیرفعال"}
    </p>
  );
};

export default DiscountStatus;
