import Table from "@/components/ui/table";
import { PersianCurrency, PersianDate, PersianDigits, TruncateText } from "@/lib/utils";
import { FC } from "react";
import { carTableHeader } from "../_constant/car.constant";
import { CarTableProps } from "../_types/car.types";
import RemoveCarModal from "./car.remove.modal";


const CarTable: FC<CarTableProps> = ({ cars, info, theme = "dark" }) => {
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
              <Table.Col>{'ندارد'}</Table.Col>
              <Table.Col>
                <RemoveCarModal title={i.name} theme={theme} id={i.id} />
              </Table.Col>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default CarTable;
