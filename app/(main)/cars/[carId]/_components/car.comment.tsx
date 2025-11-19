import CarCommentForm from "./car.comment.form";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CarCommentCard from "./car.comment.card";

const CarComment = async ({ carId }: { carId: string }) => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/comment/car/${carId}`, {
    cache: "no-store",
  });
  const { comments } = await res.json();

  return (
    <div className="rounded-lg shadow-xs border border-slate-100 flex flex-col gap-4 p-4 bg-white">
      <h2 className="font-bold text-slate-500 text-lg ">نظرات </h2>
      <p className="border-b border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
      {session?.user && <CarCommentForm userId={session.user.id} carId={carId} />}
      {!session?.user && (
        <div className="flex flex-col gap-4 items-center justify-center text-sm text-slate-700 p-4 border border-slate-200 rounded-lg w-max mx-auto">
          <p>
            برای نظر دادن ابتدا باید وارد حساب کاربری خود شوید و اطلاعات هویتی خود را کامل کنید!
          </p>
          <Link href={"/auth"}>
            <Button variant={"blue"} className="text-xs!">
              ورود به حساب کاربری
            </Button>
          </Link>
        </div>
      )}
      {!!comments.length &&
        comments
          .filter(cm => !cm.parent_id)
          .map(
            parentCm =>
              !parentCm.parent_id && (
                <CarCommentCard
                  key={parentCm.id}
                  {...parentCm}
                  replies={comments.filter(cm => cm.parent_id && cm.parent_id == parentCm.id)}
                  author={session?.user.id}
                />
              )
          )}
    </div>
  );
};

export default CarComment;
