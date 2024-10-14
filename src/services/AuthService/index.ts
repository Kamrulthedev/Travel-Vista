/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "@/lib/AxiosInstance";

export const registerUser = async (userData: FieldValues) => {
  console.log(userData);
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);
    console.log(data);
    if (data.success) {
      // Only store accessToken
      cookies().set("accessToken", data?.data?.accessToken);
    }

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    if (error.response) {
      console.log("Error response:", error.response.data);
    } else if (error.request) {
      console.log("Error request:", error.request);
    } else {
      console.log("Error message:", error.message);
    }
    throw new Error(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);
    if (data.success) {
      // Only store accessToken
      cookies().set("accessToken", data?.data?.accessToken);
    }
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export const logout = () => {
  cookies().delete("accessToken");
  // No need to delete refreshToken since it's not used
};


//update user
export const UpdateUser = async (UpdateData: FieldValues) => {
  console.log(UpdateData);
  try {
    const { data } = await axiosInstance.post(
      `/users/${UpdateData?.id}`,
      UpdateData
    );
    if (data.success) {
      // Only store accessToken
      cookies().set("accessToken", data?.data?.accessToken);
    }
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};


//get current user
export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      password: decodedToken.password,
      phone: decodedToken.phone,
      role: decodedToken.role,
      profileImg: decodedToken.profileImg,
      address: decodedToken.address,
      needsPasswordChange: decodedToken.needsPasswordChange,
      isDeleted: decodedToken.isDeleted,
      createdAt: decodedToken.createdAt,
      updatedAt: decodedToken.updatedAt,
    };
  }

  return decodedToken;
};

export const getNewAccessToken = async () => {
  try {
    const refreshToken = cookies().get("refreshToken")?.value;

    const res = await axiosInstance({
      url: "/auth/refresh-token",
      method: "POST",
      withCredentials: true,
      headers: {
        cookie: `refreshToken=${refreshToken}`,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error("Failed to get new access token");
  }
};
