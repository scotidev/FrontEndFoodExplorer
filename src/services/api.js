import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-z2el.onrender.com",
  withCredentials: true,
});
