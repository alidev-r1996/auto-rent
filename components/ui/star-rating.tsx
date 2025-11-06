import { FC } from "react";
import { TiStarFullOutline } from "react-icons/ti";

type starRating = {
  rating: number;
  totalStars: number;
  size: "small" | "medium" | "large";
};

const starSize = {
  small: "md:size-5 ",
  medium: "md:size-7",
  large: "md:size-10",
};

const StartRating: FC<starRating> = ({ rating, totalStars, size }) => {
  const fillStars = Array.from({ length: rating }, (_, x) => x + 1);
  const empty = totalStars - rating;
  const emptyStars = Array.from({ length: empty }, (_, x) => x + 1);

  return (
    <div className="flex items-center md:gap-1">
      {emptyStars &&
        emptyStars.map(i => (
          <p key={i}>
            <TiStarFullOutline className={`${starSize[size]}  fill-zinc-400 drop-shadow-md`} />
          </p>
        ))}
      {fillStars &&
        fillStars.map(i => (
          <p key={i}>
            <TiStarFullOutline className={`${starSize[size]} fill-orange-400 drop-shadow-md`} />
          </p>
        ))}
    </div>
  );
};

export default StartRating;
