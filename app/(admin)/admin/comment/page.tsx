import Loading from "@/components/ui/loading";
import { Suspense } from "react";
import Comment from "./main";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Comment />
    </Suspense>
  );
};

export default Page;
