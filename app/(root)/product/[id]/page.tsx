'use client'
import React, { useState, useEffect } from "react";
import Cart from "@/public/cart.gif";
import { ShoppingCart } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBox, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router'
import { StaticImageData } from "next/image";
import pallete1 from "@/public/pallete1.webp";
import pallete2 from "@/public/pallete2.webp";
import pallete3 from "@/public/pallete3.jpg";
import Image from "next/image";
import { FacebookShare, TwitterShare,LinkedinShare } from 'react-share-kit';
import ShareButtons from "@/components/social-media-share/ShareButtons";
import Products from "../../../../components/cards/products.tsx";
import { set } from "zod";

const ProductPage = () => {
  // const router = useRouter();
  const [products, setProducts] = useState([]);

  const [heartClicked, setHeartClicked] = useState(false);
  const [cartClicked, setCartClicked] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [wishListName, setWishListName] = useState("");
  const [wishlists, setWishlists] = useState([]);
  const [showNewWishlistInput, setShowNewWishlistInput] = useState(false);
  const [newWishlistName, setNewWishlistName] = useState("");
  const [viewingWishlist, setViewingWishlist] = useState(false);
  const currentUrl = window.location.href;
  const productId = currentUrl.split('/')[4];
  const pageUrl = 'https://ahmed-yehia.me';
  const pageTitle = 'Check out this awesome website!';
      function assignImage(product) {
        if (product.images === "pallete1") product.images = pallete1;
        else if (product.images === "pallete2") product.images = pallete2;
        else if (product.images === "pallete3") product.images = pallete3;
        // Uncomment the line below if you want to handle "pallete4"
        // else if (product.images === "pallete4") product.images = pallete4;
    }
  useEffect(() => {
    const fetchProduct = async () => {
      // if (!router.isReady) return; // Wait until router is ready

  

      try {
        const resp = await fetch(`http://localhost:3002/product/${productId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        const newProduct = await resp.json();
        assignImage(newProduct);

        // Assign images to each related product
        newProduct.relatedProducts.forEach(relatedProduct => {
            assignImage(relatedProduct);
        });
          setProducts(newProduct.relatedProducts);
          setReviews(newProduct.ratingList)
        setProduct(newProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    

  const getWishlists = async () => {
    const response = await fetch(`http://localhost:5001/products/allWishlists`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
    });
    const res = await response.json();
    console.log("Wislists:", res);
    setWishlists(res);
  };

    fetchProduct();
    getWishlists();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  const cartClick = () => {
    setCartClicked(true);
    setTimeout(() => setCartClicked(false), 3000); 
    // add to cart to the local storage 
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item._id === productId);

    if (existingProductIndex > -1) {
      // Product exists in the cart, update the quantity
      cart[existingProductIndex].quantity += quantity;
    } else {
      // Product does not exist in the cart, add it
      cart.push(product);
    }

    // Update the cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart))
    // const isRegistered = localStorage.getItem('isRegistered') === 'true';
let isRegistered = false
    if (isRegistered) {
      // Add the cart to the backend
      sendCartToBackend(cart);
    }
  };
  // send cart
  const sendCartToBackend = () => {
    // Retrieve the cart from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Send the cart to the backend
    fetch('https://api.example.com/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    })
      .then(response => {
        if (response.status < 300 && response.status >= 200) {
          console.log('Cart successfully sent to backend');
        } else {
          console.error('Failed to send cart to backend');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const images = [
    "pallete1.webp",
    "pallete2.webp",
    "pallete3.jpg",
    "pallete4.webp",
  ];

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

const handelPostReview = async () => {
    const response = await fetch(`http://localhost:5001/products/rate/${productId}`, {
      method: "POST",
      body: JSON.stringify({
       rating,
       review:reviewText,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
    });
    // const res = await response.json();
    console.log(response);
    
   
  };

  const handelWishList =async () => {
  // get heart status 
  // heartClicked
  if(!heartClicked){
  const response = await fetch(`http://localhost:5001/products/fav`, {
        method: "POST",
        body: JSON.stringify({
          name:product.name,
        images:product.images,
        price:product.price,
        productId:productId,

        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
      });
      // const res = await response.json();
      console.log(response);
    }
    else
    {
      // delete from fav
      const response = await fetch(`http://localhost:5001/products/fav`, {
        method: "DELETE",
        body: JSON.stringify({
    
        productId:productId,

        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        credentials: "include",
      });
      // const res = await response.json();
      console.log(response);
    }



  setHeartClicked(!heartClicked)
  }

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
    const renderStars2 = (rating) => {
      const fullStars = '★'.repeat(rating);
      const emptyStars = '☆'.repeat(5 - rating);
      return `${fullStars}${emptyStars}`;
    };
    return (
      <div className="border border-gray-200 rounded-md p-4 mb-4">

        <div className="flex items-center justify-between mb-2">
          <p className="text-lg font-semibold">{review.rating} Stars</p>
          <div>{renderStars2(review.rating)}</div>
        </div>
        <p className="text-gray-700">{review.review}</p>
      </div>
    );
  };
    
  const addToWishList = async () => {
    const response = await fetch(`http://localhost:5001/products/wishlist/add`, {
      method: "PUT",
      body: JSON.stringify({
        productName:product.name,
        image:product.image,
        price:product.price,
        productId:productId,
        amount:quantity,
        wishListName:wishListName
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
    });
    // const res = await response.json();
    console.log(response);
    setViewingWishlist(false);
  };

  const createNewWishlist = async () => {
    const response = await fetch(`http://localhost:5001/products/wishlist`, {
      method: "POST",
      body: JSON.stringify({
        name: newWishlistName,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
    });
    const res = await response.json();
    console.log(res);
    setWishlists([...wishlists, { name: newWishlistName }]);
    setNewWishlistName("");
    setShowNewWishlistInput(false);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-16">
      {/* Product Details */}
      <div className="flex items-center justify-center">
        <div className="bg-black-100 p-4 sm:p-8 rounded-lg mb-4 sm:mb-0 sm:mr-4">
          <div className="w-full sm:w-96 rounded-box overflow-hidden relative">
            {/* Product Image */}
            {/* <img
              src={product.images}
              className="w-full h-96 object-cover rounded-lg transition-transform duration-300 transform"
              alt={`Ready To Go Pallets ${currentImageIndex + 1}`}
            /> */}
                <Image 
                src={product.images}  className="w-full h-96 object-cover rounded-lg transition-transform duration-300 transform"
              alt={`Ready To Go Pallets ${currentImageIndex + 1}`} />
      {product.stock !== undefined && (
        <p className={product.stock < 5 ? "text-red-500" : ""}>
          {product.stock < 5 ? `Only ${product.stock} left in stock` : ""}
        </p>
      )}
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
            <h2 className="text-2xl font-bold mr-2">{product.name}</h2>
            <FontAwesomeIcon
              icon={faHeart}
              className={`text-${heartClicked ? "red" : "gray"}-500 cursor-pointer`}
              onClick={handelWishList}
            />
          </div>
          {/* Product Price */}
          <div className="text-lg font-italic text-gray-500 mb-4">
            {product.price} EGP
          </div>
          {/* Product Description */}
          <div className="mb-4 max-w-lg mx-auto">
            <p className="text-gray-700 leading-relaxed">
             {product.description}
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
          <div
          className="flex flex-row justify-between gap-4 items-center justify-center sm:justify-start">
            {/* <button
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
            </button> */}
            <button 
            id="addtocart"
            className={`cart-button ${cartClicked ? "clicked" : ""}`}
            onClick={cartClick}
            
            >Add to cart</button>
            <p>Or</p>
      
            <button className="cart-button w-20">Rent</button>
            <div className="flex">
              <button onClick={()=>{setViewingWishlist(true); console.log(viewingWishlist)}}>Add to wishlist</button>
            </div>
          </div>
        </div>
      </div>
      {/* Wishlists */}
      {(
            viewingWishlist && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-neutral-800 p-8 rounded-lg max-w-2xl w-full">
              {/* Listing the wishlists for user to choose from */}
              
              <button
                className="btn btn-primary cart-button w-80 mb-4"
                style={{"color": "white"}}
                onClick={() => setViewingWishlist(false)}
              >
                Close
              </button>
              <h2 className="text-2xl font-bold mb-4" style={{"color": "white"}}>Choose a Wishlist</h2>

          
              {/* Toggle visibility of input field for creating new wishlist */}
              {!showNewWishlistInput ? (
                <button
                  className="btn btn-primary cart-button w-80 mb-4"
                  style={{"color": "white"}}
                  onClick={() => setShowNewWishlistInput(true)}
                >
                  Create New Wishlist
                </button>
              ) : (
                <div className="mb-4">
                  <input
                    type="text"
                    className="p-2 mb-2 w-full"
                    placeholder="Enter new wishlist name"
                    value={newWishlistName}
                    onChange={(e) => setNewWishlistName(e.target.value)}
                  />
                  <button
                    className="btn btn-primary cart-button w-80"
                    style={{"color": "white"}}
                    onClick={createNewWishlist}
                  >
                    Save Wishlist
                  </button>
                </div>
              )}
          
              <div className="flex flex-col space-y-4">
                {wishlists.map((wishlist) => (
                  <button
                    key={wishlist._id}
                    className="bg-blue-600 p-3 px-8 mb-4 text-zinc-300 rounded-[35px]"
                    onClick={() => {
                      setWishListName(wishlist.name);
                      addToWishList();
                    }}
                  >
                    {wishlist.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          )}

      {/* Reviews Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {/* Average Rating */}
        <div className="flex items-center">
          {/* <div className="flex items-center mr-2">
            <p className="mr-1">Average Rating:</p>
            {renderStars()}
          </div> */}
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
          <button type="submit" className="btn btn-quantity bg-blue-700 text-white rounded-full py-2 px-4 mt-4"
          onClick={handelPostReview}
          >
            Submit Review
          </button>
        </form>
        <p>Page content goes here...</p>
      <ShareButtons url={pageUrl} title={pageTitle} />
      <Products products={products} />
      </div>
    </div>
  );
};

export default ProductPage;
