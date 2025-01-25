import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-deploy-backend-p3f1.onrender.com/api",
  withCredentials: true,
});
