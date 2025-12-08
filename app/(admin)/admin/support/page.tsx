import Loading from "@/components/ui/loading";
import { Suspense } from "react";
import Reserve from "./main";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Reserve />
    </Suspense>
  );
};

export default Page;
