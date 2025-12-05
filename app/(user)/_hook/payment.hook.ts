import { useQuery } from "@tanstack/react-query";
import { GetPayment } from "../service/payment.service";

export function useGetPayment() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["userPayment"],
    queryFn: () => GetPayment(),
  });
  return { data, isLoading, isError };
}
