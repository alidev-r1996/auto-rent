import Table from "@/components/ui/table";
import { PersianDate, PersianDigits, TruncateText } from "@/lib/utils";
import { FC } from "react";
import { blogTablHeader } from "../../_constant/blog.constant";
import BlogStatus from "./blog.status";
import { BlogTableProps } from "../../_types/blog.types";
import RemoveModal from "@/components/common/remove.modal";
import { useRemoveBlog } from "../../_hooks/blog.hook";

const BlogTable: FC<BlogTableProps> = ({ blogs, info, theme = "dark" }) => {
  const { isPending, mutateAsync } = useRemoveBlog();
  return (
    <Table theme={theme} className="mt-4">
      <Table.Header>
        <Table.Row>
          {blogTablHeader.map((i, index) => {
            return <Table.Title key={index}>{i}</Table.Title>;
          })}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {blogs.map((i, index) => {
          return (
            <Table.Row key={index}>
              <Table.Col className="max-w-max">
                {PersianDigits((info.currentPage - 1) * info.limit + (index + 1))}
              </Table.Col>
              <Table.Col>{i.author.name}</Table.Col>
              <Table.Col>
                <p title={i.title}>{TruncateText(i.title, 50)}</p>
              </Table.Col>
              <Table.Col>{i.slug}</Table.Col>
              <Table.Col>{PersianDigits(i.reading_time)}</Table.Col>
              <Table.Col>{PersianDate(i.created_at)}</Table.Col>
              <Table.Col className="flex items-center justify-center">
                <BlogStatus status={i.status} id={i.id} theme={"emerald"} />
              </Table.Col>
              <Table.Col>
                <RemoveModal
                  title={i.title}
                  label="وبلاگ"
                  theme={theme}
                  isPending={isPending}
                  onRemove={() => mutateAsync(i.id)}
                />
              </Table.Col>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default BlogTable;
