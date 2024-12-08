// utils/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    // Add an Authorization header if a token exists
    // const token = localStorage.getItem("token"); // Or use cookies/session
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    // console.log("Request URL:", config.url);
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    console.log("Response received:", response.data);
    return response;
  },
  (error) => {
    // console.error("Response error:", error.message);

    // Handle specific HTTP errors
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        console.error("Unauthorized - Redirecting to login.");
        window.location.href = "/login";
      }
      if (status === 500) {
        console.error("Internal Server Error. Try again later.");
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
