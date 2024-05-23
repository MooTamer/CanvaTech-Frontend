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
import Cookies from 'js-cookie';


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

  const getUserAddresses = async () => {
    const resp = await fetch(backendUrl.backendUrl + "profile/allAddresses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    try{
      const res = JSON.parse(await resp.text());
      setAddresses(res.map((address: {name: string, _id: string, country: string, city: string, address_line_1: string, address_line_2: string, phone_number: string, zip_code: string}) => {
        return {name: address.name, id: address._id, country: address.country, city: address.city, address_line_1: address.address_line_1, address_line_2: address.address_line_2, phone_number: address.phone_number, zip_code: address.zip_code};
      }));
      return res;
    }
    catch(e){
      console.log(e);
    }
  };

  const updateUserProfile = async () => {
    const resp = await fetch(backendUrl.backendUrl + "profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: newFirstName,
        last_name: newLastName,
        email: newEmail,
        selected_address_id: selectedAddress.id,
      }),
      credentials: "include",
    });
    try{
      setFirstName(newFirstName);
      setLastName(newLastName);
      setEmail(newEmail);
      setAddress(selectedAddress.name);
      setIsEditing(false);
      const res = JSON.parse(await resp.text());
      console.log(res);
    }
    catch(e){
      alert(e);
    }
  }

  const updateAddress = async (address: {name: string, id: string, country: string, city: string, address_line_1: string, address_line_2: string, phone_number: string, zip_code: string}) => {
    const resp = await fetch(backendUrl.backendUrl + "profile/updateAddress", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address_id: address.id,
        name: address.name,
        address_line_1: address.address_line_1,
        address_line_2: address.address_line_2,
        city: address.city,
        country: address.country,
        zip_code: address.zip_code,
        phone_number: address.phone_number,
      }),
      credentials: "include",
    });
    try{
      const res = JSON.parse(await resp.text());
      if (resp.status != 200 && resp.status != 201 && resp.status != 204) {
        alert("Error1: " + res.message);
      }
      else{
        alert("Address updated successfully");
      }
    }
    catch(e){
      alert(e);
    }
  }

  const deleteAddress = async (address: {name: string, id: string, country: string, city: string, address_line_1: string, address_line_2: string, phone_number: string, zip_code: string}) => {
    const resp = await fetch(backendUrl.backendUrl + "profile/deleteAddress", {
      method: "DELETE",
      body: JSON.stringify({
        id: address.id,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
    });
    try{
      console.log(JSON.stringify({
        id: address.id,
      }));
      const res = JSON.parse(await resp.text());
      console.log(resp.status);
      if (resp.status != 200 && resp.status != 201 && resp.status != 204) {
        alert("Error1: " + res.message);
      }
      else{
        setAddresses(addresses?.filter((a) => a.id != address.id));
      }
    }
    catch(e){
      alert("Error1: " + e);
    }
  }

  const addAddress = async (address: {name: string, id: string, country: string, city: string, address_line_1: string, address_line_2: string, phone_number: string, zip_code: string}) => {
    const resp = await fetch(backendUrl.backendUrl + "profile/createAddress", {
      method: "POST",
      body: JSON.stringify({
        name: address.name,
        address_line_1: address.address_line_1,
        address_line_2: address.address_line_2,
        city: address.city,
        country: address.country,
        zip_code: address.zip_code,
        phone_number: address.phone_number,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
    });
    try{
      const res = JSON.parse(await resp.text());
      console.log(resp.status);
      if (resp.status == 200 || resp.status == 201 || resp.status == 204) {
          address = {name: res.name, id: res._id, country: res.country, city: res.city, address_line_1: res.address_line_1, address_line_2: res.address_line_2, phone_number: res.phone_number, zip_code: res.zip_code};
          setAddresses([...addresses, address])
          setAddingNewAddress(false);
      }
      else{
        alert("Error1: " + res.message);
      }
    }
    catch(e){
      alert("Error1: " + e);
    }
  }

  const deleteProfile = async () => {
    const resp = await fetch(backendUrl.backendUrl + "profile/delete", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    try{
      const res = JSON.parse(await resp.text());
      alert(res.message);
    }
    catch(e){
      alert(e);
    }
  }

  const deleteConfirmProfile = async (code: string) => {
    const resp = await fetch(backendUrl.backendUrl + "profile/confirmDelete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
      }),
      credentials: "include",
    });
    try{
      if (resp.status != 200 && resp.status != 201 && resp.status != 204) {
        const res = JSON.parse(await resp.text());
        alert(res.message);
      }
      else{
        alert("Profile deleted successfully");
        localStorage.removeItem("token");
        window.location.href = "/";
      }
    }
    catch(e){
      alert(e);
    }
  }

  const updatePassword = async () => {
    const resp = await fetch(backendUrl.backendUrl + "profile/updatePassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    try{
      const res = JSON.parse(await resp.text());
      if (resp.status != 200 && resp.status != 201 && resp.status != 204) {
        alert("Error1: " + res.message);
      }
      else{
        alert("Email sent! Check your email for the reset code.");
      }
    }
    catch(e){
      alert(e);
    }
  }

  const updateConfirmPassword = async (code: string, newPassword: string) => {
    const resp = await fetch(backendUrl.backendUrl + "profile/updatePassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
        password: newPassword,
      }),
      credentials: "include",
    });
    try{
      const res = JSON.parse(await resp.text());
      if (resp.status != 200 && resp.status != 201 && resp.status != 204) {
        alert("Error1: " + res.message);
      }
      else{
        alert("Password updated successfully");
        setUpdatingPassword(false);
      }
    }
    catch(e){
      alert(e);
    }
  }

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
    getUserProfile();
    getUserAddresses();
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
        <div className=" cont col-span-1 row-span-4 "> {/*Profile*/}
          <div className="overflow-y-scroll flex flex-col items-center justify-center outer-box bg-custom-gray p-4 justify-left justify-evenly">
            <div className="flex flex-col items-left  w-full max-w-lg justify-between gap-4 ">
              <div className="items-left  justify-between gap-4 flex flex-col p-4">
                <Image
                  className="w-20 h-20 z-50 relative rounded-full overflow-hidden  object-cover"
                  alt="Profile Picture"
                  src={persona2}
                />
                {isEditing ?
                  <>
                    <div className="flex gap-3 items-center justify-center flex-row">
                      <label className="text-neutral-200">
                        First Name:
                      </label>
                      <input
                        type="text"
                        className="transparent-bg2"
                        defaultValue={newFirstName}
                        onInput={(e) => setNewFirstName(e.currentTarget.value)}
                        onChange={(e) => setNewFirstName(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-3 items-center justify-center flex-row">
                      <label className="text-neutral-200">
                        Last Name:
                      </label>
                      <input
                        type="text"
                        className="transparent-bg2"
                        defaultValue={newLastName}
                        onInput={(e) => setNewLastName(e.currentTarget.value)}
                        onChange={(e) => setNewLastName(e.target.value)}
                      />
                    </div>
                  </>
                  :
                  <div className="flex gap-3 items-center flex-row">
                    <p className="text-neutral-200">{firstName}</p>
                    <p className="text-neutral-200">{lastName}</p>
                  </div>
                }

              </div>
              {isEditing ? <>
              <div className="flex flex-col gap-4 w-full max-w-sm">
                <div className="flex gap-3 items-center justify-center flex-row">
                  <label className="text-neutral-200" htmlFor="email">
                    Email:
                  </label>
                  <input
                    type="text"
                    className="transparent-bg2"
                    defaultValue={newEmail}
                    onInput={(e) => setNewEmail(e.currentTarget.value)}
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-4 w-full max-w-sm">
                  <div className="flex gap-3 items-center justify-center flex-row">
                    <label className="text-neutral-200" htmlFor="address">
                      Address:
                    </label>
                    <select
                      className="transparent-bg2"
                      value={selectedAddress.name}
                      onChange={(e) => setSelectedAddress({id: e.target.value, name: e.target.options[e.target.selectedIndex].text})}
                    >
                      <option value="">Select an address</option>
                      {addresses.map((address) => {
                        return <option value={address.id}>{address.name}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </> :
              <>
              <div className="flex gap-3 items-center flex-row">
                <label className="text-neutral-200">
                  Email:
                </label>
                <label className="text-neutral-200">
                  <p>{email}</p>
                </label>
                
              </div>
                <div className="flex gap-3 items-center flex-row">
                  <label className="text-neutral-200">Address:</label>
                  <label className="text-neutral-200">
                  <p>{address}</p>
                  </label>
                </div>
                </>

              }
            </div>
            <div className="flex-row">
              <button className="bg-blue-600 p-3 px-8 mr-2 default-hover text-zinc-300 rounded-[35px]"
              onClick={() => setIsEditing(!isEditing)}
              >
                Edit
              </button>
              <button
                disabled = {!isEditing}
                onClick={()=> updateUserProfile()}
                className="bg-blue-600 disabled:bg-neutral-500 p-3 px-10  default-hover text-zinc-300 rounded-[35px]"
              >
                confirm
              </button>
            </div>
            <div className="flex-row">
              <button
                onClick={()=> {deletingProfile ? setDeletingProfile(false) : (setDeletingProfile(true), deleteProfile());}}
                className="bg-red-600 p-3 px-8 mt-2 default-hover text-zinc-300 rounded-[35px]"
              >
                Delete Profile
              </button>
              {deletingProfile && (
                <div className="bg-neutral-800 p-4 mb-4 rounded-lg clickable flex flex-col items-center justify-center">
                  <div className="grid md:grid-cols-1 gap-4">
                    <div className="flex flex-row gap-4">
                      <input
                        type="text"
                        placeholder="Enter your code here"
                        className="transparent-bg2"
                        onChange={(e) => setDeleteCode(e.target.value)}
                        onInput={(e) => setDeleteCode(e.currentTarget.value)}
                      />
                    </div>
                    <div className="flex flex-row gap-4">
                      <button
                        className="bg-red-600 p-3 px-8 mb-4 text-zinc-300 rounded-[35px]"
                        onClick={() => deleteConfirmProfile(deleteCode)}
                      >
                        Confirm
                      </button>
                    </div>
                    <div className="flex flex-row gap-4">
                      <button
                        className="bg-blue-600 p-3 px-8 mb-4 text-zinc-300 rounded-[35px]"
                        onClick={() => setDeletingProfile(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex-row">
              <button
                onClick={()=> {updatingPassword ? setUpdatingPassword(false) : (setUpdatingPassword(true), updatePassword());}}
                className="bg-blue-600 p-3 px-8 mt-2 default-hover text-zinc-300 rounded-[35px]"
              >
                Update Password
              </button>
              {updatingPassword && (
                <div className="bg-neutral-800 p-4 mb-4 rounded-lg clickable flex flex-col items-center justify-center">
                  <div className="grid md:grid-cols-1 gap-4">
                    <div className="flex flex-row gap-4">
                      <input
                        type="text"
                        placeholder="Enter your code here"
                        className="transparent-bg2"
                        onChange={(e) => setUpdateCode(e.target.value)}
                        onInput={(e) => setUpdateCode(e.currentTarget.value)}
                      />
                      </div>
                      <div className="flex flex-row gap-4">
                      <input
                        type="password"
                        placeholder="Enter your new password"
                        className="transparent-bg2"
                        onChange={(e) => setNewPassword(e.target.value)}
                        onInput={(e) => setNewPassword(e.currentTarget.value)}
                      />
                      </div>
                      <div className="flex flex-row gap-4">
                      <button
                        className="bg-blue-600 p-3 px-8 mb-4 text-zinc-300 rounded-[35px]"
                        onClick={() => setUpdatingPassword(false)}
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="flex flex-row gap-4">
                      <button
                        className="bg-red-600 p-3 px-8 mb-4 text-zinc-300 rounded-[35px]"
                        onClick={() => updateConfirmPassword(updateCode, newPassword)}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {page === "profile" ? <>
          <div className=" cont col-span-2 row-span-1 clickable" onClick={()=>{console.log("Click")}}> {/*Orders*/}
            <div className="items-center flex flex-row justify-center outer-box bg-[#948979] ">
              <ArrowUpRight className="absolute top-4 right-4 text-neutral-200 h-7 w-7  flex" />
              <Image src={orders} className="h-full  w-52" alt="" />
              <h2 className="text-3xl sm:text-4xl font-semibold from-neutral-50 to-neutral-500 transparent-text ">
                Orders
              </h2>
            </div>
          </div>

          <div className=" cont col-span-1 row-span-1 clickable" onClick={()=>{setPage("address")}}> {/*Address Book*/}
            <div className="items-center justify-center outer-box bg-[#153448]">
              <ArrowUpRight className="absolute top-4 right-4 text-neutral-300 h-7 w-7" />
              <h2 className="text-5xl   flex from-neutral-100 to-neutral-300 sm:text-5xl font-semibold relative top-[-20px] transparent-text">
                Address Book
              </h2>
            </div>
          </div>

          <div className=" cont col-span-1 row-span-1 clickable" onClick={()=>{console.log("Click")}}> {/*Contact Us*/}
            <div className="[background:linear-gradient(180deg,_rgba(0,0,0,_0.8),_rgba(0,0,0,_0.6))]   justify-center items-center  items-center justify-center outer-box">
              <Navigation
                strokeWidth={1.2}
                className="absolute right-4 top-4 text-neutral-300 h-7 w-7"
              />
              <Image src={contact} className="h-[100%] w-auto" alt=""/>
              <h2 className="text-xl sm:text-2xl md:text-4xl absolute flex bg-gradient-to-r from-neutral-50 to-neutral-500 font-semibold bottom-1 left-4 transparent-text">
                Contact Us
              </h2>
            </div>
          </div>

          <div className=" cont col-span-1 row-span-2 clickable" onClick={()=>{console.log("Click")}}> {/*Start a new design*/}
            <div className=" bg-newdesign bg-contain  bg-[#DFD0B8] bg-no-repeat  z-40   outer-box">
              <ArrowUpRight
                strokeWidth={1.2}
                className="absolute right-4 top-4 text-neutral-100 h-7 w-7"
              />
              <h2 className="lg:text-4xl   absolute  top-1 right-[-130px] flex from-neutral-50 to-neutral-500 font-semibold relative  transparent-text">
                Start a <br />
                new design
              </h2>
            </div>
          </div>

          <div className=" cont col-span-1 row-span-2 clickable" onClick={()=>{console.log("Click")}}> {/*Reviews*/}
            <div className="bg-stone-800 justify-center items-center  items-center justify-center outer-box">
              <ArrowUpRight
                strokeWidth={1.2}
                className="absolute right-4 top-4 text-neutral-100 h-7 w-7"
              />
              <Image src={review} className="h-60  w-52" alt="" />
              <h2 className="text-5xl   flex sm:text-5xl from-neutral-50 to-neutral-800 font-semibold relative top-[-20px] transparent-text">
                Reviews
              </h2>
            </div>
          </div>

          <div className=" cont col-span-1 row-span-1 clickable" onClick={()=>{console.log("Click")}}> {/*Favourites*/}
            <div className="bg-[#3C5B6F]  items-center outer-box">
              <ArrowUpRight
                strokeWidth={1.2}
                className="absolute right-4 top-4 text-neutral-100 h-7 w-7"
              />
              <Image src={favourites} className="h-[100%] w-auto" alt="" />
              <h2 className="text-4xl  flex  absolute bottom-2 left-4  bg-gradient-to-r from-neutral-50 to-neutral-500 font-semibold  transparent-text">
                Favourites
              </h2>
            </div>
          </div>

          <div className="cont col-span-1 row-span-1 clickable" onClick={()=>{console.log("Click")}}> {/*Performance*/}
            <div className="bg-stone-800 justify-center items-center  items-center justify-center outer-box">
              <ArrowUpRight
                strokeWidth={1.2}
                className="absolute right-4 top-4 text-neutral-100 h-7 w-7"
              />
              {/* <Image src={} alt=""></Image> */}
              <h2 className="text-5xl flex sm:text-5xl from-neutral-100 to-neutral-300 font-semibold relative top-[-20px] transparent-text">
                Performance
              </h2>
            </div>
          </div>

          <div className="cont col-span-1 row-span-1 clickable" onClick={()=>{setPage("wishlist")}}> {/*Wishlist*/}
            <div className="bg-stone-800 justify-center items-center  items-center justify-center outer-box">
              <ArrowUpRight
                strokeWidth={1.2}
                className="absolute right-4 top-4 text-neutral-100 h-7 w-7"
              />
              {/* <Image src={} alt=""></Image> */}
              <h2 className="text-5xl flex sm:text-5xl from-neutral-100 to-neutral-300 font-semibold relative top-[-20px] transparent-text">
                Wishlist
              </h2>
            </div>
          </div>

          <div className="cont col-span-1 row-span-1 clickable" onClick={()=>{console.log("Click")}}> {/*Offers*/}
            <div className="bg-stone-800 justify-center   items-center justify-center outer-box">
              <ArrowUpRight
                strokeWidth={1.2}
                className="absolute right-4 top-4 text-neutral-100 h-7 w-7"
              />
              <h2 className="text-5xl   flex sm:text-5xl from-neutral-100 to-neutral-300 font-semibold relative top-[-20px] transparent-text">
                Offers
              </h2>
            </div>
          </div>
        </>
        :
        page === "address" ? <>
        {/* Making a scrollable div that lists all addresses*/}
          <div className="cont col-span-3 row-span-4 p-4">
            <div className="outer-box bg-custom-gray p-4 h-full flex flex-col">
              <button 
                className="bg-blue-600 p-3 px-8 mb-4 text-zinc-300 rounded-[35px]"
                onClick={() => setPage("profile")}
              >
                Back to Profile
              </button>
              <div className="overflow-y-scroll flex-grow">
                {/* Add Address Button */}
                <button
                  className="bg-blue-600 p-3 px-8 mb-4 text-zinc-300 rounded-[35px]"
                  onClick={() => setAddingNewAddress(true)}
                >
                  Add Address
                </button>
                {addingNewAddress && (
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
                            onInput={(e) => setNewAddress({...newAddress, name: e.currentTarget.value})}
                            onChange={(e) => setNewAddress({...newAddress, name: e.currentTarget.value})}
                          />
                        </div>
                        <div className="flex gap-3 items-center justify-between justify-center flex-row">
                          <label className="text-neutral-200">
                            Address Line 1:
                          </label>
                          <input
                            type="text"
                            className="transparent-bg2 w-64"
                            onInput={(e) => setNewAddress({...newAddress, address_line_1: e.currentTarget.value})}
                            onChange={(e) => setNewAddress({...newAddress, address_line_1: e.currentTarget.value})}
                          />
                        </div>
                        <div className="flex gap-3 items-center justify-between justify-center flex-row">
                          <label className="text-neutral-200">
                            Address Line 2:
                          </label>
                          <input
                            type="text"
                            className="transparent-bg2 w-64"
                            onInput={(e) => setNewAddress({...newAddress, address_line_2: e.currentTarget.value})}
                            onChange={(e) => setNewAddress({...newAddress, address_line_2: e.currentTarget.value})}
                          />
                        </div>
                        <div className="flex gap-3 items-center justify-between justify-center flex-row">
                          <label className="text-neutral-200">
                            City:
                          </label>
                          <input
                            type="text"
                            className="transparent-bg2 w-64"
                            onInput={(e) => setNewAddress({...newAddress, city: e.currentTarget.value})}
                            onChange={(e) => setNewAddress({...newAddress, city: e.currentTarget.value})}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 col-span-1">
                        <div className="flex gap-3 items-center justify-between justify-center flex-row">
                          <label className="text-neutral-200">
                            Country:
                          </label>
                          <input
                            type="text"
                            className="transparent-bg2 w-64"
                            onInput={(e) => setNewAddress({...newAddress, country: e.currentTarget.value})}
                            onChange={(e) => setNewAddress({...newAddress, country: e.currentTarget.value})}
                          />
                        </div>
                        <div className="flex gap-3 items-center justify-between justify-center flex-row">
                          <label className="text-neutral-200">
                            Zip Code:
                          </label>
                          <input
                            type="text"
                            className="transparent-bg2 w-64"
                            onInput={(e) => setNewAddress({...newAddress, zip_code: e.currentTarget.value})}
                            onChange={(e) => setNewAddress({...newAddress, zip_code: e.currentTarget.value})}
                          />
                        </div>
                        <div className="flex gap-3 items-center justify-between justify-center flex-row">
                          <label className="text-neutral-200">
                            Phone Number:
                          </label>
                          <input
                            type="text"
                            className="transparent-bg2 w-64"
                            onInput={(e) => setNewAddress({...newAddress, phone_number: e.currentTarget.value})}
                            onChange={(e) => setNewAddress({...newAddress, phone_number: e.currentTarget.value})}
                          />
                        </div>
                      </div>
                      <button
                        className="bg-blue-600 p-3 px-8 mr-2 default-hover text-zinc-300 rounded-[35px]"
                        onClick={() => addAddress(newAddress)}
                      >
                        Add
                      </button>
                      <button
                        className="bg-red-600 p-3 px-8 default-hover text-zinc-300 rounded-[35px]"
                        onClick={() => setAddingNewAddress(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
                
                {addresses.length === 0 ? (
                  <p className="text-neutral-200">No addresses found.</p>
                ) : (
                  console.log(addresses),
                  addresses.map((address) => (
                    
                    <div key={address.id} className="bg-neutral-800 p-4 mb-4 rounded-lg clickable flex flex-col items-center justify-center">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2 col-span-1">
                          <div className="flex gap-3 items-center justify-between justify-center flex-row">
                            <label className="text-neutral-200">
                              Name:
                            </label>
                            <input
                              type="text"
                              className="transparent-bg2 w-64"
                              defaultValue={address.name}
                              onInput={(e) => address.name = e.currentTarget.value}
                            />
                          </div>
                          <div className="flex gap-3 items-center justify-between justify-center flex-row">
                            <label className="text-neutral-200">
                              Address Line 1:
                            </label>
                            <input
                              type="text"
                              className="transparent-bg2 w-64"
                              defaultValue={address.address_line_1}
                              onInput={(e) => address.address_line_1 = e.currentTarget.value}
                            />
                          </div>
                          <div className="flex gap-3 items-center justify-between justify-center flex-row">
                            <label className="text-neutral-200">
                              Address Line 2:
                            </label>
                            <input
                              type="text"
                              className="transparent-bg2 w-64"
                              defaultValue={address.address_line_2}
                              onInput={(e) => address.address_line_2 = e.currentTarget.value}
                            />
                          </div>
                          <div className="flex gap-3 items-center justify-between justify-center flex-row">
                            <label className="text-neutral-200">
                              City:
                            </label>
                            <input
                              type="text"
                              className="transparent-bg2 w-64"
                              defaultValue={address.city}
                              onInput={(e) => address.city = e.currentTarget.value}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 col-span-1">
                          <div className="flex gap-3 items-center justify-between justify-center flex-row">
                            <label className="text-neutral-200">
                              Country:
                            </label>
                            <input
                              type="text"
                              className="transparent-bg2 w-64"
                              defaultValue={address.country}
                              onInput={(e) => address.country = e.currentTarget.value}
                            />
                          </div>
                          <div className="flex gap-3 items-center justify-between justify-center flex-row">
                            <label className="text-neutral-200">
                              Zip Code:
                            </label>
                            <input
                              type="text"
                              className="transparent-bg2 w-64"
                              defaultValue={address.zip_code}
                              onInput={(e) => address.zip_code = e.currentTarget.value}
                            />
                          </div>
                          <div className="flex gap-3 items-center justify-between justify-center flex-row">
                            <label className="text-neutral-200">
                              Phone Number:
                            </label>
                            <input
                              type="text"
                              className="transparent-bg2 w-64"
                              defaultValue={address.phone_number}
                              onInput={(e) => address.phone_number = e.currentTarget.value}
                            />
                          </div>
                        </div>
                        <button
                          className="bg-blue-600 p-3 px-8 mr-2 default-hover text-zinc-300 rounded-[35px]"
                          onClick={() => updateAddress(address)}
                        >
                          Update
                        </button>
                        <button
                          className="bg-red-600 p-3 px-8 default-hover text-zinc-300 rounded-[35px]"
                          onClick={() => deleteAddress(address)}
                        >
                          Delete
                        </button>
                      </div>
                      {/* <>
                      <h3 className="text-neutral-200 font-semibold">{address.name}</h3>
                      <p className="text-neutral-400">{address.address_line_1}</p>
                      {address.address_line_2 && <p className="text-neutral-400">{address.address_line_2}</p>}
                      <p className="text-neutral-400">{address.city}, {address.country}</p>
                      <p className="text-neutral-400">{address.zip_code}</p>
                      <p className="text-neutral-400">{address.phone_number}</p>
                      </> */}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </>
        :
        page === "wishlist" ?
        <>
          <div className="cont col-span-3 row-span-4 p-4">
            <div className="outer-box bg-custom-gray p-4 h-full flex flex-col">
              <button
                className="bg-blue-600 p-3 px-8 mb-4 text-zinc-300 rounded-[35px]"
                onClick={() => setPage("profile")}
              >
                Back to Profile
              </button>
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
                {wishlist.length === 0 ? (
                  <p className="text-neutral-200">No wishlists found.</p>
                ) : (
                  wishlist.map((wish, index) => (
                    <div key={index} className="bg-neutral-800 p-4 mb-4 rounded-lg clickable flex flex-col items-center justify-center">
                      <h3 className="text-neutral-200 font-semibold">{wish.name}</h3>
                      <p className="text-neutral-200">{wish.price}</p>
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
        </> : <></>
        }
      </div>
    </div>
  );
}
