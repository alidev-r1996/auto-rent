import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { CreateCar, GetCars, RemoveCar } from "../_services/car.service";

export function useGetCars(page: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["adminCars", page],
    queryFn: async () => await GetCars(page),
  });
  return { data, isLoading, isError };
}

export function useRemoveCar(id: string) {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async () => await RemoveCar(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminCars"] });
    },
  });
  return { mutateAsync, isPending, isError };
}

export function useAddCar() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (car: any) => await CreateCar(car),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["adminCars"] });
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push("/admin/car");
    },
  });
  return { mutateAsync, isPending, isError };
}
