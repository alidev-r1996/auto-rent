import UserHeader from "../user-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CommentCard from "./comment-card";
import { commentTabItems } from "./comment.constant";

const Comment = () => {
  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-4 flex flex-col gap-4">
      <UserHeader title="نظرات من" />
      <Tabs dir="rtl" defaultValue="all" className="w-full! mt-9">
        <TabsList className="p-1.5 h-max! shadow-xs border border-slate-200 w-full">
          {commentTabItems.map(({ value, label, className }, index) => {
            return (
              <TabsTrigger
                key={index}
                value={value}
                className={`w-30 py-1.5 text-slate-500 rounded-md! md:py-3 border ${className} data-[state=active]:shadow-xs data-[state=active]:text-white cursor-pointer transition-colors duration-200`}
              >
                {label}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <TabsContent
          value="all"
          className="border border-slate-200 rounded-xl flex flex-col p-2 md:p-4"
        >
          <CommentCard status="pending" />
          <CommentCard status="success" />
          <CommentCard status="pending" />
        </TabsContent>
        <TabsContent
          value="confirm"
          className="border border-slate-200 rounded-xl flex flex-col p-2 md:p-4"
        >
          <CommentCard status="success" />
          <CommentCard status="success" />
          <CommentCard status="success" />
        </TabsContent>
        <TabsContent
          value="pending"
          className="border border-slate-200 rounded-xl flex flex-col p-2 md:p-4"
        >
          <CommentCard status="pending" />
          <CommentCard status="pending" />
          <CommentCard status="pending" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Comment;
