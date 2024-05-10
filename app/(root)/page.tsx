"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { Waitlist } from "@/components/shared/waitlist";
import { HeroScroll } from "@/components/shared/scrollTest";
import { CustomerReviews } from "@/components/shared/customer-reviews";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import customize from "@/public/People Building Metaverse 3D.png";
import brand from "@/public/Design Thinking.png";

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
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                <div className="bg-lime-300 border-0 transparent-bg flex justify-center items-center flex-row rounded-[25px] pl-[6px] pr-[7px] py-[6px] mb-[32px] ">
                  <p className="flex flex-row items-center justify-center ">
                    <span className="bg-lime-500 border-0 text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px] font-bold  flex flex-row rounded-[20px] py-[5px] px-[10px]">
                      What's new
                    </span>
                    <span className="pl-3 pr-1 text-center text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px] items-center flex ">
                      Introducing renting palettes
                    </span>

                    <ArrowRight
                      className="items-center text-center justify-center flex"
                      strokeWidth={1.8}
                    />
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
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
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1 }}
            >
              <div className="flex items-center flex-col justify-center">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold z-20 text-neutral-800">
                  Our Services
                </h1>
                <div className="container flex flex-row justify-center p-4 ">
                  <div className="flex flex-row space-x-14">
                    <div className="flex flex-col items-center justify-center">
                     <div className=" h-fit flex items-center justify-center">
                        <Image
                          src={customize}
                          width={300}
                          height={300}
                          alt="brush"
                        />
                      </div>
                      <h2 className="text-lg font-semibold text-neutral-800">
                        Design Your Own Palette
                      </h2>
                      <p className="text-neutral-500">
                        Craft your perfect palette with customizable colors,
                        sizes, and layouts, reflecting your unique style.
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className=" h-fit flex items-center justify-center">
                        <Image
                          src={brand}
                          width={300}
                          height={300}
                          alt="brush"
                        />
                      </div>
                      <h2 className="text-lg font-semibold text-neutral-800">
                        Brand Your Palette
                      </h2>
                      <p className="text-neutral-500">
                        Elevate your brand identity by imprinting your logo or
                        brand colors onto your palette for a professional,
                        distinctive look.
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                     <div className=" h-fit flex items-center justify-center">
                        <Image
                          src={customize}
                          width={300}
                          height={300}
                          alt="brush"
                        />
                      </div>
                      <h2 className="text-lg font-semibold text-neutral-800">
                        Customize Accessories
                      </h2>
                      <p className="text-neutral-500">
                        Personalize your palette with dividers, labels, and
                        more, adding both functionality and flair to your
                        creative workspace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex">
            <h1>Trusted by 150+ companies</h1>
          </div>

          <CustomerReviews />
          <HeroScroll />
          <Waitlist />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
