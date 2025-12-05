import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetPayments, RemovePayment } from "../_services/payment.service";

export function useGetPayment(page: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["adminPayments", page],
    queryFn: async () => await GetPayments(page),
  });
  return { data, isLoading, isError };
}

export function useRemovePayment() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (id: any) => await RemovePayment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminPayments"] });
    },
  });
  return { mutateAsync, isPending, isError };
}
