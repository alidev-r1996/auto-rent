import Table from "@/components/ui/table";
import { PersianCurrency, PersianDigits } from "@/lib/utils";
import { FC } from "react";
import RemoveModal from "@/components/common/remove.modal";
import { Badge } from "@/components/ui/badge";
import { carTableHeader } from "../../_constant/car.constant";
import { useRemoveCar } from "../../_hooks/car.hooks";
import { CarTableProps } from "../../_types/car.types";

const CarTable: FC<CarTableProps> = ({ cars, info, theme = "dark" }) => {
  const { isPending, mutateAsync } = useRemoveCar();
  return (
    <Table theme={theme} className="mt-4">
      <Table.Header>
        <Table.Row>
          {carTableHeader.map((i, index) => {
            return <Table.Title key={index}>{i}</Table.Title>;
          })}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {cars?.map((i, index) => {
          return (
            <Table.Row key={index}>
              <Table.Col className="max-w-max">
                {PersianDigits((info.currentPage - 1) * info.limit + (index + 1))}
              </Table.Col>
              <Table.Col>{i.name}</Table.Col>
              <Table.Col>{PersianDigits(i.model)}</Table.Col>
              <Table.Col>{i.brand}</Table.Col>
              <Table.Col>{PersianCurrency(`${i.price_day}`)}</Table.Col>
              <Table.Col>{PersianCurrency(`${i.price_month}`)}</Table.Col>
              <Table.Col>{PersianCurrency(`${i.price_garranty}`)}</Table.Col>
              <Table.Col>{"ندارد"}</Table.Col>
              <Table.Col>
                <Badge variant={i.availaibility[0]?.isBlocked ? "rose" : "emerald"}>
                  {i.availaibility[0]?.isBlocked ? "بلاک" : "در دسترس"}
                </Badge>
              </Table.Col>
              <Table.Col>
                <RemoveModal
                  title={i.name}
                  label="خودروی"
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

export default CarTable;
