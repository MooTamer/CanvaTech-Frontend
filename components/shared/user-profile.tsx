"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function UserProfile() {
  return (
    <div className={cn("flex items-center")}>
      <motion.div
        className={cn("relative rounded-full overflow-hidden")}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/profile.jpg"
          alt="Profile"
          width={40}
          height={40}
          className={cn("rounded-full")}
        />
      </motion.div>
      <div className={cn("ml-2")}>
        <h1 className={cn("text-sm font-semibold")}>John Doe</h1>
        <p className={cn("text-xs text-gray-500")}>@johndoe</p>
      </div>
    </div>
  
  );
}
