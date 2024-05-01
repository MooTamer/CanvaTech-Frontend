"use client";
import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import picture from "@/public/girl.svg";
import picture2 from "@/public/boy.svg";
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

library.add(fab, fas, far);

export default function Page() {
  return (
    <motion.div>
      <BackgroundGradientAnimation>
        <div className=" flex items-center justify-center w-full h-[100vh] p-4">
          <motion.div>
            <Image
              className="floating-svgs top-[50px] left-[-50px] "
              alt=""
              src={picture2}
            />
          </motion.div>
          <div className="w-auto h-auto  mx-12 my-11 max-h-screen min-w-[40rem] min-h-[30rem]  z-30 overflow-scroll p-7 flex flex-col">
		    <h1 className="text-5xl m-4 left-[3rem] sm:text-6xl font-bold transparent-text">
              Profile
            </h1>
          <div className="w-auto h-auto overflow-scroll  z-30 transparent-bg p-7 relative flex flex-row justify-evenly flex-wrap gap-8 rounded-[41px]">
            <div className="flex flex-row justify-around gap-4">
              <div className=" default-card">
                <div className="items-center space-between gap-4 flex flex-col p-4">
                  <Image
                    className="w-[100px] h-[100px] z-50 relative rounded-full overflow-hidden  object-cover"
                    alt="Profile Picture"
                    src={persona2}
                  />
                  <p className="center  text-neutral-200 text-4xl mt-2">
                    Mohamed Tamer
                  </p>
                  <p className="center text-neutral-400 text-2xl">@MooTamer</p>
                  <p>
                    <FontAwesomeIcon
                      icon={["fas", "crosshairs"]}
                      className="text-white mr-[6px]"
                    />
                    Egypt
                  </p>
                </div>
              </div>
             
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col gap-8 p-4">
                <h2 className="text-3xl sm:text-4xl font-semibold transparent-text ">
                  Orders
                </h2>
                <div className=" overflow-scroll  default-card">
                  <div className=" overflow-scroll flex-row default-card">
                    <div className="w-[100px] h-[100px]">
                      <Image
                        alt="Delivered"
                        src={delivered}
                        className="flex h-full w-full"
                      ></Image>
                    </div>
                    <p className="flex default-text overflow-scroll">
                      Hey Mo! Your order with number #123456 has been
                      successfully delivered! Enjoy your purchase! 😊
                    </p>
                  </div>
                  <div className=" overflow-scroll flex-row default-card">
                    <div className="w-[100px] h-[100px]">
                      <Image
                        alt="on its way"
                        src={preparing}
                        className="flex h-full w-full "
                      ></Image>
                    </div>
                    <p className="flex w-fit default-text overflow-scroll">
                      Hi Mo! Just a quick update: your order with number #658216
                      is currently being processed. We'll let you know once it's
                      ready to ship! Thanks for your patience! 🛠️
                    </p>
                  </div>
				  
                  <div className=" default-card flex-row">
                    <div className="w-[100px] h-[100px]">
                      <Image
                        alt="on its way"
                        src={onitsway}
                        className="flex h-full w-full "
                      ></Image>
                    </div>
                    <p className="flex default-text overflow-scroll">
                      Hello Mo! Exciting news - your order with number #875422
                      is now on its way! Keep an eye on your tracking for
                      updates. Any questions? Feel free to reach out! 🚚✨
                    </p>
                  </div>
                </div>
              </div>
			   <div className="flex flex-col gap-4">
                <h2 className="text-3xl mt-11 sm:text-4xl font-semibold transparent-text ">
                  Contact Information
                </h2>
                <div className="default-card">
                  <div className="flex flex-col gap-4 p-4">
                    <FontAwesomeIcon
                      icon={["fas", "envelope"]}
                      className="left text-neutral-200"
                    />
                    <p className="default-text">mohamedtamer200*****.com</p>
					<FontAwesomeIcon
					icon={["fas","phone"]}
					className="text-neutral-200"
					/>
					<p className="default-text">(+20)144500700</p>
                  </div>
                </div>
              </div>
			  <div className="flex flex-col gap-4">
                <h2 className="text-3xl mt-11 sm:text-4xl font-semibold transparent-text ">
                  Address Book
                </h2>
                <div className="default-card">
                  <div className="flex flex-col gap-4 p-4">
                    <FontAwesomeIcon
                      icon={["fas", "envelope"]}
                      className="left text-neutral-200"
                    />
                    <p className="default-text">mohamedtamer200*****.com</p>
					<FontAwesomeIcon
					icon={["fas","phone"]}
					className="text-neutral-200"
					/>
					<p className="default-text">(+20)144500700</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8  p-4">
                <h2 className="text-3xl sm:text-4xl font-semibold transparent-text ">
                  Ratings
                </h2>
                <div className="overflow-scroll default-card">
                  <div className=" overflow-scroll flex-row default-card">
                    <div className="w-[100px] h-[100px]">
                      <Image
                        alt="Delivered"
                        src={delivered}
                        className="flex h-full w-full"
                      ></Image>
                    </div>
                    <p className="flex default-text">
                      Hi there! Just wanted to drop a quick note to say thanks
                      for the speedy delivery of my order (#123456). Everything
                      arrived in perfect condition, and I'm really happy with my
                      purchase! Definitely a 5-star experience! 😊⭐⭐⭐⭐⭐
                    </p>
                  </div>
                  <div className=" overflow-scroll flex-row default-card">
                    <div className="w-[100px] h-[100px]">
                      <Image
                        alt="on its way"
                        src={preparing}
                        className="flex h-full w-full "
                      ></Image>
                    </div>
                    <p className="flex w-fit default-text">
                      Hey team! I received the notification that my order
                      (#789012) is currently being processed. Can't wait for it
                      to arrive! Will hold off on rating until I receive the
                      items, but so far, the process has been smooth and easy.
                      Hoping for a great experience! 🛠️
                    </p>
                  </div>
                  <div className="overflow-scroll flex-row default-card">
                    <div className="w-[100px] h-[100px]">
                      <Image
                        alt="on its way"
                        src={onitsway}
                        className="flex h-full w-full "
                      ></Image>
                    </div>
                    <p className="flex default-text">
                      Hi! Just got the update that my order (#345678) is on its
                      way! Super excited to receive it. Will definitely rate
                      once I've got everything in hand. Fingers crossed for a
                      seamless delivery! 🚚
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <motion.div>
            <Image
              className="floating-svgs top-[180px] right-[-50px] "
              alt=""
              src={picture}
            />
          </motion.div>
        </div>
		</div>
      </BackgroundGradientAnimation>
    </motion.div>
  );
}
