import Table from "@/components/ui/table";
import { PersianDate, PersianDigits, TruncateText } from "@/lib/utils";
import { FC } from "react";
import CommentStatus from "./comment.status";
import { commentTablHeader } from "../_constant/comment.constant";
import { CommentTableProps } from "../_types/comment.type";
import { useRemoveComment } from "../_hooks/comment.hook";
import RemoveModal from "@/components/common/remove.modal";

const CommentTable: FC<CommentTableProps> = ({ comments, info, theme = "dark" }) => {
  const { isPending, mutateAsync } = useRemoveComment();
  return (
    <Table theme={theme} className="mt-4">
      <Table.Header>
        <Table.Row>
          {commentTablHeader.map((i, index) => {
            return <Table.Title key={index}>{i}</Table.Title>;
          })}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {comments.map((i, index) => {
          return (
            <Table.Row key={index}>
              <Table.Col className="max-w-max">
                {PersianDigits((info.currentPage - 1) * info.limit + (index + 1))}
              </Table.Col>
              <Table.Col>{i.user.name}</Table.Col>
              <Table.Col>{PersianDigits(i.user.phoneNumber)}</Table.Col>
              <Table.Col>
                <p title={i.text}>{TruncateText(i.text, 50)}</p>
              </Table.Col>
              <Table.Col>{PersianDigits(i?.blog?.title || i?.car?.name || "")}</Table.Col>
              <Table.Col>{PersianDate(i.created_at)}</Table.Col>
              <Table.Col className="flex items-center justify-center">
                <CommentStatus verified={i.verified} id={i.id} theme={"emerald"} />
              </Table.Col>
              <Table.Col>
                <RemoveModal
                  title={i.user.name}
                  label="کامنت"
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

export default CommentTable;
