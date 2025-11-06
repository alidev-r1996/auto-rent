import Image from "next/image";
import { FC, memo } from "react";
import StartRating from "../ui/star-rating";

type commnetCardProps = {
  img: string;
  author: string;
  rating: number;
  text: string;
};

const CommentCard: FC<commnetCardProps> = ({ author, img, rating, text }) => {
  return (
    <div className="bg-white dark:bg-slate-800 shadow rounded-2xl md:p-4 p-2 flex items-start gap-4 md:min-w-[500px] w-full max-w-[95vw] h-max md:max-w-[500px] flex-[0_0_100%]">
      <Image
        width={50}
        height={50}
        src={`/assets/images/comments/${img}`}
        alt="user-img"
        className="size-28 shrink-0 object-fill overflow-hidden rounded-lg border-amber-300 border-2 ml-1 "
      />
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <h1 className="font-bold dark:text-amber-500">{author}</h1>
          </div>
          <StartRating totalStars={5} rating={rating} size="small" />
        </div>

        <p className="text-zinc-600 dark:text-zinc-300 text-xs md:leading-6 leading-5 line-clamp-4">
          {text}
        </p>
      </div>
    </div>
  );
};

export default memo(CommentCard);
