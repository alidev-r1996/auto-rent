import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetChats, RemoveChat } from "../_services/support.service";

export function useGetChats(page: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["adminChats", page],
    queryFn: async () => await GetChats(page),
  });
  return { data, isLoading, isError };
}

export function useRemoveChat() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (id: any) => await RemoveChat(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminChats"] });
    },
  });
  return { mutateAsync, isPending, isError };
}
