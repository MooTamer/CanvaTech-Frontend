'use client'
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const CustomPage = () => {
  const colors = ['red', 'green', 'blue'];

  const [selectedColor, setSelectedColor] = useState(colors[0]); 

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleDecrement = (e) => {
    const quantityElement = e.target.parentNode?.querySelector('#quantity');
    if (quantityElement && parseInt(quantityElement.textContent || '0') > 0) {
      quantityElement.textContent = String(parseInt(quantityElement.textContent || '0') - 1);
    }
  };

  const handleIncrement = (e) => {
    const quantityElement = e.target.parentNode?.querySelector('#quantity');
    if (quantityElement) {
      quantityElement.textContent = String(parseInt(quantityElement.textContent || '0') + 1);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8 h-full">
      <div className="navbar bg-base-100 flex items-center justify-between px-4 py-2 mb-4">
        <div className="flex items-center">
          <a href="/products" className="btn btn-ghost text-xl">
            CanvaTech
          </a>
        </div>
        <div className="hidden sm:flex flex-grow justify-center space-x-4 sm:space-x-8">
          <a href="/customPallete" className="font-bold text-white hover:text-gray-300">
            Customize your own
          </a>
          <a href="/rental" className="text-white hover:text-gray-300">
            Rent
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
        <div className="flex items-center">
          <div className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div className="dropdown dropdown-end ml-4">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Profile Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 sm:w-52">
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a href="/login">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div className="bg-black-100 p-4 sm:p-8 rounded-lg mb-4 sm:mb-0 sm:mr-4">
          <div className="w-full sm:w-96 carousel rounded-box">
            <div className="carousel-item w-full">
              <img src="pallete1.webp" className="w-full h-auto rounded-lg" alt="Ready To Go Pallets 1" />
            </div>
            <div className="carousel-item w-full">
              <img src="pallete2.webp" className="w-full h-auto rounded-lg" alt="Ready To Go Pallets 2" />
            </div>
            <div className="carousel-item w-full">
              <img src="pallete3.jpg" className="w-full h-auto rounded-lg" alt="Ready To Go Pallets 3" />
            </div>
            <div className="carousel-item w-full">
              <img src="pallete4.webp" className="w-full h-auto rounded-lg" alt="Ready To Go Pallets 4" />
            </div>
          </div>
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold mb-2">Customized Pallets</h2>
          <div className="text-lg font-italic text-gray-500 mb-4">1,600 EGP</div>
          <div className="text-sm font-bold text-gray-500 mb-4">Dimensions</div>
          <div className="flex mb-4">
            <input type="text" className="input mr-4" style={{ width: '30%' }} placeholder="Width" />
            <input type="text" className="input" style={{ width: '30%' }} placeholder="Height" />
          </div>
          <input type="text" className="input mb-4" style={{ width: '30%' }} placeholder="Length" />
          <div className="text-sm font-bold text-gray-500 mb-4">Color</div>
          <div className="flex items-center mb-4">
            {colors.map((color) => (
              <div
                key={color}
                className={`w-8 h-8 rounded-full cursor-pointer mr-2 ${
                  selectedColor === color ? `border-2 border-${color}-500` : ''
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
              ></div>
            ))}
          </div>
          <div className="flex items-center justify-center sm:justify-start mb-4">
            <button className="btn btn-quantity" onClick={handleDecrement}>
              -
            </button>
            <span id="quantity" className="mx-4 text-lg font-semibold">
              1
            </span>
            <button className="btn btn-quantity" onClick={handleIncrement}>
              +
            </button>
          </div>
          <div className="flex items-center justify-center sm:justify-start">
            <button className="btn btn-primary mr-4">Buy Now</button>
            <div className="flex items-center text-gray-500 font-medium mt-2 sm:mt-0">
              <div className="border-t border-gray-300 w-full"></div>
              <div className="border-t border-gray-300 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPage;
