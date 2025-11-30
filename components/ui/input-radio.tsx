import { cn } from "@/lib/utils";
import { FC } from "react";

type BooleanRadioProps = {
  name: string;
  label: string; // floating label
  value: boolean | null;
  onChange: (val: boolean) => void;
  trueLabel: string;
  falseLabel: string;
  labelStyle?: string;
  inputStyle?: string;
  children?: React.ReactNode;
};

const BooleanRadioInput: FC<BooleanRadioProps> = ({
  name,
  label,
  value,
  onChange,
  trueLabel,
  falseLabel,
  labelStyle,
  inputStyle,
  children,
}) => {
  return (
    <label
      className={cn(
        labelStyle,
        "flex items-center gap-2 rounded-lg border border-slate-200 relative p-3 text-slate-400 text-xs md:text-sm flex-1"
      )}
    >
      {children}
      {children && <p className="border-r border-r-slate-300">&nbsp;</p>}

      {/* Radio options */}
      <div className="flex items-center gap-6 flex-1 text-slate-600">
        {/* TRUE */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value="true"
            checked={value === true}
            onChange={() => onChange(true)}
            className={cn(inputStyle, "w-4 h-4 accent-primary cursor-pointer")}
          />
          <span className="text-sm">{trueLabel}</span>
        </label>

        {/* FALSE */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value="false"
            checked={value === false}
            onChange={() => onChange(false)}
            className={cn(inputStyle, "w-4 h-4 accent-primary cursor-pointer")}
          />
          <span className="text-sm">{falseLabel}</span>
        </label>
      </div>

      {/* Floating Label */}
      <p className="absolute hidden md:block text-[10px] bg-white px-1 py-1 -top-3 right-6">
        {label}
      </p>
    </label>
  );
};

export default BooleanRadioInput;
