"use client";

import { Button } from "@/components/ui/button";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useEffect, useState } from "react";
import Input from "@/components/ui/input";
import { Captions, Clock4, ScanBarcode } from "lucide-react";
import { uploadToCloudinary } from "@/lib/utils";
import UserHeader from "@/app/(admin)/_components/user-header";
import Link from "next/link";
import { useEditBlog, useGetBlog } from "../../../_hooks/blog.hook";
import UploadFile from "@/components/ui/uploader";

export default function AdminBlogEditor({ id }) {
  const [title, setTitle] = useState("");
  const [readingTime, setReadingTime] = useState("");
  const [slug, setSlug] = useState("");
  const [cover_img, setCoverImg] = useState("");
  const { initialized, setInitialized, isPending, mutateAsync } = useEditBlog();
  const { isLoading, data } = useGetBlog(id);

  const editor = useCreateBlockNote({
    uploadFile: async file => {
      const url = await uploadToCloudinary(file);
      return url;
    },
  });

  const editorBLogHandler = async () => {
    const content = editor.blocksToMarkdownLossy();
    const newBLog = {
      content,
      title,
      reading_time: readingTime,
      slug,
      cover_img,
      id,
    };
    mutateAsync(newBLog);
  };

  useEffect(() => {
    if (isLoading || !data || initialized || !editor) return;

    const init = async () => {
      let markdown = data.content;

      if (typeof markdown === "string") {
        markdown = markdown.replace(/\\n/g, "\n").replace(/\\\\/g, "\\");
        markdown = markdown.replace(/^(#{1,6})\s*\*\*(.+?)\*\*$/gm, "$1 $2");
        markdown = markdown.replace(/^(#{1,6})([^\s#])/gm, "$1 $2");
      }

      let blocks: any = [];

      try {
        if (typeof markdown === "string" && markdown.trim()) {
          blocks = await editor.tryParseMarkdownToBlocks(markdown);
        } else if (Array.isArray(markdown)) {
          blocks = markdown;
        }
      } catch (err) {
        console.error("پارس نشد:", err);
      }
      editor.replaceBlocks(editor.document, blocks || []);
      setTitle(data.title || "");
      setReadingTime(data.reading_time || "");
      setSlug(data.slug || "");
      setCoverImg(data.cover_img || "");
      setInitialized(true);
    };

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, editor, isLoading, initialized]);

  return (
    <div className={`${isLoading && "blur-xs"} p-4 bg-white rounded-lg shadow flex flex-col gap-4`}>
      <UserHeader title="ایجاد بلاگ جدید" />
      <form className="grid md:grid-cols-2 gap-4">
        <Input
          name="title"
          label="عنوان بلاگ"
          value={title}
          onChange={e => setTitle(e.target.value)}
        >
          <Captions className="size-5" />
        </Input>
        <Input
          name="slug"
          label="شناسه مقاله لاتین"
          value={slug}
          onChange={e => setSlug(e.target.value)}
        >
          <ScanBarcode className="size-5" />
        </Input>
        <Input
          name="readingTime"
          label="زمان مطالعه "
          value={readingTime}
          onChange={e => setReadingTime(e.target.value)}
        >
          <Clock4 className="size-5" />
        </Input>
        <UploadFile img={cover_img} onChange={setCoverImg} label="عکس کاور اصلی" />
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
        <Button disabled={isPending} type="submit" onClick={editorBLogHandler}>
          {isPending ? "در حال ذخیره کردن..." : "ذخیره بلاگ"}
        </Button>
      </div>
    </div>
  );
}
