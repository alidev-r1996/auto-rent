export type PaymentStatusProps = {
  verified: boolean;
  id: string;
  theme?: "blue" | "rose" | "teal" | "orange" | "dark" | "emerald";
};

export type PaymentTableProps = {
  payments: {
    car: { name: string };
    created_at: string;
    id: string;
    amount: string;
    status: "Success" | "Failed" | "Pending";
    authority: string;
    ref_id: string | null;
    order: { car: { name: string }; user: { name: string; phoneNumber: string }; id: string };
    payment_detail: {
      delivery: string;
      discount: string;
      driver: string;
      guarranty: string;
      insurance: string;
      rent: string;
      return: string;
      tax: string;
      total_price: string;
    };
  }[];
  info: {
    currentPage: number;
    limit: number;
  };
  theme?: "blue" | "rose" | "teal" | "orange" | "dark" | "emerald";
};
