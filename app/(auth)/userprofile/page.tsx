"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import picture from "@/public/girl.svg";
import picture2 from "@/public/test.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import persona2 from "@/public/persona2.jpg";
import onitsway from "@/public/on its way.svg";
import delivered from "@/public/Dilevered.svg";
import preparing from "@/public/Processing.svg";
import order1 from "@/public/3D.png";
import order2 from "@/public/3D2.png";

import { ArrowUpRight } from "lucide-react";
import Stepper from "@/components/shared/stepper";

export default function Page() {
  return (
    <div className="container justify-center flex flex-col  xl:my-32 xl:py-8 ">
      <motion.div></motion.div>
      <h1 className="text-5xl  sm:text-6xl font-bold transparent-text">
        Profile
      </h1>

      <div className=" grid-cols-3 lg:grid-col-2 sm:grid-col-1 overflow-scroll justify-center z-30 [background:linear-gradient(120deg,_rgba(239,_239,_239,_0.7),_rgba(239,_239,_239,_0.5))] transparent-bg grid gap-4 p-7 rounded-[41px]">
        <div className="cont col-span-1 row-span-4 ">
          <div className=" flex flex-col outer-box p-4 justify-evenly">
            <div className="flex flex-col items-center  w-full max-w-lg justify-between gap-4 ">
              <div className="items-center  justify-between gap-4 flex flex-col p-4">
                <Image
                  className="w-[200px] h-[200px] z-50 relative rounded-full overflow-hidden  object-cover"
                  alt="Profile Picture"
                  src={persona2}
                />
                <p className="text-neutral-600 font-bold md:text:4xl text-3xl xl:text-5xl mt-2">
                  Mohamed Tamer
                </p>
                <p className="default-text text-transparent text-neutral-700 text-2xl">
                  @MooTamer
                </p>
              </div>
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="flex gap-3 flex-row">
                  <label className="default-text p-2" htmlFor="email">
                    Email:
                  </label>
                  <input
                    type="text"
                    className="transparent-bg2"
                    defaultValue={"mohamedtamer@gmail.com"}
                  />
                </div>

                <div className="flex gap-2 flex-row">
                  <label className="default-text p-2" htmlFor="number">
                    Phone:
                  </label>
                  <input
                    type="text"
                    className=" transparent-bg2 "
                    defaultValue={"(+20)01144500700"}
                  />
                </div>
              </div>
            </div>
            <div className="flex-row">
              <button className="bg-blue-600 p-3 px-8 mr-2 default-hover text-zinc-300 rounded-[35px]">
                Edit
              </button>
              <button
                disabled
                className="bg-blue-600 disabled:bg-neutral-500 p-3 px-10  default-hover text-zinc-300 rounded-[35px]"
              >
                confirm
              </button>
            </div>
          </div>
        </div>

        <div className=" cont col-span-2 row-span-1">
          <div className=" overflow-scroll outer-box ">
            <ArrowUpRight className="right-[-390px] top-[-5px] text-zinc-800 h-[7rem] w-[7rem] relative flex" />
            <h2 className="text-3xl sm:text-4xl font-semibold transparent-text ">
              Orders
            </h2>
            <div className="cont w-fit inner-box flex">
              <div className=" flex flex-row m-4 gap-4 h-full items-center justify-center">
                <div className="inner-box h-20 w-20">
                  <Image
                    src={order1}
                    className="  relative h-10 w-10"
                    alt=""
                  ></Image>
                </div>
                <Stepper />
              </div>
            </div>
            <div className="cont w-fit inner-box flex">
              <div className=" flex flex-row gap-4 m-4 h-full items-center justify-center">
                <div className="inner-box h-20 w-20">
                  <Image
                    src={order1}
                    className="  relative h-10 w-10"
                    alt=""
                  ></Image>
                </div>
                <Stepper />
              </div>
            </div>
            <div className="cont w-fit inner-box flex">
              <div className=" flex flex-row gap-4 m-4 h-full items-center justify-center">
                <div className="inner-box h-20 w-20">
                  <Image
                    src={order1}
                    className="  relative h-10 w-10"
                    alt=""
                  ></Image>
                </div>
                <Stepper />
              </div>
            </div>
          </div>
        </div>

        <div className=" cont  col-span-1 row-span-1">
          <div className="outer-box bg-blue-900">
            <ArrowUpRight className="relative right-[-175px] top-[-5px] text-zinc-800 h-7 w-7" />
            <h2 className="text-5xl  my-14 flex from-neutral-100 to-neutral-300 sm:text-5xl font-semibold relative top-[-20px] transparent-text">
              Address Book
            </h2>
          </div>
        </div>

        <div className=" cont  col-span-1 row-span-1 ">
          <div className="overflow-scroll bg-blue-600 justify-center items-center  outer-box">
            <ArrowUpRight className="relative right-[-175px] top-[-5px] text-zinc-800 h-7 w-7" />
            <h2 className="text-5xl  my-14 flex sm:text-5xl from-neutral-100 to-neutral-300 font-semibold relative top-[-20px] transparent-text">
              Contact Us
            </h2>
          </div>
        </div>
      </div>

      {/* <motion.div>
          <Image
            className="floating-svgs top-[180px] right-[-50px] "
            alt=""
            src={picture}
          />
        </motion.div> */}
    </div>
  );
}
