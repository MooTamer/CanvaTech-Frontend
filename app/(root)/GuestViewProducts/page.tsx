"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
// import { Products } from "@/constants";
import pallete1 from "@/public/pallete1.webp";
import pallete2 from "@/public/pallete2.webp";
import pallete3 from "@/public/pallete3.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { StaticImageData } from "next/image";


export default function GuestViewProducts() {
const [products, setProducts] = useState();

   const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);

   function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
   const getAllProducts = async () => {
  try{
    const resp = await fetch("http://localhost:3002/product/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
   
    
    
      const res = JSON.parse(await resp.text());
      res.map((product: {
        colorRange: string[]; images: string | StaticImageData ; colors: any; 
   }) => {
        if (product.images === "pallete1") product.images = pallete1;
        else if (product.images === "pallete2") product.images = pallete2;
        else if (product.images === "pallete3") product.images = pallete3;
        // add colorRange   colorRange: Array.from({ length: product.colors }, () => getRandomColor()),
    product.colorRange =  Array.from({ length: product.colors }, () => getRandomColor())
    
        // else if (product.images === "pallete4") product.images = pallete4;
       })
      setProducts(res);
      console.log(res)
    }
    catch(e){
      alert(e);
    }
  };
  useEffect(()=>{
    getAllProducts();
  },[])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <div className="container justify-center mx-auto flex py-20">
        <section className="grid md:min-h-[35rem] md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  my-10 gap-1">
          {products && products.map((product, index) => (
            <div
              key={index}
              className="card hover:prodcuts-card-hover m-8 smooth relative  hover:border-[2px]"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
              onClick={() => { 
                product.name==="Design Your Own Pallete"?
                window.location.href = "http://localhost:3000/customPallete":
                window.location.href = `http://localhost:3000/product/${product._id}`; }}
              
              
              >

            
              <button className="absolute top-6 right-6">
                <Heart  strokeWidth={1.3}/>
              </button>
              <div className="card h-72">
                <Image src={product.images} alt={product.name} />
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
