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


import { ArrowUpRight, Navigation } from "lucide-react";
import Stepper from "@/components/shared/stepper";

export default function Page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [addresses, setAddresses] = useState({} as {name: string, id: string}[]);

  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAddress, setNewAddress] = useState({} as {name: string, id: string});

  const [isEditing, setIsEditing] = useState(false);

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
      console.log(res);
      setFirstName(res.user.first_name);
      setLastName(res.user.last_name);
      setEmail(res.user.email);
      setAddress(res.address.name);
      setNewFirstName(res.user.first_name);
      setNewLastName(res.user.last_name);
      setNewEmail(res.user.email);
      setNewAddress({name: res.address.name, id: res.address._id});
      getUserAddresses();
    }
    catch(e){
      alert(e);
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
      setAddresses(res.map((address: {name: string, _id: string}) => {
        return {name: address.name, id: address._id};
      }));
      return res;
    }
    catch(e){
      alert(e);
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
        selected_address_id: newAddress.id,
      }),
      credentials: "include",
    });
    console.log({
      first_name: newFirstName,
      last_name: newLastName,
      email: newEmail,
      selected_address_id: newAddress.id,
    });
    console.log(resp);
    try{
      setFirstName(newFirstName);
      setLastName(newLastName);
      setEmail(newEmail);
      setAddress(newAddress.name);
      setIsEditing(false);
      const res = JSON.parse(await resp.text());
      console.log(res);
    }
    catch(e){
      alert(e);
    }
  }

  useEffect(()=>{
    getUserProfile();
  },[])

  return (
    <div className="container justify-center mx-auto h-screen flex py-20">
      <div className="grid p-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-rows-2 lg:grid-rows-4 my-10 gap-1 rounded-[41px] [background:linear-gradient(120deg,_rgba(255,_255,_255,_0.7),_rgba(255,_255,_255,_0.4))] transparent-bg ">
        <div className=" cont col-span-1 row-span-4 ">
          <div className=" flex flex-col items-center justify-center outer-box bg-custom-gray p-4 justify-left justify-evenly">
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
                        defaultValue={firstName}
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
                        defaultValue={lastName}
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
                    defaultValue={email}
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
                      value={newAddress.name}
                      onChange={(e) => setNewAddress({id: e.target.value, name: e.target.options[e.target.selectedIndex].text})}
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
          </div>
        </div>

        <div className=" cont col-span-2 row-span-1">
          <div className=" overflow-scroll items-center flex flex-row justify-center outer-box bg-[#948979] ">
            <ArrowUpRight className="absolute top-4 right-4 text-neutral-200 h-7 w-7  flex" />
            <Image src={orders} className="h-full  w-52" alt="" />
            <h2 className="text-3xl sm:text-4xl font-semibold from-neutral-50 to-neutral-500 transparent-text ">
              Orders
            </h2>
          </div>
        </div>

        <div className=" cont col-span-1 row-span-1 ">
          <div className="items-center justify-center outer-box bg-[#153448]">
            <ArrowUpRight className="absolute top-4 right-4 text-neutral-300 h-7 w-7" />
            <h2 className="text-5xl   flex from-neutral-100 to-neutral-300 sm:text-5xl font-semibold relative top-[-20px] transparent-text">
              Address Book
            </h2>
          </div>
        </div>



        <div className=" cont col-span-1 row-span-1 ">
          <div className="overflow-scroll [background:linear-gradient(180deg,_rgba(0,0,0,_0.8),_rgba(0,0,0,_0.6))]   justify-center items-center  items-center justify-center outer-box">
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

        <div className=" cont col-span-1 row-span-2 ">
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


        <div className=" cont col-span-1 row-span-2">
          <div className="overflow-scroll bg-stone-800 justify-center items-center  items-center justify-center outer-box">
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
      

        <div className=" cont col-span-1 row-span-1">
          <div className="overflow-scroll bg-[#3C5B6F]  items-center outer-box">
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

       

        <div className=" cont col-span-1 row-span-1">
          <div className="overflow-scroll bg-stone-800 justify-center items-center  items-center justify-center outer-box">
            <ArrowUpRight
              strokeWidth={1.2}
              className="absolute right-4 top-4 text-neutral-100 h-7 w-7"
            />
            {/* <Image src={} alt=""></Image> */}
            <h2 className="text-5xl   flex sm:text-5xl from-neutral-100 to-neutral-300 font-semibold relative top-[-20px] transparent-text">
              performance
            </h2>
          </div>
        </div>

      

        <div className=" cont col-span-2 row-span-1">
          <div className="overflow-scroll bg-stone-800 justify-center   items-center justify-center outer-box">
            <ArrowUpRight
              strokeWidth={1.2}
              className="absolute right-4 top-4 text-neutral-100 h-7 w-7"
            />
            <h2 className="text-5xl   flex sm:text-5xl from-neutral-100 to-neutral-300 font-semibold relative top-[-20px] transparent-text">
              Offers
            </h2>
          </div>
        </div>


      </div>
    </div>
  );
}
