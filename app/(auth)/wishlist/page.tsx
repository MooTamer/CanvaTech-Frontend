"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import picture from "@/public/girl.svg";
import picture2 from "@/public/test.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import persona2 from "@/public/persona2.jpg";
import onitsway from "@/public/on its way.svg";
import delivered from "@/public/Dilevered.svg";
import preparing from "@/public/Processing.svg";
import order1 from "@/public/3D.png";
import order2 from "@/public/3D2.png";
import newdesign from "@/public/start design.png";
import contact from "@/public/contact.png";
import favourites from "@/public/favourites.png";
import ismoetric from "@/public/Isometric delivery robot.gif";
import review from "@/public/reviews.png";
import orders from "@/public/orders.png";
import backendUrl from "../../url.json";
import pallete1 from "@/public/pallete1.webp";
import pallete2 from "@/public/pallete2.webp";
import pallete3 from "@/public/pallete3.jpg";

import { ArrowUpRight, Navigation } from "lucide-react";
import Stepper from "@/components/shared/stepper";
import { log } from "console";
import { json } from "stream/consumers";
import { set } from "zod";

export default function Page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [addresses, setAddresses] = useState({} as 
    {
      name: string,
      id: string,
      country: string,
      city: string,
      address_line_1: string,
      address_line_2: string,
      phone_number: string,
      zip_code: string
    }[]);
  const [wishListName, setWishListName] = useState("");
  const [showNewWishlistInput, setShowNewWishlistInput] = useState(false);
  const [newWishlistName, setNewWishlistName] = useState("");
  const [viewingWishlist, setViewingWishlist] = useState(false);

  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [selectedAddress, setSelectedAddress] = useState({} as {name: string, id: string});

  const [deleteCode, setDeleteCode] = useState("");
  const [updateCode, setUpdateCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [updatingPassword, setUpdatingPassword] = useState(false);
  const [deletingProfile, setDeletingProfile] = useState(false);
  const [addingNewAddress, setAddingNewAddress] = useState(false);
  const [newAddress, setNewAddress] = useState({} as
    {
      name: string,
      id: string,
      country: string,
      city: string,
      address_line_1: string,
      address_line_2: string,
      phone_number: string,
      zip_code: string
    });
  const [page, setPage] = useState("profile");
  const [wishlist, setWishlist] = useState({} as {
    name: string;
    image: string;
    price: number;
    products: {
        id: string;
        price: number;
        amount: number;
        images: string;
        product_name: string;
    }[];
    }[]);

  console.log("wishlist.length")
  console.log(wishlist.length)
  const [selectedWishlist, setSelectedWishlist] = useState({} as {
    name: string;
    image: string;
    price: number;
    products: {
        id: string;
        price: number;
        amount: number;
        images: string;
    }[];
  });

  const getUserProfile = async () => {
    const resp = await fetch(backendUrl.backendUrl + "profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    try{
      const res = JSON.parse(await resp.text());
      console.log(resp);
      if (res.statusCode === 401) {
        window.location.href = '/login';
        return;
      }
      console.log(res);
      setFirstName(res.user.first_name);
      setLastName(res.user.last_name);
      setEmail(res.user.email);
      setAddress(res.address.name);
      setNewFirstName(res.user.first_name);
      setNewLastName(res.user.last_name);
      setNewEmail(res.user.email);
      setSelectedAddress({id: res.address._id, name: res.address.name});
    }
    catch(e){
      console.log(e);
    }
  };

  const getWishlist = async () => {
    const resp = await fetch(backendUrl.backendUrl + "products/allWishlists", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    console.log(resp);
    try{
      const res = JSON.parse(await resp.text());
      console.log(res);
      res.map((wishlist: {name: string, image: string, price: number, products: {id: string, price: number, amount: number, images: string}[]}) => {
        return {name: wishlist.name, image: wishlist.image, price: wishlist.price, products: wishlist.products.map((product: {id: string, price: number, amount: number, images: string}) => {
          return {id: product.id, price: product.price, amount: product.amount, images: product.images == "pallete1" ? pallete1 : product.images == "pallete2" ? pallete2 : pallete3};
        })};
      });
      setWishlist(res);
    }
    catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    console.log("wishlist.length")
    console.log(wishlist.length)
    getUserProfile();
    getWishlist();
  },[])

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
    console.log(JSON.stringify({
      name: newWishlistName,
    }));
    console.log(response);
    const res = await response.json();
    console.log(res);
    if (response.status >= 300 || response.status < 200) {
      alert("Error1: " + res.message);
      return;
    }
    alert("Wishlist created successfully");
    const wishlists = res.wishlists;
    setWishlist(wishlists.map((wishlist: {name: string, products: {id: string, price: number, amount: number, images: string}[]}) => {  
      return {name: wishlist.name, products: wishlist.products.map((product: {id: string, price: number, amount: number, images: string}) => {
        return {id: product.id, price: product.price, amount: product.amount, images: product.images == "pallete1" ? pallete1 : product.images == "pallete2" ? pallete2 : pallete3};
      })};
    }));
    setNewWishlistName("");
    setShowNewWishlistInput(false);
  };

  const deleteWishlist = async (wishlistName: string) => {
    const response = await fetch(`http://localhost:5001/products/wishlist`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        wishListName: wishlistName,
      }),
      credentials: "include",
    });
    const res = await response.json();
    console.log(res);
    if (response.status >= 300 || response.status < 200) {
      alert("Error1: " + res.message);
      return;
    }
    alert("Wishlist deleted successfully");
    const wishlists = res.wishlists;
    setWishlist(wishlists.map((wishlist: {name: string, products: {id: string, price: number, amount: number, images: string}[]}) => {  
      return {name: wishlist.name, products: wishlist.products.map((product: {id: string, price: number, amount: number, images: string}) => {
        return {id: product.id, price: product.price, amount: product.amount, images: product.images == "pallete1" ? pallete1 : product.images == "pallete2" ? pallete2 : pallete3};
      })};
    }));
  }

  const removeProductFromWishlist = async (wishlistName: string, productId: string) => {
    const response = await fetch(`http://localhost:5001/products/wishlist/remove`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        wishListName: wishlistName,
        productId: productId,
      }),
      credentials: "include",
    });
    const res = await response.json();
    console.log(res);
    if (response.status >= 300 || response.status < 200) {
      alert("Error1: " + res.message);
      return;
    }
    const wishlists = res.wishlists;
    console.log(wishlists);
    setWishlist(wishlists.map((wishlist: {name: string, products: {id: string, price: number, amount: number, images: string}[]}) => {  
      return {name: wishlist.name, products: wishlist.products.map((product: {id: string, price: number, amount: number, images: string}) => {
        return {id: product.id, price: product.price, amount: product.amount, images: product.images == "pallete1" ? pallete1 : product.images == "pallete2" ? pallete2 : pallete3};
      })};
    }));
  }

  return (
    <div className="container justify-center mx-auto h-screen flex py-20">
      <div className="grid p-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-rows-2 lg:grid-rows-4 my-10 gap-1 rounded-[41px] [background:linear-gradient(120deg,_rgba(255,_255,_255,_0.7),_rgba(255,_255,_255,_0.4))] transparent-bg ">
        <>
          <div className="cont col-span-4 row-span-4 p-4">
            <div className="outer-box bg-custom-gray p-4 h-full flex flex-col">
              <button
                className="bg-blue-600 p-3 px-8 mb-4 text-zinc-300 rounded-[35px]"
                onClick={() => setShowNewWishlistInput(true)}
              >
                Create New Wishlist
              </button>
              {showNewWishlistInput && (
                <div className="bg-neutral-800 p-4 mb-4 rounded-lg clickable flex flex-col items-center justify-center">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2 col-span-1">
                      <div className="flex gap-3 items-center justify-between justify-center flex-row">
                        <label className="text-neutral-200">
                          Name:
                        </label>
                        <input
                          type="text"
                          className="transparent-bg2 w-64"
                          onInput={(e) => setNewWishlistName(e.currentTarget.value)}
                          onChange={(e) => setNewWishlistName(e.target.value)}
                        />
                      </div>
                    </div>
                    <button
                      className="bg-blue-600 p-3 px-8 mr-2 default-hover text-zinc-300 rounded-[35px]"
                      onClick={() => createNewWishlist()}
                    >
                      Create
                    </button>
                    <button
                      className="bg-red-600 p-3 px-8 default-hover text-zinc-300 rounded-[35px]"
                      onClick={() => setShowNewWishlistInput(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
              <div className="overflow-y-scroll flex-grow">
                {wishlist.length == 0 || !wishlist.length ? (
                  <p className="text-neutral-200">No wishlists found.</p>
                ) : (
                  wishlist?.map((wish, index) => (
                    <div key={index} className="bg-neutral-800 p-4 mb-4 rounded-lg clickable flex flex-col items-center justify-center">
                      <h3 className="text-neutral-200 font-semibold">{wish.name}</h3>
                      <p className="text-neutral-200">{"Total Price: " + wish.price}</p>
                      <div className="grid grid-cols-2 gap-4">
                        {wish.products?.map((product) => (
                          <div key={product.id} className="bg-neutral-700 p-4 rounded-lg flex flex-col items-center justify-center">
                            <Image src={product.images} className="h-20 w-20" alt="" />
                            <p className="text-neutral-200">{product.product_name}</p>
                            <p className="text-neutral-200">{product.price}</p>
                            <p className="text-neutral-200">{product.amount}</p>
                            <button
                              className="bg-red-600 p-3 px-8 default-hover text-zinc-300 rounded-[35px]"
                              onClick={() => removeProductFromWishlist(wish.name, product.id)}
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                      <button
                        className="bg-red-600 p-3 px-8 default-hover text-zinc-300 rounded-[35px]"
                        onClick={() => deleteWishlist(wish.name)}
                      >
                        Delete
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
