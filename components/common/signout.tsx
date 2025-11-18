"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { LogOut } from "lucide-react";
import { signOut } from "@/lib/auth-client";

const Logout = ({ className }: { className?: string }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const logoutHandler = async () => {
    await signOut();
    setOpen(false);
    console.log("Successfully logged out");
    router.push("/login");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className}>
          <LogOut />
          خروج از حساب کاربری
        </Button>
      </DialogTrigger>

      <DialogContent dir="ltr">
        <DialogHeader dir="rtl">
          <DialogTitle className="text-sm">برای خروج از حساب کاربری خود اطمینان دارید؟</DialogTitle>
        </DialogHeader>

        <div className="flex gap-2 mt-4">
          <Button variant="destructive" onClick={logoutHandler}>
            خروج از حساب
          </Button>
          <Button onClick={() => setOpen(false)} variant="outline">
            انصراف
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Logout;
