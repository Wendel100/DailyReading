import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5258/api/Livro", // sua API .NET
  headers: {
    "Content-Type": "application/json",
  },
});
export default api;