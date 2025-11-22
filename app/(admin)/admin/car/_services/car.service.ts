import AdminAxios from "@/app/(admin)/axios.config";

export async function GetCars(page) {
  try {
    const res = await AdminAxios.get(`/car?page=${page}&limit=8`);
    return await res.data.cars;
  } catch (err) {
    return err;
  }
}


export async function RemoveCar(carId) {
  try {
    const res = await AdminAxios.delete("/car", { data: { id: carId } });
    return await res.data;
  } catch (err) {
    return err;
  }
}

export async function CreateBlog(blog) {
  try {
    const res = await AdminAxios.post("/blog", { blog });
    return await res.data;
  } catch (err) {
    return err;
  }
}
