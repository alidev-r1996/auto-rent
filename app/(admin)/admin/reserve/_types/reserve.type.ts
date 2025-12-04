export type ReserveStatusProps = {
  verified: boolean;
  id: string;
  theme?: "blue" | "rose" | "teal" | "orange" | "dark" | "emerald";
};

export type ReserveTableProps = {
  reserves: {
    car: { name: string; model: string };
    created_at: string;
    id: string;
    status: "Success" | "Failed" | "Pending" | "Cancelled";
    start_date: string;
    end_date: string;
    start_time: string;
    end_time: string;
    receiverInfo: { name: string; phoneNumber: string; address: string; national_id: string };
    user: { name: string; phoneNumber: string };
    receive_location: string;
    return_location: string;
    order_number: string;
    insurance: { type: "Basic" | "Premium"; price: string };
    total_price: string;
  }[];
  info: {
    currentPage: number;
    limit: number;
  };
  theme?: "blue" | "rose" | "teal" | "orange" | "dark" | "emerald";
};
