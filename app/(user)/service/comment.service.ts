import UserAxios from "../axios.config";

export async function GetComment() {
  try {
    const res = await UserAxios.get(`/comment`);
    return await res.data.comment;
  } catch (err) {
    return err;
  }
}

export async function RemoveComment(commentId) {
  try {
    const res = await UserAxios.delete("/comment", { data: { id: commentId } });
    return await res.data;
  } catch (err) {
    return err;
  }
}
