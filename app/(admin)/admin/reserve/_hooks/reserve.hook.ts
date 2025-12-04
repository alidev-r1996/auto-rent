import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetReserves, RemoveReserve } from "../_services/reserve.service";

export function useGetReserve(page: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["adminreserves", page],
    queryFn: async () => await GetReserves(page),
  });
  return { data, isLoading, isError };
}


export function useRemoveReserve() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (id: any) => await RemoveReserve(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminreserves"] });
    },
  });
  return { mutateAsync, isPending, isError };
}
