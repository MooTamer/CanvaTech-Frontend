// @clerk/nextjs
"use client";

import { Inter } from "next/font/google";
import NavBar from "@/components/shared/NavBar";
import "../globals.css";
import React, { useState } from "react";
import Head from "next/head";
import { metadata } from "@/metadata";
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
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <NavBar setIsOpen={setIsOpen} />
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
