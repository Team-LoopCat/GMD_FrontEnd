import axios, { AxiosError } from "axios";
import { Cookies } from "react-cookie";

export const instance = axios.create({
  baseURL: "http://3.36.26.135:8080",
  timeout: 10000,
});

const cookies = new Cookies();

instance.interceptors.request.use(
  (config) => {
    const accessToken = cookies.get("accessToken");
    const returnConfig = {
      ...config,
    };
    if (accessToken) {
      returnConfig.headers!["Authorization"] = `Bearer ${accessToken}`;
    }
    return returnConfig;
  },
  (error: AxiosError) => Promise.reject(error)
);
