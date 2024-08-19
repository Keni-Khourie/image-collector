import axios from "axios";

const backendURL = "http://localhost:3200"
const axiosInstance = axios.create({
  baseURL: backendURL,
 // withCredentials: true,
});

export default axiosInstance;