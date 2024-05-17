"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import palette1 from "@/public/pallete1.png";
import { Products } from "@/constants";
import { ArrowRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function NewHome() {
  const saleProducts = Products.filter((product) => product.label === "Sale");
  const [randomProduct, setRandomProduct] = useState(
    saleProducts[Math.floor(Math.random() * saleProducts.length)]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomProduct(
        saleProducts[Math.floor(Math.random() * saleProducts.length)]
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center max-w-screen md:w-auto  h-auto mt-20 mb-32">
            <div className=" flex overflow-scroll justify-center z-50 max-w-screen xl:w-auto [background:linear-gradient(120deg,_rgba(239,_239,_239,_0.6),_rgba(239,_239,_239,_0.15))] transparent-bg  gap-4 p-7 rounded-[41px]">
              <div className="flex flex-col md:flex-row gap-4 md:gap-60 xl:gap-96 space-between justify-between">
                <div className="flex flex-col gap-2 mobile:max-md:relative pl-1 pt-1 md:pl-16 md:pt-8 justify-evenly items-left">
                  <div className="flex flex-col gap-1 max-w-[35rem]">
                    <h1 className="responsive-subtitles text-base md:text-3xl lg:text-4xl">
                      Shop {randomProduct.description} <br />& rent{" "}
                    </h1>
                    <p className="text-neutral-600 flex text-xs md:text-base max-w-[30rem]">
                      Explore our wide range of palettes, carefully curated and
                      designed to suit every mood and occasion.
                    </p>
                  </div>
                  <Link legacyBehavior href="/GuestViewProducts">
                    <button className="w-52 flex flex-row items-center justify-center h-10 rounded-xl  text-black border border-black  text-sm">
                      <span className="flex text-center justify-center mr-3">
                        View Products
                      </span>

                      <motion.div
                        animate={{ x: [null, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <ArrowRight
                          className="items-center text-center justify-center flex"
                          strokeWidth={1.8}
                        />
                      </motion.div>
                    </button>
                  </Link>
                </div>
                <div className="flex z-[80] mobile:max-md:items-center mobile:max-md:justify-evenly gap-1  min-h-[15rem] md:min-h-[30rem] w-auto md:relative">
                  <div className="flex  h-20 w-20 relative md:h-64 md:w-64">
                    <p className="absolute top-2 left-3 bg-red-500 text-neutral-200 rounded-xl px-3 py-1">
                      {randomProduct.label}
                    </p>

                    <Image
                      src={randomProduct.image}
                      className="h-auto flex w-auto"
                      alt="Palette"
                    />
                  </div>
                  <div className=" rounded-3xl hover:prodcuts-card-hover smooth mobile:max-md:max-h-[20rem] mobile:max-md:max-w-[15rem] hover:border-[2px] md:bottom-1  md:max-w-[20rem] md:top-[270px] md:left-[-240px]  md:absolute z-[80] items-center justify-center md:min-h-[11rem] w-auto flex bg-blue-100 transparent-bg">
                    <div className="card mobile:max-md:p-0">
                      <div className="card h-auto w-auto ">
                        <p className="text-red-900 text-xs md:text-sm">
                          {randomProduct.label}
                        </p>
                        <h1 className="font-bold text-base md:text-2xl text-neutral-900">
                          {randomProduct.name}
                        </h1>
                        <p className="text-xs md:text-sm text-neutral-600">
                          {randomProduct.description}
                        </p>

                        <p className="text-neutral-500 line-through text-xs md:text-sm font-semibold">
                          E£ {randomProduct.price}
                        </p>
                        <p className="text-red-700 text-sm md:text-base font-semibold">
                          E£ {Math.round(Number(randomProduct.price) * 0.8)}
                        </p>
                        <button className="w-32 flex flex-row items-center justify-center h-8 rounded-xl  text-black border border-black mt-1  text-sm">
                          <Eye
                            className="items-center text-center justify-center flex"
                            strokeWidth={1.4}
                          />
                          <span className="flex text-center justify-center ml-3">
                            View more
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
