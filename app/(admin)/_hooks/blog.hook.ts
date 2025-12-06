import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  CreateBlog,
  EditBlog,
  GetBlogById,
  GetBlogs,
  RemoveBlog,
  UpdateBlogStatus,
} from "../_services/blog.service";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useGetBlogs(page: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["adminBlogs", page],
    queryFn: async () => await GetBlogs(page),
  });
  return { data, isLoading, isError };
}

export function useGetBlog(id: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["adminBlog", id],
    queryFn: async () => await GetBlogById(id),
    enabled: !!id,
  });
  return { data, isLoading, isError };
}

export function useEditBlog() {
  const [initialized, setInitialized] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (blog: any) => await EditBlog(blog),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["adminBlogs"] });
      router.push("/admin/blog");
      setInitialized(false);
    },
  });
  return { mutateAsync, isPending, isError, initialized, setInitialized };
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

export function useRemoveBlog() {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, isError } = useMutation({
    mutationFn: async (id: string) => await RemoveBlog(id),
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
      cover_img: string;
    }) => await CreateBlog(blog),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["adminBlogs"] });
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push("/admin/blog");
    },
  });
  return { mutateAsync, isPending, isError };
}
