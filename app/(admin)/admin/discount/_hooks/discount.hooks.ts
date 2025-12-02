import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { CreateDiscount, GetDiscounts, RemoveDiscount } from "../_services/discount.service";
import { GetAllCars } from "../../car/_services/car.service";

export function useGetDiscount(page: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["adminDiscount", page],
    queryFn: async () => await GetDiscounts(page),
  });
  return { data, isLoading, isError };
}

export function useGetAllCars() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["adminAllCars"],
    queryFn: async () => await GetAllCars(),
  });
  return { data, isLoading, isError };
}

export function useRemoveDiscount() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (id: string) => await RemoveDiscount(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminDiscount"] });
    },
  });
  return { mutateAsync, isPending, isError };
}

export function useAddDiscount() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (car: any) => await CreateDiscount(car),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["adminDiscount"] });
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push("/admin/discount");
    },
  });
  return { mutateAsync, isPending, isError };
}
