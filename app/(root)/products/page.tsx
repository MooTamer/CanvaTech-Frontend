'use client'
import React, { useState } from "react";
import Cart from "@/public/cart.gif";
import { ShoppingCart } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBox, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {
  const [heartClicked, setHeartClicked] = useState(false);
  const [cartClicked, setCartClicked] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const cartClick = () => {
    setCartClicked(true);
    setTimeout(() => setCartClicked(false), 3000); 
  };

  const images = [
    "pallete1.webp",
    "pallete2.webp",
    "pallete3.jpg",
    "pallete4.webp",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
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
      {/* Product Details */}
      <div className="flex items-center justify-center">
        <div className="bg-black-100 p-4 sm:p-8 rounded-lg mb-4 sm:mb-0 sm:mr-4">
          <div className="w-full sm:w-96 rounded-box overflow-hidden relative">
            {/* Product Image */}
            <img
              src={images[currentImageIndex]}
              className="w-full h-96 object-cover rounded-lg transition-transform duration-300 transform"
              alt={`Ready To Go Pallets ${currentImageIndex + 1}`}
            />
            {/* Previous Image Button */}
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-md"
              onClick={handlePrevImage}
            >
              {"<"}
            </button>
            {/* Next Image Button */}
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-md"
              onClick={handleNextImage}
            >
              {">"}
            </button>
          </div>
        </div>
        <div className="text-center sm:text-left">
          {/* Product Title with Heart Icon */}
          <div className="flex items-center mb-2">
            <h2 className="text-2xl font-bold mr-2">Ready-To-Go Pallets</h2>
            <FontAwesomeIcon
              icon={faHeart}
              className={`text-${heartClicked ? "red" : "gray"}-500 cursor-pointer`}
              onClick={() => setHeartClicked(!heartClicked)}
            />
          </div>
          {/* Product Price */}
          <div className="text-lg font-italic text-gray-500 mb-4">
            1,600 EGP
          </div>
          {/* Product Description */}
          <div className="mb-4 max-w-lg mx-auto">
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>
          {/* Quantity Selector */}
          <div className="flex items-center justify-center sm:justify-start mb-4">
            <button
              className="btn btn-quantity bg-blue-700 text-white rounded-full py-2 px-4"
              onClick={handleDecrement}
            >
              -
            </button>
            <span id="quantity" className="mx-2 text-lg font-semibold">
              {quantity}
            </span>
            <button
              className="btn btn-quantity bg-blue-700 text-white rounded-full py-2 px-4"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          {/* Add to Cart / Rent / Wishlist Buttons */}
          <div className="flex flex-row justify-between gap-4 items-center justify-center sm:justify-start">
            <button
              id="addtocart"
              className={`cart-button ${cartClicked ? "clicked" : ""}`}
              onClick={cartClick}
              >
              <span className="cart-item"></span>
              <span className="add-to-cart">Add to cart</span>
              <span className="added">Added</span>
              <FontAwesomeIcon
                className="fa-shopping-cart"
                icon={faShoppingCart}
              />
              <FontAwesomeIcon className="fa-box" icon={faBox} />
            </button>
            <p>Or</p>
            <button className="cart-button w-20">Rent</button>
            <div className="flex">
              <button>Add to wishlist</button>
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

export default ProductPage;
