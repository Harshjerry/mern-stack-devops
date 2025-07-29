import axios from "axios";




const BASE_URL = process.env.BACKEND_URL || "http://localhost:5000/api/";

// Check if localStorage item exists before accessing its properties
const persistRoot = localStorage.getItem("persist:root");
const Token = persistRoot ? JSON.parse(JSON.parse(persistRoot)?.user)?.currentUser?.accessToken : null;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${Token}` },
});
