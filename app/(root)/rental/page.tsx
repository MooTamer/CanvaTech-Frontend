"use client";
import Image from "next/image";
import React, { useState } from "react";
import pallete1 from "@/public/pallete1.webp";
import pallete2 from "@/public/pallete2.webp";
import pallete3 from "@/public/pallete3.jpg";
import pallete4 from "@/public/pallete4.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf, faHeart } from "@fortawesome/free-solid-svg-icons";

const RentalPage = () => {
  const images = [pallete1, pallete2, pallete3, pallete4];
  const [selectedSize, setSelectedSize] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [heartClicked, setHeartClicked] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  

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

  const handleSizeSelect = (size: React.SetStateAction<string>) => {
    setSelectedSize(size);
    setShowDropdown(false); // Close dropdown after selecting
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      text: reviewText,
      rating: rating,
    };
    setReviews([...reviews, newReview]);
    setReviewText("");
    setRating(0);
  };

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className="text-yellow-500 cursor-pointer"
            onClick={() => handleStarClick(i)}
          />
        );
      } else if (i - 0.5 === rating) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStarHalf}
            className="text-yellow-500 cursor-pointer"
            onClick={() => handleStarClick(i - 0.5)}
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className="text-gray-300 cursor-pointer"
            onClick={() => handleStarClick(i)}
          />
        );
      }
    }
    return stars;
  };

  const ReviewCard = ({ review }) => {
    return (
      <div className="border border-gray-200 rounded-md p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg font-semibold">{review.rating} Stars</p>
          <div>{renderStars()}</div>
        </div>
        <p className="text-gray-700">{review.text}</p>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-16">
      {/* Product display and customization section */}
      <div className="container mx-auto px-4 sm:px-8 py-16 h-auto grid md:grid-cols-2 gap-4 items-center justify-center">
        {/* Product image carousel */}
        <div className="  rounded-3xl flex justify-center items-center ">
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
        {/* Product details and customization options */}
        <div className="text-center sm:text-left flex flex-col justify-center">
          {/* Product title and price */}
          <div className="flex items-center mb-2">
          <h2 className="text-2xl font-bold mr-2">Rental Pallets</h2>
          <FontAwesomeIcon
              icon={faHeart}
              className={`text-${heartClicked ? "red" : "gray"}-500 cursor-pointer`}
              onClick={() => setHeartClicked(!heartClicked)}
            />
            </div>
          <div className="text-lg font-italic text-gray-500 mb-4">
            1,600 EGP
          </div>
          {/* Input fields for date range, address, and size selection */}
          <div className="flex flex-col sm:flex-row mb-4">
            <input
              type="date"
              className="input py-2 px-4 rounded-lg mb-2 sm:mb-0 sm:mr-4"
              placeholder="From (MM/DD/YR)"
            />
            <input
              type="date"
              className="input py-2 px-4 rounded-lg"
              placeholder="To (MM/DD/YR)"
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
      {/* Reviews Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {/* Average Rating */}
        <div className="flex items-center">
          <div className="flex items-center mr-2">
            <p className="mr-1">Average Rating:</p>
            {/* Render star icons for average rating */}
            {renderStars()}
          </div>
          {/* Write a Review Button */}
          <button className="btn btn-primary">Write a Review</button>
        </div>
        {/* Display reviews */}
        {reviews.length > 0 ? (
          <div className="mt-4">
            {/* Map through reviews and render each review as a card */}
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        ) : (
          <p className="mt-4">No reviews yet.</p>
        )}
        {/* Add Review Form */}
        <form onSubmit={handleReviewSubmit} className="mt-4">
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review..."
            className="w-full p-2 border rounded"
          ></textarea>
          {/* Rating Selector */}
          <div className="flex items-center mt-2 space-x-1">
            {/* <p className="mr-2">Rating:</p> */}
            {renderStars()}
          </div>
          {/* Submit Button */}
          <button type="submit" className="btn btn-quantity bg-blue-700 text-white rounded-full py-2 px-4 mt-4">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default RentalPage;
