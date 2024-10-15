/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginUser, registerUser, UpdateUser } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";


//Register User
export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast.success("User registration successful.");
    },
    onError: (error) => {
      // console.log(error)
      toast.error(error.message);
    },
  });
};


//Login User
export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      toast.success("User login successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};


//Update User
export const useUserUpdate = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["UPDATE_USER"],
    mutationFn: async (UpdateData) => await UpdateUser(UpdateData),
    onSuccess: () => {
      toast.success("Update Data successful.");
    },
    onError: (error) => {
      console.log(error)
      toast.error(error.message);
    },
  });
};
