import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo1 from "@/public/logos/Apple logo.svg";
import logo2 from "@/public/logos/logo2.svg";
import logo3 from "@/public/logos/logo3.svg";
import logo4 from "@/public/logos/logo4.svg";
import logo5 from "@/public/logos/logo5.svg";
import logo6 from "@/public/logos/logo6.svg";
import logo7 from "@/public/logos/logo7.svg";

export default function LogoScroll() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
  return (
    <div className="flex">
      {logos.map((logo, index) => (
        <div key={index}>
          <Image src={logo} className="opacity-800 lg:m-20 md:h-20 md:w-20" alt={`Logo ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
