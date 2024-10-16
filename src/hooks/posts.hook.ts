/* eslint-disable @typescript-eslint/no-explicit-any */
import { createPost } from "@/services/Posts";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";


export const useCreatePost = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData) => await createPost(postData),
    onSuccess: () => {
      toast.success("Post created successfully");
    },
    onError: (error) => {
      console.log(error)
      toast.error(error.message);
    },
  });
};
