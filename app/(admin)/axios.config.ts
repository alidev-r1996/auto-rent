import axios from "axios";

const AdminAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/admin`,
});

export default AdminAxios;
