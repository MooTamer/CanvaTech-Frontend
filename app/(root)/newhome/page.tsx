"use client"
import React, { useEffect, useRef, useState } from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { Waitlist } from "@/components/shared/waitlist";
import { HeroScroll } from "@/components/shared/scrollTest";
import { CustomerReviews } from "@/components/shared/customer-reviews";
import { motion, AnimatePresence } from "framer-motion";
import Notification from "@/components/shared/notification";
import HomeCards from "@/components/cards/services";
import Image from "next/image";
import Cube from "@/public/3D.png";
import Cube2 from "@/public/3D2.png";
import Cube3 from "@/public/3D3.png";
import LogoScroll from "@/components/shared/logos-scroll";
import Pricings from "@/components/shared/pricings";
import Link from "next/link";
import ButtonComponent from "@/components/shared/View-Categories-Button";
// import Categories from "./Categories/page";

export default function Home(props: React.FC) {
  const [isOpen, setIsOpen] = useState(false);

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
              <ButtonComponent setIsOpen={setIsOpen} />
              <Link legacyBehavior href="/GuestViewProducts">
                <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                  View Products
                </button>
              </Link>
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
          <div className="flex gradient flex-col items-center justify-center h-screen w-screen">
            {isOpen && (
              <div className="z-50">
                <Categories isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            )}
            <CustomerReviews />
          </div>

          <HeroScroll />
          <Waitlist />
        </motion.div>
      </AnimatePresence>
    </div>

    
  );
}
