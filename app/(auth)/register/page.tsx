"use client";
import React, { useState } from "react";
import Image from "next/image";
import Wallpaper from "@/public/serviap-logistics-types-of-pallets1.jpg";
import backendUrl from "../../url.json";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    address_name: "",
    country: "",
    city: "",
    address_line_1: "",
    address_line_2: "",
    zip_code: "",
    phone_number: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const register = async () => {
    const response = await fetch(backendUrl.backendUrl + "auth/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const res = await response.json();
    console.log(response);
    if (response.status < 300 && response.status >= 200) {
      window.location.href = "/login";
    } else {
      alert(res.message);
    }
    return res;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-xl w-3/4 lg:w-[50%] justify-center rounded-2xl grid md:grid-cols-2 overflow-hidden">
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
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              id="first_name"
              className="border rounded-lg px-4 py-2"
              placeholder="First Name"
              onChange={handleChange}
            />
            <input
              type="text"
              id="last_name"
              className="border rounded-lg px-4 py-2"
              placeholder="Last Name"
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              className="border rounded-lg px-4 py-2"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              className="border rounded-lg px-4 py-2"
              placeholder="Password"
              onChange={handleChange}
            />
            <input
              type="text"
              id="address_name"
              className="border rounded-lg px-4 py-2"
              placeholder="Address Name"
              onChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                id="country"
                className="border rounded-lg px-4 py-2"
                placeholder="Country"
                onChange={handleChange}
              />
              <input
                type="text"
                id="city"
                className="border rounded-lg px-4 py-2"
                placeholder="City"
                onChange={handleChange}
              />
              <input
                type="text"
                id="address_line_1"
                className="border rounded-lg px-4 py-2"
                placeholder="Address Line 1"
                onChange={handleChange}
              />
              <input
                type="text"
                id="address_line_2"
                className="border rounded-lg px-4 py-2"
                placeholder="Address Line 2"
                onChange={handleChange}
              />
              <input
                type="text"
                id="zip_code"
                className="border rounded-lg px-4 py-2"
                placeholder="Zip Code"
                onChange={handleChange}
              />
              <input
                type="text"
                id="phone_number"
                className="border rounded-lg px-4 py-2"
                placeholder="Phone Number"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center">
            <button
              className="bg-blue-500 text-white rounded-lg py-2 px-8 hover:bg-blue-600 transition duration-300 ease-in-out"
              onClick={register}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
