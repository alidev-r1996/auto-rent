import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateInventory, GetAvailaibility, RemoveInventory } from "../_services/availaiblity.service";
import { useRouter } from "next/navigation";


export function useGetAvailaibility(page: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["adminStock", page],
    queryFn: async () => await GetAvailaibility(page),
  });
  return { data, isLoading, isError };
}

export function useRemoveAvailaibility() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (id: string) => await RemoveInventory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminStock"] });
    },
  });
  return { mutateAsync, isPending, isError };
}

export function useAddAvailaibility() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (availaibility: any) => await CreateInventory(availaibility),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["adminStock"] });
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push("/admin/availaibility");
    },
  });
  return { mutateAsync, isPending, isError };
}
