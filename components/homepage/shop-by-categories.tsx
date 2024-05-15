// "use client";
import Image from "next/image";
import React, { useState } from "react";
import { Products } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { Eye } from "lucide-react";
import Link from "next/link";
export default function ShopByCategory() {
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <div className="container flex flex-col justify-center md:min-h-[60rem] mx-auto  py-20">
          <div className="flex flex-row justify-between items-center mb-20">
            <h1 className=" text-left  md:text-left  responsive-subtitles">
              Shop By Category
            </h1>
            <Link legacyBehavior href="/GuestViewProducts">
              <button className="w-32 flex flex-row items-center justify-center h-8 rounded-xl  text-black border border-black mt-1  text-sm">
                <Eye
                  className="items-center text-center justify-center flex"
                  strokeWidth={1.4}
                />
                <span className="flex text-center justify-center ml-3">
                  View more
                </span>
              </button>
            </Link>
          </div>
          <section className="grid md:min-h-[35rem] md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  my-10 gap-10">
            {Products.slice(0, 4).map((product, index) => (
              <div
                key={index}
                className="card hover:prodcuts-card-hover smooth  hover:border-[2px]"
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                <div className="card h-72">
                  <Image src={product.image} alt={product.name}></Image>
                </div>
                <div className="card">
                  <p className="text-red-900 text-sm">{product.label}</p>
                  <h1 className="font-bold text-2xl text-neutral-900">
                    {product.description}
                  </h1>

                  <AnimatePresence>
                    {hoveredProductId === product.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                      >
                        <div className="flex">
                          {product.colorRange.map((color, index) => (
                            <div
                              key={index}
                              className="rounded-full w-5 h-5 mx-1"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {hoveredProductId !== product.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: "easeOut", duration: 0.5 }}
                    >
                      <p className="text-sm text-neutral-600">
                        {product.colors} colors
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </section>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
