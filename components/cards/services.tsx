import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import customize from "@/public/People Building Metaverse 3D.png";
import brand from "@/public/glasses.png";
import accessories from "@/public/Development 3D Illustrations.png";

export default function HomeCards() {
    return (
        <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="flex items-center flex-col justify-center mx-4">
            <h1 className="responsive-subtitles">
              Our Services
            </h1>
            <div className="container flex flex-row items-center justify-center p-4 ">
              <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 items-center space-x-4">
                <div className="flex flex-col items-center max-w-[450px] justify-center">
                  <div className=" h-fit flex items-center justify-center">
                    <Image
                      src={customize}

                      className="md:w-[18rem] w-44"
                      alt="brush"
                    />
                  </div>
                  <h2 className="card-heading">Design Your Own Palette</h2>
                  <p className="card-description">
                    Craft your perfect palette with customizable colors,
                    sizes, and layouts, reflecting your unique style.
                  </p>
                </div>
                <div className="flex flex-col items-center max-w-[450px] justify-center">
                  <div className=" h-fit flex items-center justify-center">
                    <Image
                      src={brand}
                      className="md:w-[18rem] w-44"
                      alt="brush"
                    />
                  </div>
                  <h2 className="card-heading">Brand Your Palette</h2>
                  <p className="card-description">
                    Elevate your brand identity by imprinting your logo or
                    brand colors onto your palette for a professional,
                    distinctive look.
                  </p>
                </div>
                <div className="flex flex-col items-center max-w-[450px] justify-center">
                  <div className=" h-fit flex items-center justify-center">
                    <Image
                      src={accessories}
                      className="md:w-[18rem] w-44"
                      alt="brush"
                    />
                  </div>
                  <h2 className="card-heading">Customize Accessories</h2>
                  <p className="card-description">
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
    );
    }