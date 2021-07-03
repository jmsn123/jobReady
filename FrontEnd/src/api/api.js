import axios from "axios";
import Product from "../components/Product";
const api = axios.create({
  baseURL: "/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user_t");
    if (token) {
      config.headers["Authorization"] = `Token${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
