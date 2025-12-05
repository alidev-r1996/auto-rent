export type DiscountStatusProps = {
  status: boolean;
  id: string;
  theme?: "blue" | "rose" | "teal" | "orange" | "dark" | "emerald";
};

export type DiscountTableProps = {
  discounts: {
    id: string;
    title: string;
    percentage: string;
    startDate: string;
    endDate: string;
    active: boolean;
    cars: any[];
    created_at: string;
  }[];
  info: {
    currentPage: number;
    limit: number;
  };
  theme?: "blue" | "rose" | "teal" | "orange" | "dark" | "emerald";
};