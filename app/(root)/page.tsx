"use client";
import React from "react";
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
import apple from "@/public/Apple logo.svg";
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
                <motion.div
                  animate={{ x: [null, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight
                    className="items-center text-center justify-center flex"
                    strokeWidth={1.7}
                  />
                </motion.div>
              </button>
              <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                View pricing
              </button>
            </div>
          </div>
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
