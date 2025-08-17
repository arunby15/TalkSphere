import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === "development" 
    ? "http://localhost:5003/api" 
    : "https://talksphere-backend-8684.onrender.com/api",
  withCredentials: true,  // <--- This is important
});
