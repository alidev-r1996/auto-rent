import AdminAxios from "@/app/(admin)/axios.config";

export async function GetDiscounts(page) {
  try {
    const res = await AdminAxios.get(`/discount?page=${page}&limit=8`);
    return await res.data.discounts;
  } catch (err) {
    return err;
  }
}

export async function RemoveDiscount(discountId) {
  try {
    const res = await AdminAxios.delete("/discount", { data: { id: discountId } });
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function UpdateDiscountStatus(discountId) {
  try {
    const res = await AdminAxios.patch(`/discount`, { id: discountId });
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function CreateDiscount(discount) {
  try {
    const res = await AdminAxios.post("/discount", { discount });
    return await res.data;
  } catch (err) {
    return err;
  }
}
