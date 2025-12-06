import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  CreateCar,
  GetAllCars,
  GetCarById,
  GetCars,
  RemoveCar,
  EditCar,
} from "../_services/car.service";
import { useState } from "react";

export function useGetCars(page: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["adminCars", page],
    queryFn: async () => await GetCars(page),
  });
  return { data, isLoading, isError };
}

export function useGetCar(id: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["adminCar", id],
    queryFn: async () => await GetCarById(id),
    enabled: !!id,
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

export function useEditCar() {
  const [initialized, setInitialized] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (car: any) => await EditCar(car),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["adminCars"] });
      router.push("/admin/car");
      setInitialized(false);
    },
  });
  return { mutateAsync, isPending, isError, initialized, setInitialized };
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
      router.push("/admin/car");
    },
  });
  return { mutateAsync, isPending, isError };
}
