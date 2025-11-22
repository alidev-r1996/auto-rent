"use client";

import { cn } from "@/lib/utils";
import { createContext, FC, useContext } from "react";

type TableTheme = "blue" | "rose" | "teal" | "orange" | "dark" | "emerald";

type ChildTableProps = {
  children: React.ReactNode;
  className?: string;
};

const ThemeHeader = {
  blue: "bg-sky-600",
  rose: "bg-rose-500",
  teal: "bg-teal-600",
  orange: "bg-orange-500",
  dark: "bg-slate-600",
  emerald: "bg-emerald-500",
};

const themeRow = {
  blue: "even:bg-sky-100 even:text-sky-700",
  rose: "even:bg-rose-50 even:text-rose-700",
  teal: "even:bg-teal-50 even:text-teal-700",
  orange: "even:bg-orange-50 even:text-orange-700",
  dark: "even:bg-slate-100 even:text-slate-700",
  emerald: "even:bg-emerald-50 even:text-emerald-700",
};
type TableProps = FC<ChildTableProps & { theme?: TableTheme; className?: string }> & {
  Header: typeof TableHeader;
  Body: typeof TableBody;
  Row: typeof TableRow;
  Col: typeof TableCol;
  Title: typeof TableTitle;
};

const themeContext = createContext<TableTheme>("dark");

const Table: TableProps = ({ children, className, theme = "dark" }) => {
  return (
    <themeContext.Provider value={theme}>
      <div
        className={cn(
          className,
          "w-full overflow-auto rounded-lg shadow border border-slate-300 dark:border-slate-700"
        )}
      >
        <table className={`table-auto text-sm w-full`}>{children}</table>
      </div>
    </themeContext.Provider>
  );
};

const TableHeader: FC<ChildTableProps> = ({ children, className }) => {
  return <thead className={className}>{children}</thead>;
};

const TableBody: FC<ChildTableProps> = ({ children, className }) => {
  return <tbody className={className}>{children}</tbody>;
};

const TableRow: FC<ChildTableProps> = ({ children, className }) => {
  const theme = useContext(themeContext);
  return (
    <tr
      className={cn(
        className,
        `${themeRow[theme]} border-slate-200 dark:border-slate-600 border-b text-xs`
      )}
    >
      {children}
    </tr>
  );
};

const TableCol: FC<ChildTableProps> = ({ children, className }) => {
  return (
    <td
      className={cn(
        className,
        `${className} py-3 md:px-6 px-2 first:max-w-max text-center whitespace-nowrap mx-auto`
      )}
    >
      {children}
    </td>
  );
};

const TableTitle: FC<ChildTableProps> = ({ children, className }) => {
  const theme = useContext(themeContext);
  return (
    <th
      className={cn(
        className,
        `${ThemeHeader[theme]} py-1 md:px-6 text-sm px-2 first:px-2 first:py-3 text-center whitespace-nowrap mx-auto text-white`
      )}
    >
      {children}
    </th>
  );
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Col = TableCol;
Table.Title = TableTitle;

export default Table;
