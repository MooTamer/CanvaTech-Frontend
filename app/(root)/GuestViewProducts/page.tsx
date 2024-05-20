"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Products } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function GuestViewProducts() {
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <div className="container justify-center mx-auto flex py-20">
        <section className="grid md:min-h-[35rem] md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  my-10 gap-1">
          {Products.map((product, index) => (
            <div
              key={index}
              className="card hover:prodcuts-card-hover m-8 smooth relative  hover:border-[2px]"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <button className="absolute top-6 right-6">
                <Heart  strokeWidth={1.3}/>
              </button>
              <div className="card h-72">
                <Image src={product.image} alt={product.name} />
              </div>
              <div className="card">
                <p className="text-red-900 text-sm">{product.label}</p>
                <h1 className="font-bold text-2xl text-neutral-900">
                  {product.name}
                </h1>
                <p className="text-sm text-neutral-600">
                  {product.description}
                </p>
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
                            className="rounded-full w-5 h-5 mt-1 mr-2"
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
                <p className="text-neutral-800 text-sm font-semibold">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </motion.div>
  );
}
