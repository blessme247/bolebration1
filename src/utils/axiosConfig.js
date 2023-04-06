
import axios from "axios";


// instance of axios
const axiosInstance = axios.create({
  baseURL: `http://5.189.147.239:3000/`,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
}

  })


export default axiosInstance;
