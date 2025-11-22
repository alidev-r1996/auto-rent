import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { GetCars, RemoveCar } from "../_services/car.service";

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
      queryClient.invalidateQueries({ queryKey: ["adminBlogs"] });
    },
  });
  return { mutateAsync, isPending, isError };
}

// export function useAddBlog() {
//   const queryClient = useQueryClient();
//   const router = useRouter();
//   const { mutateAsync, isPending, isError } = useMutation({
//     mutationFn: async (blog: {
//       content: string;
//       title: string;
//       reading_time: string;
//       slug: string;
//     }) => await CreateBlog(blog),
//     onSuccess: async () => {
//       queryClient.invalidateQueries({ queryKey: ["adminBlogs"] });
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       router.push("/admin/blog");
//     },
//   });
//   return { mutateAsync, isPending, isError };
// }
