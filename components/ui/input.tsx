import { cn } from "@/lib/utils";
import { FC } from "react";

type InputProps = {
  name: string;
  label: string;
  value: string;
  onChange: (e) => void;
  children?: React.ReactNode;
  type?: string;
  labelStyle?: string;
  inputStyle?: string;
};

const Input: FC<InputProps> = ({
  children,
  label,
  name,
  onChange,
  value,
  type = "text",
  labelStyle,
  inputStyle,
}) => {
  return (
    <label
      htmlFor={name}
      className={cn(
        labelStyle,
        "flex items-center gap-2 rounded-lg border border-slate-200 relative p-3 text-slate-400 text-xs md:text-sm flex-1"
      )}
    >
      {children}
      {children && <p className="border-r border-r-slate-300">&nbsp;</p>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={cn(inputStyle, "appearance-none outline-none flex-1 peer text-slate-500")}
        placeholder={label}
      />
      <p className="absolute hidden md:block peer-placeholder-shown:hidden text-[10px] bg-white px-1 py-1 -top-3 right-6">
        {label}
      </p>
    </label>
  );
};

export default Input;
