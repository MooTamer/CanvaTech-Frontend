// import {  } from "@clerk/nextjs";
"use client";
import { Inter } from "next/font/google";
import NavBar from "@/components/shared/NavBar";
import "../globals.css";
import React, { useState } from "react";
import Pricings from "@/components/shared/pricings";
// import FloatingNav from "@/components/ui/floating-navbar";

// export const metadata = {
//   title: "CanvaTech",
//   description: "Customize your own plastic palette",
// };
const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  setIsOpenValue: boolean;
}

export default function RootLayout({
  children,
  setIsOpenValue,
}: {
  children: React.ReactNode;
  setIsOpenValue: boolean;
  RootLayoutProps: any;
}) {
  const [isOpen, setIsOpen] = useState(setIsOpenValue);

  return (
    // <>
    <html lang="en">
      <body className={inter.className}>
        <div className="nav z-[80]">
        <NavBar setIsOpen={setIsOpen} />
        {isOpen && (
          <div className="z-[90]">
            <Pricings isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        )}
        </div>

        {/* <LeftSideBar /> */}
        <section className="w-screen h-screen p-2 justify-center items-center">
          {children}
        </section>
      </body>
    </html>
    // </>
  );
}
