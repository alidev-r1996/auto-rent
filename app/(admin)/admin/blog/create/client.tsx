"use client";

import Loading from "@/components/ui/loading";
import dynamic from "next/dynamic";

const EditorBLogHandler = dynamic(() => import("./main"), {
  ssr: false,
  loading: () => <Loading />,
});

const CreateBlogClient = () => {
  return <EditorBLogHandler />;
};

export default CreateBlogClient;
