import Loading from "@/components/ui/loading";
import { Suspense } from "react";
import AdminCar from "./main";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AdminCar />
    </Suspense>
  );
};

export default Page;
