import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) config.headers["x-api-key"] = token;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
