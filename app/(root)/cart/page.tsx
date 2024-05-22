"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {Switch} from "@nextui-org/react";
// import { Products } from "@/constants";
import pallete1 from "@/public/pallete1.webp";
import pallete2 from "@/public/pallete2.webp";
import pallete3 from "@/public/pallete3.jpg";
import "tailwindcss/tailwind.css";
import { Heart, Trash2 } from "lucide-react";
import { a } from "react-spring";
import { set } from "zod";
import { StaticImageData } from "next/image";
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const CartPage = () => {
  const [deliveryType, setDeliveryType] = useState("free");

  const handleDeliveryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryType(event.target.value);
  };

  const initialCartItems = [
    {
      id: 1,
      name: "Ready-To-Go Pallete",
      price: 1949.99,
      quantity: 1,
      images: pallete1,
      isClicked: false,
      availablity: "In Stock",
    },
    {
      id: 2,
      name: "Rental Pallete",
      price: 2979.99,
      quantity: 1,
      images: pallete2,
      isClicked: false,
      availablity: "Available Soon",
    },
    {
      id: 3,
      name: "Customized Pallete",
      price: 7989.99,
      quantity: 1,
      images: pallete3,
      isClicked: false,
      availablity: "Out of Stock",
    },
  ];
  // set statuss to get all product

  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState(initialCartItems);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const handleSave = (itemId: number) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, isClicked: !item.isClicked };
      }
      return item;
    });

    setCartItems(updatedItems);
  };
  // get all products from backend  once page load

  // const getAllProducts = async () => {
  //   const resp = await fetch("localhost:3002/product/", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "include",
  //   });
  //   try {
  //     const res = JSON.parse(await resp.text());
  //     // loop over the products and change each images from text to images file
  //     res.map(
  //       (product: {
  //         colorRange: string[];
  //         images: string | StaticImageData;
  //         colors: any;
  //       }) => {
  //         if (product.images === "pallete1") product.images = pallete1;
  //         else if (product.images === "pallete2") product.images = pallete2;
  //         else if (product.images === "pallete3") product.images = pallete3;
  //         // add colorRange   colorRange: Array.from({ length: product.colors }, () => getRandomColor()),
  //         product.colorRange = Array.from({ length: product.colors }, () =>
  //           getRandomColor()
  //         );

  //         // else if (product.images === "pallete4") product.images = pallete4;
  //       }
  //     );
  //     setProducts(res);
  //     console.log(res);
  //   } catch (e) {
  //     alert(e);
  //   }
  // };

  const handleDelete = (itemId: number) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  const handleDecrease = (itemId: number) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      handleQuantityChange(itemId, item.quantity - 1);
    }
  };

  const handleIncrease = (itemId: number) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      handleQuantityChange(itemId, item.quantity + 1);
    }
  };

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    newQuantity = parseInt(newQuantity) || 1; // Ensure new quantity is at least 1

    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  const getTotalCost = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const isEmptyCart = cartItems.length === 0;
  // useEffect(() => {
  //   getAllProducts();
  // }, []);
  return (
    <div className="container justify-center mx-auto flex py-20">
      <div className="grid md:min-h-[35rem] lg:grid-cols-2  xl:grid-cols-3  my-10 gap-8">
        <div className="flex flex-col lg:col-span-2 p-4 justify-center bg-neutral-100 rounded-3xl">
          <div className="p-2">
            <h1 className="text-3xl font-bold  text-left">Cart</h1>
          </div>
          <hr className="my-2 rounded-full border-neutral-300 " />

          {initialCartItems?.slice(1, 4).map((item) => (
            <div key={item.id}>
              <div className=" p-2 gap-2 md:px-3 md:py-4 flex flex-col justify-between">
                <div className="flex flex-row justify-between items-center gap-8">
                  <div className="flex flex-row  gap-3 items-center ">
                    <Image
                      width={100}
                      height={100}
                      src={item.images}
                      alt={item.name}
                    ></Image>

                    <div className="flex flex-col justify-center">
                      <h2 className="text-lg text-neutral-700">{item.name}</h2>
                      <div className="flex flex-row items-center">
                        <p className="text-neutral-400 text-[14px]">
                          EGP {item.price}
                        </p>
                        <span className="bg-neutral-400 w-[1px] h-4 mx-3 rounded-full" />
                        <p
                          className={` font-semibold text-[15px] ${
                            item.availability == "Out of Stock"
                              ? "text-red-500"
                              : item.availability == "Available Soon"
                              ? "text-neutral-500"
                              : "text-green-500"
                          }`}
                        >
                          {item.availability}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="font-bold text-xl ">EGP {item.price}</p>
                </div>

                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row gap-2 justify-between items-center px-3 w-24 border-[1.5px] rounded-xl border-neutral-200">
                    <button
                      className=" text-xl flex flex-row  items-center justify-center rounded-xl text-neutral-500"
                      onClick={() => handleDecrease(item.id)}
                    >
                      -
                    </button>
                    <span className="text-neutral-500 text-base"></span>
                    <button
                      className=" text-xl flex flex-row items-center justify-center rounded-xl text-neutral-500"
                      onClick={() => handleIncrease(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <div className="flex flex-row items-center">
                    <button
                      className="p-2 text-xs flex flex-row items-center justify-center rounded-xl text-neutral-500"
                      onClick={() => handleSave(item.id)}
                    >
                      <Heart
                        strokeWidth={1.4}
                        className={`${
                          item.isClicked ? "text-red-500" : "text-neutral-500 "
                        } mr-1`}
                      />{" "}
                      Save
                    </button>
                    <span className="bg-neutral-300 w-[1px] h-4 mx-2 rounded-full" />
                    <button
                      className="p-2 text-xs flex flex-row items-center justify-center rounded-xl text-neutral-500"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2
                        strokeWidth={1.4}
                        className="text-neutral-500 mr-1"
                      />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <hr className="my-2 rounded-full border-neutral-300 " />
            </div>
          ))}
        </div>

        <div className="flex flex-col col-span-1 p-4 justify-center  bg-neutral-100 rounded-3xl">
          <div className="p-2">
            <h1 className="text-3xl font-bold  text-left">Delivery</h1>
            <Switch  aria-label="Automatic updates"/>
          </div>
        </div>
        <hr className="my-2 rounded-full border-neutral-300 " />
      </div>
    </div>
  );
};

export default CartPage;
