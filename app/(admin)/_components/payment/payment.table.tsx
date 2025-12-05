import Table from "@/components/ui/table";
import { PersianCurrency, PersianDate, PersianDigits, TruncateText } from "@/lib/utils";
import { FC } from "react";
import { commentTablHeader } from "../../_constant/payment.constant";
import RemoveModal from "@/components/common/remove.modal";
import { useRemovePayment } from "../../_hooks/payment.hook";
import { PaymentTableProps } from "../../_types/payment.type";
import { Badge } from "@/components/ui/badge";
import PaymentDetail from "./payment.detail";

const PaymentTable: FC<PaymentTableProps> = ({ payments, info, theme }) => {
  const { isPending, mutateAsync } = useRemovePayment();

  return (
    <Table theme={theme || "dark"} className="mt-4">
      <Table.Header>
        <Table.Row>
          {commentTablHeader.map((i, index) => {
            return <Table.Title key={index}>{i}</Table.Title>;
          })}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {payments.map((i, index) => {
          return (
            <Table.Row key={index}>
              <Table.Col className="max-w-max">
                {PersianDigits((info.currentPage - 1) * info.limit + (index + 1))}
              </Table.Col>
              <Table.Col>{PersianDigits(i.order.user.phoneNumber)}</Table.Col>
              <Table.Col>{PersianCurrency(i.amount)}</Table.Col>
              <Table.Col>
                <p
                  onClick={() => window.navigator.clipboard.writeText(i.authority)}
                  className="cursor-pointer"
                  title={i.authority}
                >
                  {TruncateText(i.authority, 10)}
                </p>
              </Table.Col>
              <Table.Col>
                <p
                  onClick={() => window.navigator.clipboard.writeText(i.order.order_number)}
                  className="cursor-pointer"
                  title={i.order.order_number}
                >
                  {TruncateText(i.order.order_number, 10)}
                </p>
              </Table.Col>
              <Table.Col>{i.ref_id ? PersianDigits(i.ref_id) : "ندارد"}</Table.Col>
              <Table.Col>{PersianDigits(i.order.car.name)}</Table.Col>
              <Table.Col>
                <Badge
                  variant={
                    i.status == "Failed" ? "rose" : i.status == "Pending" ? "slate" : "emerald"
                  }
                >
                  {i.status == "Failed"
                    ? "ناموفق"
                    : i.status == "Pending"
                      ? "در حال بررسی"
                      : "موفق"}
                </Badge>
              </Table.Col>
              <Table.Col>{PersianDate(i.created_at)}</Table.Col>
              <Table.Col className="flex items-center gap-1">
                <PaymentDetail details={i.payment_detail} title={i.order.user.phoneNumber} />
                <RemoveModal
                  title={i.order.user.name}
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

export default PaymentTable;
