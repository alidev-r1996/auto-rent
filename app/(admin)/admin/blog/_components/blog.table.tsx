import Table from "@/components/ui/table";
import { PersianDate, PersianDigits, TruncateText } from "@/lib/utils";
import { FC } from "react";
import { blogTablHeader } from "../_constant/blog.constant";
import BlogStatus from "./blog.status";
import { BlogTableProps } from "../_types/blog.types";
import RemoveBlogModal from "./blog.remove";


const BlogTable: FC<BlogTableProps> = ({ blogs, info, theme = "dark" }) => {
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
              <Table.Col>
                <BlogStatus status={i.status} id={i.id} theme={theme} />
              </Table.Col>
              <Table.Col>
                <RemoveBlogModal title={i.title} theme={theme} id={i.id} />
              </Table.Col>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default BlogTable;
