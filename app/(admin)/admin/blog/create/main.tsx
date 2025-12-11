"use client";

import { Button } from "@/components/ui/button";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/shadcn/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import Input from "@/components/ui/input";
import { Captions, Clock4, ScanBarcode } from "lucide-react";
import { EnglishDigits, PersianDigits, uploadToCloudinary } from "@/lib/utils";
import UserHeader from "@/app/(admin)/_components/user-header";
import Link from "next/link";
import { useAddBlog } from "../../../_hooks/blog.hook";
import UploadFile from "@/components/ui/uploader";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogFromInput, blogSchema } from "@/app/(admin)/schema/blog.schema";
import { toast } from "sonner";

export default function AdminBlogEditor() {
  const { isPending, mutateAsync } = useAddBlog();

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<blogFromInput>({
    resolver: zodResolver(blogSchema),
    mode: "onTouched",
  });

  const editor = useCreateBlockNote({
    uploadFile: async file => {
      const url = await uploadToCloudinary(file);
      return url;
    },
  });

  const editorBLogHandler: SubmitHandler<blogFromInput> = async values => {
    const content = editor.blocksToMarkdownLossy();
    if (content.length < 1) {
      toast.error("متن وبلاگ نمیتواند خالی باشد");
      return;
    }
    const newBLog = {
      ...values,
      content,
      reading_time: EnglishDigits(values.reading_time),
    };
    mutateAsync(newBLog);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow flex flex-col gap-6">
      <UserHeader title="ایجاد بلاگ جدید" />
      <form className="grid md:grid-cols-2 gap-6">
        <Input label="عنوان بلاگ" {...register("title")} errors={errors.title}>
          <Captions className="size-5" />
        </Input>
        <Input label="شناسه لاتین مقاله" {...register("slug")} errors={errors.slug}>
          <ScanBarcode className="size-5" />
        </Input>
        <Input
          label="زمان مطالعه "
          {...register("reading_time", {
            onChange: e => (e.target.value = PersianDigits(e.target.value)),
          })}
          errors={errors.reading_time}
        >
          <Clock4 className="size-5" />
        </Input>
        <div className="relative">
          <Controller
            name="cover_img"
            control={control}
            render={({ field }) => (
              <UploadFile img={field.value || ""} onChange={field.onChange} label="عکس کاور اصلی" />
            )}
          />
          {errors && (
            <p className="text-red-500 text-xs absolute -bottom-4.5  right-2">
              {PersianDigits(errors?.cover_img?.message || "")}
            </p>
          )}
        </div>
      </form>

      <BlockNoteView
        className={`min-h-80 border border-slate-200 rounded-lg shadow-xs p-4`}
        editor={editor}
      />

      <div className="flex items-center gap-2 w-max mr-auto">
        <Link href={"/admin/blog"}>
          <Button type="button" variant={"outline"}>
            منصرف شدن
          </Button>
        </Link>
        <Button disabled={isPending} type="submit" onClick={handleSubmit(editorBLogHandler)}>
          {isPending ? "در حال ذخیره کردن..." : "ذخیره بلاگ"}
        </Button>
      </div>
    </div>
  );
}
