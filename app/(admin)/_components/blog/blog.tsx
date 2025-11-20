
import { useState } from "react";
import UserHeader from "../user-header";


const AdminBlog = () => {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <div className="bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex flex-col">
      <UserHeader title=" بلاگ‌ها" />
      
    </div>
  );
};

export default AdminBlog;
