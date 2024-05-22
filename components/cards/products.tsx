import Image from "next/image";
import React, { useState, useEffect } from "react";
import pallete1 from "@/public/pallete1.webp";
import pallete2 from "@/public/pallete2.webp";
import pallete3 from "@/public/pallete3.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { StaticImageData } from "next/image";

interface Product {
  id: string;
  name: string;
  images: StaticImageData;
  label: string;
  description: string;
  colorRange: string[];
  colors: number;
  price: string;
  _id: string;
}

interface ProductsProps {
  products: Product[];
}

export default function Products({ products }: ProductsProps) {
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  return (
    <div className="flex">
      {products &&
        products.map((product, index) => (
          <div
            key={index}
            className="card hover:prodcuts-card-hover m-8 smooth relative  hover:border-[2px]"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
            onClick={() => {
              product.name === "Design Your Own Pallete"
                ? (window.location.href = "http://localhost:3000/customPallete")
                : (window.location.href = `http://localhost:3000/product/${product._id}`);
            }}
          >
            <button className="absolute top-6 right-6">
              <Heart strokeWidth={1.3} />
            </button>
            <div className="card h-72">
              <Image src={product.images} alt={product.name} />
            </div>
            <div className="card">
              <p className="text-red-900 text-sm">{product.label}</p>
              <h1 className="font-bold text-2xl text-neutral-900">
                {product.name}
              </h1>
              <p className="text-sm text-neutral-600">{product.description}</p>
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
    </div>
  );
}
