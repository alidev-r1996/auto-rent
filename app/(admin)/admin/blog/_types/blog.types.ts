export type BlogStatusProps = {
  status: boolean;
  id: string;
  theme?: "blue" | "rose" | "teal" | "orange" | "dark" | "emerald";
};

export type BlogTableProps = {
  blogs: {
    author: {
      name: string;
    };
    title: string;
    created_at: string;
    slug: string;
    reading_time: string;
    status: boolean;
    id: string;
  }[];
  info: {
    currentPage: number;
    limit: number;
  };
  theme?: "blue" | "rose" | "teal" | "orange" | "dark" | "emerald";
};
