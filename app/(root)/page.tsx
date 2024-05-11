"use client";
import React, { useRef } from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { Waitlist } from "@/components/shared/waitlist";
import { HeroScroll } from "@/components/shared/scrollTest";
import { CustomerReviews } from "@/components/shared/customer-reviews";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Notification from "@/components/shared/notification";
import HomeCards from "@/components/cards/services";
import Image from "next/image";
import Cube from "@/public/3D.png";
import Cube2 from "@/public/3D2.png";
import Cube3 from "@/public/3D3.png";
import LogoScroll from "@/components/shared/logos-scroll";

export default function Home() {
  return (
    <div>
      <Spotlight />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="container h-screen w-screen relative flex flex-col items-center space-around justify-center p-12">
            <Image
              className="floating-svgs top-[17%] sm:top-[15%] sm:left-[10%]"
              alt=""
              draggable="false"
              src={Cube}
            />

              <Image
                className="floating-svgs  top-[80%] right-[65%] sm:top-2/3 sm:right-3/4"
                alt=""
                draggable="false"
                src={Cube2}
              />

            <Notification />
            <h1 className="responsive-titles">CanvaTech</h1>
            <p className=" text-xl md:text-3xl lg:text-4xl my-[32px]  z-20 text-neutral-700 ">
              Designing dreams, one palette at a time.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
              <button className="flex flex-row w-40 h-10 rounded-xl bg-black  dark:border-white border-transparent p-1 items-center justify-center text-white text-sm">
                <span className="flex text-center justify-center mr-3">
                  Try for free
                </span>

                <ArrowRight
                  className="items-center text-center justify-center flex"
                  strokeWidth={1.7}
                />
              </button>
              <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                View pricing
              </button>
            </div>
          </div>
          <Image
            className="floating-svgs top-[70%] sm:top-1/3 right-[10%] "
            alt=""
            draggable="false"
            src={Cube3}
          />
          <HomeCards />
          <LogoScroll />
          <CustomerReviews />
          <HeroScroll />
          <Waitlist />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
