import Table from "@/components/ui/table";
import { PersianDate, PersianDigits } from "@/lib/utils";
import { FC } from "react";
import RemoveModal from "@/components/common/remove.modal";
import { AvailaibilityTableProps } from "../../_types/availaibility.types";
import { useRemoveAvailaibility } from "../../_hooks/availaibility.hook";
import { availaibilityTableHeader } from "../../_constant/availaibility.constant";

const AvailaibilityTable: FC<AvailaibilityTableProps> = ({
  availaibility,
  info,
  theme = "dark",
}) => {
  const { isPending, mutateAsync } = useRemoveAvailaibility();
  return (
    <Table theme={theme} className="mt-4">
      <Table.Header>
        <Table.Row>
          {availaibilityTableHeader.map((i, index) => {
            return <Table.Title key={index}>{i}</Table.Title>;
          })}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {availaibility?.map((i, index) => {
          return (
            <Table.Row key={index}>
              <Table.Col className="max-w-max">
                {PersianDigits((info.currentPage - 1) * info.limit + (index + 1))}
              </Table.Col>
              <Table.Col>{i.car.name}</Table.Col>
              <Table.Col>{PersianDigits(i.car.model)}</Table.Col>
              <Table.Col>{i.car.brand}</Table.Col>
              <Table.Col>{i.isBlocked ? "بلاک" : "موجودی"}</Table.Col>
              <Table.Col>{PersianDate(i.start_date)}</Table.Col>
              <Table.Col>{PersianDate(i.end_date)}</Table.Col>
              <Table.Col>{i.reason ? i.reason : "-"}</Table.Col>
              <Table.Col>
                <RemoveModal
                  title={i.car.name}
                  label="وضعیت دسترسی خودروی"
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

export default AvailaibilityTable;
