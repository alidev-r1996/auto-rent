import Loading from "@/components/ui/loading";
import { Suspense } from "react";
import AdaminAvailaibility from "./main";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AdaminAvailaibility />
    </Suspense>
  );
};

export default Page;
