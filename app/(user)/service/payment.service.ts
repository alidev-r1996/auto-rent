import UserAxios from "../axios.config";

export async function GetPayment() {
  try {
    const res = await UserAxios.get(`/payment`);
    return await res.data.payment;
  } catch (err) {
    return err;
  }
}
