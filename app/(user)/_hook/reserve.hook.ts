import { useQuery } from "@tanstack/react-query";
import { GetReserve } from "../service/reserve.service";

export function useGetReserve() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["userReserve"],
    queryFn: () => GetReserve(),
  });
  return { data, isLoading, isError };
}
