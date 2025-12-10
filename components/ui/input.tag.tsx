"use client";

import { X } from "lucide-react";
import { useState, KeyboardEvent, FC } from "react";
import { cn, PersianDigits } from "@/lib/utils";

type TagInputProps = {
  name?: string;
  label: string;
  value: string[];
  onChange: (tags: string[]) => void;
  children?: React.ReactNode;
  labelStyle?: string;
  inputStyle?: string;
  placeholder?: string;
  errors?: any;
};

const TagInput: FC<TagInputProps> = ({
  name,
  label,
  value,
  onChange,
  children,
  labelStyle,
  inputStyle,
  placeholder,
  errors,
}) => {
  const [input, setInput] = useState("");

  const addTag = () => {
    const newTag = input.trim();
    if (newTag && !value.includes(newTag)) {
      onChange([...value, newTag]);
    }
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }

    if (e.key === "Backspace" && input.length === 0 && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  };

  const removeTag = (tag: string) => {
    onChange(value.filter(t => t !== tag));
  };

  return (
    <label
      htmlFor={name}
      className={cn(
        labelStyle,
        "flex items-center gap-2 rounded-lg border border-slate-200 relative p-3 text-slate-400 text-xs md:text-sm flex-1"
      )}
    >
      {/* آیکون */}
      {children}
      {children && <p className="border-r border-r-slate-300">&nbsp;</p>}

      {/* بخش تگ‌ها + ورودی */}
      <div className="flex flex-wrap items-center gap-2 flex-1 cursor-text">
        {value.map(tag => (
          <div
            key={tag}
            className="flex items-center gap-1 bg-slate-200 text-slate-700 px-2 py-1 rounded-md text-xs"
          >
            {tag}
            <X
              className="size-3 cursor-pointer hover:text-red-600 transition"
              onClick={() => removeTag(tag)}
            />
          </div>
        ))}

        {/* فیلد ورودی */}
        <input
          id={name}
          name={name}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder ?? label}
          className={cn(
            inputStyle,
            "appearance-none h-full placeholder:text-xs outline-none flex-1 min-w-20 bg-transparent peer text-slate-500"
          )}
        />
      </div>

      {/* لیبل شناور */}
      <p className="absolute hidden md:block peer-placeholder-shown:hidden text-[10px] bg-white px-1 py-1 -top-3 right-6">
        {label}
      </p>
      {errors && (
        <p className="text-red-500 text-xs absolute -bottom-4.5  right-2">
          {PersianDigits(errors?.message)}
        </p>
      )}
    </label>
  );
};

export default TagInput;
