"use client";
import Image from "next/image";
import React, { useState } from "react";
import pallete1 from "@/public/pallete1.webp";
import pallete2 from "@/public/pallete2.webp";
import pallete3 from "@/public/pallete3.jpg";
import pallete4 from "@/public/pallete4.webp";

const CustomPage = () => {
  const colors = ["red", "green", "blue"];
  const images = [pallete1, pallete2, pallete3, pallete4];

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleColorSelect = (color: React.SetStateAction<string>) => {
    setSelectedColor(color);
  };

  const handleDecrement = (e: {
    target: { parentNode: { querySelector: (arg0: string) => any } };
  }) => {
    const quantityElement = e.target.parentNode?.querySelector("#quantity");
    if (quantityElement && parseInt(quantityElement.textContent || "0") > 0) {
      quantityElement.textContent = String(
        parseInt(quantityElement.textContent || "0") - 1
      );
    }
  };

  const handleIncrement = (e: {
    target: { parentNode: { querySelector: (arg0: string) => any } };
  }) => {
    const quantityElement = e.target.parentNode?.querySelector("#quantity");
    if (quantityElement) {
      quantityElement.textContent = String(
        parseInt(quantityElement.textContent || "0") + 1
      );
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-16 h-full flex items-center justify-center">
      <div className="grid md:grid-cols-2">
        <div className=" p-4 flex sm:p-8 rounded-lg justify-center items-center">
          <div className="w-full sm:w-96 rounded-box overflow-hidden relative">
            <Image
              src={images[currentImageIndex]}
              className="w-full h-96 object-cover rounded-lg transition-transform duration-300 transform"
              alt={`Ready To Go Pallets ${currentImageIndex + 1}`}
            />
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-md"
              onClick={handlePrevImage}
            >
              {"<"}
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-md"
              onClick={handleNextImage}
            >
              {">"}
            </button>
          </div>
        </div>
        <div className="text-center flex flex-col sm:text-left justify-center ">
          <h2 className="text-2xl font-bold mb-2">Customized Pallets</h2>
          <div className="text-lg font-italic text-gray-500 mb-4">
            1,600 EGP
          </div>
          <div className="text-sm font-bold text-gray-500 mb-4">Dimensions</div>
          <div className="flex mb-4">
            <div className="flex-1 pr-2">
              <input
                type="number"
                className="input rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 p-2 w-full"
                placeholder="Width"
              />
            </div>
            <div className="flex-1 pr-2">
              <input
                type="number"
                className="input rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 p-2 w-full"
                placeholder="Height"
              />
            </div>
            <div className="flex-1">
              <input
                type="number"
                className="input rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 p-2 w-full"
                placeholder="Length"
              />
            </div>
          </div>
          <div className="text-sm font-bold text-gray-500 mb-4">Color</div>
          <div className="flex items-center mb-4">
            {colors.map((color) => (
              <div
                key={color}
                className={`w-6 h-6 rounded-full cursor-pointer mr-2 ${
                  selectedColor === color ? `border-2 border-${color}-500` : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
              ></div>
            ))}
          </div>
          <div className="flex items-center justify-center sm:justify-start mb-4">
            <button
              className="btn btn-quantity bg-blue-600 text-white rounded-full py-1 px-3"
              onClick={handleDecrement}
            >
              -
            </button>
            <span id="quantity" className="mx-2 text-lg font-semibold">
              1
            </span>
            <button
              className="btn btn-quantity bg-blue-600 text-white rounded-full py-1 px-3"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <div className="flex items-center justify-center sm:justify-start">
            <button className="btn btn-primary bg-blue-600 text-white rounded-full py-2 px-4 mr-4">
              Buy Now
            </button>
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
