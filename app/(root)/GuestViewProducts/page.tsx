"use client"
import Image from "next/image";
import React from "react";
import { Products } from "@/constants";
import { motion } from "framer-motion";

export default function GuestViewProducts() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <div className="container justify-center mx-auto flex py-20">
        <section className="grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  my-10 gap-10">
          {Products.map((product, index) => (
            <div
              key={index}
              className="card hover:prodcuts-card-hover smooth  hover:border-[2px]"
            >
              <div className="card">
                <Image
                  src={product.image}
                  width={300}
                  alt={product.name}
                ></Image>
              </div>
              <div className="card">
                <p className="text-red-900 text-sm">{product.label}</p>
                <h1 className="font-bold text-2xl text-neutral-900">
                  {product.name}
                </h1>
                <p className="text-sm text-neutral-600">
                  {product.description}
                </p>
                <p className="text-sm text-neutral-600">
                  {product.colors} colors
                </p>
                <p className="text-neutral-800 text-sm font-semibold">
                  E£{product.price}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </motion.div>
  );
}
