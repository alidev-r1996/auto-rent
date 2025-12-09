import UserAxios from "../axios.config";

export async function EditUser(user) {
  try {
    const res = await UserAxios.put(`/profile`, { user });
    return await res.data;
  } catch (err: any) {
    throw err?.response?.data || err;
  }
}

export async function GetUserById(userId) {
  try {
    const res = await UserAxios.get(`/profile/${userId}`);
    return await res.data.user;
  } catch (err) {
    return err;
  }
}
