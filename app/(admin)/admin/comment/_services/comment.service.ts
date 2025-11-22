import AdminAxios from "../../../axios.config";

export async function GetComments(page) {
  try {
    const res = await AdminAxios.get(`/comment?page=${page}&limit=8`);
    return await res.data.comments;
  } catch (err) {
    return err;
  }
}

export async function UpdateCommentStatus(commentId) {
  try {
    const res = await AdminAxios.patch(`/comment`, { id: commentId });
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function RemoveComment(commentId) {
  try {
    const res = await AdminAxios.delete("/comment", { data: { id: commentId } });
    return await res.data;
  } catch (err) {
    return err;
  }
}
