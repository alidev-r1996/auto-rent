import Table from "@/components/ui/table";
import { PersianCurrency, PersianDate, PersianDigits } from "@/lib/utils";
import { FC } from "react";
import RemoveModal from "@/components/common/remove.modal";
import { Badge } from "@/components/ui/badge";
import { useRemoveDiscount } from "../_hooks/discount.hooks";
import { DiscountTableProps } from "../_types/discount.types";
import { discountTableHeader } from "../_constant/discount.constant";
import DiscountStatus from "./discount.status";

const DiscountTable: FC<DiscountTableProps> = ({ discounts, info, theme = "dark" }) => {
  const { isPending, mutateAsync } = useRemoveDiscount();
  return (
    <Table theme={theme} className="mt-4">
      <Table.Header>
        <Table.Row>
          {discountTableHeader.map((i, index) => {
            return <Table.Title key={index}>{i}</Table.Title>;
          })}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {discounts?.map((i, index) => {
          return (
            <Table.Row key={index}>
              <Table.Col className="max-w-max">
                {PersianDigits((info.currentPage - 1) * info.limit + (index + 1))}
              </Table.Col>
              <Table.Col>{i.title}</Table.Col>
              <Table.Col> %{PersianDigits(i.percentage)} </Table.Col>
              <Table.Col>{PersianDate(i.startDate)}</Table.Col>
              <Table.Col>{PersianDate(i.endDate)}</Table.Col>
              <Table.Col className="flex items-center justify-center">
                <DiscountStatus status={i.active} id={i.id} theme={"emerald"} />
              </Table.Col>
              <Table.Col>{PersianDate(i.created_at)}</Table.Col>
              <Table.Col>
                <RemoveModal
                  title={i.title}
                  label="تخفیف"
                  theme={theme}
                  onRemove={() => mutateAsync(i.id)}
                  isPending={isPending}
                />
              </Table.Col>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default DiscountTable;
