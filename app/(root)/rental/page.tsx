'use client'
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const RentalPage = () => {
  const images = ["pallete1.webp", "pallete2.webp", "pallete3.jpg", "pallete4.webp"];
  const [selectedSize, setSelectedSize] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDecrement = (e) => {
    const quantityElement = e.target.parentNode?.querySelector("#quantity");
    if (quantityElement && parseInt(quantityElement.textContent || "0") > 0) {
      quantityElement.textContent = String(
        parseInt(quantityElement.textContent || "0") - 1
      );
    }
  };

  const handleIncrement = (e) => {
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
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setShowDropdown(false); // Close dropdown after selecting
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8 h-full">
      {/* Product display and customization section */}
      <div className="container mx-auto px-4 sm:px-8 py-16 h-full flex items-center justify-center">
        {/* Product image carousel */}
        <div className="bg-black-100 p-4 sm:p-8 rounded-lg mb-4 sm:mb-0 sm:mr-4">
          <div className="w-full sm:w-96 rounded-box overflow-hidden relative">
            <img
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
        {/* Product details and customization options */}
        <div className="text-center sm:text-left">
          {/* Product title and price */}
          <h2 className="text-2xl font-bold mb-2">Rental Pallets</h2>
          <div className="text-lg font-italic text-gray-500 mb-4">
            1,600 EGP
          </div>
          {/* Input fields for date range, address, and size selection */}
          <div className="flex flex-col sm:flex-row mb-4">
            <input
              type="text"
              className="input py-2 px-4 rounded-lg mb-2 sm:mb-0 sm:mr-4"
              placeholder="From (MM/DD/YR)"
            />
            <input
              type="text"
              className="input py-2 px-4 rounded-lg"
              placeholder="To (MM/DD/YR)"
            />
          </div>
          <div className="flex flex-col sm:flex-row mb-4">
            <input
              type="text"
              className="input py-2 px-4 rounded-lg mb-2 sm:mb-0 sm:mr-4"
              placeholder="Address"
            />
            <input
              type="text"
              className="input py-2 px-4 rounded-lg"
              placeholder="Number"
            />
          </div>
          <div className="flex mb-4">
            {/* Custom dropdown for size selection */}
            <div className="relative">
              <button
                className="btn btn-ghost m-1"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {selectedSize ? `${selectedSize} YxY` : "Select Size"}
              </button>
              {showDropdown && (
                <ul className="dropdown-menu absolute bg-white shadow-lg rounded mt-2 py-2 w-40">
                  <li>
                    <button
                      className="block text-left px-4 py-2 w-full"
                      onClick={() => handleSizeSelect("Small")}
                    >
                      Small YxY {selectedSize === "Small" && "✓"}
                    </button>
                  </li>
                  <li>
                    <button
                      className="block text-left px-4 py-2 w-full"
                      onClick={() => handleSizeSelect("Medium")}
                    >
                      Medium YxY {selectedSize === "Medium" && "✓"}
                    </button>
                  </li>
                  <li>
                    <button
                      className="block text-left px-4 py-2 w-full"
                      onClick={() => handleSizeSelect("Large")}
                    >
                      Large YxY {selectedSize === "Large" && "✓"}
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
          {/* Quantity selection */}
          <div className="flex items-center justify-center sm:justify-start mb-4">
            <button
              className="btn btn-quantity bg-blue-500 text-white rounded-full py-2 px-4"
              onClick={handleDecrement}
            >
              -
            </button>
            <span id="quantity" className="mx-4 text-lg font-semibold">
              1
            </span>
            <button
              className="btn btn-quantity bg-blue-500 text-white rounded-full py-2 px-4"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          {/* Rent button */}
          <div className="flex items-center justify-center sm:justify-start">
            <button className="btn btn-primary bg-blue-500 text-white rounded-full py-2 px-4 mr-4">
              Rent
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

export default RentalPage;
