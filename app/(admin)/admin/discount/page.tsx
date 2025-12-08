import Loading from "@/components/ui/loading";
import { Suspense } from "react";
import AdminDiscount from "./main";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AdminDiscount />
    </Suspense>
  );
};

export default Page;
