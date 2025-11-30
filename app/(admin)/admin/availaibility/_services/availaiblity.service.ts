import AdminAxios from "@/app/(admin)/axios.config";

export async function GetAvailaibility(page) {
  try {
    const res = await AdminAxios.get(`/inventory?page=${page}&limit=8`);
    return await res.data.availaibility;
  } catch (err) {
    return err;
  }
}


export async function RemoveInventory(inventoryId) {
  try {
    const res = await AdminAxios.delete("/inventory", { data: { id: inventoryId } });
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function CreateInventory(inventory) {
  try {
    const res = await AdminAxios.post("/inventory", { inventory });
    return await res.data;
  } catch (err) {
    return err;
  }
}
