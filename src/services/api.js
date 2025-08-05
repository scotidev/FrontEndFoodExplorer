import axios from "axios";

const isProduction = import.meta.env.PROD;

const baseURL = isProduction
  ? "https://foodexplorer-api-z2el.onrender.com"
  : "http://localhost:3333";

export const api = axios.create({
  baseURL,
  withCredentials: true,
});
