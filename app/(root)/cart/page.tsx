"use client";
import React, { useState } from "react";
import Image from "next/image";
import pallete1 from "@/public/pallete1.webp";
import pallete2 from "@/public/pallete2.webp";
import pallete3 from "@/public/pallete3.jpg";
import "tailwindcss/tailwind.css";

const CartPage = () => {
  const initialCartItems = [
    {
      id: 1,
      name: "Ready-To-Go Pallete",
      price: 25,
      quantity: 1,
      image: pallete1,
    },
    { id: 2, name: "Rental Pallete", price: 30, quantity: 1, image: pallete2 },
    {
      id: 3,
      name: "Customized Pallete",
      price: 20,
      quantity: 1,
      image: pallete3,
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

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

  const handleRemoveItem = (itemId: number) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
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

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center">
      <div className="grid grid-cols-3 gap-8">

        <div className="flex cols-span-2 min-h-[20rem] transparent-bg">
          <h1 className="text-2xl font-bold mb-6 text-left">Cart</h1>
          


        </div>

        <div className="flex cols-span-1 transparent-bg ">
          <h2>Delivery</h2>
        </div>

      </div>
    </div>
  );
};

export default CartPage;
