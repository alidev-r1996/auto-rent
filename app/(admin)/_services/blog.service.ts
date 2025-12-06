import AdminAxios from "@/app/(admin)/axios.config";

export async function GetBlogs(page) {
  try {
    const res = await AdminAxios.get(`/blog?page=${page}&limit=8`);
    return await res.data.blogs;
  } catch (err) {
    return err;
  }
}

export async function UpdateBlogStatus(blogId) {
  try {
    const res = await AdminAxios.patch(`/blog`, { id: blogId });
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function RemoveBlog(blogId) {
  try {
    const res = await AdminAxios.delete("/blog", { data: { id: blogId } });
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function CreateBlog(blog) {
  try {
    const res = await AdminAxios.post("/blog", { blog });
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function GetBlogById(id: string) {
  try {
    const res = await AdminAxios.get(`/blog/${id}`);
    return await res.data.blog;
  } catch (err) {
    return err;
  }
}

export async function EditBlog(blog) {
  try {
    const res = await AdminAxios.put("/blog", { blog });
    return await res.data;
  } catch (err) {
    return err;
  }
}
