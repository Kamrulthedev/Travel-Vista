"use server";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "@/lib/AxiosInstance";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/users/create-user", userData);
    console.log(data);
    if (data.success) {
      // Only store accessToken
      cookies().set("accessToken", data?.data?.accessToken);
    }

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error)
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
    throw new Error(error);
  }
};

export const logout = () => {
  cookies().delete("accessToken");
  // No need to delete refreshToken since it's not used
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedToken = null;

  console.log(accessToken)

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    // return {
    //   _id: decodedToken._id,
    //   name: decodedToken.name,
    //   email: decodedToken.email,
    //   phone: decodedToken.mobileNumber,
    //   role: decodedToken.role,
    //   profileImg: decodedToken.profilePhoto,
    // };
  }

  return decodedToken;
};
