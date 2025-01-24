import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://backend-nma9.onrender.com/api",
  withCredentials: true,
});
