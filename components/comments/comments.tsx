"use client";

import CommentCard from "./comment.card";
import { commentItems } from "./comment.constant";

const Comments = () => {
  return (
    <section id="about" className="md:mt-20 mt-10 space-y-8 overflow-hidden py-4 max-w-full">
      <h2 className="font-bold md:text-4xl mb-4 text-2xl text-center flex items-center gap-4 justify-center">
        نظرات <p className="text-amber-400">مشتریان</p>
      </h2>
      <p className=" text-slate-400 text-center">آنچه مشتریان ما درموردمان گفته‌اند.</p>
      <div className="w-full flex items-center gap-4 overflow-x-auto scroll-none group">
        <div className="flex gap-4 h-full min-w-max items-center justify-center my-8 animate-infinite-scroll group-hover:paused">
          {commentItems.map(i => {
            return <CommentCard key={i.id} {...i} />;
          })}
        </div>
        <div className="flex gap-4 h-full min-w-max items-center justify-center my-8 animate-infinite-scroll group-hover:paused">
          {commentItems.map(i => {
            return <CommentCard key={i.id} {...i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Comments;
