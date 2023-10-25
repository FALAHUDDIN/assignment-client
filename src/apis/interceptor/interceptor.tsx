import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BACKEND,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: false,
});

export default apiClient;
