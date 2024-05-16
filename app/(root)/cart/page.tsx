'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import pallete1 from '@/public/pallete1.webp';
import pallete2 from '@/public/pallete2.webp';
import pallete3 from '@/public/pallete3.jpg';
import 'tailwindcss/tailwind.css';

const CartPage = () => {
  const initialCartItems = [
    { id: 1, name: 'Ready-To-Go Pallete', price: 25, quantity: 1, image: pallete1 },
    { id: 2, name: 'Rental Pallete', price: 30, quantity: 1, image: pallete2 },
    { id: 3, name: 'Customized Pallete', price: 20, quantity: 1, image: pallete3 },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    newQuantity = parseInt(newQuantity) || 1; // Ensure new quantity is at least 1

    const updatedItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  const handleRemoveItem = (itemId: number) => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
  };

  const getTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const isEmptyCart = cartItems.length === 0;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">Shopping Cart</h1>
      {isEmptyCart ? (
        <p className="text-xl font-light text-center">Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg mb-6 p-6 w-full sm:max-w-2xl"
          >
            <div className="flex items-center mb-6">
              <div className="w-32 h-40 sm:w-40 sm:h-48 relative">
                <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" className="rounded-md" />
              </div>
              <div className="ml-6">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-600 text-lg">Price: ${item.price}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <label htmlFor={`quantity-${item.id}`} className="mr-4 text-lg">
                  Quantity:
                </label>
                <input
                  type="number"
                  id={`quantity-${item.id}`}
                  value={item.quantity}
                  onChange={e => handleQuantityChange(item.id, e.target.value)}
                  className="border rounded-md px-3 py-2 w-16 text-lg"
                  min="1"
                />
              </div>
              <div className="flex flex-col items-center"> {/* Center price above button */}
                <p className="text-xl font-bold">${item.price * item.quantity}</p>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-red-600 transition duration-300 text-lg"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {!isEmptyCart && (
        <div className="mt-8 flex justify-between items-center w-full sm:max-w-2xl">
          <div>
            <p className="text-2xl font-bold">Total Cost: ${getTotalCost()}</p>
            <p className="text-lg font-semibold">Total Items: {getTotalItems()}</p>
          </div>
          <button className="bg-blue-500 text-white rounded-md px-6 py-3 hover:bg-blue-600 transition duration-300 text-xl">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
