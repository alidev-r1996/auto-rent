"use client";

import { UploadButton } from "@/lib/uploadThing";
import Image from "next/image";
import { useState } from "react";
import { X as CloseIcon, UploadCloud } from "lucide-react";
import { PersianDigits } from "@/lib/utils";

type UploadFileProps = {
  img: string;
  onChange: (img: string) => void;
  title?: string;
  label: string;
};

export default function UploadFile({ img, onChange, title, label }: UploadFileProps) {
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [imgInfo, setImgInfo] = useState<any>(null);

  if (img.length > 0) {
    return (
      <div
        dir="ltr"
        className="w-full h-12 relative mb-8 p-1 border border-slate-200 rounded-lg flex items-center gap-3 relative"
      >
        <p className="text-sm capitalize text-zinc-600 dark:text-zinc-400 ">{title}</p>
        <div className="relative aspect-square h-full ">
          <Image src={img} alt=" " fill className="object-fill rounded border shadow" />
        </div>
        <div className="flex flex-col md:flex-row">
          <p className="text-slate-500 text-xs">name: {imgInfo.name}</p>
          <p className="text-slate-500 text-xs">size: {(imgInfo.size / 1024).toFixed(2)} KB</p>
        </div>
        <p className="absolute -top-3 right-4 text-[11px] text-slate-400 bg-white px-1 py-0.5">
          {label}
        </p>
        <p
          onClick={() => {
            onChange("");
          }}
          className="absolute top-3 right-3 bg-rose-500 text-white p-0.5 rounded shadow cursor-pointer hover:scale-105 active:scale-95 transition duration-300 hover:bg-rose-500/80"
        >
          <CloseIcon size={15} />
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center gap-2 w-full relative -mt-2">
      <p className="text-sm capitalize text-zinc-600 dark:text-zinc-400">{title}</p>

      <UploadButton
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
          setImgInfo(res[0]);
          onChange(res[0]?.ufsUrl);
        }}
        onUploadError={(error: Error) => {
          console.error("Upload Error:", error);
          setUploading(false);
          setUploadError(error.message);
        }}
        appearance={{
          button:
            "ut-ready:bg-slate-700 px-3! py-1! ut-uploading:cursor-not-allowed rounded bg-emerald-600 text-xs bg-none after:bg-orange-400 mr-auto",
          container:
            "p-1 border border-slate-200 rounded-lg w-full [&>div]:text-sm [&>label]:h-full! [&>label]:w-max! flex flex-row-reverse! h-11.5 items-center pr-3 [&>div]:text-slate-400/70",
        }}
        content={{
          button({ ready }) {
            if (ready)
              return (
                <p className="flex items-center gap-2">
                  بارگزاری عکس
                  <UploadCloud className="rotate-180 size-5" />
                </p>
              );

            return "Getting ready...";
          },
          allowedContent({ ready, fileTypes, isUploading }) {
            if (!ready) return "Checking what you allow";
            if (isUploading) return "در حال بارگزاری...";
            return `${label}`;
          },
        }}
      />

      {/* Status Display */}
      {uploading && (
        <div className="w-full flex flex-col absolute left-0 -bottom-7 ">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
          <p className="text-xs text-center text-zinc-500">
            در حال بارگزاری... {PersianDigits(uploadProgress)}%
          </p>
        </div>
      )}

      {uploadError && (
        <p className="text-red-500 text-sm font-medium">خطایی رخ داد: {uploadError}</p>
      )}
    </div>
  );
}
