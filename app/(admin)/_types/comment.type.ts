export type CommentStatusProps = {
  verified: boolean;
  id: string;
  theme?: "blue" | "rose" | "teal" | "orange" | "dark" | "emerald";
};

export type CommentTableProps = {
  comments: {
    user: {
      name: string;
      phoneNumber: string;
    };
    blog?: { title: string };
    car?: { name: string };
    text: string;
    created_at: string;
    verified: boolean;
    id: string;
  }[];
  info: {
    currentPage: number;
    limit: number;
  };
  theme?: "blue" | "rose" | "teal" | "orange" | "dark" | "emerald";
};
