import CommentCardSingle from "@/components/common/comment.card";
import CarCommentForm from "./car.comment.form";

const CarComment = () => {
  return (
    <div className="rounded-lg shadow-xs border border-slate-100 flex flex-col gap-4 p-4 bg-white">
      <h2 className="font-bold text-slate-500 text-lg ">نظرات </h2>
      <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
      <CarCommentForm />
      <CommentCardSingle />
      <CommentCardSingle />
      <CommentCardSingle />
    </div>
  );
};

export default CarComment;
