import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { CreateCar, GetAllCars, GetCars, RemoveCar } from "../_services/car.service";

export function useGetCars(page: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["adminCars", page],
    queryFn: async () => await GetCars(page),
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

export function useRemoveCar() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (id: string) => await RemoveCar(id),
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
