import Loading from "@/components/ui/loading";
import { Suspense } from "react";
import Payment from "./main";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Payment />
    </Suspense>
  );
};

export default Page;
