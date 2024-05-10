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
import logo8 from "@/public/logos/logo8.svg";
import logo9 from "@/public/logos/logo9.svg";
import logo10 from "@/public/logos/logo10.svg";
import logo11 from "@/public/logos/logo11.svg";



export default function LogoScroll() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11];
  return (
    <div className="flex items-center flex-col m-4 h-96 w-auto justify-center">
      <h1 className="responsive-subtitles mb-10">Trusted by 150+ companies</h1>
      <div className="flex gap-2 xl:gap-10 2xl:gap-16 flex-row">
        {logos.map((logo, index) => (
          <div className="items-center flex-row  justify-center flex" key={index}>
            <Image
              src={logo}
              className="opacity-800 mx-5  h-20 w-20 md:h-20 md:w-20"
              alt={`Logo ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
