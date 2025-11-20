"use client";

import { UploadDropzone } from "@/lib/uploadThing";
import Image from "next/image";
import { useState } from "react";
import { X as CloseIcon } from "lucide-react";

type UploadFileProps = {
  img: string;
  onChange: (img: string) => void;
  title?: string;
};

export default function UploadFile({ img, onChange, title }: UploadFileProps) {
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  if (img.length > 0) {
    return (
      <div className="w-full h-52 relative mb-8">
        <p className="text-sm capitalize text-zinc-600 dark:text-zinc-400 ">{title}</p>
        <div className="relative w-full h-52 mt-2 ">
          <Image src={img} alt=" " fill className="object-fill rounded border shadow" />
        </div>
        <p
          onClick={() => {
            onChange("");
          }}
          className="absolute top-10 right-3 bg-rose-500 text-white p-0.5 rounded shadow cursor-pointer hover:scale-105 active:scale-95 transition duration-300 hover:bg-rose-500/80"
        >
          <CloseIcon />
        </p>
      </div>
    );
  }

  return (
    <main className="flex flex-col justify-center gap-2 w-full h-20 my-14 mt-20">
      <p className="text-sm capitalize text-zinc-600 dark:text-zinc-400">{title}</p>

      <UploadDropzone
        endpoint="imageUploader"
        onUploadBegin={() => {
          setUploading(true);
          setUploadProgress(0);
          setUploadError(null);
        }}
        onUploadProgress={progress => {
          setUploadProgress(progress);
        }}
        onClientUploadComplete={res => {
          setUploading(false);
          setUploadProgress(100);
          onChange(res[0]?.ufsUrl);
        }}
        onUploadError={(error: Error) => {
          console.error("Upload Error:", error);
          setUploading(false);
          setUploadError(error.message);
        }}
        className="border border-slate-200 dark:border-slate-600 flex flex-col items-center [&>button]:text-sm [&>button]:px-4 [&>button]:py-2
        [&>button]:text-primary  w-full p-4 rounded-md [&>svg]:size-10 [&>div]:hidden"
      />

      {/* Status Display */}
      {uploading && (
        <div className="w-full flex flex-col">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
          <p className="text-xs text-center text-zinc-500">در حال بارگزاری... {uploadProgress}%</p>
        </div>
      )}

      {uploadError && <p className="text-red-500 text-sm font-medium">خطایی رخ داد: {uploadError}</p>}
    </main>
  );
}
