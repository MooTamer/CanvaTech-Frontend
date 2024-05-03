"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import picture from "@/public/girl.svg";
import picture2 from "@/public/test.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pp from "@/public/file0.png";
import persona2 from "@/public/persona2.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import onitsway from "@/public/on its way.svg";
import delivered from "@/public/Dilevered.svg";
import preparing from "@/public/Processing.svg";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import link from "@/public/link.svg";
import contact from "@/public/image.png";

library.add(fab, fas, far);

export default function Page() {
  return (
    <BackgroundGradientAnimation>
      <div className="container justify-center flex flex-col mx-auto py-20 ">
        <motion.div>

        </motion.div>
        <h1 className="text-5xl  sm:text-6xl font-bold transparent-text">
          Profile
        </h1>

        <div className="overflow-scroll justify-center z-30 transparent-bg grid grid-cols-3 gap-4 p-7 rounded-[41px]">
          <div className="cont col-span-1 row-span-4 ">
            <div className=" inner-box p-4">
              <div className="items-center space-evenly gap-4 flex flex-col p-4">
                <Image
                  className="w-[200px] h-[200px] z-50 relative rounded-full overflow-hidden  object-cover"
                  alt="Profile Picture"
                  src={persona2}
                />
                <p className="center  transparent-text text-5xl mt-2">
                  Mohamed Tamer
                </p>
                <p className="default-text text-transparent text-neutral-700 text-2xl">
                  @MooTamer
                </p>
                <p className="default-text text-neutral-600">
                  <FontAwesomeIcon
                    icon={["fas", "crosshairs"]}
                    className="default-text text-neutral-600 mr-[6px]"
                  />
                  Egypt
                </p>
              </div>

              <div className="flex gap-2 flex-row">
                <label className="default-text p-2" htmlFor="email">
                  Email:
                </label>
                <input
                  type="text"
                  className="email default-text transparent-bg p-3 rounded-[15px] w-fit"
                  defaultValue={"mohamedtamer@gmail.com"}
                />
                {/* <p className="default-text"></p> */}
              </div>

              <div className="flex gap-2 flex-row">
                <label className="default-text p-2" htmlFor="number">
                  Phone:
                </label>
                <input
                  type="text"
                  className="number default-text transparent-bg p-3 rounded-[15px] w-full"
                  defaultValue={"(+20)01144500700"}
                />
              </div>
            </div>
          </div>

          <div className=" cont col-span-1 row-span-1">
            <div className="outer-box">
              <h2 className="text-3xl sm:text-4xl font-semibold transparent-text ">
                Address Book
              </h2>
              <div className="flex flex-col gap-4 p-4">
                <FontAwesomeIcon
                  icon={["fas", "envelope"]}
                  className="left default-text"
                />
                <p className="default-text">mohamedtamer200*****.com</p>
                <FontAwesomeIcon
                  icon={["fas", "phone"]}
                  className="text-neutral-200"
                />
                <p className="default-text">(+20)144500700</p>
              </div>
            </div>
          </div>

          <div className=" cont col-span-1 row-span-3">
            <div className=" overflow-scroll outer-box ">
              <Image
                alt=""
                src={link}
                className="right-[-180px] top-[-10px] svg-black relative flex"
              />
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
                  currently being processed. We'll let you know once it's ready
                  to ship! Thanks for your patience! 🛠️
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
                  Hello Mo! Exciting news - your order with number #875422 is
                  now on its way! Keep an eye on your tracking for updates. Any
                  questions? Feel free to reach out! 🚚✨
                </p>
              </div>
            </div>
          </div>

          <div className=" cont col-span-1 row-span-1 ">
            <div className="overflow-scroll outer-box">
              <Image
                alt=""
                src={link}
                className="right-[-180px] top-[-10px] svg-black relative flex"
              />
              <h2 className="text-3xl p-20 sm:text-4xl font-semibold transparent-text ">
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
    </BackgroundGradientAnimation>
  );
}
