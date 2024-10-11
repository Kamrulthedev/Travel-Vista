/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from "react";
import { useForm } from "react-hook-form";

const Verify = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data : any) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="bg-purple-100 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Premium Access Verification</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Amount Selection */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Select Amount:</label>
            <div className="flex space-x-4 items-center">
              <label className="flex flex-col items-center space-y-1">
                <input
                  type="radio"
                  value="weekly"
                  {...register("amount", { required: true })}
                  className="form-radio bg-white h-5 w-5 text-indigo-600"
                />
                <span>Weekly</span>
                <span className="text-xs text-gray-500">$5 per week</span>
              </label>
              <label className="flex flex-col items-center space-y-1">
                <input
                  type="radio"
                  value="monthly"
                  {...register("amount", { required: true })}
                  className="form-radio bg-white h-5 w-5 text-indigo-600"
                />
                <span>Monthly</span>
                <span className="text-xs text-gray-500">$20 per month</span>
              </label>
              <label className="flex flex-col items-center space-y-1">
                <input
                  type="radio"
                  value="yearly"
                  {...register("amount", { required: true })}
                  className="form-radio bg-white h-5 w-5 text-indigo-600"
                />
                <span>Yearly</span>
                <span className="text-xs text-gray-500">$200 per year</span>
              </label>
            </div>
            {errors.amount && <span className="text-red-500 text-sm">Amount selection is required</span>}
          </div>

          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name:</label>
            <input
              type="text"
              placeholder="Your name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
                   {errors.name && (
                  <p className="text-red-500 text-sm">
                    {errors.name.message?.toString()}
                  </p>
                )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email:</label>
            <input
              type="email"
              placeholder="Your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
                  {errors.email && (
                  <p className="text-red-500 text-sm">
                    {errors.email.message?.toString()}
                  </p>
                )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Phone Number:</label>
            <input
              type="tel"
              placeholder="Your phone number"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full px-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
                  {errors.phone && (
                  <p className="text-red-500 text-sm">
                    {errors.phone.message?.toString()}
                  </p>
                )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Address:</label>
            <textarea
              placeholder="Your address"
              {...register("address", { required: "Address is required" })}
              className="w-full px-4 bg-white py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
                 {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message?.toString()}
                  </p>
                )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 uppercase text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Verify aamarpay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
