import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetComments, RemoveComment, UpdateCommentStatus } from "../_services/comment.service";

export function useGetComment(page: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["adminComments", page],
    queryFn: async () => await GetComments(page),
  });
  return { data, isLoading, isError };
}

export function useCommentStatus(id: string) {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async () => await UpdateCommentStatus(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminComments"] });
    },
  });
  return { mutateAsync, isPending, isError };
}

export function useRemoveComment() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (id: any) => await RemoveComment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminComments"] });
    },
  });
  return { mutateAsync, isPending, isError };
}
