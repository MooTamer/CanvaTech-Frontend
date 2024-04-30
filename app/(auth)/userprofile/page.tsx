"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import picture from "@/public/base-database.avif";

export default function Page() {
  return (
    <div className="wrap">
	<button className="button fill">Fill</button>
	<button className="button outline">Outline</button>
	<button className="button gradient">Gradient</button>
	<button className="button shadow">Shadow</button>
	<button className="button image">Image</button>
</div>
  );
}
