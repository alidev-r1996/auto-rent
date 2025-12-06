import AdminBlogEditor from "./blog.edit";

const Page = async ({ params }: { params: Promise<{ [blogId: string]: string }> }) => {
  const { blogId } = await params;
  return <AdminBlogEditor id={blogId} />;
};

export default Page;
