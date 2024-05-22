import React from "react";
import "tailwindcss/tailwind.css";
import Wallpaper from "@/public/serviap-logistics-types-of-pallets1.jpg";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-xl w-3/4  lg:w-[50%] lg:h-[40%]  justify-center rounded-2xl grid md:grid-cols-2 overflow-hidden flex">
        <div className="w-auto flex">
          <Image
            src={Wallpaper}
            alt="PP"
            className="w-full h-full object-cover opacity-75"
          />
        </div>
        <div className="px-10 py-12 flex flex-col w-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              Create Account<span className="text-blue-500">.</span>
            </h2>
            <p className="text-sm text-gray-500">
              Already a member?{" "}
              <a href="/login" className="text-blue-500">
                Login
              </a>
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="md:w-1/2 md:pr-2">
              <input
                type="text"
                id="firstname"
                className="input border rounded-lg w-full px-4 py-2"
                placeholder="First Name"
              />
            </div>
            <div className="md:w-1/2 md:pl-2">
              <input
                type="text"
                id="lastname"
                className="input border rounded-lg w-full px-4 py-2"
                placeholder="Last Name"
              />
            </div>
          </div>
          <input
            type="email"
            id="email"
            className="input border rounded-lg w-full mt-4 px-4 py-2"
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            className="input border rounded-lg w-full mt-4 px-4 py-2"
            placeholder="Password"
          />
          <p className="text-sm text-gray-500 mt-4">
            Forgot your password?{" "}
            <a href="/resetPassword" className="text-blue-500">
              Reset Password
            </a>
          </p>
          <div className="mt-8 flex items-center justify-center">
            <button className="bg-blue-500 text-white rounded-lg py-2 px-8 hover:bg-blue-600 transition duration-300 ease-in-out">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
