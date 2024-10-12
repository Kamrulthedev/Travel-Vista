import envConfig from "@/config/envConfig";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    console.log(accessToken);
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
    console.log(response)
    return response;
  },
  function (error) {
    console.log(error)
    if (error?.response?.status === 401) {
      // Token has expired or is invalid
      console.error("Unauthorized access - Redirecting to login.");
      
      // Clear the access token
      cookies().delete("accessToken");

      // Redirect the user to the login page
      redirect("/login");

      return Promise.reject(error);
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;
