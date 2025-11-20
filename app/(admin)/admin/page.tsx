"use client";

import { useState } from "react";
import SideBar from "../_components/sidebar/sideBar";
import Profile from "../_components/profile/profile";
import Reserve from "../_components/reserves/reserve";
import Payment from "../_components/payment/payment";
import Support from "../_components/support/support";
import Comment from "../_components/comment/comment";
import Logout from "../_components/logout/logout";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import AdminBlog from "../_components/blog/blog";

const UserDashboard = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<any>("profile");

  return (
    <div className="grid md:grid-cols-5 p-4 gap-4 mx-auto max-w-[1690px]">
      {/* Sidebar component would go here */}
      <SideBar
        setMenu={menu => setMenu(menu)}
        show={open}
        setShow={() => setOpen(!open)}
        menu={menu}
      />
      {/* Main content area */}
      <div
        className={`${open ? "hidden md:flex" : "flex"} md:col-span-4! flex-col gap-4 min-w-full! max-w-full!`}
      >
        <Button
          variant={"outline"}
          className="py-5! md:hidden group"
          onClick={() => {
            setOpen(!open);
            setMenu("");
          }}
        >
          <ChevronRight className="group-hover:translate-x-4 transition-all duration-300" /> بازگشت
          به منوی اصلی
        </Button>

        {menu == "profile" && <Profile />}
        {menu == "reserve" && <Reserve />}
        {menu == "payment" && <Payment />}
        {menu == "comment" && <Comment />}
        {menu == "support" && <Support />}
        {menu == "logout" && <Logout />}
        {menu == "blog" && <AdminBlog />}
      </div>
    </div>
  );
};

export default UserDashboard;
