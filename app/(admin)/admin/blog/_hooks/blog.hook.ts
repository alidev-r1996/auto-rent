import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateBlog, GetBlogs, RemoveBlog, UpdateBlogStatus } from "../_services/blog.service";
import { useRouter } from "next/navigation";

export function useGetBlogs(page: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["adminBlogs", page],
    queryFn: async () => await GetBlogs(page),
  });
  return { data, isLoading, isError };
}

export function useUpdateBlogStatus(id: string) {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async () => await UpdateBlogStatus(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminBlogs"] });
    },
  });
  return { mutateAsync, isPending, isError };
}

export function useRemoveBlog(id: string) {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async () => await RemoveBlog(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["adminBlogs"] });
    },
  });
  return { mutateAsync, isPending, isError };
}

export function useAddBlog() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (blog: {
      content: string;
      title: string;
      reading_time: string;
      slug: string;
    }) => await CreateBlog(blog),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["adminBlogs"] });
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push("/admin/blog");
    },
  });
  return { mutateAsync, isPending, isError };
}
