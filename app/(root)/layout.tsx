// import {  } from "@clerk/nextjs";
"use client";
import { Inter } from "next/font/google";
import NavBar from "@/components/shared/NavBar";
import "../globals.css";
import React, { useState } from "react";
import Pricings from "@/components/shared/pricings";
import Footer from "@/components/shared/Footer";
// import FloatingNav from "@/components/ui/floating-navbar";

// export const metadata = {
//   title: "Pallet pro",
//   description: "Customize your own plastic palette",
// };
// const inter = Inter({ subsets: ["latin"] });

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
  //   <div className="nav z-[80]">
  //   <NavBar setIsOpen={setIsOpen} />
  //   {isOpen && (
  //     <div className="z-[90]">
  //       <Pricings isOpen={isOpen} setIsOpen={setIsOpen} />
  //     </div>
  //   )}
  // </div>
  return (
    <html lang="en">
      <body >
        <NavBar setIsOpen={setIsOpen} />
        {isOpen && (
          <div className="z-[90]">
            <Pricings isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        )}

        <main className="flex flex-row">
          <section className="main-container">
            <div className="w-full ">{children}</div>
          </section>
        </main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
