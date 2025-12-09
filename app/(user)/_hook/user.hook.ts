import { EditUser, GetUserById } from "../service/user.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export function useGetUserById(userId?: string) {
  return useQuery({
    queryKey: ["userProfile", userId],
    queryFn: () => GetUserById(userId as string),
    enabled: !!userId,
    staleTime: 1000 * 60,
  });
}

export function useEditUser() {
  const [initialized, setInitialized] = useState(false);
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (user: any) => await EditUser(user),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      setInitialized(false);
      toast.success("اطلاعات کاربری با موفقیت ویرایش شد");
    },
    onError: async error => {
      toast.error(error.message);
    },
  });
  return { mutateAsync, isPending, isError, initialized, setInitialized };
}
