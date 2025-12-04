import AdminAxios from "../../../axios.config";

export async function GetChats(page) {
  try {
    const res = await AdminAxios.get(`/support?page=${page}&limit=8`);
    return await res.data.chats;
  } catch (err) {
    return err;
  }
}

export async function RemoveChat(chatId) {
  try {
    const res = await AdminAxios.delete("/support", { data: { id: chatId } });
    return await res.data;
  } catch (err) {
    return err;
  }
}
