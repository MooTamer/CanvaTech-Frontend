"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import "tailwindcss/tailwind.css";
import Wallpaper from "@/public/serviap-logistics-types-of-pallets1.jpg";
import backendUrl from "../../url.json";
import EmailVerificationPage from "../../(root)/verifyEmail/page";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const response = await fetch(backendUrl.backendUrl + "auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
    });
    const res = await response.json();
    console.log(response);
    if (response.status < 300 && response.status >= 200) {
      window.location.href = "/";
    }
    else{
      alert(res.message);
    }
    return res;
  };

  return (
    <div className="flex justify-center items-center w-auto h-screen">
      <div className="bg-white shadow-3xl w-3/4  lg:w-[50%] lg:h-[40%]  justify-center rounded-2xl overflow-hidden grid md:grid-cols-2">
        <div className="w-auto flex">
          <Image
            src={Wallpaper}
            alt="PP"
            className="w-full h-full object-cover opacity-75"
          />
        </div>
        <div className="w-auto p-8 flex items-center justify-center flex-col">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              Hello Again<span className="text-blue-500">!</span>
            </h2>
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-500">
                Sign up
              </a>
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              id="email"
              className="border rounded-lg px-4 py-2"
              placeholder="Email"
              required={true}
              onChange={(e) => setEmail(e.currentTarget.value)}
              onInput={(e) => setEmail(e.currentTarget.value)}
            />
            <input
              type="password"
              id="password"
              className="border rounded-lg px-4 py-2"
              placeholder="Password"
              onChange={(e) => setPassword(e.currentTarget.value)}
              onInput={(e) => setPassword(e.currentTarget.value)}
            />
            <p className="text-sm text-gray-500">
              Forgot your password?{" "}
              <a href="/resetPassword" className="text-blue-500">
                Reset Password
              </a>
            </p>
          </div>
          <div className="mt-8">
            <button className="bg-blue-500 text-white rounded-lg py-2 px-8 hover:bg-blue-600 transition duration-300 ease-in-out w-full"
            onClick={login}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
