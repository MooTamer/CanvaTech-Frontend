"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import picture from "@/public/girl.svg";
import picture2 from "@/public/boy.svg";

export default function Page() {
  return (
    <>
      <div className="bg-stone-950  flex items-center justify-center w-full h-[100vh] p-4">
        <Image
          className="w-[20rem] z-50 left-[130px] top-[-180px] relative max-w-full overflow-hidden h-[30.125rem] object-cover"
          alt=""
          src={picture2}
        />
        <div className="w-[50rem] z-30 trans p-7 flex flex-wrap gap-8 rounded-[41px]">
          <div className="title h-[15rem] flex gap-4 flex-col p-4 w-auto z-40 trans rounded-[13px] bg-stone-950">
            <Image
              className="w-[30px] z-50 relative rounded-full overflow-hidden h-[30px] object-cover"
              alt=""
              src={picture2}
            />
            <p className="center text-default text-2xl ">Mohamed Tamer</p>
          </div>
        </div>

        <Image
          className="w-[20rem] relative max-w-full overflow-hidden left-[-90px] -z-999 h-[27.063rem] object-cover"
          alt=""
          src={picture}
        />
      </div>
    </>
  );
}
