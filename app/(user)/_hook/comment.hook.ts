import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetComment, RemoveComment } from "../service/comment.service";

export function useGetComment() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["userComment"],
    queryFn: () => GetComment(),
  });
  return { data, isLoading, isError };
}

export function useRemoveComment() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (id: any) => await RemoveComment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userComment"] });
    },
  });
  return { mutateAsync, isPending, isError };
}
