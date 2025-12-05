export type AvailaibilityTableProps = {
  availaibility: {
    id: string;
    car: {
      name: string;
      brand: string;
      model: string;
    };
    start_date: string;
    end_date: string;
    isBlocked: boolean;
    reason: string;
  }[];
  info: {
    currentPage: number;
    limit: number;
  };
  theme?: "blue" | "rose" | "teal" | "orange" | "dark" | "emerald";
};
