"use client";
import Image from "next/image";
import React, { useState } from "react";
import Wallpaper from "@/public/serviap-logistics-types-of-pallets1.jpg";
import backendUrl from "../../url.json";

const VerifyResetPasswordPage = (params: any) => {
  const [verificationCode, setVerificationCode] = useState(params.searchParams.verificationCode);
  const [newPassword, setNewPassword] = useState("");

  const resetPassword = async () => {
    const response = await fetch(backendUrl.backendUrl + "auth/reset-password/confirm", {
      method: "POST",
      body: JSON.stringify({
        resetCode: verificationCode,
        newPassword: newPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    if (response.status < 300 && response.status >= 200) {
      window.location.href = "/login";
    } else {
      alert(res.message);
    }
    return res;
  };

  return (
    <div className="flex justify-center items-center w-auto h-screen">
      <div className="bg-white shadow-3xl w-3/4 lg:w-[50%] lg:h-[40%] justify-center rounded-2xl overflow-hidden grid md:grid-cols-2">
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
              Reset Password<span className="text-blue-500">!</span>
            </h2>
          </div>
          <div className="flex flex-col space-y-4">
            <input
              type="password"
              id="newPassword"
              className="border rounded-lg px-4 py-2"
              placeholder="New Password"
              onInput={(e) => setNewPassword(e.currentTarget.value)}
            />
          </div>
          <div className="mt-8">
            <button className="bg-blue-500 text-white rounded-lg py-2 px-8 hover:bg-blue-600 transition duration-300 ease-in-out w-full"
              onClick={resetPassword}>
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyResetPasswordPage;
