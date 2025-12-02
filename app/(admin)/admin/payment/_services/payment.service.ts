import AdminAxios from "../../../axios.config";

export async function GetPayments(page) {
  try {
    const res = await AdminAxios.get(`/payment?page=${page}&limit=8`);
    return await res.data.payments;
  } catch (err) {
    return err;
  }
}


export async function RemovePayment(paymentId) {
  try {
    const res = await AdminAxios.delete("/payment", { data: { id: paymentId } });
    return await res.data;
  } catch (err) {
    return err;
  }
}
