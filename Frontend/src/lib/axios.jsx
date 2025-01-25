import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-deploy-ejxo.onrender.com/api",
  withCredentials: true,
});
