import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import NavBar from "@/components/shared/NavBar";
import "../globals.css";
import React from "react";
// import FloatingNav from "@/components/ui/floating-navbar";

export const metadata = {
  title: "CanvaTech",
  description: "Customize your own plastic palette",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="flex flex-row">
          {/* <LeftSideBar /> */}
          <section className="w-screen h-screen p-2 justify-center items-center">
            {children}
          </section>
        </main>
      </body>
    </html>
    // </ClerkProvider>
  );
}
