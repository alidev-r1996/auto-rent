const CarCommentForm = () => {
  return (
    <form className="border border-slate-300 rounded-lg px-4 py-2 mt-6 text-xs flex flex-col">
      <textarea
        name="comment"
        id="comment"
        className="appearance-none resize-none w-full h-16 outline-none text-slate-700"
        placeholder="دیدگاه خود را وارد کنید..."
      ></textarea>
      <p className="w-full border-b border-dotted border-slate-300 my-2"></p>
      <div className="flex items-center justify-between">
        <p className="text-slate-400 text-[10px] md:text-xs">
          دیدگاه شما پس از تأیید، منتشر خواهد شد!
        </p>
        <button className="px-3 py-1.5 text-xs bg-blue-500 text-white rounded-sm  hover:scale-103 transition-all duration-200 active:scale-95 cursor-pointer hover:bg-blue-600">
          ثبت
        </button>
      </div>
    </form>
  );
};

export default CarCommentForm;
