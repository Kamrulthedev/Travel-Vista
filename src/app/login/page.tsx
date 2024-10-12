/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import LoginNavbar from "@/components/ui/loginpage/LoginNavber";
import { useUser } from "@/context/user.provider";
import { useUserLogin } from "@/hooks/auth.hook";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";



const Login = () => {
  const { setIsLoading: userLoading } = useUser();
  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const userData = {
      email: data.email,
      password: data.password,
    };

    handleUserLogin(userData);
    userLoading(true);


  };
  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  

  return (
    <div className="bg-sky-100 p-6">
      <LoginNavbar></LoginNavbar>

      <div className="lg:flex justify-around p-6 pb-10">
        {/* First div: Hidden on small devices, visible on large */}
        <div className="hidden lg:flex flex-col justify-center  text-black font-serif h-screen mx-auto">
          <h1 className="text-7xl mb-6">
            The trip of your dreams <br />
            starts with Lonely <br />
            Planet
          </h1>
          <p className="text-xl mt-4">
            Covering hundreds of destinations and <br />
            countless experiences, Lonely Planet is your <br />
            guide for traveling better and smarter.
          </p>
        </div>

        {/* Second div: Login form */}
        <div className="flex justify-center items-center h-screen md:h-full lg:w-[500px] w-full">
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg font-serif">
            <h2 className="text-2xl  text-black text-center">
              Welcome to Travel Vista
            </h2>
            <p className="text-center text-black">Log in to your account</p>
            <button className="w-full flex items-center justify-center p-3 border-2  gap-6 rounded-3xl">
              <img
                src="https://i.ibb.co.com/YLB5g3z/google.png"
                className="w-6 h-6"
                alt=""
              />
              <p className="text-sky-500 text-base">Continue with Google</p>
            </button>
            <button className="w-full flex items-center justify-center p-3 border-2 gap-6 rounded-3xl">
              <img
                src="https://i.ibb.co.com/LvPFmBj/social.png"
                className="w-6 h-6"
                alt=""
              />
              <p className="text-sky-500"> Continue with GitHuub</p>
            </button>

            <div className="text-center text-black flex items-center justify-center space-x-4">
              <p className="border-b-2 flex-grow"></p>
              <p>OR</p>
              <p className="border-b-2 flex-grow"></p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full p-3 border rounded-lg bg-white text-black"
                  placeholder="Email address *"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    {errors.email.message?.toString()}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="w-full p-3 border rounded-lg bg-white text-black"
                  placeholder="Password *"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message?.toString()}
                  </p>
                )}
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register("notRobot", {
                    required: "Must be entered this field",
                  })}
                  className="mr-2 text-black"
                />
                <span className="text-black">I&apos;m not a robot</span>
              </div>

              {errors.notRobot && (
                <p className="text-red-500 text-sm">
                  {errors.notRobot.message?.toString()}
                </p>
              )}

              <div className="text-right">
                <a href="/" className="text-blue-500">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className={`w-full p-3 bg-blue-500 text-white rounded-lg ${
                  isPending ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={isPending}
              >
                {isPending ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l1.426 1.426A7.97 7.97 0 0112 20v-4a4 4 0 00-6-3.709V17.29z"
                      />
                    </svg>
                    Logiin..
                  </div>
                ) : (
                  "Continue"
                )}
              </button>
            </form>

            <div className="text-center text-black">
              <a href="/register" className="text-blue-500 mr-2">
                Sign Up
              </a>
              ? if you don&apos;t have an account.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
