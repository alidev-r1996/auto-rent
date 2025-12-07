import Table from "@/components/ui/table";
import { PersianCurrency, PersianDate, PersianDigits, TruncateText } from "@/lib/utils";
import { FC } from "react";
import RemoveModal from "@/components/common/remove.modal";
import { Badge } from "@/components/ui/badge";
import { useRemoveChat } from "../../_hooks/support.hook";
import { SupportTableProps } from "../../_types/support.type";
import { supportTablHeader } from "../../_constant/support.constant";

const SupportTable: FC<SupportTableProps> = ({ chats, info, theme }) => {
  const { isPending, mutateAsync } = useRemoveChat();
  return (
    <Table theme={theme || "dark"} className="mt-4">
      <Table.Header>
        <Table.Row>
          {supportTablHeader.map((i, index) => {
            return <Table.Title key={index}>{i}</Table.Title>;
          })}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {chats.map((i, index) => {
          return (
            <Table.Row key={index}>
              <Table.Col className="max-w-max">
                {PersianDigits((info.currentPage - 1) * info.limit + (index + 1))}
              </Table.Col>
              <Table.Col>{PersianDigits(i.user.phoneNumber)}</Table.Col>
              <Table.Col>{PersianCurrency(i.total_price)}</Table.Col>
              <Table.Col>
                <p
                  onClick={() => window.navigator.clipboard.writeText(i.order_number)}
                  className="cursor-pointer"
                  title={i.order_number}
                >
                  {TruncateText(i.order_number, 10)}
                </p>
              </Table.Col>
              <Table.Col className="flex items-center gap-1">
                <span>{i.car.name}</span>
                <span>-</span>
                <span>{i.car.model}</span>
              </Table.Col>
              <Table.Col>
                <span>{PersianDate(i.start_date)}</span>
                <span className="px-2">تا</span>
                <span>{PersianDate(i.end_date)}</span>
              </Table.Col>
              <Table.Col>
                <Badge
                  variant={
                    i.status == "Failed" || i.status == "Cancelled"
                      ? "rose"
                      : i.status == "Pending"
                        ? "slate"
                        : "emerald"
                  }
                >
                  {i.status == "Failed" || i.status == "Cancelled"
                    ? "ناموفق"
                    : i.status == "Pending"
                      ? "در حال بررسی"
                      : "موفق"}
                </Badge>
              </Table.Col>
              <Table.Col>{PersianDate(i.created_at)}</Table.Col>
              <Table.Col className="flex items-center gap-1">
                <RemoveModal
                  title={i.id}
                  label="پرداخت"
                  theme={theme}
                  isPending={isPending}
                  onRemove={() => mutateAsync(i.id)}
                />
              </Table.Col>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default SupportTable;
