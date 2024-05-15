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
      <NavBar setIsOpen={setIsOpen} />
      <body className={`${inter.className}`}>{children}</body>
    </html>
    // </>
  );
}
