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

import { ArrowUpRight } from "lucide-react";

export default function Page() {
  return (
    <div className="container justify-center flex flex-col  xl:my-32 xl:py-8 ">
      <motion.div></motion.div>
      <h1 className="text-5xl  sm:text-6xl font-bold transparent-text">
        Profile
      </h1>

      <div className="overflow-scroll justify-center z-30 [background:linear-gradient(120deg,_rgba(239,_239,_239,_0.7),_rgba(239,_239,_239,_0.5))] transparent-bg grid xl:grid-cols-3 md:grid-col-2 grid-col-1 gap-4 p-7 rounded-[41px]">
        <div className="cont col-span-1 row-span-2 xl:row-span-4 ">
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
              <div className="flex flex-col gap-4">
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
            <button className="bg-blue-600 p-3 px-20  default-hover text-zinc-300 rounded-[35px]">
              Edit
            </button>
          </div>
        </div>

        <div className=" cont xl:col-span-2 col-span-1 row-span-1">
          <div className=" overflow-scroll outer-box ">
            <ArrowUpRight className="right-[-390px] top-[-5px] text-zinc-800 h-[7rem] w-[7rem] relative flex" />
            <h2 className="text-3xl sm:text-4xl font-semibold transparent-text ">
              Orders
            </h2>
            <div className=" overflow-scroll flex-row inner-box">
              <div className="h-20">
                <Image
                  alt="Delivered"
                  src={delivered}
                  className="flex h-full w-full"
                ></Image>
              </div>
              <p className="flex default-text overflow-scroll">
                Hey Mo! Your order with number #123456 has been successfully
                delivered! Enjoy your purchase! 😊
              </p>
            </div>
            <div className=" overflow-scroll flex-row inner-box">
              <div className="w-[100px] h-[100px]">
                <Image
                  alt="on its way"
                  src={preparing}
                  className="flex h-full w-full "
                ></Image>
              </div>
              <p className="flex w-fit default-text overflow-scroll">
                Hi Mo! Just a quick update: your order with number #658216 is
                currently being processed. We'll let you know once it's ready to
                ship! Thanks for your patience! 🛠️
              </p>
            </div>

            <div className=" inner-box flex-row">
              <div className="w-[100px] h-[100px]">
                <Image
                  alt="on its way"
                  src={onitsway}
                  className="flex h-full w-full "
                ></Image>
              </div>
              <p className="flex default-text overflow-scroll">
                Hello Mo! Exciting news - your order with number #875422 is now
                on its way! Keep an eye on your tracking for updates. Any
                questions? Feel free to reach out! 🚚✨
              </p>
            </div>
          </div>
        </div>
        <div className=" cont  col-span-1 row-span-2">
          <div className="outer-box bg-blue-900">
            <ArrowUpRight className="relative right-[-175px] top-[-5px] text-zinc-800 h-7 w-7" />
            <h2 className="text-5xl  my-14 flex sm:text-5xl font-semibold relative top-[-20px] transparent-text">
              Address Book
            </h2>
          </div>
        </div>

        <div className=" cont  col-span-1 row-span-2 ">
          <div className="overflow-scroll bg-blue-600 justify-center items-center  outer-box">
            <ArrowUpRight className="relative right-[-175px] top-[-5px] text-zinc-800 h-7 w-7" />
            <h2 className="text-5xl  my-14 flex sm:text-5xl font-semibold relative top-[-20px] transparent-text">
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
