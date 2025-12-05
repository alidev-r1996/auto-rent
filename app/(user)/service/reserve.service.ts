import UserAxios from "../axios.config";

export async function GetReserve() {
  try {
    const res = await UserAxios.get(`/reserve`);
    return await res.data.reserve;
  } catch (err) {
    return err;
  }
}
