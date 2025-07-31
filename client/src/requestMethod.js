import axios from "axios";

<<<<<<< HEAD
const BASE_URL = "http://localhost:5000/api/";
=======



const BASE_URL = "http://54.175.87.142:5000/api/";
>>>>>>> c5958adc4bc0d06a6ba7f717ee7e488f28d830ad

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
