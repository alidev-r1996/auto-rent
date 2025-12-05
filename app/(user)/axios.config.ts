import axios from "axios";

const UserAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/user`,
});

export default UserAxios;
