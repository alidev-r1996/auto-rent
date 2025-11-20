const UserHeader = ({ title }: { title: string }) => {
  return (
    <>
      <h2 className="font-bold text-slate-600 md:text-lg ">{title}</h2>
      <p className="border-b mt-1 border-b-slate-300 relative after:w-20 after:h-0.5 after:bg-amber-500 after:absolute after:top-0 after:right-0"></p>
    </>
  );
};

export default UserHeader;
