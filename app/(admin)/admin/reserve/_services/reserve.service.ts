import AdminAxios from "../../../axios.config";

export async function GetReserves(page) {
  try {
    const res = await AdminAxios.get(`/reserve?page=${page}&limit=8`);
    return await res.data.reserves;
  } catch (err) {
    return err;
  }
}


export async function RemoveReserve(reserveId) {
  try {
    const res = await AdminAxios.delete("/reserve", { data: { id: reserveId } });
    return await res.data;
  } catch (err) {
    return err;
  }
}
