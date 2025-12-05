import axios from "axios";

const api = axios.create({
  // baseURL: "http://127.0.0.1:8000/",
   
  baseURL: "https://todo-list-fullstack-5prd.onrender.com/",
  });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access"); // we use 'access'
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;