import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Github, Layers2, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="justify-center flex bg-neutral-200 flex-col  w-screen h-[30rem] ">
      <div className="grid grid-cols-2  md:grid-cols-3  my-10 gap-1">
        <div className="flex justify-center gap-4 items-center">
          <div className="flex flex-col gap-8 justify-center pointer-events-auto items-center gap-8">
            <Link legacyBehavior href="/">
              <div className="flex-row hover:cursor-pointer flex">
                <Layers2 color="#52525B" size={50} strokeWidth={1.25} />

                <a className="duration-200 hover:cursor-pointer ml-1 text-neutral-800 text-4xl hover:text-neutral-500">
                  CanvaTech
                </a>
              </div>
            </Link>
            <div className="flex flex-row gap-6">
              <Linkedin size={30} strokeWidth={1.5} />
              <Twitter size={30} strokeWidth={1.5} />
              <Github size={30} strokeWidth={1.5} />
            </div>
          </div>
        </div>
        <div className="flex flex-col  items-center">
          <div className="flex items-left flex-col gap-2">
            <h1 className="tracking-widest mb-3 text-neutral-700 font-semibold text-xl ">
              Contact Us
            </h1>
            <p className="text-neutral-500 text-sm">hello@CanvaTech.co </p>
            <p className="text-neutral-500 text-sm">
              24 Atlantic Ave ,Brooklyn, NY 11201 <br /> CanvaTech Inc
            </p>
            <p className="text-neutral-500 text-sm">+38 839 121 89 22</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-col items-left gap-2">
            <h1 className="tracking-widest mb-2 text-xl font-semibold text-left text-neutral-700">
              Subscribe
            </h1>
            <p className="text-neutral-500">
              Enter your email to get notified about our new solutions
            </p>
            <div className="flex  justify-center">
              <input
                type="email"
                className=" w-[100%] transparent-bg2"
                placeholder="John@doe.com"
              />
            </div>
          </div>
        </div>
        <hr className="border-t w-full border-neutral-300 my-8 col-span-2 md:col-span-3" />
        <div className="flex col-span-3 justify-end items-center px-10">
          <h1 className="text-neutral-500">
            © 2024 CanvaTech Inc. All rights reserved
          </h1>
        </div>
      </div>
    </footer>
  );
}
