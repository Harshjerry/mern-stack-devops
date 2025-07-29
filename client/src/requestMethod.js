import axios from "axios";

const BASE_URL = "https://noirbackend-8defa3c05eb7.herokuapp.com/api";

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
