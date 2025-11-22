export type CarStatusProps = {
  status: boolean;
  id: string;
  theme?: "blue" | "rose" | "teal" | "orange" | "dark" | "emerald";
};

export type CarTableProps = {
  cars: {
    id: string;
    name: string;
    model: string;
    brand: string;
    price_day: string;
    price_month: string;
    price_garranty: string;
  }[];
  info: {
    currentPage: number;
    limit: number;
  };
  theme?: "blue" | "rose" | "teal" | "orange" | "dark" | "emerald";
};
