import axios from "axios";

// Create a reusable Axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api/chat",
  // ✅ Use NEXT_PUBLIC_* so it's available on client & server
});

export default api;