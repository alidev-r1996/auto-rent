import Loading from "@/components/ui/loading";
import { Suspense } from "react";
import AdminBlog from "./main";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AdminBlog />
    </Suspense>
  );
};

export default Page;
