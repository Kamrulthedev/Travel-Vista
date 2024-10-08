import envConfig from "@/config/envConfig";
import axios from "axios";
import { cookies } from "next/headers";
import Router from "next/router"; 

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      // Token has expired or is invalid
      console.error("Unauthorized access - Redirecting to login.");
      
      // Clear the access token
      cookies().delete("accessToken");

      // Redirect the user to the login page
      Router.push("/login"); 

      return Promise.reject(error);
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;
